---
type: "blog"
slug: "/install-jenkins-with-terraform-and-ansible-on-linode-vps"
date: "2022-02-02"
title: "Install Jenkins with terraform and ansible on a Linode VPS"
excerpt: "A guide to installing Jenkins with Terraform and Ansible"

---
In this guide Jenkins will be installed on a Linode VPS using Terraform and Ansible. 

Terraform will be used to provision the Linode VPS and Ansible will be used to install Jenkins and configure a firewall. This guide won't explain how to configure Jenkins once it is installed.

- [Setup](#setup)
- [Ignore files from Git](#ignore-files-from-git)
- [Create a Linode VPS with Terraform](#create-a-linode-vps-with-terraform)
  - [Create Terraform inputs](#create-terraform-inputs)
  - [Create Terraform outputs](#create-terraform-outputs)
  - [Create a template for the Ansible hosts](#create-a-template-for-the-ansible-hosts)
  - [Create Terraform main](#create-terraform-main)
  - [Create the inputs for the site module](#create-the-inputs-for-the-site-module)
  - [Create the local variables for the site module](#create-the-local-variables-for-the-site-module)
  - [Create the main file for the site module](#create-the-main-file-for-the-site-module)
  - [Create the output file for the site module](#create-the-output-file-for-the-site-module)
  - [Provision the Linode VPS](#provision-the-linode-vps)


## Setup

This guide assumes the following things:
- Ansible is installed locally
- Jenkins is installed locally
- You have a Linode account
- You have a Linode access token
- You have a SSH key

The first thing to do is to create the following folder structure.

```
ansible/
└───roles/
    └───jenkins/
    └───firewall/
    └───ssh/
terraform/
└───modules/
    └───site/
└───templates/
```

## Ignore files from Git
Create a `.gitignore` file in the root directory with the following

```bash
# IDE
.idea

# Ansible
ansible/hosts

# Terraform
terraform/.terraform.lock.hcl
terraform/.terraform
terraform/terraform.tfvars
terraform/terraform.tfstate
terraform/.terraform.tfstate.lock.info
terraform/terraform.tfstate.backup
```

## Create a Linode VPS with Terraform

Create the file `terraform/terraform.tfvars` and add the following variables
```terraform
token="<YOUR_LINODE_TOKEN>"
root_pass="<YOUR_LINODE_ROOT_PASSWORD"
ssh_key_pub="<PATH_TO_YOUR_SSH_KEY>"
```

### Create Terraform inputs

Create the file `terraform/inputs.tf` and add the following inputs

```terraform
variable "token" {
  type = string
  description = "Environment in which to deploy application"
  sensitive = true
}
variable "root_pass" {
  type = string
  description = "Site Root Password"
  sensitive = true
}

variable "ssh_key_pub" {
  type = string
  description = "SSH KEY"
  sensitive = true
}
```

### Create Terraform outputs
Create the file `terraform/outputs.tf` with the following output variables

```terraform
output "webserver_id" {
  value = module.site.jenkins-site-id
}
output "webserver_ip" {
  value = module.site.jenkins-site-public-ip
}
output "webserver_private_ip" {
  value = module.site.jenkins-site-private-ip
}
```

### Create a template for the Ansible hosts
Create a file in `terraform/templats/hosts.tpl` with the following template
```text
all:
  children:
    webservers:
      hosts:
        webserver_1:
          ansible_host: ${webserver_ip}
          private_ip: ${webserver_private_ip}
```


### Create Terraform main
Create the file `terraform/main.tf` and add the following Terraform code

This will do the following:

- Install the Linode provider using version `1.18.0`
- Pass the Linode token to the Linode provider
- Require the `site` module and provide it the `root_pass` and `ssh_key_pub` variables
- Create a file in the `ansible` directory with jenkins private and public IPs

```terraform
terraform {
  required_providers {
    linode = {
      source = "linode/linode"
      version = "1.18.0"
    }
  }
}

provider "linode" {
  token = var.token
}

module "site" {
  source = "./modules/site"
  root_pass = var.root_pass
  ssh_key_pub = var.ssh_key_pub
  label = "jenkins"
}

resource "local_file" "hosts" {
  depends_on = [
    module.site
  ]
  content = templatefile("./templates/hosts.tpl",
    {
      webserver_ip = module.site.jenkins-site-public-ip
      webserver_private_ip = module.site.jenkins-site-private-ip
    }
  )
  filename = "../ansible/hosts"
}
```

### Create the inputs for the site module
Create the file `terraform/modules/site/inputs.tf` and add the following terraform code

```terraform
variable "root_pass" {}

variable "ssh_key_pub" {}

variable "label" {}
```

### Create the local variables for the site module
Create the file `terraform/modules/site/locals.tf` and add the following terraform code
```jenkins
locals {
  region = "eu-west"
  site_label = "jenkinsSite"
  site_type = "g6-nanode-1"
  image = "linode/ubuntu18.04"
}
```

### Create the main file for the site module
Create the file `terraform/modules/site/main.tf` with the following terraform code.

This will do the following:
- Use the linode provider
- Create a `linode_sshkey` resource
- Create a `lindoe_instance` resource
- Upgrade the VPS and install Python

```terraform
terraform {
  required_providers {
    linode = {
      source = "linode/linode"
      version = "1.18.0"
    }
  }
}

resource "linode_sshkey" "jenkins" {
  label = var.label
  ssh_key = chomp(file(var.ssh_key_pub))
}

resource "linode_instance" "jenkins" {
  label = var.label
  group = local.site_label
  image = local.image
  region = local.region
  type = local.site_type
  private_ip = true
  root_pass = var.root_pass
  authorized_keys = [
    linode_sshkey.jenkins.ssh_key
  ]

  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update && sudo apt-get upgrade -y",
      "sudo apt-get -qq upgrade -y",
      "sudo apt-get -qq install python -y",
    ]
  }
}



```
### Create the output file for the site module
Create the file `terraform/modules/site/outputs.tf` with the following terraform code.

This will do the following:
- Output the VPS ID
- Output the public IP address
- Output the Private IP address

```terraform
output "jenkins-site-id" {
  value = linode_instance.jenkins.id
}
output "jenkins-site-public-ip" {
  value = linode_instance.jenkins.ip_address
}
output "jenkins-site-private-ip" {
  value = linode_instance.jenkins.private_ip_address
}
```

### Provision the Linode VPS
In a terminal run the following inside the `terraform` folder
```bash
$ terraform init
```

Then apply the terraform plan
```bash
$ terraform apply
```

Once the VPS is provisioned the output variables should be shown in the terminsal like so
```bash
Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

Outputs:

webserver_id = "<VPS_ID>"
webserver_ip = "<VPS_PUBLIC_IP>"
webserver_private_ip = "<VPS_PRIVATE_IP>"
```
There should also be a `hosts` file in the `ansible` directory with the populated IP addresses.  It should look similar to the following
```text
all:
  children:
    webservers:
      hosts:
        webserver_1:
          ansible_host: <VPS_PUBLIC_IP>
          private_ip: <VPS_PRIVATE_IP>
```
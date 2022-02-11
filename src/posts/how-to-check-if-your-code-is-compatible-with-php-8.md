---
type: "blog"
slug: "/how-to-check-if-your-code-is-compatible-with-php-8"
date: "2022-02-10"
title: "How to check if your code is compatible with PHP 8"
excerpt: "Using PHP_CodeSniffer and PHPCompatibility to check if your project can be upgraded to a different version of PHP"

---

PHPCs can be used to check if your code base is compatible with a different version on PHP. This is very handy if you want to check if your project can be upgraded to PHP 7.4 or 8.1

## Install

First install PHP_CodeSniffer if you haven't yet done so

```bash
composer global require "squizlabs/php_codesniffer=*"
```

Then install php-compatibility

```bash
composer global require "phpcompatibility/php-compatibility"
```

You may need to set the PHP_CodeSniffer config path to use PHPCompatibility

```bash
phpcs --config-set installed_paths /path/to/PHPCompatibility
```

## Usage

```bash
phpcs -p ~/path/to/project --standard=PHPCompatibility --runtime-set testVersion 8.1
```

- `-p` = The path to the project
- `-standard` = the check to run
- `--runtime-set` = Options to set at run time
- `testVersion` = The version of PHP to test against. In this case PHP 8.1


More options can be found [in the GitHub documentation](https://github.com/PHPCompatibility/PHPCompatibility#installation-in-a-composer-project-method-1)
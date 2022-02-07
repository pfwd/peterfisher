---
type: "blog"
slug: "/how-to-get-the-site-locale-in-concrete-5"
date: "2022-02-07"
title: "How to get the site locale in Concrete 5"
excerpt: "This is how to get the site locale in Concrete 5"

---
This is how you get the site locale in Concrete 5

In the controller

```php
$site = $this->app->make('site')->getSite();
$defaultLocale = $site->getDefaultLocale();
$defaultLocaleCode = $defaultLocale->getLocale();
```

```php
// This sets the variable so you can access it in the view
$this->set('defaultLocaleCode', $defaultLocaleCode);
```

In the view

```php
var_dump($defaultLocaleCode); // en_GB
```
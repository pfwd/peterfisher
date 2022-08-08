---
type: "blog"
slug: "/php-composer-scripts"
date: "2022-01-26"
title: "How to run scripts in composer"
excerpt: "Using composer to run scripts"
status: published
---
To run scripts using composer update the `scripts` section in `composer.json` 

```json
//..
"scripts": {
    "test-stan": "phpstan",
    "test-unit": "phpunit --colors=always tests",
    "test-lint": "phpcs --standard=coding_standard.xml common.php tests public config",
    "clean": "phpcbf --standard=coding_standard.xml common.php tests public config",
    "test": [
        "@test-lint",
        "@test-stan",
        "@test-unit"
    ]
},
//..
```

Now run `composer test-stan` to run phpstan. Multiple scripts can be ran by using an array 
```json
"test": [
    "@test-lint",
    "@test-stan",
    "@test-unit"
]
```
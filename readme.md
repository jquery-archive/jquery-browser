[jQuery.browser](http://api.jquery.com/jquery.browser)
==================================================

When jQuery 1.3 was released in January 2009, the team announced that `jQuery.browser` would be deprecated and further use was discouraged.

As of jQuery 1.8, we are introducing the `jQuery.browser` backwards compatibility plugin in preparation for jQuery 1.9 which will see the complete removal of `jQuery.browser` from the core library.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jquery/jquery.browser/master/dist/jquery.browser.min.js
[max]: https://raw.github.com/jquery/jquery.browser/master/dist/jquery.browser.js

In the browser:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.browser.min.js"></script>
```


[Download](https://github.com/jquery/jquery-browser/zipball/master)
====================================================


How to run the tests:
====================================================
Clone this repo, install `grunt`:

```sh
git clone git://github.com/jquery/jquery-browser.git
cd jquery-browser
npm install -g grunt
```

Run `grunt` to `lint`, `test` and `min` release.

```sh
grunt
```


Contributing
====================================================

_Please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_


All code should conform to the [jQuery Core Style Guide](http://docs.jquery.com/JQuery_Core_Style_Guidelines)




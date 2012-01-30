[jQuery.browser](http://jquery.com/jquery.browser)
==================================================

When jQuery 1.3 was released in January 2009, the team announced that `jQuery.browser` would be deprecated and further use was discouraged.

As of jQuery 1.8, we are introducing the `jQuery.browser` backwards compatibility plugin in preparation for jQuery 1.9 which will see the complete removal of `jQuery.browser` from the core library.


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

Changes should be made to `src/jquery.browser.js`, not to the files in `dist/`



/*
 * jQuery.browser Compatibility Plugin for jQuery 1.8
 * By John Resig, Extracted to plugin by Rick Waldron
 * Dual licensed under MIT and GPL.
 */
(function( window, navigator, jQuery ) {

	// Keep a UserAgent string for use with jQuery.browser
	var userAgent = navigator.userAgent || "",

		// For matching the engine and version of the browser
		browserMatch;

	// Use of jQuery.browser is frowned upon.
	// More details: http://api.jquery.com/jQuery.browser
	jQuery.uaMatch = function( ua ) {
		ua = ua.toLowerCase();

		var match = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||
			[];

		return {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	};

	browserMatch = jQuery.uaMatch( userAgent );

	jQuery.browser = {};

	if ( browserMatch.browser ) {
		jQuery.browser[ browserMatch.browser ] = true;
		jQuery.browser.version = browserMatch.version;
	}

	// Deprecated, use jQuery.browser.webkit instead
	if ( jQuery.browser.webkit ) {
		jQuery.browser.safari = true;
	}

	if ( typeof exports !== "undefined" ) {
		exports.jQuery = jQuery
	}

})( this, this.navigator || {}, this.jQuery || (this.jQuery = {}) );

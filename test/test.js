/*global require:true, exports:true */
global.jQuery = {};
global.navigator = {};

require("../src/jquery.browser.js");

var fs = require("fs");

exports["jQuery.browser"] = function(test) {
	test.expect(2);

	test.ok( jQuery.browser, "jQuery.browser exists" );
	test.ok( jQuery.uaMatch, "jQuery.uaMatch exists" );

	test.done();
};

exports["jQuery.uaMatch()"] = function(test) {

	test.expect(544);

	// Load file containing all ua strings to test
	fs.readFile("test/ua.txt", function( err, data ) {

		var uas = data.toString().split("\n");

		uas.forEach(function( agent, i	) {
			var parts = agent.split("\t"),
				ua;

			if ( parts[2] ) {
				ua = jQuery.uaMatch( parts[2] );

				test.equal( ua.browser, parts[0], "Found: '" + ua.browser + "' in " + parts[2] );
				test.equal( ua.version, parts[1], "Found: '" + ua.version + "' in " + parts[2] );
			}
		});

		test.done();
	});
};
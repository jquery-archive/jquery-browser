var fs = require("fs"),
	test = require("test"),
	jQuery = require("../jquery.browser.js").jQuery;
	tests = {};

// Load file containing all ua strings to test
fs.readFile("test/ua.txt", function( err, data ) {

	var uas = data.toString().split("\n");

	uas.forEach(function( agent, i  ) {
		var parts = agent.split("\t"),
			ua;

		if ( parts[2] ) {
			ua = jQuery.uaMatch( parts[2] );

			tests[ "test " + i ] = function( assert ) {
				assert.equal( ua.browser, parts[0], "Found: '" + ua.browser + "' in " + parts[2] );
				assert.equal( ua.version, parts[1], "Found: '" + ua.version + "' in " + parts[2] );
			};
		}
	});

	test.run( tests );
});
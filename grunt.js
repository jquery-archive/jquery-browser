/*global config:true, task:true*/
module.exports = function(grunt) {

  var task = grunt.task;
  var file = grunt.file;
  var utils = grunt.utils;
  var log = grunt.log;
  var verbose = grunt.verbose;
  var fail = grunt.fail;
  var option = grunt.option;
  var config = grunt.config;
  var template = grunt.template;

  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
              '* <%= pkg.homepage %>\n' +
              '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
              ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      'dist/jquery.browser.js': ['<banner>', '<file_strip_banner:src/jquery.browser.js>']
    },
    min: {
      'dist/jquery.browser.min.js': ['<banner>', 'dist/jquery.browser.js']
    },
    test: {
      files: ['test/*.js']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        global: true,
        module: true
      }
    },
    uglify: {}
  });

  // Default task.
  task.registerTask('default', 'lint test concat min');

};

/*global config:true, task:true*/
config.init({
  pkg: '<json:package.json>',
  meta: {
    banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= template.today("m/d/yyyy") %>\n' +
            '* <%= pkg.homepage %>\n' +
            '* Copyright (c) <%= template.today("yyyy") %> <%= pkg.author.name %>;' +
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
      global: true
    }
  },
  uglify: {}
});

// Default task.
task.registerTask('default', 'lint test concat min');

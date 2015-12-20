// Generated on 2013-08-27 using generator-angular 0.3.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var yeomanConfig = {
    name: require('./bower.json').name + 'App',
    app: 'app',
    dist: 'dist',
    tmp: '.tmp',
    // copy to target server
    target: 'target/app'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  }
  catch (e) {
    grunt.log.error(e);
  }

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      options: {
        interval: 10000,
        debounceDelay: 500
      },
      compass: {
        files: [
          '**/app/styles/**/*.{scss,sass}'
        ],
        tasks: ['compass']
      },
      ngtemplates: {
        files: [
          '**/app/views/**/*.html'
        ],
        options: {
          livereload: LIVERELOAD_PORT
        },
        tasks: ['ngtemplates']
      },
      jsFiles: {
        files: [
          'starter/app/scripts/**/*.js'
        ],
        options: {
          livereload: LIVERELOAD_PORT
        },
        tasks: ['jshint', 'copy:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '{<%= yeoman.tmp %>/,}**/styles/**/*.css',
          '{<%= yeoman.tmp %>/,}**/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    concat: {
      server: {
        src: ['starter/app/scripts/**/*.js', '<%= yeoman.tmp %>/scripts/templateCache.js'],
        dest: '<%= yeoman.target %>/scripts.js'
      },
      modulesCss: {
        src: [
          'bower_components/angular-notify/dist/angular-notify.min.css',
          'bower_components/angular-ui-select/dist/select.min.css',
          'bower_components/angular-loading-bar/build/loading-bar.min.css',
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/angular-xeditable/dist/css/xeditable.css'
        ],
        dest: '<%= yeoman.target %>/styles/modules.css'
      },
      modules: {
        src: [
          /*'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-sanitize/angular-sanitize.js',*/
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/underscore/underscore-min.js',
          'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
          'bower_components/ng-tasty/ng-tasty-tpls.js',
          'bower_components/angular-ui-select/dist/select.js'
        ],
        dest: '<%= yeoman.target %>/modules.js'
      },
    },
    copy: {
      build: {
        expand: true,
        dot: true,
        cwd: '',
        dest: '<%= yeoman.target %>',
        src: [
          'bower_components/**/*.js',
          'bower_components/**/*.css',
          'bower_components/**/*.png',
          'bower_components/**/*.jpg',
          'bower_components/**/*.woff2',
          'bower_components/**/*.woff',
          'bower_components/**/*.svg',
          'bower_components/**/*.eot',
          'bower_components/**/*.ttf',
          'rest/*',
          'starter/app/images/*.*'
        ]
      },
      modules: {
        expand: true,
        dot: true,
        cwd: '',
        dest: '<%= yeoman.tmp %>',
        src: [
          'bower_components/**/*.js',
          'bower_components/**/*.css',
          'bower_components/**/*.png',
          'bower_components/**/*.jpg',
          'bower_components/**/*.woff2',
          'bower_components/**/*.woff',
          'bower_components/**/*.svg',
          'bower_components/**/*.eot',
          'bower_components/**/*.ttf'
        ]
      },
      server: {
        expand: true,
        dot: true,
        cwd: 'starter/app',
        dest: '<%= yeoman.tmp %>',
        src: [
          '*.html',
          'images/**/*.*',
          'scripts/**/*.js'
        ]
      },
      rest: {
        expand: true,
        dot: true,
        cwd: '',
        dest: '<%= yeoman.tmp %>',
        src: [
          'rest/*'
        ]
      }
    },
    'http-server': {
        dev: {
            root: '.tmp/',
            port: 9000,
            host: "localhost",
            //cache: <sec>,
            showDir : true,
            autoIndex: true,
            // server default file extension
            ext: "html",
            runInBackground: true,
            openBrowser : true
        }
    },
    clean: {
      server: '<%= yeoman.tmp %>'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: []
      },
      all: [
        'starter/app/scripts/**/*.js'
      ]
    },
    compass: {
      server: {
        options: {
          sassDir: 'starter/app/styles',
          cssDir: '<%= yeoman.tmp %>/styles',
          //raw: 'Encoding.default_external = \'utf-8\'\n',
          generatedImagesDir: '<%= yeoman.tmp %>/starter/app/images/generated',
          imagesDir: 'starter/images',
          javascriptsDir: 'starter/app/scripts',
          //fontsDir: module.location + '/app/styles/fonts',
          importPath: 'bower_components',
          httpImagesPath: '/images',
          httpGeneratedImagesPath: '/images/generated',
          //httpFontsPath: '/styles/fonts',
          relativeAssets: true
        }
      }
    },
    concurrent: {
      server: [
        'compass'
      ],
      dist: [
        'compass',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    ngtemplates: {
      server: {
        options: {
          base: 'starter/app',
          module: 'starterApp'
        },
        src: 'starter/app/views/**/*.html',
        dest: '<%= yeoman.tmp %>/scripts/templateCache.js'
      }
    },
    /*karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    ngdocs: {
      options: {
        dest: '<%= yeoman.dist %>/docs',
        title: 'API Documentation',
        scripts: [
          '../bower_components/angular/angular.min.js',
          '../bower_components/angular-route/angular-route.js',
          '../bower_components/angular-resource/angular-resource.js',
          '../bower_components/angular-sanitize/angular-sanitize.js',
          '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js',
          '../bower_components/angular-ui-select/dist/select.js',
          '../starter/app/scripts/app.js'
        ],
        html5Mode: false
      },
      all: jsFilesArray
    }*/
  });

  grunt.registerTask('server', function(target) {

    grunt.task.run([
      'clean:server',
      'copy:modules',
      'copy:server',
      'copy:rest',
      'ngtemplates',
      'compass',
      'http-server',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:server',
    'copy:modules',
    'copy:server',
    'copy:rest',
    'ngtemplates',
    'compass',
    'copy:build',
    'concat'
  ]);
};

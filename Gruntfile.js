// Generated on 2015-12-28
'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  require('time-grunt')(grunt);

  var yeomanConfig = {
    name: require('./bower.json').name + 'App',
    app: 'starterApp',
    src: 'starter/app',
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
        livereload: true,
        spawn: false,
        interval: 5007
      },
      compass: {
        files: [
          '<%= yeoman.src %>/styles/**/*.{scss,sass}'
        ],
        tasks: ['compass'],
        options: {
          livereload: LIVERELOAD_PORT
        }
      },
      jsFiles: {
        files: [
          '<%= yeoman.src %>/scripts/*.js',
          '<%= yeoman.src %>/scripts/**/*.js'
        ],
        options: {
          livereload: true
        },
        tasks: ['newer:jshint', 'newer:copy:serverjs']
      },
      ngtemplates: {
        files: [
          '<%= yeoman.src %>/views/**/*.html'
        ],
        options: {
          livereload: true
        },
        tasks: ['newer:ngtemplates']
      }
    },
    concat: {
      server: {
        src: ['<%= yeoman.src %>/scripts/**/*.js', '<%= yeoman.tmp %>/scripts/templateCache.js'],
        dest: '<%= yeoman.target %>/scripts.js'
      },
      modulescss: {
        src: [
          //'bower_components/angular-notify/dist/angular-notify.min.css',
          //'bower_components/angular-ui-select/dist/select.min.css',
          //'bower_components/angular-loading-bar/build/loading-bar.min.css',
          '<%= yeoman.tmp %>/styles/main.css',
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
          //'bower_components/angular-xeditable/dist/css/xeditable.css'
        ],
        dest: '<%= yeoman.target %>/styles/all.css'
      },
      modulesjs: {
        src: [
          /*'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-sanitize/angular-sanitize.js',*/
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/underscore/underscore-min.js',
          'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js'
          //'bower_components/ng-tasty/ng-tasty-tpls.js',
          //'bower_components/angular-ui-select/dist/select.js'
        ],
        dest: '<%= yeoman.target %>/all.js'
      },
    },
    packit: {
      options: {
        attribution: true,
        base62: true,
        shrink: true
      },
      target: { //target
        options: {  //default options
          pack: true,
          banners: true,
          action: 'write',
          dest: '<%= yeoman.target %>/all.min.js'
        },
        files: [
          {
            cwd: '<%= yeoman.target %>',
            src: 'all.js',
            expand: true,
            flatten: true
          }
        ]
      }
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
          'rest/*'
        ]
      },
      buildimage: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.src %>',
        dest: '<%= yeoman.target %>',
        src: [
          'images/**/*.*'
          ]
      },
      buildfont: {
        expand: true,
        flatten: true,
        dot: true,
        cwd: 'bower_components',
        dest: '<%= yeoman.target %>/fonts/',
        src: [
          '**/*.woff2',
          '**/*.woff',
          '**/*.eot',
          '**/*.ttf'
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
      serverjs: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.src %>',
        dest: '<%= yeoman.tmp %>',
        src: ['scripts/**/*.js']
      },
      serverother: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.src %>',
        dest: '<%= yeoman.tmp %>',
        src: [
          '*.html',
          'images/**/*.*'
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
        logFn: function(req, res, error) { },
        // server default file extension
        ext: "html",
        runInBackground: true//,
        //openBrowser : true
      }
    },
    clean: {
      server: '<%= yeoman.tmp %>',
      build: [
        '<%= yeoman.target %>/styles',
        '<%= yeoman.target %>/fonts',
        '<%= yeoman.target %>/images'
      ]
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: []
      },
      all: [
        '<%= yeoman.src %>/scripts/**/*.js'
      ]
    },
    compass: {
      server: {
        options: {
          sassDir: '<%= yeoman.src %>/styles',
          cssDir: '<%= yeoman.tmp %>/styles',
          //raw: 'Encoding.default_external = \'utf-8\'\n',
          //generatedImagesDir: '<%= yeoman.tmp %>/<%= yeoman.src %>/images/generated',
          imagesDir: '<%= yeoman.src %>/images',
          javascriptsDir: '<%= yeoman.src %>/scripts',
          fontsDir: '<%= yeoman.src %>/styles/fonts',
          importPath: '<%= yeoman.src %>/styles',
          httpImagesPath: '/images',
          environment: 'development',
          outputStyle: 'compressed',
          //httpGeneratedImagesPath: '/images/generated',
          httpFontsPath: '/fonts',
          debugInfo: true,
          relativeAssets: true
        }
      }
    },
    // angular templates compile to js
    ngtemplates: {
      server: {
        options: {
          /*htmlmin:  {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          },*/
          url: function(url) {
            return url.replace('starter/app/', '');
          },
          module: yeomanConfig.app
        },
        //cwd: '<%= yeoman.src %>/',
        src: '<%= yeoman.src %>/views/**/*.html',
        dest: '<%= yeoman.tmp %>/scripts/templateCache.js'
      }
    }
  });

  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-packitjs');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-minified');

  // run frontend environment with app
  grunt.registerTask('server', function(target) {

    grunt.task.run([
      'clean:server',
      'copy:modules',
      'copy:serverjs', 'copy:serverother',
      'copy:rest',
      'ngtemplates',
      'compass',
      'http-server',
      'watch'
    ]);
  });

  // build production app
  grunt.registerTask('build', [
    'clean:build',
    'copy:modules',
    'copy:serverjs', 'copy:serverother',
    'copy:rest',
    'ngtemplates',
    'compass',
    'concat',
    'copy:build',
    'copy:buildimage',
    'copy:buildfont',
    'packit'
  ]);
};

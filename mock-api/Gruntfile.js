var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/**/*.js']
    },

    express: {
      options: {
        port: process.env.PORT || 3002,
        script: 'src/app.js'
      },
      development: {
        options: {
          node_env: 'development'
        }
      },
      test: {
        options: {
          node_env: 'test',
          port: 3002
        }
      }
    },

    watch: {
      express: {
        files: ['src/**/*.js', 'src/assets/raml/**/*.*'],
        tasks: ['jshint', 'express:development'],
        options: {
          spawn: false,
          atBegin: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['watch']);
};

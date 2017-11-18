module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      jshint: {
        jshint: {
          all: ['Gruntfile.js', 'app/**', 'test/**']
        }
      },
      sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: [{
            expand: true,
            cwd: 'app/style/scss',
            src: ['*.scss'],
            dest: './app/style/css',
            ext: '.css'
          }]
        }
      },
      watch: {
        scripts: {
          files: ['**/*.js'],
          tasks: ['jshint'],
          options: {
            spawn: true,
            reload: true
          },
        },
        css: {
          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: true,
            reload: true
          },
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'sass', 'watch']);

};
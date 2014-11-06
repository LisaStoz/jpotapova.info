module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'app/css/app.css': 'src/scss/app.scss'
        }
      }
    },

    assemble: {
      options: {
        layout: 'src/hbs/templates/main.hbs',
        partials: 'src/hbs/data/components/*.hbs',
        flatten: true,
        data: 'src/hbs/data/*.json'
      },
      pages: {
        files: {
          'app/': ['src/hbs/pages/*.hbs' ]
        }
      }
    },

    copy: {
      assets: {
        files: [
          {expand: true, flatten: true, src: ['src/img/*'], dest: 'app/img/', filter: 'isFile'},
        ],
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'src/**',
        tasks: ['sass', 'assemble', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['sass', 'assemble', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}

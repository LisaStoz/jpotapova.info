/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
    // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        less: {
            development: {
                options: {
                    paths: ["less"],
                    cleancss: true
                },
                files: {
                    "css/main.min.css": "less/main.less",
                    "css/print.min.css": "less/print.less"
                }
            }
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
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                  jQuery: true,
                  console: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            all: ['Gruntfile.js', 'js/main.js']
        },
        uglify: {
            options: {
                mangle: false,
                preserveComments: true
            },
            my_target: {
                files: {
                  'js/main.min.js': ['js/jquery.js', 'fancybox/fancybox.js', 'js/main.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.  
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-contrib-less'); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    // Default task.
    grunt.registerTask('default', ['jshint', 'less', 'uglify']);

};

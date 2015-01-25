module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']})

  require('load-grunt-config')(grunt, {
    configPath: process.cwd() + '/grunt-tasks'
  })

  grunt.registerTask('default', [
      'assemble:pages',
      'less:dev',
      'uglify:dev'
  ])

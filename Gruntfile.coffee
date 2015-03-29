module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']})

  require('load-grunt-config')(grunt, {
    configPath: process.cwd() + '/grunt-tasks'
  })

  grunt.registerTask('dev', [
      'assemble:pages'
      'sass:dev'
  ])

  grunt.registerTask('default', [
    'dev', 'concurrent:dev'
  ])

module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']})

  require('load-grunt-config')(grunt, {
    configPath: process.cwd() + '/grunt-tasks'
  })

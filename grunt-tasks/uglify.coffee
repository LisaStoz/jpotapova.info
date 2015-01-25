module.exports = {

  dev:
    options:
        mangle: false
        compress: false
        preserveComments: true
    files:
      'js/main.js': ['src/vendor/fancybox/fancybox.js', 'src/js/main.js']
  prod:
    options:
        mangle: false
        compress: true
        preserveComments: true
    files:
      'js/main.js': ['src/vendor/fancybox/fancybox.js', 'src/js/main.js']
}

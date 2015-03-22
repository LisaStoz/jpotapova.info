module.exports = {

  dev:
    options:
        mangle: false
        compress: false
        preserveComments: true
    files:
      'app/js/main.js': ['src/js/main.js']
      'app/js/libs.js': ['src/vendor/fancybox/source/jquery.fancybox.js']
  prod:
    options:
        mangle: false
        compress: true
        preserveComments: true
    files:
      'app/js/main.js': ['src/js/main.js']
      'app/js/libs.js': ['src/vendor/fancybox/source/jquery.fancybox.js']
}

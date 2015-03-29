module.exports = {
  dev:
    files: [
      'app/css/main.css': 'src/sass/main.scss'
      # 'app/css/print.css': 'src/sass/print.scss'
    ]
  prod:
    options:
      compress: true
    files: [
      'app/css/main.css': 'src/sass/main.scss'
      'app/css/print.css': 'src/sass/print.scss'
    ]
}

module.exports = {
  dev:
    files: [
      'app/css/main.css': 'src/less/main.less'
      'app/css/print.css': 'src/less/print.less'
    ]
  prod:
    options:
      compress: true
    files: [
      'app/css/main.css': 'src/less/main.less'
      'app/css/print.css': 'src/less/print.less'
    ]
}

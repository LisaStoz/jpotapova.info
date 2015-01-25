module.exports = {
  pages:
    options:
      flatten: true
      partials: 'src/hbs/components/*.hbs'
      layout: 'src/hbs/layout/main.hbs'
      data: 'src/hbs/data/*.json'
    files: [
      'app/': 'src/hbs/pages/*.hbs'
    ]
}

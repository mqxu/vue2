const base = require('./karma.base.conf')

module.exports = config => {
  const options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../coverage', subdir: '.' },
        { type: 'text-summary', dir: '../coverage', subdir: '.' }
      ]
    },
    singleRun: true
  })

  // add babel-plugin-istanbul for code intrumentation
  options.webpack.babel = {
    plugins: [['istanbul', { exclude: ['test/'] }]]
  }

  config.set(options)
}

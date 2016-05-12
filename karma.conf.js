module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'commonjs'],
    files: [
      'index.js',
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    reporters: [
      'progress',
      'coverage'
    ],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'index.js': ['commonjs', 'coverage'],
      'src/**/*.js': ['commonjs', 'coverage'],
      'test/**/*.spec.js': ['commonjs']
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    },
  });
};
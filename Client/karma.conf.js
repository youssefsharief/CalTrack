// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
// const path = require('path')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli' ],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-scss-preprocessor'),
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    files: [
      { pattern: './src/styles/main.scss', watched: true,  included: true, served: true }
    ],
    preprocessors: {
      './src/styles/main.scss': ['scss']
    },

  });
};

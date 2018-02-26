//jshint strict: false

const {SpecReporter} = require('jasmine-spec-reporter');
const phantomjs = require('phantomjs-prebuilt');
process.env.LANG = 'en'; // set your browser language

exports.config = {

  allScriptsTimeout: 11000,
  
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '*.js',
  ],
  
  exclude: [],

  multiCapabilities: [{
      'browserName': 'phantomjs',
      'phantomjs.binary.path': phantomjs.path,
      'phantomjs.cli.args': ['--remote-debugger-port=8081'],
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
/*    }, {

      'browserName': 'chrome',
      'version': '',
      'platform': 'ANY',
      'chromeOptions': {
          args: ["--headless", "--disable-gpu", "--no-sandbox"]
      }
    }, {
      'browserName': 'firefox',
      'version': '',
      'platform': 'ANY'
*/
  }],

  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};

/*
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
*/


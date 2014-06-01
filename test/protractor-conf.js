exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '../.tmp/test/angular/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:1337/',

  framework: 'mocha'
};

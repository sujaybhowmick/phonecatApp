// Karma configuration
// Generated on Sat Jun 08 2013 21:59:35 GMT+0530 (IST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,
    {pattern: 'app/scripts/controllers/*.js', included: false},
    {pattern: 'app/scripts/services/*.js', included: false},
    {pattern: 'app/scripts/conf/*.js', included: false},
    {pattern: 'test/unit/controllers/*.js', included: false},
    {pattern: 'app/scripts/vendor/angular.min.js', included: false},
    {pattern: 'app/scripts/vendor/angular-resource.min.js', included: false},
    {pattern: 'app/scripts/vendor/angular-mocks.js', included: false},

    'test/main-test.js'
];


// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['junit'];

junitReporter = {
    outputFile: 'unit-test-results.xml'
};


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

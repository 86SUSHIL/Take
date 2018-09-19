"use strict";
// exports.config = {
//   allScriptsTimeout: 11000,
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: [
//     'steps/test.js'
//   ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   directConnect: true,
Object.defineProperty(exports, "__esModule", { value: true });
//   //framework: 'jasmine',
// //   jasmineNodeOpts: {
// //     showColors: true,
// //     defaultTimeoutInterval: 30000,
// //     print: function() {}
// //   },
// //   onPrepare() {
// //     require('ts-node').register({
// //       project: 'e2e/tsconfig.e2e.json'
// //     });
// //     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
// //   }
// };
var protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');
var reporter = new Jasmine2HtmlReporter({
    savePath: './target/reports/',
    screenshotsFolder: 'screenshots',
    takeScreenshots: true,
    takeScreenshotsOnlyOnFailures: true,
});
exports.config = {
    suites: {
        test: 'steps/test_spec.js'
    },
    capabilities: {
        'browserName': 'chrome',
    },
    //directConnect:true,
    // baseUrl: 'http://localhost:4200/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/*_spec.js'],
    framework: 'jasmine',
    params: {
        env: "",
        sid: "",
        appName: "GID",
        sealId: 34719,
        gtecTemplate: "53",
    },
    rootElement: 'html',
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
        var jasmineReporters = require('jasmine-reporters');
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            //setup the output path for junite reports
            savePath: './target/reports/',
            filePrefix: 'xmloutput'
        });
        jasmine.getEnv().addReporter(junitReporter);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().pageLoadTimeout(40000);
    },
    allScriptsTimeout: 200000
};

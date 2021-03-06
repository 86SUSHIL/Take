﻿var fs = require('fs-extra');
//var mkdirp = require('mkdirp');
//var fse = require('fs-extra');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        //Login: '../CSOnlinePortal/TestScripts/Epic 1 -CS Portal Login_Update.js',
        ProdSelection: '../CSOnlinePortal/TestScripts/Epic 20 23 24 - My Profile.js',
    },
    //specs: ['webtables-spec.js', 'login-spec.js'],// 'multiform-spec.js', 'calc-spec.js', 'checkboxes-spec.js'],

    //    plugins: [{
    //        package: 'jasmine2-protractor-utils',
    //        disableHTMLReport: true,
    //        disableScreenshot: false,
    //        screenshotPath:'report/screenshots',
    //        screenshotOnExpectFailure:false,
    //        screenshotOnSpecFailure:true,
    //        clearFoldersBeforeTest: true
    //      }],

    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,

    onPrepare: function() {
        browser.manage().window().setSize(1680, 1050);
        browser.ignoreSynchronization = true
            //var dest: 'C:\\Report_CSOnline\\';
        fs.emptyDir("C:\\Report_CSOnline\\", function(err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function(caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function(png) {
                            var stream = fs.createWriteStream("C:\\Report_CSOnline\\" + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true,
            displaySuccessesSummary: false, // display summary of all successes after execution
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: false, // display summary of all pending specs after execution
            displaySuccessfulSpec: true, // display each successful spec
            displayFailedSpec: true, // display each failed spec
            displayPendingSpec: false, // display each pending spec
            displaySpecDuration: true, // display each spec duration
            displaySuiteNumber: true, // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));

        //        var jasmineReporters = require('jasmine-reporters');
        //        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //            consolidateAll: true,
        //            savePath: './',
        //            filePrefix: 'xmlresults',
        //        }));


        var jasmineReporters = require('jasmine-reporters');

        // returning the promise makes protractor wait for the reporter config before executing tests
        return browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;

            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: './',
                // this will produce distinct xml files for each capability
                filePrefix: browserName + '-xmloutput',
                modifySuiteName: function(generatedSuiteName, suite) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });

    },


    //     onComplete: function() {
    //         var path = require("path");
    //         var browserName, browserVersion, platform;
    //         var capsPromise = browser.getCapabilities();
    //
    //         capsPromise.then(function (caps) {
    //            browserName = caps.get('browserName');
    //            browserVersion = caps.get('version');
    //            platform = caps.get('platform');
    //
    //            var HTMLReport = require('protractor-html-reporter');
    //
    //            testConfig = {
    //                reportTitle: 'Test Execution Report',
    //                outputPath: './',
    //                screenshotPath: './screenshots',
    //                testBrowser: browserName + ' ' + browserVersion,
    //                platform: platform
    //            };
    //            new HTMLReport().from('xmlresults.xml', testConfig);
    //        });
    //     },

    onComplete: function() {
        var path = require("path");
        var browserName, browserVersion, platform;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function(caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Reporting',
                savePath: 'C:\\Report_CSOnline\\',
                fileName: 'TestReport',
                fileNameDateSuffix: true,
                cleanDestination: false,
                // outputPath: 'report/',
                //screenshotPath: 'report/screenshots/',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: true,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from(browserName + '-xmloutput', testConfig);
        });
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
    }
}
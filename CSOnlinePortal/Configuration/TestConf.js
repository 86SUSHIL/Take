var fs = require('fs-extra');
var mkdirp = require('mkdirp');
var fse = require('fs-extra');

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        /*
         * To run multiple file in in single execution use command "protractor conf.js --suite Login,ProdSelection"
         * Information: Add prefix as 'x' before it('',function()) to skip any method from executions. Report it will be captured as pending (~)
         */
        Login: '../TestScripts/Epic 1 -CS Portal Login_Update.js',
        ProdSelection: '../TestScripts/Epic 2 - Product Selection.ts',
        MyProfile: '../TestScripts/Epic 20 23 24 - My Profile.js',
        End2EndSc1: '../TestScripts/E2E - Sprint 3 - Submit Order and Verify in CUC.js',
        MyProfileDelegate: '../TestScripts/Epic 21 My Profile - Delegate.js',
        Epic_47: '../TestScripts/E2E - Epic 47 - Create New Order.js',
        TransactionDetails: '../TestScripts/Epic 6 - Create Transaction Details.js',
        PropertyDetails: '../TestScripts/Epic 7 - Create Property Details.js',
        //PurchaseMortgagorDetails: '../TestScripts/Epic 8 - Create Purchaser Mortgagor Details.js',
        MortgageDetails: '../TestScripts/Epic 9 - Create Mortgage Details.js',
        End2EndSc1: '../TestScripts/E2E - Sprint 3 - Submit Order and Verify in CUC.js',


    },

    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,

    onPrepare: function() {
        browser.manage().window().setSize(1680, 1050);
        //browser.ignoreSynchronization = true

        fs.emptyDir('report/screenshots/', function(err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                //                if (result.status == 'failed') {
                browser.getCapabilities().then(function(caps) {
                    var browserName = caps.get('browserName');

                    browser.takeScreenshot().then(function(png) {
                        var stream = fs.createWriteStream('report/screenshots/' + browserName + '-' + result.fullName + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
                //                }
            }
        });

        //var SpecReporter = require('jasmine-spec-reporter');
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
                outputPath: 'report',
                screenshotPath: 'screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: true,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from(browserName + '-xmloutput.xml', testConfig);
        });
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1200000, // 20 minutes
        onComplete: null,
        isVerbose: true,
        showColors: true,
        // includeStackTrace: true, // not supported anymore, jasmine-spec-reporter has to be used instead
        print: function() {}
    }
}
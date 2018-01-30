'use strict';
var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');
//var Jasmine2HtmlReporter = require('protractor-html-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: "C:\\Report_CSOnline\\",

    //filename: 'testreport.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true
});

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [{
            browserName: 'chrome',
            version: 'ANY'
        },
        /*
        {
            browserName: 'firefox',
            version: 'ANY'
        },
        */
        /*
        {
            browserName: 'internet explorer',
            version: 'ANY'
        },
        */
    ],

    suites: {
        /*
         * To run multiple file in in single execution use command "protractor conf.js --suite Login,ProdSelection"
         * Information: Add prefix as 'x' before it('',function()) to skip any method from executions. Report it will be captured as pending (~)
         */
        // PurchaseMortgagorDetails: '../TestScripts/Epic 8 - Create Purchaser Mortgagor Details.js',
        //MortgageDetails: '../TestScripts/Epic 9 - Create Mortgage Details.js',
        //Login: '../TestScripts/Epic 1 -CS Portal Login_Update.js',
        // ProdSelection: '../TestScripts/Epic 2 - Product Selection.ts',
        // MyProfile: '../TestScripts/Epic 20 23 24 - My Profile.js',
        // MyProfileDelegate: '../TestScripts/Epic 21 My Profile - Delegate.js',
        // TransactionDetails: '../TestScripts/Epic 6 - Create Transaction Details.js',
        // PropertyDetails: '../TestScripts/Epic 7 - Create Property Details.js',
        //Epic_47: '../TestScripts/E2E - Epic 47 - Create New Order.js',
        End2EndSc1: '../TestScripts/E2E - Sprint 3 - Submit Order and Verify in CUC.js',




    },

    getPageTimeout: 15000,
    //allScriptsTimeout: 50000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true
    },

    params: './Testdata.JSON',

    //baseUrl: 'http://iisprillcdqa01.prefirstcdn.com/portal.lawyer/#/deal-search',

    //The following configuration setting is required for synchronizing the objects with Protractor execution 
    useAllAngular2AppRoots: true,
    ignoreSynchronization: true,


    // Setup the report before any tests start
    beforeLaunch: function() {
        /*
         return new Promise(function(resolve) {
             reporter.beforeLaunch(resolve);
         });
         */
    },

    beforeEach: function() {
        /*
            var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        */
    },


    onPrepare: function() {

        browser.manage().window().maximize();
        // var SpecReporter = require('jasmine-spec-reporter');
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter()); // ----------- Spec Reporter
        jasmine.getEnv().addReporter(reporter); // ----------- HTML Reporter 
        //var pages = require('../Configuration/Startup.js');


        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                //baseDirectory:'../TestResults/'
                savePath: 'C:\\Report_CSOnline\\',
                fileName: 'TestReport',
                fileNameDateSuffix: true,
                cleanDestination: false,
            })
        )



    },

    /*
    localSeleniumStandaloneOpts : {
      jvmArgs : ["-Dwebdriver.ie.driver='C:\Windows\IEDriverServer.exe'"] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
    },
    */

};
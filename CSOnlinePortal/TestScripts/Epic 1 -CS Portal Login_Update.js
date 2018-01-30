'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
//var TestData = require('../testData/Testdata_E1_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';


describe('Login - CS Lawyer Portal', function() {

    it('1.0 Access CS Lawyer Portal - Registration status Active - Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        //browser.sleep(1000);
        CSLoginPage.CSPortalLogout();
    });

    it('1.0 Access CS Lawyer Portal - Registration status Active - Lawclerk', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        //browser.sleep(1000);
        CSLoginPage.CSPortalLogout();
    });

    it('1.0 Access CS Lawyer Portal - Registration status inctive', function() {

        userId = RunSettings.data.Global.Users.CSLawyerInactive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSLawyerInactive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSLoginPage.VerifyFailureMessage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('1.0 Access CS Lawyer Portal - Registration status Declined', function() {

        userId = RunSettings.data.Global.Users.CSOnlyDeclined.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyDeclined.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSLoginPage.VerifyFailureMessage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('1.0 Access CS Lawyer Portal - CS and RS Registration status Active for both', function() {

        userId = RunSettings.data.Global.Users.CSRSActiveBoth.USER_ID.value;
        password = RunSettings.data.Global.Users.CSRSActiveBoth.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSProdSelPage.VerifyProdSelectionPage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('1.0 Access CS Lawyer Portal - CS and RS Registration status Inactive for both', function() {

        userId = RunSettings.data.Global.Users.CSRSInactiveBoth.USER_ID.value;
        password = RunSettings.data.Global.Users.CSRSInactiveBoth.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSLoginPage.VerifyFailureMessage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('1.0 Access CS Lawyer Portal - CS Registration status Active and RS Inactive', function() {

        userId = RunSettings.data.Global.Users.CSActiveRSInactive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSActiveRSInactive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        browser.sleep(1000);
        CSLoginPage.CSPortalLogout();
        //  browser.ignoreSynchronization = true;
    });

    it('1.0 Access CS Lawyer Portal - CS Registration status Inactive and RS Active', function() {

        userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    //});

});
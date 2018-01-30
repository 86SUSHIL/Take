'use strict';


var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var RTISHomePage = require('../PageObjectMethods/RTISPortal/RTIS_HomePage.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
//var TestData = require('../testData/Testdata_E1_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';


describe('FCT Portal - Product Selection', function() {

  it('2.0 Include CS Lawyer in Portal in Product Selection - Active for more than one product', function() {

    userId = RunSettings.data.Global.Users.CSRSActiveBoth.USER_ID.value;
    password = RunSettings.data.Global.Users.CSRSActiveBoth.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CSLoginPage.CSPortalLogin(userId,password);
    CSProdSelPage.SelectProduct("CS");

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = false;

    CSHomePage.VerifyHomePage();
    
  });


  it('2.0 Include CS Lawyer in Portal in Product Selection - Active for CS Only', function() {

    userId = RunSettings.data.Global.Users.CSActiveRSInactive.USER_ID.value;
    password = RunSettings.data.Global.Users.CSActiveRSInactive.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CSLoginPage.CSPortalLogin(userId,password);

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = false;

    CSHomePage.VerifyHomePage();
    
  });  

it('2.0 Include CS Lawyer in Portal in Product Selection - Not Active for CS', function() {

    userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
    password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CSLoginPage.CSPortalLogin(userId,password);
    RTISHomePage.VerifyRTISHomePage();

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = false;
    
  });  

});
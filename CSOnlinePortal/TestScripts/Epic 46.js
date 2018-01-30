'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var RTISHomePage = require('../PageObjectMethods/RTISPortal/RTIS_HomePage.js');
var MyProfileSecurityPage = require('../PageObjectMethods/MyProfile/MyProfile_SecurityQuestionsPage.js');
var MyProfileChangePwdPage = require('../PageObjectMethods/MyProfile/MyProfile_ChangePasswordPage.js');
var RTISHomePage = require('../PageObjectMethods/RTISPortal/RTIS_HomePage.js');
var MyProfileContact = require('../PageObjectMethods/MyProfile/MyProfile_ContactInformationPage.js');
var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E20_23_24_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';
var LName = '';

describe('CS Lawyer Portal - Epic 46', function () {
    
    
    it('Verify Lawyer Log-in', function () {
        
        userId = TestData.data.User_Details.USER_ID.value;
        password = TestData.data.User_Details.PASSWORD.value;
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        
        CSLoginPage.CSPortalLogin(userId, password);
        CSProdSelPage.SelectProduct("CS");
        
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;
        
        CSHomePage.VerifyHomePageElements(LName='utoCSRSLawyer');
      
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
                      
      });
    
    it('Verify Law clark Log-in', function () {
        
        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        
        CSLoginPage.CSPortalLogin(userId, password);
     
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;
        
        CSHomePage.VerifyHomePageElements(LName = 'utoCSLawclerk');
        
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
                      
    });
    
});
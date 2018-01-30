'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var RTISHomePage = require('../PageObjectMethods/RTISPortal/RTIS_HomePage.js');
var MyProfileContact = require('../PageObjectMethods/MyProfile/MyProfile_ContactInformationPage.js');
var MyProfileSecurityPage = require('../PageObjectMethods/MyProfile/MyProfile_SecurityQuestionsPage.js');
var MyProfileChangePwdPage = require('../PageObjectMethods/MyProfile/MyProfile_ChangePasswordPage.js');
var MyProfileDelegate = require('../PageObjectMethods/MyProfile/MyProfile_DelegatedAuthorityPage.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E20_23_24_Login.JSON.js');
var delegateData = require('../testData/Testdata_E21_Delegate.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';
var DelegateUser = '';

describe('CS Lawyer Portal - My Profile Delegated Authority', function() {
    userId = TestData.data.User_Details.USER_ID.value;
    password = TestData.data.User_Details.PASSWORD.value;
    DelegateUser = delegateData.data.Delegate_User.LOGIN_ID;

    it('21.a b c d e My Profile – Add View Enable Disable Delete Delegate Authority', function() {


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToDelegatedAuthority();
        browser.ignoreSynchronization = true;
        MyProfileDelegate.VerifyDelegatePageHeader();
        //Add deligate
        //DelegateUser= data.Delegate_User.LOGIN_ID;
        MyProfileDelegate.AddDelegate(DelegateUser);
        browser.ignoreSynchronization = true;
        //MyProfileDelegate.VerifyDelegateGrid(); //Verify deligate is added in grid


        //ForDisable
        CSHomePage.NavigateToHomePage();
        browser.sleep(2000);
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToDelegatedAuthority();
        MyProfileDelegate.VerifyDelegatePageHeader();
        MyProfileDelegate.DisableDelegate();

        //For Enable
        browser.ignoreSynchronization = true;
        CSHomePage.NavigateToHomePage();
        browser.sleep(2000);
        CSHomePage.GoToMyProfile();
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToDelegatedAuthority();

        MyProfileDelegate.VerifyDelegatePageHeader();

        MyProfileDelegate.EnableDelegate();


        //ForDelete
        CSHomePage.NavigateToHomePage();
        browser.sleep(2000);
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToDelegatedAuthority();
        MyProfileDelegate.VerifyDelegatePageHeader();
        MyProfileDelegate.DeleteDelegate();


    });


});
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


describe('CS Lawyer Portal - My Profile', function() {


    it('20.0 My Profile – Contact Info - Update profile contact information', function() {

        userId = TestData.data.User_Details.USER_ID.value;
        password = TestData.data.User_Details.PASSWORD.value;

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
        MyProfileContact.VerifyUserDetails(TestData);
        MyProfileContact.NavigatetoHomePage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.VerifyMyProfileContactPageLabels();
        MyProfileContact.VerifyMyProfileContactPageFields(TestData);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('US 20.1/MS 1.0/CS Lawyer Portal/User able to access My Profile from CS Lawyer Portal', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        //MyProfileContact.VerifyUserDetails(TestData);
        MyProfileContact.NavigatetoHomePage();

        browser.sleep(1000);
        CSLoginPage.CSPortalLogout();

    });

    it('US 20.1/MS 2.0/CS Lawyer Portal/My Profile Left Navigation Hyperlinks - CS Only Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        // MyProfileContact.VerifyUserDetails(TestData);
        MyProfileContact.LeftmenuCSLawyer();
        MyProfileContact.NavigatetoHomePage();

        browser.sleep(1000);
        CSLoginPage.CSPortalLogout();


    });

    it('US 20.1/MS 3.0/CS Lawyer Portal/My Profile Left Navigation Hyperlinks - CS/RS Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSRSActiveBoth.USER_ID.value;
        password = RunSettings.data.Global.Users.CSRSActiveBoth.PASSWORD.value;

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
        // MyProfileContact.VerifyUserDetails(TestData);
        MyProfileContact.LeftmenuCSRSLawyer();
        MyProfileContact.NavigatetoHomePage();

        browser.sleep(1000);
        CSLoginPage.CSPortalLogout();


    });
    it('US 20.1/MS 4.0/CS Lawyer Portal/My Profile Left Navigation Hyperlinks - CS Only Law Clerk', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();

        MyProfileContact.LeftmenuCSandCSRSOnlyLawClerk();
        MyProfileContact.NavigatetoHomePage();

        browser.sleep(1000);
        CSLoginPage.CSPortalLogout();


    });

    it('US 20.1/MS 5.0/CS Lawyer Portal/My Profile Left Navigation Hyperlinks - CS/RS Law Clerk', function() {

        // need CSRSActiveBoth valid credential to test this scenario 


        userId = RunSettings.data.Global.Users.CSRSActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSRSActiveLawclerk.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        CSProdSelPage.SelectProduct("RTIS");
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        RTISHomePage.VerifyRTISHomePage();
        RTISHomePage.ClickOnMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        // MyProfileContact.VerifyMyProfilePage();
        // MyProfileContact.VerifyUserDetails(TestData);
        MyProfileContact.LeftmenuCSandCSRSOnlyLawClerk();
        MyProfileContact.NavigatetoHomePage();

        //browser.sleep(1000);
        //CSLoginPage.CSPortalLogout();


    });

    it('23.0 My Profile – Security Questions - Update profile security questions', function() {

        userId = TestData.data.User_Details.USER_ID.value;
        password = TestData.data.User_Details.PASSWORD.value;

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
        MyProfileContact.NavigateToSecurityQuestions();

        MyProfileSecurityPage.VerifyMyProfileSecurityPageLabels();
        MyProfileSecurityPage.UpdateMyProfileSecurityQuestions(TestData);
        MyProfileSecurityPage.ClickSubmitButton();
        MyProfileSecurityPage.VerifyConfirmationMessage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('24.0 My Profile – Change Password - Change FCT portal password for user :AutoCSRSLawyer', function() {
        //Change password for User ' AutoCSRSLawyer '
        userId = TestData.data.User_Details.USER_ID.value;
        password = TestData.data.User_Details.PASSWORD.value;

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
        MyProfileContact.NavigateToChangePassword();

        //MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        MyProfileContact.NavigatetoHomePage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
        CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

    });

    it('24.0.1 My Profile – Change Password - Change FCT portal password for : AutoCSActRSInact', function() {
        //Change password for User ' AutoCSActRSInact '
        userId = RunSettings.data.Global.Users.CSActiveRSInactive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSActiveRSInactive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        //CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        //MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        MyProfileContact.NavigatetoHomePage();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.GoToMyProfile();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
    });

    it('24.0.2 My Profile – Change Password - Change FCT portal password FOR : AutoCSInactRSAct', function() {
        //Change password for User ' AutoCSInactRSAct '
        userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        //CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        // CSHomePage.VerifyHomePage();
        CSHomePage.navigateToMyProfileRTIS();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        //MyProfileContact.NavigateToChangePassword();

        ////MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        //MyProfileContact.NavigatetoHomePage();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = false;

        //CSHomePage.VerifyHomePage();
        //CSHomePage.navigateToMyProfileRTIS();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
    });

    it('24.0.2 My Profile – Change Password - Change FCT portal password FOR : AutoCSInactRSAct', function() {
        //Change password for User ' AutoCSInactRSAct '
        userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        //CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        // CSHomePage.VerifyHomePage();
        CSHomePage.navigateToMyProfileRTIS();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        //MyProfileContact.NavigateToChangePassword();

        ////MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        //MyProfileContact.NavigatetoHomePage();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = false;

        //CSHomePage.VerifyHomePage();
        //CSHomePage.navigateToMyProfileRTIS();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
    });

    it('24.0.2 My Profile – Change Password - Change FCT portal password FOR : AutoCSInactRSAct', function() {
        //Change password for User ' AutoCSInactRSAct '
        userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        //CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        // CSHomePage.VerifyHomePage();
        CSHomePage.navigateToMyProfileRTIS();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        //MyProfileContact.NavigateToChangePassword();

        ////MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        //MyProfileContact.NavigatetoHomePage();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = false;

        //CSHomePage.VerifyHomePage();
        //CSHomePage.navigateToMyProfileRTIS();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
    });

    it('24.0.2 My Profile – Change Password - Change FCT portal password FOR : AutoCSInactRSAct', function() {
        //Change password for User ' AutoCSInactRSAct '
        userId = RunSettings.data.Global.Users.CSInactiveRSActive.USER_ID.value;
        password = RunSettings.data.Global.Users.CSInactiveRSActive.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);
        //CSProdSelPage.SelectProduct("CS");

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;
        // CSHomePage.VerifyHomePage();
        CSHomePage.navigateToMyProfileRTIS();

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        //MyProfileContact.NavigateToChangePassword();

        ////MyProfileChangePwdPage.VerifyMyProfileChangePasswordLabels();    

        //MyProfileContact.NavigatetoHomePage();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = false;

        //CSHomePage.VerifyHomePage();
        //CSHomePage.navigateToMyProfileRTIS();

        ////Uncomment the following line if the application in non-angular application
        //browser.ignoreSynchronization = true;

        ////MyProfileContact.VerifyMyProfilePage();
        MyProfileContact.NavigateToChangePassword();

        MyProfileChangePwdPage.ResetPassword(TestData);
        MyProfileChangePwdPage.ClickSubmitButton();
        MyProfileChangePwdPage.VerifyConfirmationMessage();


        CSLoginPage.CSPortalLogin(userId, password);
    });

    /*
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

    */

});
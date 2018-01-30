'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var TransactionDetailsPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_TransactionDetails.js');
var PropertyInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PropertyInformation.js');
var Menu = require('../PageObjectMethods/CSOnlinePortal/CSOP_Menu.js');

//var pages = require('../Configuration/Startup.js');
var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E1_Login.JSON.js');
var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';
var PropertyType = '';
var Province = '';

describe('CS Lawyer Portal - Property Details', function() {

    // xit('7.1 Create Property Details with New Order - Mandatory Fields', function() {

    //     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     console.log("Click on the Create Deal link");
    //     CSHomePage.NavigateToMenuItem_CreateDeal();

    //     console.log("Click on the Next page button in the Transaction details page.");
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Verify all Label in page");
    //     PropertyInformationPage.VerifyPropertyDetailsPageLabels();

    //     console.log("Enter Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterMandatoryFields();

    // });

    // xit('7.2 Create Property Details with New Order - fill Non - Mandatory Fields', function() {

    //     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     CSHomePage.NavigateToMenuItem_CreateDeal();
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Enter Non - Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterNonMandatoryFields();

    // });

    // xit('7.3 Create Property Details with New Order - Edit Informations', function() {

    //     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     CSHomePage.NavigateToMenuItem_CreateDeal();
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Enter Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterMandatoryFields();

    //     console.log("Enter Non - Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterNonMandatoryFields();

    //     console.log("Erase Informations fields for Property Details page");
    //     PropertyInformationPage.ClearFields();

    //     console.log("Edit Informations for Mandatory fields for Property Details page");
    //     PropertyInformationPage.EditPropertyMandatoryFields();
    //     PropertyInformationPage.EditPropertyNonMandatoryFields();

    // });

    // xit('7.4 Create Property Details with New Order - Erase Informations', function() {

    //     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     CSHomePage.NavigateToMenuItem_CreateDeal();
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Enter Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterMandatoryFields();

    //     console.log("Enter Non - Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterNonMandatoryFields();

    //     console.log("Erase Informations fields for Property Details page");
    //     PropertyInformationPage.ClearFields();

    // });

    // xit('7.5 Create Property Details with New Order - Verify set of data fields', function() {

    //     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     CSHomePage.NavigateToMenuItem_CreateDeal();
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Verify set of data fields for Property Details page");
    //     PropertyInformationPage.VerifySetOfDataFields();


    // });

    it('US 7.2 : 7.2.1 Property detail conditional rules : Verify the display of fields based on selection', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();
        Menu.ClickonPropertyMenuItems();
        PropertyInformationPage.VerifyPropertyDetailsPageHeader();
        PropertyInformationPage.VerifyPropertyDetailsPageLabels();
        console.log("Verify set of data fields for Property Details page");
        PropertyInformationPage.VerifySetOfDataFields();
        PropertyInformationPage.VerifyDefaultvalueForIsMuncipleAddress();

    });

    it('US 7 Add Multiple property', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnCreateNewOrder();
        Menu.ClickonPropertyMenuItems();
        PropertyInformationPage.VerifyPropertyDetailsPageHeader();
        PropertyInformationPage.VerifyPropertyDetailsPageLabels();

        PropertyInformationPage.EnterPrimaryMandatoryValueForPropertyInfo_1(PropertyType = 'Agricultural', Province = 'Ontario');
        browser.sleep(3000);
        PropertyInformationPage.EnterDetaillsForLegalInformation_1();
        browser.sleep(3000);
        PropertyInformationPage.CollapsePropertyInfo_1();
        browser.sleep(3000);
        PropertyInformationPage.ClickOnAddProperty();
        browser.sleep(3000);
        PropertyInformationPage.EnterPrimaryMandatoryValueForPropertyInfo_2(PropertyType = 'Apartment Building', Province = 'Alberta');
        browser.sleep(3000);


    });

    /*it('7.0 CS Lawyer Portal New order - Capture property details with new order', function() {

    userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CSLoginPage.CSPortalLogin(userId,password);

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = false;
   
    CSHomePage.VerifyHomePage();

    CSHomePage.NavigateToMenuItem_CreateDeal();
    TransactionDetailsPage.ClickOnNext();

    console.log("Verify all Label in page");
    PropertyInformationPage.VerifyPropertyDetailsPageLabels();

    console.log("Verify set of data fields for Property Details page");
    PropertyInformationPage.VerifySetOfDataFields();

    console.log("Enter Mandatory fields for Property Details page");
    PropertyInformationPage.EnterMandatoryFields();

    console.log("Enter Non - Mandatory fields for Property Details page");
    PropertyInformationPage.EnterNonMandatoryFields();

    console.log("Erase Informations fields for Property Details page");
    PropertyInformationPage.ClearFields();

    console.log("Edit Informations for Mandatory fields for Property Details page");
    PropertyInformationPage.EditPropertyMandatoryFields();
    PropertyInformationPage.EditPropertyNonMandatoryFields();

  }); 
  

it('Test Drop Down', function() {

     userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CSLoginPage.CSPortalLogin(userId,password);

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = false;
   
    CSHomePage.VerifyHomePage();

    CSHomePage.NavigateToMenuItem_CreateDeal();
    TransactionDetailsPage.ClickOnNext();

    console.log("Verify set of data fields for Property Details page");
    PropertyInformationPage.selectDropdownRadioButtonbyNumber("51");
    browser.sleep(10000);

    
  }); 
*/
});
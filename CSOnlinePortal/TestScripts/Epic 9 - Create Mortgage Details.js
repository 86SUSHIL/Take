'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var TransactionDetailsPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_TransactionDetails.js');
var PropertyInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PropertyInformation.js');
var PurchaserMortgagorInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PurchaserMortgagorDetails.js');
var MortgageDetails = require('../PageObjectMethods/CSOnlinePortal/CSOP_MortgageDetails.js');
var CustomLibrary = require('../CustomLibrary/CustomLibrary.js');
var CreateOrder = require('../PageObjectMethods/CSOnlinePortal/CSOP_CreateNewOrder.js');
var MenuItems = require('../PageObjectMethods/CSOnlinePortal/CSOP_Menu.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E1_Login.JSON.js');
var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';

//Search Lawyer by unique no
// var LawyerFileNo = CustomLibrary.GenerateFileNumber();

describe('CS Lawyer Portal - Create Mortgage Details', function() {

    it('9.1 Capture Mortgage Details with lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        browser.ignoreSynchronization = false;
        MenuItems.ClickonMortgageMenuItems();
        MortgageDetails.VerifyMortgageDetailsPageLabels();
        MortgageDetails.VerifySetOfDataFieldsInPageLoad();
        MortgageDetails.VerifyAllDropDownMortgagePage();
        MortgageDetails.EnterMortgageDetailsPage();
        MortgageDetails.AddAdditionalLender();
        // MortgageDetails.AddAdditionalLender();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        MortgageDetails.RemoveAdditionalLender();

    });
    it('9.2 Capture Mortgage Details with for Law clark', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        browser.ignoreSynchronization = false;
        MenuItems.ClickonMortgageMenuItems();
        MortgageDetails.VerifyMortgageDetailsPageLabels();
        MortgageDetails.VerifySetOfDataFieldsInPageLoad();
        MortgageDetails.VerifyAllDropDownMortgagePage();
        MortgageDetails.EnterMortgageDetailsPage();

    });



    //it('9.1 Capture Mortgage Details with New Order', function() {

    //  userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //  password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //  //Uncomment the following line if the application in non-angular application
    //  browser.ignoreSynchronization = true;

    //  CSLoginPage.CSPortalLogin(userId,password);

    //  //Uncomment the following line if the application in non-angular application
    //  browser.ignoreSynchronization = false;

    //  CSHomePage.VerifyHomePage();

    //  CSHomePage.NavigateToMenuItem_CreateDeal();

    //  TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //  TransactionDetailsPage.ClickOnNext();
    //  browser.sleep(1000);
    //  PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //  PropertyInformationPage.ClickOnNext();
    //  browser.sleep(1000);
    //  PurchaserMortgagorInformationPage.VerifyPurchaserMortgagorDetailsPageHeader();
    //  PurchaserMortgagorInformationPage.ClickOnNext();
    //  browser.sleep(1000);
    //  MortgageDetails.VerifyMortgagePageHeader();

    //  console.log("Verify all Label in page");
    //  MortgageDetails.VerifyMortgageDetailsPageLabels();

    //  // console.log(FileNo);
    //  // CSHomePage.SearchLawyerFileNo(LawyerFileNo);

    //});

    //it('9.2 Verify ability for the user to add values in the Mortgage fields', function() {

    //   userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //   password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = true;

    //   CSLoginPage.CSPortalLogin(userId,password);

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = false;

    //   CSHomePage.VerifyHomePage();

    //   CSHomePage.NavigateToMenuItem_CreateDeal();

    //   TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //   TransactionDetailsPage.ClickOnNext();
    //   browser.sleep(3000);
    //   PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //   PropertyInformationPage.ClickOnNext();
    //   browser.sleep(3000);

    //   PurchaserMortgagorInformationPage.ClickOnNext();
    //   browser.sleep(3000);
    //   MortgageDetails.VerifyMortgagePageHeader();

    //   console.log("Verify all Label in page");
    //   MortgageDetails.VerifyMortgageDetailsPageLabels();

    //   console.log("Enter Mandatory fields for Mortgage Information Details page");
    //   MortgageDetails.EnterMortgageDetailsPage();

    //   // console.log(FileNo);
    //   // CSHomePage.SearchLawyerFileNo(LawyerFileNo);

    // });

    // it('9.3 Verify ability for the user to Edit values in the Mortgage Details -', function() {

    //   userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //   password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = true;

    //   CSLoginPage.CSPortalLogin(userId,password);

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = false;

    //   CSHomePage.VerifyHomePage();

    //   CSHomePage.NavigateToMenuItem_CreateDeal();

    //   TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //   TransactionDetailsPage.ClickOnNext();
    //   browser.sleep(3000);
    //   PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //   PropertyInformationPage.ClickOnNext();
    //   browser.sleep(3000);

    //   PurchaserMortgagorInformationPage.ClickOnNext();
    //   browser.sleep(3000);
    //   MortgageDetails.VerifyMortgagePageHeader();

    //   console.log("Verify all Label in page");
    //   MortgageDetails.VerifyMortgageDetailsPageLabels();

    //   console.log("Enter Mandatory fields for Mortgage Information Details page");
    //   MortgageDetails.EnterMortgageDetailsPage();

    //   console.log("Erase Informations fields for  Mortgage Information Details page");
    //   MortgageDetails.ClearFieldsForInputBox();

    //   console.log("Edit Informations for Mandatory fields for Purchaser Mortgagor Information Details page");
    //   MortgageDetails.EditEnterAllFieldValues();

    //   // console.log(FileNo);
    //   // CSHomePage.SearchLawyerFileNo(LawyerFileNo);

    // });

    // it('9.4 Verify ability for the user to Erase values in the Mortgage Details', function() {

    //   userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //   password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = true;

    //   CSLoginPage.CSPortalLogin(userId,password);

    //   //Uncomment the following line if the application in non-angular application
    //   browser.ignoreSynchronization = false;

    //   CSHomePage.VerifyHomePage();

    //   CSHomePage.NavigateToMenuItem_CreateDeal();

    //   TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //   TransactionDetailsPage.ClickOnNext();
    //   browser.sleep(3000);
    //   PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //   PropertyInformationPage.ClickOnNext();
    //   browser.sleep(3000);

    //   PurchaserMortgagorInformationPage.ClickOnNext();
    //   browser.sleep(3000);
    //   MortgageDetails.VerifyMortgagePageHeader();

    //   console.log("Verify all Label in page");
    //   MortgageDetails.VerifyMortgageDetailsPageLabels();

    //   console.log("Enter Mandatory fields for Mortgage Information Details page");
    //   MortgageDetails.EnterMortgageDetailsPage();

    //   console.log("Erase Informations fields for  Mortgage Information Details page");
    //   MortgageDetails.ClearFieldsForInputBox();

    // });

});
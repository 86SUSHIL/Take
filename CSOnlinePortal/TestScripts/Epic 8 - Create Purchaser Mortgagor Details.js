'use strict';
var assert = require('assert');
var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var TransactionDetailsPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_TransactionDetails.js');
var PropertyInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PropertyInformation.js');
var PurchaserMortgagorInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PurchaserMortgagorDetails.js');

var RunSettings = require('../TestData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E1_Login.JSON.js');
var dataProvider = require('jasmine-data-provider');
var CUCLoginPage = require('../PageObjectMethods/CUCPortal/CUC_LoginPage.js');
var CUCPageHeader = require('../PageObjectMethods/CUCPortal/CUC_Header.js');
var CUCHomePage = require('../PageObjectMethods/CUCPortal/CUC_Home.js');
var CUCSearchPage = require('../PageObjectMethods/CUCPortal/CUC_SearchPage.js');
var CUCHeaderAndLeftNav = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_HeaderFooterAndLeftNav.js');
var CUCCustomerDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_CustomerDetailsPage.js');
var CUCDealDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_DealDetailsPage.js');
var CUCPropertyDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_PropertyDetailsPage.js');

var userId = '';
var password = '';
var alertMessage = element(by.xpath("//*[@id=\"validation-dialog\"]/div[2]"));
var alertMessageforMandatoryFields = element(by.xpath("//*[@id=\"validation-dialog\"]/div[3]"));
var alertMessageforMandatoryFields1 = element(by.xpath("//*[@id=\"validation-dialog\"]/div[4]"));


var FCTURN = '';
var cucUserId = '';
var cucPassword = '';

describe('CS Lawyer Portal - Purchaser Mortgagor Details', function() {

    it('8.10 Primary Mandatory Fields/Enter all Primary Mandatory Fields', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        console.log("Verify Left Menu Items");
        //Transaction Details
        console.log("Enter Mandatory fields for Transaction Details page");
        //Transaction Details
        // console.log("Enter Mandatory fields for Transaction Details page");
        Menu.ClickonTransationMenuItems();
        TransactionDetailsPage.EnterPrimaryMandatoryTransactionFields(FileNO);
        browser.sleep(3000);
        TransactionDetailsPage.EnterSecondaryMandatoryTransactionFields();

        //Property Details

        //  console.log("Enter fields for Property Details page");
        Menu.ClickonPropertyMenuItems();
        PropertyInformationPage.EnterPrimaryMandatoryValueForPropertyInfo_1(PropertyType = 'Agricultural', Province = 'Ontario');
        PropertyInformationPage.EnterDetaillsForLegalInformation_1();


        browser.ignoreSynchronization = false;
        CreateOrder.EnterMortgageDetailsPage();
        browser.ignoreSynchronization = false;

        CreateOrder.VerifyLeftMenuItemInCreateOrder();
        console.log("Click on Purchaser Mortgagor Details Menu itmes");
        CreateOrder.ClickonPurchaserMenuItems();
        console.log("Verify Purchaser Mortgagor Details Labels");
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.EnterAllFieldValues();
        CreateOrder.EnterAddressForService();
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.ClickonAdditionalInfoMenuItems();
        CreateOrder.EnterAdditionalInfo();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        browser.waitForAngular();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Your order has been submitted successfully.Your FCT Reference No. is ");
        })
        FCTURN = alrmsg.then(function(alrmsg) {
            var result = alrmsg.slice(69, 81);
            console.log("FCTURN :", result);
            return result;
        })

        browser.waitForAngular();
        CSLoginPage.CSPortalLogout();

        cucUserId = RunSettings.data.Global.Users_CUC.RQA1_USER.USER_ID.value;
        cucPassword = RunSettings.data.Global.Users_CUC.RQA1_USER.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CUCLoginPage.CUCPortalLogin(cucUserId, cucPassword);
        CUCPageHeader.VerifyPageHeaders();
        CUCPageHeader.NavigateToSearchPage();
        CUCSearchPage.SearchDeal(FCTURN);
        CUCSearchPage.VerifyDealSearchSuccess();
        CUCSearchPage.VerifyDealSearchResultsTable(FCTURN);
        CUCSearchPage.SearchResultOpenDeal();
        CUCHeaderAndLeftNav.NavigateToCustomerDetails();
        CUCHeaderAndLeftNav.NavigateToDealDetails();
        CUCHeaderAndLeftNav.NavigateToPropertyDetails();
        browser.sleep(3000);
        CUCPropertyDetails.ClickOnMortgagorPurchaserTab();
        CUCPropertyDetails.VerifyPropertyDetailsForMortgagorPurchaser();

    });

    it('8.10 Primary Mandatory Fields/Enter all Primary Mandatory Fields for Law clark', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;
        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        console.log("Verify Left Menu Items");
        //Transaction Details
        console.log("Enter Mandatory fields for Transaction Details page");
        CreateOrder.EnterTransactionFieldsforLawclark();

        //Property Details
        console.log("Enter fields for Property Details page");
        CreateOrder.EnterValueForPropertyInfo();
        CreateOrder.EnterDetaillsForLegalInformation();
        CreateOrder.EnterMortgageDetailsPage();
        browser.ignoreSynchronization = false;

        CreateOrder.VerifyLeftMenuItemInCreateOrder();
        console.log("Click on Purchaser Mortgagor Details Menu itmes");
        CreateOrder.ClickonPurchaserMenuItems();
        console.log("Verify Purchaser Mortgagor Details Labels");
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.EnterAllFieldValues();
        CreateOrder.EnterAddressForService();
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.ClickonAdditionalInfoMenuItems();
        CreateOrder.EnterAdditionalInfo();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        browser.waitForAngular();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Your order has been submitted successfully.Your FCT Reference No. is ");
        })
        FCTURN = alrmsg.then(function(alrmsg) {
            var result = alrmsg.slice(69, 81);
            console.log("FCTURN :", result);
            return result;
        })

        browser.waitForAngular();
        CSLoginPage.CSPortalLogout();
    });

    it('8.02 Purchaser detail conditional rules', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        console.log("Verify Left Menu Items");
        //Transaction Details
        console.log("Enter Mandatory fields for Transaction Details page");
        CreateOrder.EnterTransactionFields();

        //Property Details
        console.log("Enter fields for Property Details page");
        CreateOrder.EnterValueForPropertyInfo();
        CreateOrder.EnterDetaillsForLegalInformation();
        CreateOrder.EnterMortgageDetailsPage();
        browser.ignoreSynchronization = false;
        CreateOrder.ClickonPurchaserMenuItems();
        CreateOrder.ClickonAdditionalInfoMenuItems();
        console.log("Click on Purchaser Mortgagor Details Menu itmes");
        CreateOrder.EnterAdditionalInfo();
        CreateOrder.ClickonPurchaserMenuItems();
        console.log("Verify Purchaser Mortgagor Details Labels");
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.EnterMandatoryFields();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        browser.waitForAngular();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Sorry, we need some more information! Please complete all required fields to submit your order request.");
        })

        var alrmsg = alertMessageforMandatoryFields.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessageforMandatoryFields.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Purcahser Details: corporationNameText, Error: Corporation Name is required.");
        })


    });

    it('8.02 Purchaser detail Ownership Type', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        console.log("Verify Left Menu Items");
        //Transaction Details
        console.log("Enter Mandatory fields for Transaction Details page");
        CreateOrder.EnterTransactionFields();

        //Property Details
        console.log("Enter fields for Property Details page");
        CreateOrder.EnterValueForPropertyInfo();
        CreateOrder.EnterDetaillsForLegalInformation();
        CreateOrder.EnterMortgageDetailsPage();
        browser.ignoreSynchronization = false;
        CreateOrder.ClickonPurchaserMenuItems();
        CreateOrder.ClickonAdditionalInfoMenuItems();
        console.log("Click on Purchaser Mortgagor Details Menu itmes");
        CreateOrder.EnterAdditionalInfo();
        CreateOrder.ClickonPurchaserMenuItems();
        console.log("Verify Purchaser Mortgagor Details Labels");
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.EnterMandatoryforOtherFields();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        browser.waitForAngular();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Sorry, we need some more information! Please complete all required fields to submit your order request.");
        })

        var alrmsg = alertMessageforMandatoryFields.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessageforMandatoryFields.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Purcahser Details: firstNameText, Error: First Name is required.");
        })
        var alrmsg = alertMessageforMandatoryFields1.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessageforMandatoryFields1.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Purcahser Details: lastNameText, Error: Last tName is required.");
        })

    });

    it('8.02 Purchaser detail Beneficial Owner', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        browser.ignoreSynchronization = true;
        CSLoginPage.CSPortalLogin(userId, password);
        browser.ignoreSynchronization = false;

        console.log("Verify Home Page");
        CSHomePage.VerifyHomePage();
        console.log("Click on Create New Order");
        CSHomePage.ClickOnCreateNewOrder();
        console.log("Verify Left Menu Items");
        //Transaction Details
        console.log("Enter Mandatory fields for Transaction Details page");
        CreateOrder.EnterTransactionFields();

        //Property Details
        console.log("Enter fields for Property Details page");
        CreateOrder.EnterValueForPropertyInfo();
        CreateOrder.EnterDetaillsForLegalInformation();
        CreateOrder.EnterMortgageDetailsPage();
        browser.ignoreSynchronization = false;
        CreateOrder.ClickonPurchaserMenuItems();
        CreateOrder.ClickonAdditionalInfoMenuItems();
        console.log("Click on Purchaser Mortgagor Details Menu itmes");
        CreateOrder.EnterAdditionalInfo();
        CreateOrder.ClickonPurchaserMenuItems();
        console.log("Verify Purchaser Mortgagor Details Labels");
        CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
        CreateOrder.EnterMandatoryforBeneficialOwnerFields();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();
        browser.waitForAngular();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Sorry, we need some more information! Please complete all required fields to submit your order request.");
        })

        var alrmsg = alertMessageforMandatoryFields.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessageforMandatoryFields.getText();
        })
        alrmsg.then(function(alrmsg) {
            console.log(alrmsg);
            expect(alrmsg).toContain("Purcahser Details: beneficialOwnerNameText, Error: Beneficial Owner Name is required.");
        })

    });

    //it('8.0 MS 1.0 CS Capture Purchaser details with new order', function () {

    //    userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //    browser.ignoreSynchronization = true;

    //    CSLoginPage.CSPortalLogin(userId, password);

    //    browser.ignoreSynchronization = false;

    //    console.log("Verify Home Page");
    //    CSHomePage.VerifyHomePage();
    //    console.log("Click on Create New Order");
    //    CSHomePage.ClickOnCreateNewOrder();
    //    console.log("Verify Left Menu Items");
    //    //Transaction Details
    //    console.log("Enter Mandatory fields for Transaction Details page");
    //    CreateOrder.EnterTransactionFields();

    //    //Property Details

    //    console.log("Enter fields for Property Details page");
    //    CreateOrder.EnterValueForPropertyInfo();
    //    CreateOrder.EnterDetaillsForLegalInformation();
    //    CreateOrder.EnterMortgageDetailsPage();
    //    browser.ignoreSynchronization = false;

    //    CreateOrder.VerifyLeftMenuItemInCreateOrder();
    //    console.log("Click on Purchaser Mortgagor Details Menu itmes");
    //    CreateOrder.ClickonPurchaserMenuItems();
    //    console.log("Verify Purchaser Mortgagor Details Labels");
    //    CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
    //    CreateOrder.EnterAllFieldValues();
    //    CreateOrder.EnterAddressForService();
    //    CreateOrder.VerifyPurchaserMortgagorDetailsPageLabels();
    //    CreateOrder.ClickonAdditionalInfoMenuItems();
    //    CreateOrder.EnterAdditionalInfo();
    //    browser.ignoreSynchronization = false;
    //    CSHomePage.ClickOnSubmitOrder();
    //    browser.waitForAngular();

    //    var alrmsg = alertMessage.getText().then(function (text) {
    //        // console.log(alrmsg);
    //        return alertMessage.getText();
    //    })
    //    alrmsg.then(function (alrmsg) {
    //        console.log(alrmsg);
    //        expect(alrmsg).toContain("Your order has been submitted successfully.Your FCT Reference No. is ");
    //    })
    //    FCTURN = alrmsg.then(function (alrmsg) {
    //        var result = alrmsg.slice(69, 81);
    //        console.log("FCTURN :", result);
    //        return result;
    //    })

    //    browser.waitForAngular();
    //    CSLoginPage.CSPortalLogout();

    //});

    //it('8.0 MS 2.0 Verify ability for the user to add values in the Purchaser/Mortgagor fields', function () {

    //    userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = true;

    //    CSLoginPage.CSPortalLogin(userId, password);

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = false;

    //    CSHomePage.VerifyHomePage();

    //    CSHomePage.NavigateToMenuItem_CreateDeal();

    //    TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //    TransactionDetailsPage.ClickOnNext();
    //    browser.sleep(3000);
    //    PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //    PropertyInformationPage.ClickOnNext();
    //    browser.sleep(3000);

    //    console.log("Verify all Label in page for Purchaser Mortgagor");
    //    PurchaserMortgagorInformationPage.VerifyPurchaserMortgagorDetailsPageLabels();

    //    console.log("Enter Mandatory fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.EnterAllFieldValues();

    //});

    //it('8.0 MS 2.1 Verify ability for the user to Edit values in the Purchaser/Mortgagor fields', function () {

    //    userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = true;

    //    CSLoginPage.CSPortalLogin(userId, password);

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = false;

    //    CSHomePage.VerifyHomePage();

    //    CSHomePage.NavigateToMenuItem_CreateDeal();

    //    TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //    TransactionDetailsPage.ClickOnNext();
    //    browser.sleep(3000);
    //    PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //    PropertyInformationPage.ClickOnNext();
    //    browser.sleep(3000);

    //    console.log("Verify all Label in page");
    //    PurchaserMortgagorInformationPage.VerifyPurchaserMortgagorDetailsPageLabels();

    //    console.log("Enter Mandatory fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.EnterAllFieldValues();

    //    console.log("Erase Informations fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.ClearFieldsForInputBox();

    //    console.log("Edit Informations for Mandatory fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.EditEnterAllFieldValues();

    //});

    //it('8.0 MS 2.2 Verify ability for the user to Erase values in the Purchaser/Mortgagor fields', function () {


    //    userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
    //    password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = true;

    //    CSLoginPage.CSPortalLogin(userId, password);

    //    //Uncomment the following line if the application in non-angular application
    //    browser.ignoreSynchronization = false;

    //    CSHomePage.VerifyHomePage();

    //    CSHomePage.NavigateToMenuItem_CreateDeal();

    //    TransactionDetailsPage.VerifyTranasactionDetailsPage();
    //    TransactionDetailsPage.ClickOnNext();
    //    browser.sleep(3000);
    //    PropertyInformationPage.VerifyPropertyDetailsPageHeader();
    //    PropertyInformationPage.ClickOnNext();
    //    browser.sleep(3000);

    //    console.log("Verify all Label in Purchaser Mortgagor Information page");
    //    PurchaserMortgagorInformationPage.VerifyPurchaserMortgagorDetailsPageLabels();

    //    console.log("Enter Mandatory fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.EnterAllFieldValues();

    //    console.log("Erase Informations fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.ClearFieldsForInputBox();

    //    console.log("Verify set of data fields for Purchaser Mortgagor Information Details page");
    //    PurchaserMortgagorInformationPage.VerifyDefaultSetOfDataFieldsValue();

    //});

});
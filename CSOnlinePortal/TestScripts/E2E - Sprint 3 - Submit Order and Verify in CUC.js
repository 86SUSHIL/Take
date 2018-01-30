'use strict';


var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var TransactionDetailsPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_TransactionDetails.js');
var PropertyInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PropertyInformation.js');
var RunSettings = require('../testData/RunSettings.JSON.js');
var PurchaserMortgagorInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PurchaserMortgagorDetails.js');
//var TestData = require('../testData/Testdata_E1_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');
var MortgageDetails = require('../PageObjectMethods/CSOnlinePortal/CSOP_MortgageDetails.js');
var CreateOrder = require('../PageObjectMethods/CSOnlinePortal/CSOP_CreateNewOrder.js');
var Menu = require('../PageObjectMethods/CSOnlinePortal/CSOP_Menu.js');
var AdditionalInfo = require('../PageObjectMethods/CSOnlinePortal/CSOP_AdditionalInfo.js');
var CustomLib = require('../CustomLibrary/CustomLibrary.js');
//var StartExe = require('../Configuration/Startup.js');
var CUCLoginPage = require('../PageObjectMethods/CUCPortal/CUC_LoginPage.js');
var CUCPageHeader = require('../PageObjectMethods/CUCPortal/CUC_Header.js');
var CUCHomePage = require('../PageObjectMethods/CUCPortal/CUC_Home.js');
var CUCSearchPage = require('../PageObjectMethods/CUCPortal/CUC_SearchPage.js');
var CUCHeaderAndLeftNav = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_HeaderFooterAndLeftNav.js');
var CUCCustomerDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_CustomerDetailsPage.js');
var CUCDealDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_DealDetailsPage.js');
var CUCPropertyDetails = require('../PageObjectMethods/CUCPortal/CUC_DealInformation_PropertyDetailsPage.js');
var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E1_Login.JSON.js');
var dataProvider = require('jasmine-data-provider');
var userId = '';
var password = '';

var cucUserId = '';
var cucPassword = '';

var alertMessage = element(by.css('#validation-dialog'));
var FCTURN = '';
var PropertyType = '';
var Province = '';
var FileNO = CustomLib.GenerateFileNumber();

describe('Creat New ordar, Submit Order from CS Lawyer Portal and Verify in CUC Portal', function() {

    it('Creat New ordar, Submit Order from CS Lawyer Portal', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);

        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.ClickOnCreateNewOrder();
        Menu.VerifyLeftMenuItemInCreateOrder();
        //CreateOrder.VerifyLeftMenuItemInCreateOrder();
        //Transaction Details
        // console.log("Enter Mandatory fields for Transaction Details page");
        Menu.ClickonTransationMenuItems();
        TransactionDetailsPage.EnterPrimaryMandatoryTransactionFields(FileNO);
        browser.sleep(3000);
        TransactionDetailsPage.EnterSecondaryMandatoryTransactionFields();
        //CreateOrder.EnterTransactionFields();

        //Property Details

        //  console.log("Enter fields for Property Details page");
        Menu.ClickonPropertyMenuItems();
        PropertyInformationPage.EnterPrimaryMandatoryValueForPropertyInfo_1(PropertyType = 'Agricultural', Province = 'Ontario');
        PropertyInformationPage.EnterDetaillsForLegalInformation_1();


        browser.ignoreSynchronization = false;

        //Purchaser Mortgagor Details
        Menu.ClickonPurchaserMenuItems();
        PurchaserMortgagorInformationPage.EnterPrimaryMandatoryFieldPurchaser();

        //Mortgage Details
        Menu.ClickonMortgageMenuItems();
        MortgageDetails.EnterPrimaryMandatoryMortgageDetailsPage();
        MortgageDetails.EnterPrimaryMandatoryLenderInformation();
        browser.ignoreSynchronization = false;

        //AdditionalInfo Details
        Menu.ClickonAdditionalInfoMenuItems();
        AdditionalInfo.EnterAdditionalInfo();
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
            var result = alrmsg.slice(88, 101);
            console.log("FCTURN :", result);
            return result;
        })

        browser.waitForAngular();
        CSLoginPage.CSPortalLogout();
    });

    it('Verify Created new Order on CUC portal', function() {

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
        browser.sleep(2000);
        CUCCustomerDetails.VerifyCustomerDetailsPage();
        CUCCustomerDetails.VerifyCustomerDetailsPageContent(FileNO);
        CUCHeaderAndLeftNav.NavigateToDealDetails();
        browser.sleep(2000);
        CUCDealDetails.VerifyDealDetailsPage();
        CUCDealDetails.VerifyDealDetailsPageContent(FCTURN);

        CUCHeaderAndLeftNav.NavigateToPropertyDetails();
        browser.sleep(3000);
        CUCPropertyDetails.VerifyPropertyDetailsPropertyContent(FCTURN);
        CUCPropertyDetails.ClickOnMortgagorPurchaserTab();
        CUCPropertyDetails.VerifyPropertyDetailsForMortgagorPurchaser();
        CUCPropertyDetails.ClickOnMortgageTab();
        CUCPropertyDetails.VerifyPropertyDetailsForMortgage();

    });


});
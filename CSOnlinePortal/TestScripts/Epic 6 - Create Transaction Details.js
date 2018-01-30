'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');
var TransactionDetailsPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_TransactionDetails.js');
var PropertyInformationPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_PropertyInformation.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
var TestData = require('../testData/Testdata_E1_Login.JSON.js');
var TransData = require('../testData/Testdata_TransactionDetails.JSON.js');
var dataProvider = require('jasmine-data-provider');
var CustomLib = require('../CustomLibrary/CustomLibrary.js');

var alertMessage = element(by.css('#validation-dialog'));

var userId = '';
var password = '';
var FileNO = CustomLib.GenerateFileNumber();

describe('CS Lawyer Portal -> New Order – Transaction Details', function() {

    // xit('6.0.1 -> Capture transaction details with new order - Input Data', function() {

    //     userId = RunSettings.data.Global.Users.CSRSActiveBoth.USER_ID.value;
    //     password = RunSettings.data.Global.Users.CSRSActiveBoth.PASSWORD.value;

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = true;

    //     CSLoginPage.CSPortalLogin(userId, password);
    //     CSProdSelPage.SelectProduct("CS");

    //     //Uncomment the following line if the application in non-angular application
    //     browser.ignoreSynchronization = false;

    //     CSHomePage.VerifyHomePage();

    //     CSHomePage.NavigateToMenuItem_CreateDeal();
    //     //TransactionDetailsPage.VerifyTranasactionDetailsLabels();
    //     TransactionDetailsPage.EditTransactionMandatoryFields();
    //     //TransactionDetailsPage.ClickOnSubmit();

    //     /*
    //     TransactionDetailsPage.ClickOnNext();

    //     console.log("Verify all Label in page");
    //     PropertyInformationPage.VerifyPropertyDetailsPageLabels();

    //     console.log("Verify set of data fields for Property Details page");
    //     PropertyInformationPage.VerifySetOfDataFields();

    //     console.log("Enter Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterMandatoryFields();

    //     console.log("Enter Non - Mandatory fields for Property Details page");
    //     PropertyInformationPage.EnterNonMandatoryFields();

    //     console.log("Erase Informations fields for Property Details page");
    //     PropertyInformationPage.ClearFields();

    //     console.log("Edit Informations for Mandatory fields for Property Details page");
    //     PropertyInformationPage.EditPropertyMandatoryFields();
    //     PropertyInformationPage.EditPropertyNonMandatoryFields();
    //     */

    // });


    it('6.2.1 -> US 6.2/CS Lawyer Portal/Transaction detail conditional rules - Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;
        var ddvalue = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();
        //TransactionDetailsPage.VerifyTranasactionDetailsLabels();
        //TransactionDetailsPage.VerifyAllDropDownTransactionPage();
        TransactionDetailsPage.VerifyFieldFormatingTransactionPage();
        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Existing Owner Only (no mortgage)');

        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Existing Owner with Mortgage');

        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Mortgage Only (no purchase)');
        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Purchase (no mortgage)');
        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Purchase with Mortgage');

    });

    it('6.2.2 -> US 6.2/CS Lawyer Portal/Transaction detail conditional rules - Law Clerk', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;
        var ddvalue = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();
        //TransactionDetailsPage.VerifyTranasactionDetailsLabels();
        //TransactionDetailsPage.VerifyAllDropDownTransactionPage();

        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Existing Owner Only (no mortgage)');

        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Existing Owner with Mortgage');

        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Mortgage Only (no purchase)');
        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Purchase (no mortgage)');
        TransactionDetailsPage.verifyConditionalDataForTransationInfo(ddvalue = 'Purchase with Mortgage');
    });

    it('6.2.3 -> US 6.2/CS Lawyer Portal/Transaction detail conditional rules - Import to CUC - Regression', function() {

        console.log("All covered in Epic 47");
    });
    it('6.9.1 ->  US 6.9/CS Lawyer Portal/Transaction - Default Values for primary mandatory fields - Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;
        var ddvalue = '';
        var contactName = '';
        var LawyerNotryName = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();
        TransactionDetailsPage.VerifyDefaultDataFieldsForTransactionPage(LawyerNotryName = 'A utoCSLawyer', contactName = 'A utoCSLawyer');
    });

    it('6.9.2 -> US 6.9/CS Lawyer Portal/Transaction - Default Values for primary mandatory fields - Law Clerk', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;
        var ddvalue = '';
        var contactName = '';
        var LawyerNotryName = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();
        TransactionDetailsPage.VerifyDefaultDataFieldsForTransactionPage(LawyerNotryName = '--Select One--', contactName = 'A utoCSLawclerk');
    });

    it('6.10.1 ->  US 6.10/CS Lawyer Portal/Transaction – Primary Mandatory Fields - Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;
        var ddvalue = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.ClickOnCreateNewOrder();

        TransactionDetailsPage.VerifyPrimaryMandetoryFieldsForTransactionPage();
        TransactionDetailsPage.ClickOnAddAdditionalFirm();

        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(Array) {
            console.log("Validation Error List are =>", Array + '\n');
            //expect(alrmsg).toContain(TransData.data.TRANSACTION_DETAILS.DDActingforValidation.ErrorValidation);

        })
    });

    it('6.10.2 -> US 6.10/CS Lawyer Portal/Transaction – Primary Mandatory Fields - Law Clerk', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawclerk.PASSWORD.value;
        var ddvalue = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();

        CSHomePage.ClickOnCreateNewOrder();

        TransactionDetailsPage.VerifyPrimaryMandetoryFieldsForTransactionPage();
        TransactionDetailsPage.ClickOnAddAdditionalFirm();

        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(Array) {
            console.log("Validation Error List are =>", Array + '\n');
            //expect(alrmsg).toContain(TransData.data.TRANSACTION_DETAILS.DDActingforValidation.ErrorValidation);

        })


        //TransactionDetailsPage.VerifyDefaultDataFieldsForTransactionPage();
    });

    it('6.11 ->  US 6.11/CS Lawyer Portal/Transaction – Secondary Mandatory Fields - Lawyer', function() {

        userId = RunSettings.data.Global.Users.CSOnlyActiveLawyer.USER_ID.value;
        password = RunSettings.data.Global.Users.CSOnlyActiveLawyer.PASSWORD.value;
        var ddvalue = '';
        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = true;

        CSLoginPage.CSPortalLogin(userId, password);


        //Uncomment the following line if the application in non-angular application
        browser.ignoreSynchronization = false;

        CSHomePage.VerifyHomePage();
        CSHomePage.ClickOnCreateNewOrder();

        TransactionDetailsPage.EnterPrimaryMandatoryTransactionFields(FileNO);
        browser.waitForAngular();


        TransactionDetailsPage.ClickOnAddAdditionalFirm();
        browser.waitForAngular();
        TransactionDetailsPage.VerifySecondaryMandetoryFieldsForTransactionPage();
        browser.ignoreSynchronization = false;
        CSHomePage.ClickOnSubmitOrder();

        var alrmsg = alertMessage.getText().then(function(text) {
            // console.log(alrmsg);
            return alertMessage.getText();
        })
        alrmsg.then(function(Array) {
            console.log("Validation Error List are =>", Array + '\n');
            //expect(alrmsg).toContain(TransData.data.TRANSACTION_DETAILS.DDActingforValidation.ErrorValidation);

        })


    });
});
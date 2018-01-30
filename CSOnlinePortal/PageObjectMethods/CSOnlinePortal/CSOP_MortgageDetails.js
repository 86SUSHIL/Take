'use strict';

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');
//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");
//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");
//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var MortgageDetailsPage = function() {

    //#region for Elements

    //# Mortgage Page Header
    var txtMortgageDetailsHeader = element(by.xpath("//h3[text()='Mortgage INFORMATION']"));

    /*******label element locator for Mortagage Information Page */
    var lblLenderName = element(by.xpath("//label[text()='Lender Name']"));
    var lblCustodianName = element(by.xpath("//label[text()='Custodian Name']"));
    var lblMortgageAmount = element(by.xpath("//label[text()='Mortgage Amount']"));
    var lblInsuredAmount = element(by.xpath("//label[text()='Insured Amount']"));
    var lblLenderInterest = element(by.xpath("//label[text()='Lender Interest']"));
    var lblMortgageRefNo = element(by.xpath("//label[text()='Mortgage Reference No.']"));
    var lblMortgageType = element(by.xpath("//label[text()='Mortgage Type']"));
    var lblMortgagePriority = element(by.xpath("//label[text()='Mortgage Priority']"));
    var lblnCMSCInsured = element(by.xpath("/html/body/app-root/app-layouts-auth/fw-framework-body/div/div/section[2]/deal/form/div[1]/div/div/mortgage-list/div/div[2]/div/div[1]/div[1]/mortgage-detail/div/div[2]/div[3]/div[2]/label"));
    var lblNoOfUnits = element(by.xpath("//label[text()='No. of Units']"));
    var lblchkbxLoanAgreement = element(by.xpath("//label[text()='Does the loan agreement allow for the following? (select all that apply)']"));

    //# Mortgage details Information

    var txtLenderNameLender1 = element(by.css('#lenderNameText'));
    var txtLenderNameLender2 = element(by.css('#lenderNameText'));
    var txtCustodianName = element(by.css('#custodianNameText'));
    var txtMortgageAmount = element(by.css('#mortgageAmountText'));
    var txtInsuredAmount = element(by.css('#insuredAmountText'));
    var txtlenderInterest = element(by.css('#lenderInterestText'));
    var txtMortgageRefNo = element(by.css('#mortgageReferenceNoText'));
    var lstMortgageType = element(by.css('#mortgageTypeOption'));
    var lstMortgagePriority = element(by.css('#mortgagePriorityOption'));
    var rbtnCMSCInsured_Yes = element(by.css('#isTheMortgageCMHCInsuredTextYes0'));

    var txtNoOfUnits = element(by.xpath("//input[@name='noofUnitsText']"));
    var ChkAdvanceUpTo = element(by.css('#isAdvanceUpTo0'));
    var ChkAdvanceIncrease = element(by.css('#isAdvanceIncrease0'));
    var ChkRevolvingCredit = element(by.css('#IsRevolvingCredit0'));
    var ChkVariableRate = element(by.css('#IsVariableRate0'));
    var chkbxLoanAgreement = element.all(by.xpath(".//*[@id='stepper-step-4']/div/div/mortgage/div/div/div/div[2]/div/div[11]/div[2]"));

    var btnPrevious = element(by.xpath(".//*[@id='stepper-step-4']/div/button[1]"));
    var btnNext = element(by.xpath(".//*[@id='stepper-step-4']/div/button[2]"));

    var btnRemoveLender = element(by.xpath("/html/body/app-root/app-layouts-auth/fw-framework-body/div/div/section[2]/deal/form/div[1]/div/div/mortgage-list/div/div[2]/div/div[1]/div/mortgage-detail/div/div[2]/lender-list/div/div/div[2]/lender-detail/div/div[1]/div/button[2]"));
    var btnAddLender = element(by.xpath("//button[@type='button' and contains(., 'Add Lender')]"));
    var alertMsg = element(by.css('#btnOk'));
    //

    //#region for methods

    this.AddAdditionalLender = function() {
        browser.sleep(3000);
        btnAddLender.click();
        browser.sleep(3000);

        console.log(" Enter Lender Name: ");
        txtLenderNameLender1.sendKeys("Sam");

        console.log(" Enter Custodian Name:");
        txtCustodianName.sendKeys("Custodian Name");

    };

    this.RemoveAdditionalLender = function() {
        browser.waitForAngular();
        btnRemoveLender.click();
        browser.waitForAngular();
        browser.actions().doubleClick(alertMsg).perform();
        browser.sleep(500);
        //browser.sleep(3000);


    };

    this.VerifyMortgageDetailsPageLabels = function() {
        /*Verify all Labels available on Mortgage Details page*/
        expect(lblLenderName.getText()).toEqual("Lender Name");
        //expect(lblCustodianName.getText()).toEqual("Custodian Name");
        expect(lblMortgageAmount.getText()).toEqual("Mortgage Amount");
        expect(lblInsuredAmount.getText()).toEqual("Insured Amount");
        expect(lblLenderInterest.getText()).toEqual("Lender Interest");
        expect(lblMortgageRefNo.getText()).toEqual("Mortgage Reference No.");
        expect(lblMortgageType.getText()).toEqual("Mortgage Type");
        expect(lblMortgagePriority.getText()).toEqual("Mortgage Priority");
        expect(lblnCMSCInsured.getText()).toEqual("Is the mortgage CMHC insured?");
        //expect(lblNoOfUnits.getText()).toEqual("No. of Units");
        //expect(lblchkbxLoanAgreement.getText()).toEqual("Does the loan agreement allow for the following? (select all that apply)");
    };


    this.VerifyMortgagePageHeader = function() {
        it('Verify Mortgage Page Header', function() {
            expect(txtMortgageDetailsHeader.getText()).toMatch("Mortagage Information");
        });
    };

    this.EnterMortgageDetailsPage = function() {

        console.log(" Enter Lender Name: ");
        txtLenderNameLender1.sendKeys("Sam");

        console.log(" Enter Custodian Name:");
        txtCustodianName.sendKeys("Custodian Name");

        console.log(" Enter Mortgage Amount:");
        txtMortgageAmount.clear();
        txtMortgageAmount.sendKeys("20000");

        console.log(" Enter Insured Amount:");
        txtInsuredAmount.sendKeys("20000");

        console.log(" Enter Mortgage Reference No");
        txtMortgageRefNo.sendKeys("1234");

        console.log("Select Mortgage Type from drop down:");

        lstMortgageType.element(by.cssContainingText('option', 'Amending Agreement')).click();

        console.log("Select Mortgage Priority from drop down:");
        lstMortgagePriority.element(by.cssContainingText('option', 'Eighth')).click();
        browser.sleep(500);

        console.log("Select check box for CMSC Insured as Yes/No:");
        browser.actions().doubleClick(rbtnCMSCInsured_Yes).perform();
        // rbtnCMSCInsured_Yes.click();
        browser.sleep(500);

        console.log("Enter No. Of Units: ");
        txtNoOfUnits.sendKeys("432");

        browser.sleep(500);
        browser.actions().doubleClick(ChkAdvanceUpTo).perform();
        browser.sleep(500);
        browser.actions().doubleClick(ChkAdvanceIncrease).perform();
        browser.sleep(500);
        browser.actions().doubleClick(ChkRevolvingCredit).perform();
        browser.sleep(500);
        browser.actions().doubleClick(ChkVariableRate).perform();
    };

    this.EnterPrimaryMandatoryMortgageDetailsPage = function() {

        console.log(" Enter Mortgage Amount:");
        txtMortgageAmount.clear();
        txtMortgageAmount.sendKeys("20000");

        console.log("Select Mortgage Priority from drop down:");
        lstMortgagePriority.element(by.cssContainingText('option', 'Eighth')).click();

        console.log("Select Mortgage Type from drop down:");
        lstMortgageType.element(by.cssContainingText('option', 'Amending Agreement')).click();

    };

    this.EnterPrimaryMandatoryLenderInformation = function() {

        console.log(" Enter Lender Name: ");
        txtLenderNameLender1.sendKeys("Sam");

    };
    this.VerifyAllDropDownMortgagePage = function() {
        var MortgageType = lstMortgageType.all(by.tagName('option')).getText();
        var MortgagePriority = lstMortgagePriority.all(by.tagName('option')).getText();

        MortgageType.then(function(Array) {
            console.log("Mortgage Type drop down list Items :", Array);
            // expect(ActingFor).toEqual()
        })
        MortgagePriority.then(function(Array) {
            console.log("Mortgage Priority drop down list Items :", Array);
            //expect(ActingFor).toEqual()
        })
    };

    this.VerifySetOfDataFieldsInPageLoad = function() {
        /*Verify set of  fields for Property Details page  */
        expect(txtLenderNameLender1.getAttribute()).toEqual(null);
        expect(txtCustodianName.getAttribute()).toBe(null);
        browser.waitForAngular();
        expect(txtMortgageAmount.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtInsuredAmount.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtMortgageRefNo.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtInsuredAmount.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(lstMortgageType.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(lstMortgagePriority.getAttribute()).toEqual(null);
        browser.waitForAngular();


    };

    //this.EnterNonMandetoryFields = function () {
    //    /*Enter mandetory fields for Mortgage Details page  */
    //    txtCustodianName.sendKeys("Name");
    //    txtMortgageAmount.sendKeys("100");
    //    txtInsuredAmount.sendKeys("1000");
    //    txtMortgageRefNo.sendKeys(100);
    //};

    //this.ClearFieldsForInputBox = function () {
    //    //clear() All fields values
    //    txtLenderName.clear();
    //    txtCustodianName.clear();
    //    txtMortgageAmount.clear();
    //    txtInsuredAmount.clear();
    //    txtlenderInterest.clear();
    //    txtMortgageRefNo.clear();
    //    txtNoOfUnits.clear();


    //};

    //this.EditEnterAllFieldValues = function () {

    //    txtLenderName.sendKeys("Edit Lender Name");
    //    txtCustodianName.sendKeys("Edit Custodian Name");
    //    txtMortgageAmount.sendKeys("40000");
    //    txtInsuredAmount.sendKeys("40000");
    //    txtMortgageRefNo.sendKeys("231234");
    //    lstMortgageType.element(by.cssContainingText('option', 'Assumption')).click();
    //    lstMortgagePriority.element(by.cssContainingText('option', 'Fifth')).click();
    //    rbtnCMSCInsured.get(0).click();
    //    txtNoOfUnits.sendKeys("Edit 432");

    //    console.log("Select for Loan Agreement options: ")
    //        //chkbxLoanAgreement.get(0).click();
    //       // chkbxLoanAgreement.get(1).click();

    //};
};
//this.ClickOnPrevious = function () {
//    /*Click on previous button on Purchaser Mortgagor Details Page */
//    browser.waitForAngular();
//    btnPrevious.click();
//    browser.sleep(3000);
//};

//this.ClickOnNext = function () {
//    /*Click on next button on Purchaser Mortgagor Details Page */
//    browser.waitForAngular();
//    btnNext.click();
//    browser.sleep(3000);
//};

//#end region for methods

//     function selectOption(selector, item) {
//         var selectList, desiredOption;

//         selectList = this.findElement(selector);
//         selectList.click();

//         selectList.findElements(protractor.By.tagName('option'))
//             .then(function findMatchingOption(options) {
//                 options.some(function(option) {
//                     option.getText().then(function doesOptionMatch(text) {
//                         if (item === text) {
//                             desiredOption = option;
//                             return true;
//                         }
//                     });
//                 });
//             })
//             .then(function clickOption() {
//                 if (desiredOption) {
//                     desiredOption.click();
//                 }
//             });
//     };



module.exports = new MortgageDetailsPage();
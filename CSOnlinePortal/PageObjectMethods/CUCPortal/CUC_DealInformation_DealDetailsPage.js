'use strict';

var userData = require('../../testData/RunSettings.JSON.js');
var testData = require('../../testData/Testdata_TransactionDetails.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var url = userData.data.Global.RQA1.URL_CSPORTAL.value;

var lawyerFileNo = testData.data.TRANSACTION_DETAILS.YOURFIRM_INFO.YOUR_FILE_NO.value;
var actingOnBehalf = testData.data.TRANSACTION_DETAILS.YOURFIRM_INFO.ACTING_FOR.value;
var transactionType = testData.data.TRANSACTION_DETAILS.TRANSACTION_INFO.TRANSACTION_TYPE.value;
var isEnergyDeal = testData.data.TRANSACTION_DETAILS.TRANSACTION_INFO.ENERGY_DEAL.value;
var closingDate = testData.data.TRANSACTION_DETAILS.TRANSACTION_INFO.CLOSING_DATE.value;

var CUCDealDetailsPage = function() {

    //#region for Elements
    //(by.xpath(".//*[@id='interestHeldOption']/option[2]"));

    var lblDealDetails = element(by.css("#ctl00_DefaultContent_DealDetailsUpdatePanel1 > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(1)"));

    var tabDealDetails = element(by.css("#ctl00_DefaultContent_DealDetailsImageButton"));
    var tabCTS = element(by.css("#ctl00_DefaultContent_CTSImageButton"));

    var lstLineOfBusiness = element(by.css('#ctl00_DefaultContent_LineOfBusinessDropDownList'));
    var lstTransactionType = element(by.css('#ctl00_DefaultContent_TransactionTypeDropDownList'));
    var lstPolicyType = element(by.css('#ctl00_DefaultContent_PolicyTypeDropDownList'));
    var lstOrderMethod = element(by.css('#ctl00_DefaultContent_OrderMethodDropDownList'));

    var radioIsEnergyDeal = element.all(by.xpath('//*[@name="ctl00$DefaultContent$IsEnergyDealRadioButtonList"]'));
    var radioIsRushDeal = element.all(by.xpath('//*[@name="ctl00$DefaultContent$IsRushDealRadioButtonList"]'));
    var radioDocLanguage = element.all(by.xpath('//*[@name="ctl00$DefaultContent$DefaultLanguageRadioButtonList"]'));

    var txtOrderDate = element(by.css('#ctl00_DefaultContent_OrderDateTextBox'));
    //var lsttOrderTime = element(by.css('#ctl00_DefaultContent_OrganizationNameLabelTextBox'));
    var txtClosingDate = element(by.css('#ctl00_DefaultContent_ClosingDateTextBox'));

    var lstDealType = element(by.css('#ctl00_DefaultContent_DealTypeDropDownList'));
    var txtDealLinkId = element(by.css('#ctl00_DefaultContent_DealLinkIDTextBox'));
    var lstClosingActivity = element(by.css('#ctl00_DefaultContent_ClosingActivityDropDownList'));
    var lstCompletionActivity = element(by.css('#ctl00_DefaultContent_CompletionActivityDropDownList'));

    var lblFCTURN = element(by.css('#ctl00_DefaultContent_FCTURNLabel'));
    var radioOnHold = element.all(by.xpath('//*[@name="ctl00$DefaultContent$IsHoldCompleteRadioButtonList"]'));
    var lblDealCreatedDate = element(by.css('#ctl00_DefaultContent_DealCreatedLabel'));

    //Footer Elements					
    var btnCancel = element(by.css('#ctl00_DefaultContent_CancelImageButton'));
    var btnSave = element(by.css('#ctl00_DefaultContent_SaveImageButton'));
    var btnSaveContinue = element(by.css('#ctl00_DefaultContent_SaveAndContinueImageButton'));
    var btnSubmitDeal = element(by.css('#ctl00_DefaultContent_DealSubmit'));
    var FileNO = '';
    //#region for methods
    this.VerifyDealDetailsPage = function() {
        browser.sleep(2000);
        expect(lblDealDetails.getText()).toContain("Deal Details - Deal Information");
    };

    this.VerifyDealDetailsPageContent = function(FCTURN) {

        var date = new Date();
        var cucToday = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + '/' + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '/' + date.getFullYear();
        var date1 = new Date(closingDate);
        var cucClosingDate = ((date1.getDate() + 1) > 9 ? (date1.getDate() + 1) : '0' + (date1.getDate() + 1)) + '/' + ((date1.getMonth() + 1) > 9 ? (date1.getMonth() + 1) : '0' + (date1.getMonth() + 1)) + '/' + date1.getFullYear();

        //var cucToday = date.getUTCDate()+'/'+date.getUTCMonth()+'/'+date.getFullYear();
        expect(lstLineOfBusiness.element(by.cssContainingText('option', 'Under')).getAttribute("selected")).toEqual("true");
        expect(lstTransactionType.element(by.cssContainingText('option', transactionType)).getAttribute("selected")).toEqual(null);
        expect(lstPolicyType.element(by.cssContainingText('option', 'Standard')).getAttribute("selected")).toEqual("true");
        expect(lstOrderMethod.element(by.cssContainingText('option', 'Online Order Form')).getAttribute("selected")).toEqual(null);
        if (isEnergyDeal = 'Yes') { expect(radioIsEnergyDeal.get(0).getAttribute("checked")).toEqual(null); } else { expect(radioIsEnergyDeal.get(1).getAttribute("checked")).toEqual(null); }
        expect(radioIsRushDeal.get(1).getAttribute("checked")).toEqual("true");
        expect(radioDocLanguage.get(0).getAttribute("checked")).toEqual("true");
        expect(txtOrderDate.getAttribute("value")).toEqual(cucToday);
        expect(txtClosingDate.getAttribute("value")).toEqual(cucToday);
        expect(lstDealType.element(by.cssContainingText('option', 'New')).getAttribute("selected")).toEqual("true");
        expect(txtDealLinkId.getAttribute("value")).toEqual("");
        expect(lstClosingActivity.element(by.cssContainingText('option', '- Select One -')).getAttribute("selected")).toEqual("true");
        expect(lstCompletionActivity.element(by.cssContainingText('option', '- Select One -')).getAttribute("selected")).toEqual("true");
        expect(lblFCTURN.getText()).toEqual(FCTURN);
        expect(radioOnHold.get(1).getAttribute("checked")).toEqual("true");
        expect(lblDealCreatedDate.getText()).toEqual(cucToday);
        //expect(chkSourceOfBusiness.getAttribute("checked")).toEqual("true");

    };

};

module.exports = new CUCDealDetailsPage();
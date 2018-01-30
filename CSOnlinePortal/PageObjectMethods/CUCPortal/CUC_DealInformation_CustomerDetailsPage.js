'use strict';

var userData = require('../../testData/RunSettings.JSON.js');
var testData = require('../../testData/Testdata_TransactionDetails.JSON.js');

//var dataProvider = require('jasmine-data-provider');

var url = userData.data.Global.RQA1.URL_CSPORTAL.value;

var lawyerFileNo = testData.data.TRANSACTION_DETAILS.YOURFIRM_INFO.YOUR_FILE_NO.value;
var actingOnBehalf = testData.data.TRANSACTION_DETAILS.YOURFIRM_INFO.ACTING_FOR.value;
var FileNO = '';
var CUCCustomerDetailsPage = function() {

    //#region for Elements

    var lblCustomerDetails = element(by.css("#amazing > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td:nth-child(1)"));

    var btnAddACustomer = element(by.css("#ctl00_DefaultContent_AddaCustomerImageButton"));

    var tabLawFirm = element(by.css("#ctl00_DefaultContent_LawyerButton"));
    var tabLenders = element(by.css("#ctl00_DefaultContent_LenderButton"));
    var tabFATIC = element(by.css("#ctl00_DefaultContent_FaticButton"));

    var txtCustomerType = element(by.css('#ctl00_DefaultContent_CustomerTypeLabelTextBox'));
    var txtOrgName = element(by.css('#ctl00_DefaultContent_OrganizationNameLabelTextBox'));
    var txtLawyerName = element(by.css('#ctl00_DefaultContent_LawyerNameLabelTextBox'));
    var txtContactName = element(by.css('#ctl00_DefaultContent_ContactNameLabelTextBox'));
    var txtUnitNumber = element(by.css('#ctl00_DefaultContent_UnitNumberLabelTextBox'));
    var txtStreetNumber = element(by.css('#ctl00_DefaultContent_StreetNumberLabelTextBox'));
    var txtAddress1 = element(by.css('#ctl00_DefaultContent_Address1LabelTextBox'));
    var txtAddress2 = element(by.css('#ctl00_DefaultContent_Address2LabelTextBox'));
    var txtCity = element(by.css('#ctl00_DefaultContent_CityLabelTextBox'));
    var txtProvince = element(by.css('#ctl00_DefaultContent_ProvinceLabelTextBox'));
    var txtPostalCode = element(by.css('#ctl00_DefaultContent_PostalCodeLabelTextBox'));
    var txtCountry = element(by.css('#ctl00_DefaultContent_CountryLabelTextBox'));
    var txtPhone1 = element(by.css('#ctl00_DefaultContent_Phone1LabelTextBox'));
    var txtPhone2 = element(by.css('#ctl00_DefaultContent_Phone2LabelTextBox'));
    var txtFax = element(by.css('#ctl00_DefaultContent_FaxLabelTextBox'));
    var txtEmail = element(by.css('#ctl00_DefaultContent_EmailLabelTextBox'));
    var txtLawyerFileNumber = element(by.css('#ctl00_DefaultContent_LawyerFileNumberLabelTextBox'));
    var lstPreferredCommunication = element(by.css('#ctl00_DefaultContent_PreferredCommunicationLabelDropDown'));
    var lstPreferredLanguage = element(by.css('#ctl00_DefaultContent_PreferredLanguageLabelDropDown'));
    var lstActingOnBehalf = element(by.css('#ctl00_DefaultContent_ActingOnBehalfLabelDropDown'));
    var lstDeliveryMethod = element(by.css('#ctl00_DefaultContent_PolicyDeliveryMethodLabelDropDown'));
    var chkSourceOfBusiness = element(by.css('#ctl00_DefaultContent_SourceOfBusinessLabelCheckBox'));
    var btnCancel = element(by.css('#ctl00_DefaultContent_CancelImageButton'));
    var btnSave = element(by.css('#ctl00_DefaultContent_SaveImageButton'));
    var btnSaveContinue = element(by.css('#ctl00_DefaultContent_SaveAndContinueImageButton'));
    var btnSubmitDeal = element(by.css('#ctl00_DefaultContent_DealSubmit'));

    //#region for methods
    this.VerifyCustomerDetailsPage = function() {
        browser.sleep(2000);
        expect(lblCustomerDetails.getText()).toContain("Customer Details");
    };

    this.VerifyCustomerDetailsPageContent = function(FileNO) {
        expect(txtCustomerType.getAttribute("value")).toEqual("Law Firm");
        expect(txtCustomerType.getAttribute("value")).toEqual("Law Firm");
        expect(txtOrgName.getAttribute("value")).toEqual("Solnik and Solnik");
        expect(txtLawyerName.getAttribute("value")).toEqual("Sidney Solnik");
        expect(txtContactName.getAttribute("value")).toEqual("Sidney Solnik");
        expect(txtUnitNumber.getAttribute("value")).toEqual('');
        expect(txtStreetNumber.getAttribute("value")).toEqual("00000");
        expect(txtAddress1.getAttribute("value")).toEqual("Address1");
        expect(txtAddress2.getAttribute("value")).toEqual("");
        expect(txtCity.getAttribute("value")).toEqual("City");
        expect(txtProvince.getAttribute("value")).toEqual("ON");
        expect(txtPostalCode.getAttribute("value")).toEqual("z0z 0z0");
        expect(txtCountry.getAttribute("value")).toEqual("Canada");
        expect(txtPhone1.getAttribute("value")).toEqual('');
        expect(txtPhone2.getAttribute("value")).toEqual("(905) 000-0000");
        expect(txtFax.getAttribute("value")).toEqual("(905) 000-0000");
        expect(txtEmail.getAttribute("value")).toEqual("test@testemail.com");
        expect(txtLawyerFileNumber.getAttribute("value")).toEqual(FileNO);

        expect(lstPreferredCommunication.element(by.cssContainingText('option', 'Email')).getAttribute("selected")).toEqual("true");
        expect(lstPreferredLanguage.element(by.cssContainingText('option', 'English')).getAttribute("selected")).toEqual("true");
        expect(lstActingOnBehalf.element(by.cssContainingText('option', actingOnBehalf)).getAttribute("selected")).toEqual(null);
        expect(lstDeliveryMethod.element(by.cssContainingText('option', 'e-Policy')).getAttribute("selected")).toEqual("true");
        expect(chkSourceOfBusiness.getAttribute("checked")).toEqual("true");

    };

};

module.exports = new CUCCustomerDetailsPage();
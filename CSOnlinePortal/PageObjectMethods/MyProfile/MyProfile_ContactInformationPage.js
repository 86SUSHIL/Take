'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var MyProfileContactPage = function() {

    //#region for Elements

    var lnkMyProfile = function() { return element(by.css('#ctl00_ucTopLinks_lnkMyProfile')); };
    var lnkHome = function() { return element(by.css('#ctl00_ucTopLinks_lnkHome')); };
    var txtWelcomeUser = function() { return element(by.css('#welcome > li:nth-child(1)')); };
    var lnkContactInfo = function() { return element(by.css('#ctl00_lnkContact')); };
    var lnkDelegatedAuthority = function() { return element(by.css('#ctl00_lnkDelegatedAuth')); };
    var lnkNotificationPref = function() { return element(by.css('#ctl00_NotificationMainLink')); };
    var lnkRTISNotificationPref = function() { return element(by.css('#ctl00_lnkRTISNotificationPrefs')); };

    var lnkAcknowledgement = function() { return element(by.css('#ctl00_lnkAgreement')); };
    var lnkSecurityQuestions = function() { return element(by.css('#ctl00_lnkSecurityQuestions')); };
    var lnkChangePassword = function() { return element(by.css('#ctl00_lnkChangePwd')); };
    //var lnkHome = function(){ return element(by.css('#ctl00_ucTopLinks_lnkHome'));};            

    var lblContactInformation = function() { return element(by.css('#page_mainContent_1col > h2')); };

    var txtFirmName = function() { return element(by.css('#ctl00_DefaultContent_txtFirmName')); };
    var lblFirmName = function() { return element(by.css('#ctl00_DefaultContent_lblFirmName')); };
    var txtUserId = function() { return element(by.css('#ctl00_DefaultContent_txtUserId')); };
    var lblUserId = function() { return element(by.css('#ctl00_DefaultContent_lblUserId')); };
    var txtFirstName = function() { return element(by.css('#ctl00_DefaultContent_txtFirstName')); };
    var lblFirstName = function() { return element(by.css('#ctl00_DefaultContent_lblFirstName')); };
    var txtMiddleName = function() { return element(by.css('#ctl00_DefaultContent_txtMiddleName')); };
    var lblMiddleName = function() { return element(by.css('#ctl00_DefaultContent_lblMiddleName')); };
    var txtLastName = function() { return element(by.css('#ctl00_DefaultContent_txtLastName')); };
    var lblLastName = function() { return element(by.css('#ctl00_DefaultContent_lblLastName')); };
    var txtEmailAddress = function() { return element(by.css('#ctl00_DefaultContent_txtEmailAddress')); };
    var lblEmailAddress = function() { return element(by.css('#ctl00_DefaultContent_lblEmailAddress')); };
    var txtUnitNumber = function() { return element(by.css('#ctl00_DefaultContent_txtUnitNumber')); };
    var lblUnitNumber = function() { return element(by.css('#ctl00_DefaultContent_lblUnitNumber')); };
    var txtStreetNumber = function() { return element(by.css('#ctl00_DefaultContent_txtStreetNumber')); };
    var lblStreetNumber = function() { return element(by.css('#ctl00_DefaultContent_lblStreetNumber')); };
    var txtAddress1 = function() { return element(by.css('#ctl00_DefaultContent_txtAddress1')); };
    var lblAddress1 = function() { return element(by.css('#ctl00_DefaultContent_lblAddress1')); };
    var txtAddress2 = function() { return element(by.css('#ctl00_DefaultContent_txtAddress2')); };
    //var lblAddress2 = function(){return element(by.css('#ctl00_DefaultContent_lblAddress2'));};    
    var txtCity = function() { return element(by.css('#ctl00_DefaultContent_txtCity')); };
    var lblCity = function() { return element(by.css('#ctl00_DefaultContent_lblCity')); };
    var lstProvince = function() { return element(by.css('#ctl00_DefaultContent_ddlProvince')); };
    var lblProvince = function() { return element(by.css('#ctl00_DefaultContent_lblProvince')); };
    var txtPostalCode = function() { return element(by.css('#ctl00_DefaultContent_txtPostalCode')); };
    var lblPostalCode = function() { return element(by.css('#ctl00_DefaultContent_lblPostalCode')); };
    var txtBusinessPhone = function() { return element(by.css('#ctl00_DefaultContent_txtBusinessPhone')); };
    var lblBusinessPhone = function() { return element(by.css('#ctl00_DefaultContent_lblBusinessPhone')); };
    var txtBusinessFax = function() { return element(by.css('#ctl00_DefaultContent_txtBusinessFax')); };
    var lblBusinessFax = function() { return element(by.css('#ctl00_DefaultContent_lblBusinessFax')); };
    var txtBusinessCell = function() { return element(by.css('#ctl00_DefaultContent_txtBusinessCell')); };
    var lblBusinessCell = function() { return element(by.css('#ctl00_DefaultContent_lblBusinessCell')); };
    var lstLanguagePref = function() { return element(by.css('#ctl00_DefaultContent_ddlLanguagePref')); };
    var lblLanguagePref = function() { return element(by.css('#ctl00_DefaultContent_lblLanguagePref')); };
    var chkAccept = function() { return element(by.css('#ctl00_DefaultContent_chkLLC')); };
    var lblAccept = function() { return element(by.css('#page_mainContent_1col > table > tbody > tr:nth-child(17) > td > div > span > label')); };
    var btnCancel = function() { return element(by.css('#ctl00_DefaultContent_btnCancel')); };
    var btnSubmit = function() { return element(by.css('#ctl00_DefaultContent_btnSubmit')); };

    //#region for methods
    this.VerifyMyProfilePage = function() {
        browser.sleep(3000);
        expect(lblContactInformation().getText()).toEqual("Contact Information");

        expect(lnkHome().getText()).toEqual("Home");
        expect(lnkMyProfile().getAttribute('disabled')).toBe('true');
        //expect(lnkMyProfile().isEnabled()).toBe(true);
    };

    this.VerifyUserDetails = function(TestData) {
        var strFirstName = TestData.data.MyProfile.CONTACT_INFO.FIRST_NAME.value;
        var strLastName = TestData.data.MyProfile.CONTACT_INFO.LAST_NAME.value;
        expect(txtWelcomeUser().getText()).toMatch("Welcome " + strFirstName + " " + strLastName);
    };

    this.NavigatetoHomePage = function() {
        lnkHome().click();
    };

    this.NavigateToSecurityQuestions = function() {
        lnkSecurityQuestions().click();
    };

    this.NavigateToChangePassword = function() {
        lnkChangePassword().click();
    };

    this.NavigateToDelegatedAuthority = function() {
        lnkDelegatedAuthority().click();
    };

    this.VerifyMyProfileContactPageLabels = function() {
        expect(lblFirmName().getText()).toMatch('Firm Name:');
        expect(lblUserId().getText()).toMatch('Login ID:');
        expect(lblFirstName().getText()).toMatch('First Name:');
        expect(lblMiddleName().getText()).toMatch('Middle Name:');
        expect(lblLastName().getText()).toMatch('Last Name:');
        expect(lblEmailAddress().getText()).toMatch('Business Email Address:');
        expect(lblUnitNumber().getText()).toMatch('Unit No.:');
        expect(lblStreetNumber().getText()).toMatch('Street Number:');
        expect(lblAddress1().getText()).toMatch('Street Address:');
        expect(lblCity().getText()).toMatch('City:');
        expect(lblProvince().getText()).toMatch('Province:');
        expect(lblPostalCode().getText()).toMatch('Postal Code:');
        expect(lblBusinessPhone().getText()).toMatch('Business Phone:');
        expect(lblBusinessFax().getText()).toMatch('Business Fax:');
        expect(lblBusinessCell().getText()).toMatch('Business Cell Phone:');
        expect(lblLanguagePref().getText()).toMatch('Communication Language Preference:');
        //expect(lblAccept().getText()).toMatch('I would like to sign up for LLC');                 
    };

    this.VerifyMyProfileContactPageFields = function(TestData) {
        expect(txtFirmName().getAttribute('readonly')).toBe('true');
        expect(txtFirmName().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.FIRM_NAME.value);
        expect(txtUserId().getAttribute('readonly')).toBe('true');
        expect(txtUserId().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.LOGIN_ID.value);
        expect(txtFirstName().getAttribute('readonly')).toBe('true');
        expect(txtFirstName().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.FIRST_NAME.value);
        expect(txtMiddleName().getAttribute('readonly')).toBe('true');
        expect(txtMiddleName().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.MIDDLE_NAME.value);
        expect(txtLastName().getAttribute('readonly')).toMatch('true');
        expect(txtLastName().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.LAST_NAME.value);
        expect(txtEmailAddress().isEnabled()).toBe(true);
        expect(txtEmailAddress().getAttribute('readonly')).toMatch('');
        expect(txtEmailAddress().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.BUSINESS_EMAIL.value);
        expect(txtUnitNumber().isEnabled()).toBe(true);
        expect(txtUnitNumber().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.UNIT_NO.value);
        expect(txtStreetNumber().isEnabled()).toBe(true);
        expect(txtStreetNumber().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.STREET_NO.value);
        expect(txtAddress1().isEnabled()).toBe(true);
        expect(txtAddress1().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.STREET_ADD.value);
        expect(txtAddress2().isEnabled()).toBe(true);
        //expect(txtAddress2().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.STREET_ADD2.value);
        expect(txtCity().isEnabled()).toBe(true);
        expect(txtCity().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.CITY.value);
        expect(lstProvince().isEnabled()).toBe(true);
        //expect(lstProvince().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.PROVINCE.value);
        expect(lstProvince().getText()).toMatch(TestData.data.MyProfile.CONTACT_INFO.PROVINCE.value);
        expect(txtPostalCode().isEnabled()).toBe(true);
        expect(txtPostalCode().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.POSTAL_CODE.value);
        expect(txtBusinessPhone().isEnabled()).toBe(true);
        expect(txtBusinessPhone().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.BUSINESS_PHONE.value);
        expect(txtBusinessFax().isEnabled()).toBe(true);
        expect(txtBusinessFax().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.BUSINESS_FAX.value);
        expect(txtBusinessCell().isEnabled()).toBe(true);
        expect(txtBusinessCell().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.BUSINESS_CELL.value);
        expect(lstLanguagePref().isEnabled()).toBe(true);
        //expect(lstLanguagePref().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.LANGUAGE.value);
        expect(lstLanguagePref().getText()).toMatch(TestData.data.MyProfile.CONTACT_INFO.LANGUAGE.value);
        //expect(chkAccept().isEnabled()).toBe(true);
        //expect(chkAccept().getAttribute('value')).toMatch(TestData.data.MyProfile.CONTACT_INFO.ACCEPT.value);           
    };

    /*
    this.GoToMyProfile = function(){
        lnkMyProfile().click();
        expect(ErrorMessage().getText()).toEqual('Firm Name:');
    };
    */
    this.LeftmenuCSRSLawyer = function() {

        expect(lnkContactInfo().getText()).toEqual("Contact Information");
        expect(lnkDelegatedAuthority().getText()).toEqual("Delegated Authority");
        expect(lnkNotificationPref().getText()).toEqual("Notification Preferences");
        lnkNotificationPref().click();
        //browser.waitForAngular();
        expect(lnkRTISNotificationPref().getText()).toEqual("- Residential Title Insurance");
        expect(lnkAcknowledgement().getText()).toEqual("Acknowledgment");
        expect(lnkSecurityQuestions().getText()).toEqual("Security Questions");
        expect(lnkChangePassword().getText()).toEqual("Change Password");

    };
    this.LeftmenuCSLawyer = function() {

        expect(lnkContactInfo().getText()).toEqual("Contact Information");
        expect(lnkDelegatedAuthority().getText()).toEqual("Delegated Authority");
        expect(lnkAcknowledgement().getText()).toEqual("Acknowledgment");
        expect(lnkSecurityQuestions().getText()).toEqual("Security Questions");
        expect(lnkChangePassword().getText()).toEqual("Change Password");

    };
    this.LeftmenuCSandCSRSOnlyLawClerk = function() {

        expect(lnkContactInfo().getText()).toEqual("Contact Information");
        expect(lnkSecurityQuestions().getText()).toEqual("Security Questions");
        expect(lnkChangePassword().getText()).toEqual("Change Password");
    };

};

module.exports = new MyProfileContactPage();
'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var MyProfileChangePwdPage = function(){
    
    //#region for Elements
    var lblChangePassword = function(){return element(by.css('#page_mainContent_1col > h2'));};

    var txtCurrentPassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_CurrentPwdTextBox'));};
    var lblCurrentPassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_CurrentPwdDiv > label'));};
    var txtNewPassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_NewPwTextBox'));};
    var lblNewPassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_NewPwLabel'));};
    var txtRetypePassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_ReEnterPwTextBox'));};
    var lblRetypePassword = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_ReTypePwLabel'));}; 
    
    var btnSubmit = function(){return element(by.css('#ctl00_DefaultContent_UcMandatoryPasswordChange_ContinueButton'));};
    
    var lblPasswordChangeConfirmMessage = function(){return element(by.css('#pre-login-form > div.val-msg'));};

    //#region for methods
    this.VerifyChangePasswordPage = function(){
            expect(lblChangePassword().getText()).toEqual("Change Password");
    };

    this.ClickSubmitButton = function(){
            btnSubmit().click();
    };

    this.VerifyConfirmationMessage = function(){
            expect(lblPasswordChangeConfirmMessage().getText()).toMatch('Password saved successfully.');
    };        

    this.VerifyMyProfileChangePasswordLabels = function(){
            //expect(lblCurrentPassword().getText()).toMatch('Current Password:');
            expect(lblNewPassword().getText()).toMatch('New Password:');
            expect(lblRetypePassword().getText()).toMatch('Re-type Password:');
            //console.log(lblPersonalA2().getText());
    };

    this.UpdateMyProfileChangePassword = function(CurrentPassword, NewPassword){
            //expect(txtCurrentPassword().getAttribute('readonly')).toBe(null);
            //txtCurrentPassword().clear();
            txtCurrentPassword().sendKeys(CurrentPassword);
            //expect(txtNewPassword().getAttribute('readonly')).toBe(null);
            //txtNewPassword().clear();            
            txtNewPassword().sendKeys(NewPassword);
            //expect(txtRetypePassword().getAttribute('readonly')).toBe(null);
            //txtRetypePassword().clear();            
            txtRetypePassword().sendKeys(NewPassword);
            btnSubmit().click();
            this.VerifyConfirmationMessage();
    };

    this.ResetPassword = function(TestData){
        this.UpdateMyProfileChangePassword(TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE1.CURRENT_PWD.value, TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE1.NEW_PASSWORD.value);
        this.UpdateMyProfileChangePassword(TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE2.CURRENT_PWD.value, TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE2.NEW_PASSWORD.value);
        this.UpdateMyProfileChangePassword(TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE3.CURRENT_PWD.value, TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE3.NEW_PASSWORD.value);
        this.UpdateMyProfileChangePassword(TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE4.CURRENT_PWD.value, TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE4.NEW_PASSWORD.value);
        this.UpdateMyProfileChangePassword(TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE5.CURRENT_PWD.value, TestData.data.MyProfile.CHANGE_PASSWORD.CHANGE5.NEW_PASSWORD.value);
    };

};

module.exports = new MyProfileChangePwdPage();

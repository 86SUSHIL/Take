'use strict';
//var protractor_1 = require('protractor');

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');

//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = testData.data.Global.RQA1.URL_CUC.value;

var cucLoginPage = function(){
    
    //#region for Elements
    var txtUserId = function(){return element(by.id('UserNameTextBox'));};
    var txtPassword = function(){ return element(by.id('PasswordTextBox'));};
    var btnSignin = function(){ return element(by.id('LoginImageButton'));};
    //var ErrorMessage = function(){ return element(by.id('CusLoginVal'));};
    //var expectedMsg = "Your request cannot be completed. For help, please email us at LLCSupport@FCT.ca or call us at 1.877.929.0990.";

    //#region for methods
    this.CUCPortalLogin = function(userId,password){
            browser.get(url);
            txtUserId().sendKeys(userId);
            txtPassword().sendKeys(password); 
            btnSignin().click();
    };

    this.VerifyFailureMessage = function(){
        expect(ErrorMessage().getText()).toEqual(expectedMsg);
    };

};

module.exports = new cucLoginPage();

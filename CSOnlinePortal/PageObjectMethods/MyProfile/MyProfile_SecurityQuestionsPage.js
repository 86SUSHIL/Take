'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var MyProfileSecurityPage = function(){
    
    //#region for Elements
    var lblSecurityQuestion = function(){return element(by.css('#page_mainContent_1col > h2'));};

    var txtCurrentPassword = function(){return element(by.css('#ctl00_DefaultContent_txtCurrentPwd'));};
    var lblCurrentPassword = function(){return element(by.css('#ctl00_DefaultContent_Label1'));};
    var txtPersonalQ1 = function(){return element(by.css('#ctl00_DefaultContent_txtQuestion1'));};
    var lblPersonalQ1 = function(){return element(by.css('#ctl00_DefaultContent_Label2'));};
    var txtPersonalA1 = function(){return element(by.css('#ctl00_DefaultContent_txtAnswer1'));};
    var lblPersonalA1 = function(){return element(by.css('#ctl00_DefaultContent_Label3'));};    
    var txtPersonalQ2 = function(){return element(by.css('#ctl00_DefaultContent_txtQuestion2'));};
    var lblPersonalQ2 = function(){return element(by.css('#ctl00_DefaultContent_Label4'));};
    var txtPersonalA2 = function(){return element(by.css('#ctl00_DefaultContent_txtAnswer2'));};
    var lblPersonalA2 = function(){return element(by.css('#ctl00_DefaultContent_Label5'));};    
 
    var btnSubmit = function(){return element(by.css('#ctl00_DefaultContent_btnSubmit'));};

    var lblSecurityConfirmMessage = function(){return element(by.css('#page_mainContent_1col > div.val-msg'));};

    //#region for methods
    this.VerifySecurityQuestionPage = function(){
            expect(lblSecurityQuestion().getText()).toEqual("Security Question");
    };

    this.ClickSubmitButton = function(){
            btnSubmit().click();
    };

    this.VerifyConfirmationMessage = function(){
            expect(lblSecurityConfirmMessage().getText()).toMatch('Security Details have been saved successfully.');
    };        

    this.VerifyMyProfileSecurityPageLabels = function(){
            expect(lblCurrentPassword().getText()).toMatch('Current Password:');
            expect(lblPersonalQ1().getText()).toMatch('Personal Question # 1 :');
            expect(lblPersonalA1().getText()).toMatch('Personal Answer # 1 :');
            expect(lblPersonalQ2().getText()).toMatch('Personal Question # 2 :');
            expect(lblPersonalA2().getText()).toMatch('Personal Answer # 2 :');
            //console.log(lblPersonalA2().getText());
    };

    this.UpdateMyProfileSecurityQuestions = function(TestData){
            expect(txtCurrentPassword().getAttribute('readonly')).toBe(null);
            txtCurrentPassword().clear();
            txtCurrentPassword().sendKeys(TestData.data.MyProfile.SECURITY_QUESTIONS.CURRENT_PWD.value);
            expect(txtPersonalQ1().getAttribute('readonly')).toBe(null);
            txtPersonalQ1().clear();            
            txtPersonalQ1().sendKeys(TestData.data.MyProfile.SECURITY_QUESTIONS.PERSONAL_Q1.value);
            expect(txtPersonalA1().getAttribute('readonly')).toBe(null);
            txtPersonalA1().clear();            
            txtPersonalA1().sendKeys(TestData.data.MyProfile.SECURITY_QUESTIONS.PERSONAL_A1.value);
            expect(txtPersonalQ2().getAttribute('readonly')).toBe(null);
            txtPersonalQ2().clear();            
            txtPersonalQ2().sendKeys(TestData.data.MyProfile.SECURITY_QUESTIONS.PERSONAL_Q2.value);
            expect(txtPersonalA2().getAttribute('readonly')).toBe(null);
            txtPersonalA2().clear();            
            txtPersonalA2().sendKeys(TestData.data.MyProfile.SECURITY_QUESTIONS.PERSONAL_A2.value);          
    };

};

module.exports = new MyProfileSecurityPage();

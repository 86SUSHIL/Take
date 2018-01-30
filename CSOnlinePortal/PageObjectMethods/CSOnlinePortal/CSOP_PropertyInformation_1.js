'use strict';

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');
var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");

//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var PropertyInformationPage = function(){
    
    //#region for Elements
    var txtPropertyInformationHeader = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};

    var txtPurchasePrice = function(){ return element(by.css(xPathToCss(('abcd'))));};
    var radioVacantLand = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var lstIsita = function(){ return element(by.css(xPathToCss(('abcd'))));};
    var radioIsthisaCondo = function(){ return element(by.css(xPathToCss(('abcd'))));};
    var radioIsthisfirstnationsland = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};

    var lstPropertyType = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var radioIstheremunicipal = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtUnitNumber = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtStreetNo = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtStreetName = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtCity = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var lstProvince = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtPostalCode = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtPIN = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var lstPIN = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};

    var lstInterestHeld = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtareaLegalDescription = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtLandlord = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtLeaseRegNo = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};
    var txtTermofLease = function(){return element(by.css(xPathToCss('//*[@id="stepper-step-1"]/div/div/div[1]/h3')))};

    //#region for methods
    this.VerifyTranasactionDetailsPage = function(){
        expect(txtEnterTransactionDetails);
        //it('Enter user id, password and click on the Signin button',function(){
            /*
            browser.get(url);
            txtUserId().sendKeys(userId); 
            txtPassword().sendKeys(password); 
            btnSignin().click();
            */
        //});

    };

};

module.exports = new PropertyInformationPage();

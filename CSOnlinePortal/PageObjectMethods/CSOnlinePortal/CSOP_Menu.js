'use strict';

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var PurchaserMortgageData = require('../../testData/Testdata_PurchaserMortgageDetails.JSON.js');
var dataProvider = require('jasmine-data-provider');
//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");
//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");

var CSOP_Menu = function () {
    var LM_Transation = element(by.css('#btn1 > span'));
    var LM_Property = element(by.css('#btn2 > span'));
    var LM_Purchaser = element(by.css('#btn3 > span'));
    var LM_Mortgage = element(by.css('#btn4 > span'));
    var LM_Underwriting = element(by.css('#btn5 > span'));
    var LM_AdditionalInformation = element(by.css('#btn6 > span'));
    
    this.ClickonTransationMenuItems = function () {
        browser.waitForAngular();
        LM_Transation.click();
        browser.sleep(3000);
    };
    
    this.ClickonPropertyMenuItems = function () {
        browser.waitForAngular();
        LM_Property.click();
        browser.sleep(3000);
    };
    this.ClickonPurchaserMenuItems = function () {
        browser.waitForAngular();
        LM_Purchaser.click();
        browser.sleep(3000);
    };
    
    this.ClickonMortgageMenuItems = function () {
        browser.waitForAngular();
        LM_Mortgage.click();
        browser.sleep(3000);
    };
    this.ClickonAdditionalInfoMenuItems = function () {
        browser.waitForAngular();
        LM_AdditionalInformation.click();
        browser.sleep(3000);
    };

    this.VerifyLeftMenuItemInCreateOrder = function () {
        expect(LM_Transation.getText()).toEqual("Transaction Details");
        expect(LM_Property.getText()).toEqual("Property Details");
        expect(LM_Purchaser.getText()).toEqual("Purchaser/Mortgagor Details");
        expect(LM_Mortgage.getText()).toEqual("Mortgage Details");
        expect(LM_Underwriting.getText()).toEqual("Underwriting Details");
        expect(LM_AdditionalInformation.getText()).toEqual("Additional Information");
    }
};
module.exports = new CSOP_Menu();
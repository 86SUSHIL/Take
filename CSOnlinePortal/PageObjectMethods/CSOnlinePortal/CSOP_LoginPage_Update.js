'use strict';
//var protractor_1 = require('protractor');

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');

//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var loginPage = function() {

    //#region for Elements
    var txtUserId = function() { return element(by.css('#dataUserName')); };
    var txtPassword = function() { return element(by.css('#dataPassword')); };
    var btnSignin = function() { return element(by.css('#btnSignIn')); };
    var ErrorMessage = function() { return element(by.css('#ctl00_DefaultContent_lblErrorMessage')); };
    //var expectedMsg = "Your request cannot be completed. For help, please email us at LLCSupport@FCT.ca or call us at 1.877.929.0990.";
    var expectedMsg = "To register for Commercial Solutions, please contact us at 1.866.804.3112.";
    var btnLogout = element(by.css('#navbar-collapse > ul.nav.navbar-nav.navbar-right > li.dropdown.open > ul > li:nth-child(5) > a'));
    var lnktoggle = element(by.css('.dropdown-toggle'));


    //#region for methods
    this.CSPortalLogin = function(userId, password) {
        //browser.driver.manage().window().maximize();
        // browser.waitForAngular();
        browser.get(url);
        txtUserId().sendKeys(userId);
        txtPassword().sendKeys(password);
        btnSignin().click();
    };

    this.VerifyFailureMessage = function() {
        //console.log(ErrorMessage().getText());
        expect(ErrorMessage().getText()).toContain(expectedMsg);
    };

    this.CSPortalLogout = function() {
        browser.waitForAngular();
        lnktoggle.click();
        browser.waitForAngular();
        btnLogout.click();
    };
};

module.exports = new loginPage();
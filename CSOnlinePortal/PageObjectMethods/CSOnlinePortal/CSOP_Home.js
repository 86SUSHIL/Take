'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");

var LName = '';
var CSHomePage = function() {

    //#region for Elements

    var txtHome = function() { return element(by.xpath(".//*[@id=\'navbar-collapse\']/ul[1]/li/a")) };
    var lnktoggle = function() { return element(by.css('.dropdown-toggle')) };
    var lnkMyProfile = function() { return element(by.css('#navbar-collapse > ul.nav.navbar-nav.navbar-right > li.dropdown.open > ul > li:nth-child(1) > a')) };
    var btnCreateNewOrder = function() { return element(by.css('.btn-create-order')) };
    var btnSubmitOrder = element(by.xpath("/html/body/app-root/app-layouts-auth/fw-framework-body/div/div/section[2]/deal/form/div[3]/div[3]/div/div[2]/button"));
    var alertMessage = element(by.xpath("//*[@id=\"maincontent\"]/section[2]/app-createdeal/form/div[1]/div/div/div/div"));
    var lnkHome = element(by.css('#ctl00_ucTopLinks_lnkHome'));
    var lnkMyProfileRTIS = element(by.css('#ctl00_ucTopLinks_lnkMyProfile'));
    var lnkContactUs = function() { return element(by.xpath(".//*[@id=\'navbar-collapse\']/ul[2]/li[3]/ul/li[3]/a")) };
    var CurrentUser = function() { return element(by.xpath(".//*[@id=\'navbar-collapse\']/ul[2]/li[2]/a/span")) };
    var lnkSignout = function() { return element(by.xpath(".//*[@id=\'navbar-collapse\']/ul[2]/li[3]/ul/li[5]/a")) };
    var lnkDashboard = function() { return element(by.xpath(".//*[@id=\'navbar-collapse\']/ul[1]/li/a")) };
    //#region for methods
    this.VerifyHomePage = function() {
        //expect(imgLogo())
        browser.sleep('5000');
        expect(txtHome().getText()).toContain('DASHBOARD');
        expect(btnCreateNewOrder().getText()).toContain("Create New Order");
        //expect(txtSigninName().getText()).toEqual("");
    };

    this.navigateToMyProfileRTIS = function() {

        lnkMyProfileRTIS.click();
    };
    this.GoToMyProfile = function() {
        lnktoggle().click();

        lnkMyProfile().click();
        //browser.waitForAngular();
        //expect(ErrorMessage().getText()).toEqual(expectedMsg);
    };


    this.VerifyLeftMenuItemForHomePage = function() {
        /*Verify Left Menu Items For Home Page*/
        browser.waitForAngular();
        browser.sleep(3000);
        console.log(" Verify Home as left Menu Item: ");
        expect(lm_home.getText()).toMatch('Home');
        browser.waitForAngular();
        console.log(" Verify Create Deal as left Menu Item: ");
        expect(lm_createDeal.getText()).toMatch('Create Deal');
        browser.waitForAngular();
        browser.sleep(2000);

    };

    this.NavigateToMenuItem_CreateDeal = function() {
        /* Click on Create Deal Left Menu Item*/
        browser.waitForAngular();
        //lm_createDeal.click();
        browser.sleep(3000);

    };

    this.ClickOnCreateNewOrder = function() {
        browser.waitForAngular();
        btnCreateNewOrder().click();
    }

    this.SearchLawyerFileNo = function(value) {
        txtSearch.sendKeys(value);

        browser.waitForAngular();

        iSearch.click();

    };
    this.NavigateToHomePage = function() {
        lnkHome.click();
        //browser.waitForAngular();
    };
    this.ClickOnSubmitOrder = function() {
        browser.waitForAngular();
        btnSubmitOrder.click();
    };

    this.VerifyHomePageElements = function(LName) {
        this.VerifyHomePage();
        browser.sleep('5000');
        expect(CurrentUser().getText()).toContain(LName);
        browser.sleep('5000');
        lnktoggle().click();
        expect(lnkMyProfile().getText()).toContain('My Profile');
        expect(lnkContactUs().getText()).toContain('Contact us');
        expect(lnkSignout().getText()).toContain('Sign Out');
        lnkContactUs().click();
        browser.sleep('5000');
        lnkDashboard().click();
        browser.sleep('5000');
        lnktoggle().click();
        browser.sleep('5000');
        lnkSignout().click();

    };
    // this.GetAlertMsgandFctNoAfterClickOnSubmitOrder = function(result)
    // {	
    // 	var result = '';

    //  var alrmsg = alertMessage.getText().then(function(text){
    //              // console.log(alrmsg);
    //              return alertMessage.getText();
    // })
    // alrmsg.then(function(alrmsg){
    //             console.log(alrmsg);
    //             expect(alrmsg).toContain("Your order has been submitted successfully. Your FCT Reference No. is ");
    // })
    //   var FCTURN = alrmsg.then(function(alrmsg){
    //             var result = alrmsg.slice( 70, 81 );
    //             console.log("FCTURN :", result);

    // })
    // 	return result;	 

    // };


};

module.exports = new CSHomePage();
'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");

var RTISHomePage = function(){
    
    //#region for Elements
        
    var txtHeader = function(){return element(by.css('#page_header > div.header-logos > div.no-print.blue-bar > h1'));};
    var txtHome = function(){return element(by.css('#page_mainContent_1col > h2:nth-child(1)'));};
    var txtOrderSummary = function(){ return element(by.css('#page_mainContent_1col > h2:nth-child(5)'));};
    var lnkMyProfile = element(by.css('#ctl00_ucTopLinks_lnkMyProfile'));
    //var imgLogo = function(){return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/a/span[2]/img')));};
    //var txtHome = function(){return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/div/section[1]/fw-breadcrumb/section/h1/small')));};
    //var lnkMyProfile = function(){ return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/nav/div/ul/li[1]/a')));};
    //var txtSigninName = function(){ return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/nav/div/ul/li[2]/div')));};
    //var ErrorMessage = function(){ return element(by.id('CusLoginVal'));};
    //var expectedMsg = "Your request cannot be completed. For help, please email us at LLCSupport@FCT.ca or call us at 1.877.929.0990.";

    //#region for methods
    this.VerifyRTISHomePage = function(){
            //expect(imgLogo())
            expect(txtHeader().getText()).toEqual("Residential Title Insurance Services");
            expect(txtHome().getText()).toEqual("Home");
            //expect(txtOrderSummary().getText()).toEqual("Order Summary");
            //expect(txtSigninName().getText()).toEqual("");
    };

    this.ClickOnMyProfile = function(){

            lnkMyProfile.click();

    };

    /*
    this.VerifyFailureMessage = function(){
        expect(ErrorMessage().getText()).toEqual(expectedMsg);
    };
    */

};

module.exports = new RTISHomePage();

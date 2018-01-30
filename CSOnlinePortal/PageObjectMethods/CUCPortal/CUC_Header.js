'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var CUCPageHeader = function(){

	//#region for Elements
	var lnkHome = element(by.css('#ctl00_HomeLinkButton'));
    var lnkCreateNewDeal = element(by.css('#ctl00_CreateNewDealLinkButton'));
    var lnkCreateQuote = element(by.css('#ctl00_CreateQuoteLinkButton'));
    var lnkSearch = element(by.css('#ctl00_SearchLinkButton'));
    var lnkLogout = element(by.css('#ctl00_LogoutLinkButton'));

	//#region for methods
	this.VerifyPageHeaders = function(){
			//expect(imgLogo())
			browser.sleep(5000);
			expect(lnkHome.getText()).toEqual("Home");
			expect(lnkCreateNewDeal.getText()).toEqual("Create New Deal");
			expect(lnkCreateQuote.getText()).toEqual("Create Quote");
			expect(lnkSearch.getText()).toEqual("Search");
			expect(lnkLogout.getText()).toEqual("Logout");            
	};

	this.NavigateToHomePage = function(){
		lnkHome.click();
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};

	this.NavigateToCreateNewDeal = function(){
		lnkCreateNewDeal.click();
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};

	this.NavigateToCreateQuotePage = function(){
		lnkCreateQuote.click();
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};        

	this.NavigateToSearchPage = function(){
		lnkSearch.click();
        browser.sleep(3000);
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};

	this.Logout = function(){
		lnkLogout.click();
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};    

};

module.exports = new CUCPageHeader();
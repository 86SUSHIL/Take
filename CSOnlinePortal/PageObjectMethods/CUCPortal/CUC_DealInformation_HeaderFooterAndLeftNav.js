'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var CUCHeaderFooterAndLeftNav = function(){

	//#region for Elements
	//#Deal Information Left Nav Region
	var lnkCustomerDetails = element(by.css("#ctl00_LeftMenu1_theMenun0 > td > table > tbody > tr > td > a > div"));
	var lnkDealDetails = element(by.css('#ctl00_LeftMenu1_theMenun1 > td > table > tbody > tr > td > a > div'));
    var lnkPropertyDetails = element(by.css('#ctl00_LeftMenu1_theMenun2 > td > table > tbody > tr > td > a > div'));
	var lnkPolicies = element(by.css('#ctl00_LeftMenu1_theMenun3 > td > table > tbody > tr > td > a > div'));
	var lnkUnderwriting= element(by.css('#ctl00_LeftMenu1_theMenun4 > td > table > tbody > tr > td > a > div'));
	var lnkPolicyExceptions = element(by.css("#ctl00_LeftMenu1_theMenun5 > td > table > tbody > tr > td > a > div"));
	var lnkPolicyEndorsements = element(by.css('#ctl00_LeftMenu1_theMenun6 > td > table > tbody > tr > td > a > div'));
    var lnkUnderlyingDocuments = element(by.css('#ctl00_LeftMenu1_theMenun7 > td > table > tbody > tr > td > a > div'));
	var lnkFeesAndDisbursements = element(by.css('#ctl00_LeftMenu1_theMenun8 > td > table > tbody > tr > td > a > div'));
	var lnkDealValidation= element(by.css('#ctl00_LeftMenu1_theMenun9 > td > table > tbody > tr > td > a > div'));

	var btnCancel= element(by.css('#ctl00_DefaultContent_CancelImageButton'));
	var btnSave= element(by.css('#ctl00_DefaultContent_SaveImageButton'));
	var btnSaveAndContinue= element(by.css('#ctl00_DefaultContent_SaveAndContinueImageButton'));
	var btnSubmitDeal= element(by.css('#ctl00_DefaultContent_DealSubmit'));	

	//#region for methods
	this.VerifyLeftNavLinks = function(){
			//expect(imgLogo())
			browser.sleep(3000);
			//expect(lblSearch.getText()).toEqual("HomePage");

	};

	this.NavigateToCustomerDetails = function(value){
		lnkCustomerDetails.click();
		browser.sleep(2000);
	};

	this.NavigateToDealDetails = function(value){
		lnkDealDetails.click();
		browser.sleep(2000);
	};

	this.NavigateToPropertyDetails = function(value){
		lnkPropertyDetails.click();
		browser.sleep(2000);
	};

	this.NavigateToPolicies = function(value){
		lnkPolicies.click();
		browser.sleep(2000);
	};

	this.NavigateToUnderwriting = function(value){
		lnkUnderwriting.click();
		browser.sleep(2000);
	};

	this.NavigateToPolicyExceptions = function(value){
		lnkPolicyExceptions.click();
		browser.sleep(2000);
	};	

	this.ClickOnCancel = function(){
					btnCancel.Click();
					browser.sleep(3000);
	};
	this.ClickOnSave = function(){
					btnSave.Click();
					browser.sleep(3000);
	};
	this.ClickOnSaveContinue = function(){
					btnSaveAndContinue.Click();
					browser.sleep(3000);
	};
	this.ClickOnSubmit = function(){
					btnSubmitDeal.Click();
					browser.sleep(3000);
	};				

};

module.exports = new CUCHeaderFooterAndLeftNav();
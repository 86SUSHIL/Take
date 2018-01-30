'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var CUCSearchPage = function(){

	//#region for Elements

	var lblSearch = element(by.css("#ctl00_SearchContent_DealSearchUserControl1_img4"));
	var txtFCTURN = element(by.css('#ctl00_SearchContent_DealSearchUserControl1_FCTURNTextBox'));
    var btnSearch = element(by.css('#ctl00_SearchContent_DealSearchUserControl1_Search'));
	var lblDealFound = element(by.css('#ctl00_SearchContent_DealSearchUserControl1_DealSearchResultGridView_ctl01_DealFoundLabel'));
	var lnkResultFCTURN = element(by.css('#ctl00_SearchContent_DealSearchUserControl1_DealSearchResultGridView_ctl03_URNLinkButton'));

	//#region for methods
	this.VerifySearchPage = function(){
			//expect(imgLogo())
			browser.sleep(3000);
			//expect(lblSearch.getText()).toEqual("HomePage");

	};

	this.SearchDeal = function(value){
		txtFCTURN.sendKeys(value);
		browser.sleep(1000);
		btnSearch.click();
		browser.sleep(5000);        
		
	};

	this.VerifyDealSearchSuccess = function(){
		expect(lblDealFound.getText()).toEqual("Total Deals Found:1");
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};

	this.VerifyDealSearchResultsTable = function(FCTURN){
		expect(lblDealFound.getText()).toEqual("Total Deals Found:1");
		expect(lnkResultFCTURN.getText()).toEqual(FCTURN);
	};

	this.SearchResultOpenDeal = function(){
		lnkResultFCTURN.click();
		browser.sleep(3000);
		//expect(ErrorMessage().getText()).toEqual(expectedMsg);
	};	

};

module.exports = new CUCSearchPage();
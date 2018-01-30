'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

//var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var CUCHomePage = function(){

	//#region for Elements

	var lblActivity = function(){return element(by.xpath("//*[@id='ctl00_TasksContent_TasksContentUpdatePanel']/table/tbody/tr[2]/td[2]/table/tbody/tr/td/table/tbody/tr[1]/td/img"))};
	
	var lnkMyProfile = function(){ return element(by.css('body > div > fw-header > header > nav > div > ul > li:nth-child(1) > a'));};

	//var imgLogo = function(){return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/a/span[2]/img')));};
	//var txtHome = function(){return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/div/section[1]/fw-breadcrumb/section/h1/small')));};
	//var lnkMyProfile = function(){ return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/nav/div/ul/li[1]/a')));};
	//var txtSigninName = function(){ return element(by.css(xPathToCss('/html/body/app-root/app-layouts-auth/fw-framework-body/body/div/fw-header/header/nav/div/ul/li[2]/div')));};
	//var ErrorMessage = function(){ return element(by.id('CusLoginVal'));};
	//var expectedMsg = "Your request cannot be completed. For help, please email us at LLCSupport@FCT.ca or call us at 1.877.929.0990.";


	var lm_home = element(by.xpath('//a[@href="/CSPortal/home"]/span'));
	var lm_createDeal = element(by.xpath('//a[@href="/CSPortal/createDeal"]/span'));
	var lm_createDeal2 = element(by.xpath('//a[@href="/CSPortal/createDeal2"]/span'));
	var lm_deal = element(by.xpath('//a[@href="/CSPortal/deal"]/span'));
	var lm_deal2 = element(by.xpath('//a[@href="/CSPortal/createDeal3"]/span'));
	var lm_deal3 = element(by.xpath('//a[@href="/CSPortal/deal3"]/span'));
	var lm_client = element(by.xpath('//a[@href="/CSPortal/client"]/span'));
	var lm_subMenu = element(by.xpath('//li[@class="treeview"]/a[@href="#"]/span'));
	var lm_subMenu_Page2 = element(by.xpath('//a[@href="/CSPortal/page/2"]/span'));
	var lm_subMenu_Page3 = element(by.xpath('//a[@href="/CSPortal/page/3"]/span'));
	var lm_externalLink = element(by.xpath('//a[@href="http://google.com"]/span'));
	var lm_externalLinks = element(by.xpath('//li[@class="treeview active"]/a/span'));
	var lm_externalLinks_github = element(by.xpath('//li[@class="treeview active"]/ul/li[1]/a/span'));
	var lm_externalLinks_yahoo = element(by.xpath('//li[@class="treeview active"]/ul/li[2]/a/span'));
    
	var txtSearch = element(by.css('#navbar-search-input'));
	var iSearch = element(by.css('#search-btn'));
	//#region for methods
	this.VerifyHomePage = function(){
			//expect(imgLogo())
			browser.sleep(3000);
			expect(txtHome().getText()).toEqual("HomePage");
			expect(lnkMyProfile().getText()).toEqual("My Profile");
			//expect(txtSigninName().getText()).toEqual("");
	};


	this.GoToMyProfile = function(){
		lnkMyProfile().click();
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
					/*
		console.log(" Verify Create Deal2 as left Menu Item: ");
					expect(lm_createDeal2.getText()).toMatch('Create Deal2');
					browser.waitForAngular();
		console.log(" Verify Deal as left Menu Item: ");
					expect(lm_deal.getText()).toMatch('Deal');
					browser.waitForAngular();
		console.log(" Verify Deal 2 as left Menu Item: ");
					expect(lm_deal2.getText()).toMatch('Deal 2');
					browser.waitForAngular();
		console.log(" Verify Deal 3 as left Menu Item: ");
					expect(lm_deal3.getText()).toMatch('Deal 3');
					browser.waitForAngular();
		console.log(" Verify Client as left Menu Item: ");
					expect(lm_client.getText()).toMatch('Client');
					browser.waitForAngular();
		console.log(" Verify Sub menu as left Menu Item: ");
					expect(lm_subMenu.getText()).toMatch('Sub menu');
					browser.waitForAngular();
					browser.sleep(3000);
					lm_subMenu.click();
					browser.waitForAngular();
					browser.sleep(3000);
		console.log(" Verify Page 2 as left Menu Item: ");
					expect(lm_subMenu_Page2.getText()).toMatch('Page 2');
					browser.waitForAngular();
		console.log(" Verify Page 3 as left Menu Item: ");
					expect(lm_subMenu_Page3.getText()).toMatch('Page 3');
					browser.waitForAngular();

		console.log(" Verify External Link as left Menu Item: ");
					expect(lm_externalLink.getText()).toMatch('External Link');
					browser.waitForAngular();
					browser.sleep(3000);


					// expect(lm_externalLinks.getText()).toMatch('External Links');
					// browser.waitForAngular();
					// browser.sleep(5000);

					// page.lm_externalLinks.click();
					// browser.waitForAngular();
					// browser.sleep(3000);

					// expect(page.lm_externalLinks_github.getText()).toMatch('Github');
					// browser.waitForAngular();
					// browser.sleep(3000);
					// expect(page.lm_externalLinks_yahoo.getText()).toMatch('Yahoo');
					// browser.waitForAngular();
					// browser.sleep(3000);
	*/

			};

	this.NavigateToMenuItem_CreateDeal = function(){
		/* Click on Create Deal Left Menu Item*/
		browser.waitForAngular();
		lm_createDeal.click();
		browser.sleep(3000);

	};

	this.SearchLawyerFileNo = function(value){
		txtSearch.sendKeys(value);
		
		browser.waitForAngular();
		
		iSearch.click();
		
	};
};

module.exports = new CUCHomePage();

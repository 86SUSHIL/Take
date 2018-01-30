'use strict';

var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");

	
 var Submission = function(){
     //#region for Elements
                var lblPropertyInfoHeader = element(by.xpath("//h3[text()='Additional Notes']"));
                
               
                var btnExpandOne = element(by.xpath("//mortgagor[1]/div/div/div/div[1]/div/button"));
				var btnExpandTwo = element(by.xpath("//mortgagor[2]/div/div/div/div[1]/div/button"));
				var btnExpandThree = element(by.xpath("//mortgagor[3]/div/div/div/div[1]/div/button"));
				var lblMortgageAddOne = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[1]/h3"));
				var lblMortgageAddTwo = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[2]/div/div/div/div[1]/h3"));
				var lblMortgageAddThree = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[3]/div/div/div/div[1]/h3"));
				var txtUnit = element(by.css('#md-input-17'));
				var txtStreet = element(by.css('#md-input-19'));
				var txtStreetAdd = element(by.css('#md-input-21'));
				var txtCity = element(by.css('#md-input-23'));
				var txtProvince = element(by.css('#md-input-25'));
				var txtPostalCode = element(by.css('#md-input-27'));
				var txtLegalDescription = element(by.css('#md-input-29'));
				var txtPIN = element(by.css('#md-input-31'));
				var chkboxLT = element(by.css('#input-md-checkbox-3'));
				var chkboxR = element(by.css('#input-md-checkbox-4'));
				var Slidebtn = element(by.css('.mat-slide-toggle-thumb'));

				var lblUnit = element(by.xpath("//*[@id='stepper-step-4]/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[1]/tbody/tr/td[1]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblStreet = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[1]/tbody/tr/td[2]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblStreetAdd = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[1]/tbody/tr/td[3]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblCity = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[2]/tbody/tr/td[1]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblProvince = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[2]/tbody/tr/td[2]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblPostalCode = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/table[2]/tbody/tr/td[3]/md-input-container/div/div[1]/div[2]/span/label/text()"));
				var lblLegalDescription = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/p[2]/md-input-container[1]/div/div[1]/div[2]/span/label/text()"));
				var lblPIN = element(by.xpath("//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[1]/div/div/div/div[2]/form/p[2]/md-input-container[2]/div/div[1]/div[2]/span/label/text()"));
				var lblboxLT = element(by.xpath(".//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[2]/div/div/div/div[2]/form/p[2]/md-input-container[2]/div/div[1]/div[2]/section/md-checkbox[1]/label/span"));
				var lblboxR = element(by.xpath(".//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[2]/div/div/div/div[2]/form/p[2]/md-input-container[2]/div/div[1]/div[2]/section/md-checkbox[2]/label/span"));
				var lblSlidebtn = element(by.xpath(".//*[@id='stepper-step-4']/div/div/div[2]/mortgagor[2]/div/div/div/div[2]/form/md-slide-toggle/label/span"));




	//#end region for Elements

	

	//#region for methods

	this.ClickOnExpandOne = function(){
            btnExpandOne.click();
            browser.waitForAngular();
    };

	this.VerifySubmitPageLabels = function(){
                         

				};

	
    //#end region for methods
};

module.exports =  new Submission();

'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var MyProfileDeligatedAuthorityPage = function(){
    
    //#region for Elements
    
    var lblDeligateHeader = element(by.xpath("//h2"));
    var lblLoginId = element(by.css('#ctl00_DefaultContent_lblUserId'));
    var txtLoginID = element(by.css('#ctl00_DefaultContent_txtUserId'));
    var btnSubmit = element(by.css('#ctl00_DefaultContent_btnSubmit'));
    
    var lblFirstName = element(by.css('#ctl00_DefaultContent_lblFirstName'));
    var lblLastName = element(by.css('#ctl00_DefaultContent_lblLastName'));
    var lblMiddleName = element(by.css('#ctl00_DefaultContent_lblMiddleName'));
    var lblLawFirm = element(by.css('#ctl00_DefaultContent_lblLawFirm'));
   
    var txtFirstName = element(by.css('#ctl00_DefaultContent_lbdFirstName'));
    var txtLastName = element(by.css('#ctl00_DefaultContent_lbdLastName'));
    var txtMiddleName = element(by.css('#ctl00_DefaultContent_lbdMiddleName'));
    var txtLawFirm = element(by.css('#ctl00_DefaultContent_lbdLawFirm'));

    var btnAdd = element(by.css('#ctl00_DefaultContent_btnAddConfirm'));
    var btnCancel = element(by.css('#ctl00_DefaultContent_btnAddCancel'));

    var tableDeligateGrid = element.all(by.css('#ctl00_DefaultContent_grdDelegates'));

    var alrtMsg = element(by.css('#ctl00_DefaultContent_lblUserMessage'));
        
    //#Method Region 

    this.VerifyDeligatePageHeader = function(){
            expect(lblDeligateHeader.getText()).toEqual("Delegated Authority");
    };

    this.AddDeligate = function(){

            txtLoginID.sendKeys("AutoCSNotary");
            btnSubmit.click();
            browser.sleep(1000);
            btnAdd.click();
            browser.sleep(1000);
            expect(alrtMsg.getText()).toEqual("Record saved successfully.");
    };
    this.VerifyDeligateGrid = function(){
          
        var rowCount = tableDeligateGrid.all(by.tagName('tr')).count();
       // console.log(rowCount);
        var getRow = tableDeligateGrid.all(by.tagName("tr"));
        browser.sleep(3000);
        if(rowCount>0){
                 var cellCount =  getRow.all(by.tagName('td')).count();     
                 var getCell = getRow.all(by.tagName('td'));
                 expect(getCell.get(0).getText()).toEqual("autocsnotary");

                 expect(getCell.get(1).getText()).toEqual("A");

                 expect(getCell.get(2).getText()).toEqual("utoCSNotary");
                 expect(getCell.get(3).getText()).toEqual("Auto CS Notary Firm");
                 expect(getCell.get(4).getText()).toEqual("LLCTestAutomation01@fct.ca");
                 expect(getCell.get(5).getText()).toEqual('Delete | Disable | Enable');
         }
        };
};

module.exports = new MyProfileDeligatedAuthorityPage();
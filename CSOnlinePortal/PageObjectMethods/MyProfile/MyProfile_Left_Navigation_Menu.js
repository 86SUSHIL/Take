'use strict';

//var testData = require('../../testData/RunSettings.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var MyProfileLeftMenu = function(){
    
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
};

module.exports = new MyProfileLeftMenu();
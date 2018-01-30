'use strict';

var delegateData = require('../../testData/Testdata_E21_Delegate.JSON.js');
var testData = require('../../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');

var MyProfileDelegatedAuthorityPage = function() {

    //#region for Elements

    var lblDelegateHeader = element(by.xpath("//h2"));
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

    var tableDelegateGrid = element(by.css('#ctl00_DefaultContent_grdDelegates'));

    var alrtMsg = element(by.css('#ctl00_DefaultContent_lblUserMessage'));

    var btnDeleteDelegate = element(by.css('#ctl00_DefaultContent_grdDelegates_ctl02_lbDelegateDelete'));
    var btnDisableDelegate = element(by.css('#ctl00_DefaultContent_grdDelegates_ctl02_lbDelegatelDisable'));
    var btnEnableDelegate = element(by.css('#ctl00_DefaultContent_grdDelegates_ctl02_lbDelegateEnable'));
    var DelegateUser = '';

    //#Method Region 

    this.VerifyDelegatePageHeader = function() {
        expect(lblDelegateHeader.getText()).toEqual("Delegated Authority");
    };
    this.AddDelegate = function(DelegateUser) {
        txtLoginID.sendKeys("AutoCSNotary");
        btnSubmit.click();
        browser.sleep(1000);
        btnAdd.click();
        browser.sleep(1000);
        expect(alrtMsg.getText()).toEqual("Record saved successfully.");
        //     };
        //     this.VerifyDelegateGrid = function(DelegateUser){

        var i = 1;
        var rowCount = tableDelegateGrid.all(by.tagName('tr')).count().then(function(size) {
            console.log("Row Count : " + size);
            console.log(i);
            return size;
        });

        var getRow = tableDelegateGrid.all(by.tagName("tr"));
        browser.sleep(3000);
        //expect(i.toEqual(rowCount));
        //expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual("autocsnotary");
        //console.assert(rowCount=0,"No delegate present in the Delegate table", rowCount + " number of delegate present in the Delegate table");
        //while(i<=rowCount){
        //expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual("autocsnotary");
        if (getRow.get(i).all(by.tagName('td')).get(0).getText() == "autocsnotary") {
            expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual(data.Delegate_User.LOGIN_ID);
            expect(getRow.get(i).all(by.tagName('td')).get(1).getText()).toEqual(data.Delegate_User.FIRST_NAME);
            expect(getRow.get(i).all(by.tagName('td')).get(2).getText()).toEqual(data.Delegate_User.LAST_NAME);
            expect(getRow.get(i).all(by.tagName('td')).get(3).getText()).toEqual(data.Delegate_User.LAW_FIRM);
            expect(getRow.get(i).all(by.tagName('td')).get(4).getText()).toEqual("LLCTestAutomation01@fct.ca");
            expect(getRow.get(i).all(by.tagName('td')).get(5).getText()).toEqual('Delete | Disable | Enable');
            //break;                        
        } else {
            i = i + 1;
            console.log(i);
        }

    };

    this.DeleteDelegate = function() {

        var i = 1;
        var rowCount = tableDelegateGrid.all(by.tagName('tr')).count().then(function(size) {
            console.log("Size : " + size);
            console.log("Value of i :" + i);
            return size;
        });
        do {
            var getRow = tableDelegateGrid.all(by.tagName("tr"));
            expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual("autocsnotary");
            expect(btnDeleteDelegate.isEnabled()).toBe(true).then(function() {
                browser.sleep(1000);
                btnDeleteDelegate.click();
                browser.sleep(1000);
                var alertDialog = browser.switchTo().alert();
                browser.sleep(1000);
                expect(alertDialog.getText()).toEqual("Are you sure you want to delete this delegate?");
                alertDialog.accept();
                browser.sleep(1000);
                expect(alrtMsg.getText()).toEqual("The delegate was deleted successfully.");
            });
        } while (rowCount > 1)
    };

    this.EnableDelegate = function() {

        var i = 1;
        var rowCount = tableDelegateGrid.all(by.tagName('tr')).count().then(function(size) {
            console.log("Row Count : " + size);
            console.log("Value of i :" + i);
            return size;
        });
        do {
            var getRow = tableDelegateGrid.all(by.tagName("tr"));
            expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual("autocsnotary");
            if (expect(btnEnableDelegate.isEnabled()).toBe(true)) {
                browser.sleep(1000);
                btnEnableDelegate.click();
                browser.sleep(1000);
                var alertDialog = browser.switchTo().alert();
                browser.sleep(1000);
                expect(alertDialog.getText()).toEqual("Are you sure you want to enable this delegate?");
                alertDialog.accept();
                browser.sleep(1000);
                expect(alrtMsg.getText()).toEqual("The delegate was enabled successfully.");
            } else {
                return false;
            }
            //break;
        } while (rowCount > 1)

    };
    this.DisableDelegate = function() {

        var i = 1;
        var rowCount = tableDelegateGrid.all(by.tagName('tr')).count().then(function(size) {
            console.log("Row Count : " + size);
            console.log("Value of i :" + i);
            return size;
        });
        do {
            var getRow = tableDelegateGrid.all(by.tagName("tr"));
            expect(getRow.get(i).all(by.tagName('td')).get(0).getText()).toEqual("autocsnotary");
            expect(btnDisableDelegate.isEnabled()).toBe(true).then(function() {
                browser.sleep(1000);
                btnDisableDelegate.click();
                browser.sleep(1000);
                var alertDialog = browser.switchTo().alert();
                browser.sleep(1000);
                expect(alertDialog.getText()).toEqual("Are you sure you want to disable this delegate?");
                alertDialog.accept();
                browser.sleep(1000);
                expect(alrtMsg.getText()).toEqual("The delegate was disabled successfully.");
            });
        } while (rowCount > 1)
    };
};
module.exports = new MyProfileDelegatedAuthorityPage();
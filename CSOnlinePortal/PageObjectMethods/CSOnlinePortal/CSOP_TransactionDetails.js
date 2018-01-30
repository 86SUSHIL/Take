'use strict';

//var userId = 'scsrt';
//var password = 'Password1';
var RunSettings = require('../../TestData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');
var Transaction = require('../../TestData/Testdata_TransactionDetails.JSON.js');
var CustomFunction = require('../../CustomLibrary/CustomLibrary.js');
//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");
//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");

//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = RunSettings.data.Global.RQA1.URL_CSPORTAL.value;

var TransactionDetailsPage = function() {

    //#region for Elements
    //var lblTransactionDetailsHeader = element(by.css('//*[@id="stepper-step-1"]/div/div/div[1]/h3'));
    var lblTransactionDetailsHeader = element(by.css('body > div > div > section.content > app-createdeal > div > div > div > div > div.box.box-primary.stepper-box.with-border > ul > li.active > span'));

    //# Your Firm Information
    //var lblYourFirmInfoHeader = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-header.with-border > h3'));
    var lblYourFirmInfoHeader = element(by.cssContainingText('h4', 'Your Firm Information'));
    var lblYourFileNo = element(by.xpath("//label[text()='Your File #']"));
    var lblActingFor = element(by.xpath(".//*[@id='maincontent']/section[2]/app-createdeal/form/div[1]/div/div/app-transaction-details/div/div[2]/div[2]/div[2]/label"));
    var lblLawyerNotary = element(by.xpath(".//*[@id='maincontent']/section[2]/app-createdeal/form/div[1]/div/div/app-transaction-details/div/div[2]/div[2]/div[3]/label"));
    var lblContact = element(by.xpath(".//*[@id='maincontent']/section[2]/app-createdeal/form/div[1]/div/div/app-transaction-details/div/div[2]/div[2]/div[4]/label"));

    var txtYourFileNo = element(by.css('#filenoText'));
    var lstActingFor = element(by.css('#actingForOption'));
    var lstLawyerNotary = element(by.css(('#LawyerNotaryOption')));
    var lstContact = element(by.css(('#ContactOption')));


    var lblAdditionalFirmHeader = element(by.cssContainingText('h4', 'Additional Firm(s) Acting on the Transaction'));
    var lblActingForAddlFirm = element(by.cssContainingText('Add Additional Firm(s)'));
    //# Additional Firm Acting on the Transaction
    var lblLawyerNotaryAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(13) > div.col-sm-2 > label'));
    var lblContactAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(15) > div.col-sm-2 > label'));
    var lblLawFirmAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(17) > div.col-sm-2 > label'));
    var lblboxAddressAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(19) > div.col-sm-2 > label'));
    var lblTeleNoAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(21) > div.col-sm-2 > label'));
    //
    var btnAddAditionalFirm = element(by.xpath("/html/body/app-root/app-layouts-auth/fw-framework-body/div/div/section[2]/deal/form/div[1]/div/div/transaction-detail/div/div[2]/additionalfirm-list/div/div/div[4]/div/button"));
    var lstActingForAddlFirm = element(by.css('#additionalactingForOption'));
    var txtLawyerNotaryAddlFirm = element(by.css('#additionalLawyerNotaryText'));
    var txtContactAddlFirm = element(by.css('#additionalContactText'));
    var txtLawFirmAddlFirm = element(by.css('#additionalLawyerFirmText'));
    var txtboxAddressAddlFirm = element(by.css('#additionalAddressText'));
    var txtTeleNoAddlFirm = element(by.css('#telephoneText'));

    //# Transaction Information
    var lblTransactionInformationHeader = element(by.cssContainingText('h4', 'Transaction Information'));
    var lblClosingDate = element(by.xpath("//label[text()='Closing Date']"));
    var lblTransactionType = element(by.xpath("//label[text()='Transaction Type']"));
    var lblSharePurchase = element(by.xpath(".//*[@id='maincontent']/section[2]/app-createdeal/form/div[1]/div/div/app-transaction-details/div/div[2]/div[6]/div[3]/label"));
    var lblEnergyDeal = element(by.xpath("//label[text()='Is this an energy deal?']"));
    var lblPolicyType = element(by.xpath("//label[text()='Policy Type']"));


    var dtClosingDate = element(by.css('#dateinput'));
    var lstTransactionType = element(by.css('#additionaltransactiontypeOption'));
    /*
    var radioSharePurchase = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(29) > div.col-sm-3 > input:nth-child(1)'));
    var radioEnergyDeal = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(31) > div.col-sm-3 > input:nth-child(2)'));
    var radioPolicyType = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(33) > div.col-sm-3 > input:nth-child(2)'));
    */

    var radioSharePurchase = element.all(by.name('shareOption'));
    var radioEnergyDeal = element.all(by.name('energyOption'));
    var radioPolicyType = element.all(by.name('policyOption'));

    //var radioSharePurchase = element.all(by.xpath('//app-transaction-details/div/div[2]/div[6]/div[3]'));
    //var radioEnergyDeal = element.all(by.xpath('//app-transaction-details/div/div[2]/div[6]/div[4]'));
    //var radioPolicyType = element.all(by.xpath('//app-transaction-details/div/div[2]/div[6]/div[5]'));
    //Primary mandatory fields 
    var reqFileno = element(by.xpath("//transaction-detail/div/div[2]/div[2]/div[1]/span"));
    var reqActingFor = element(by.xpath("//transaction-detail/div/div[2]/div[2]/div[2]/span"));
    var reqLwNyName = element(by.xpath("//transaction-detail/div/div[2]/div[2]/div[3]/span"));
    var reqContName = element(by.xpath("//transaction-detail/div/div[2]/div[2]/div[4]/span"));
    var reqCDate = element(by.xpath("//transaction-detail/div/div[2]/div[4]/div[1]/span"));
    var reqTType = element(by.xpath("//transaction-detail/div/div[2]/div[2]/div[2]/span"));

    //Secondary mandatory fields 


    var reqAdditionalActingFor = element(by.xpath("//additionalfirm/div/div[2]/div[1]/div[1]/span"));
    var reqAdditionalLwNyName = element(by.xpath("//additionalfirm/div/div[2]/div[1]/div[2]/span"));
    var reqAdditionalFirmName = element(by.xpath("//additionalfirm/div/div[2]/div[1]/div[4]/span"));

    var ddvalue = '';
    var contactName = '';
    var LawyerNotryName = '';
    //#region for methods
    var FileNO = '';
    this.VerifyTranasactionDetailsPage = function() {
        //expect(lblTransactionDetailsHeader.getText()).toEqual("Transaction Details");
        expect(lblYourFirmInfoHeader.getText()).toEqual("Your Firm Information");
    };

    this.VerifyTranasactionDetailsLabels = function() {
        expect(lblYourFirmInfoHeader.getText()).toEqual("Your Firm Information");
        expect(lblYourFileNo.getText()).toEqual("Your File #");
        expect(lblActingFor.getText()).toEqual("Acting For");
        expect(lblLawyerNotary.getText()).toEqual("Lawyer/Notary Name");
        expect(lblContact.getText()).toEqual("Contact Name");

        expect(lblAdditionalFirmHeader.getText()).toEqual("Additional Firm(s) Acting on the Transaction");
        //expect(lblActingForAddlFirm.getText()).toEqual("Acting For:");
        //expect(lblLawyerNotaryAddlFirm.getText()).toEqual("Lawyer/Notary:");
        //expect(lblContactAddlFirm.getText()).toEqual("Contact:");
        //expect(lblLawFirmAddlFirm.getText()).toEqual("Law Firm:");
        //expect(lblboxAddressAddlFirm.getText()).toEqual("Address:");
        //expect(lblTeleNoAddlFirm.getText()).toEqual("Telephone No.:");

        expect(lblTransactionInformationHeader.getText()).toEqual("Transaction Information");
        expect(lblClosingDate.getText()).toEqual("Closing Date");
        expect(lblTransactionType.getText()).toEqual("Transaction Type");
        expect(lblSharePurchase.getText()).toEqual("Is this a share purchase?");
        expect(lblEnergyDeal.getText()).toEqual("Is this an energy deal?");
        expect(lblPolicyType.getText()).toEqual("Policy Type");
    };

    this.EditTransactionMandatoryFields = function() {
        /*Enter Mandatory fields for Property Details page  */
        txtYourFileNo.sendKeys('12345');
        browser.waitForAngular();
        lstActingFor.element(by.cssContainingText('option', 'Lender')).click();
        browser.waitForAngular();
        browser.sleep(2000);
        lstLawyerNotary.element(by.cssContainingText('option', 'A utoCSLawyer')).click();
        browser.waitForAngular();
        browser.sleep(2000);
        lstContact.element(by.cssContainingText('option', 'A utoCSLawyer')).click();
        browser.waitForAngular();
        browser.sleep(2000);

        lstActingForAddlFirm.element(by.cssContainingText('option', 'Mortgagor')).click();
        browser.waitForAngular();
        browser.sleep(2000);
        txtLawyerNotaryAddlFirm.sendKeys('test123');
        txtContactAddlFirm.sendKeys('test123');
        txtLawFirmAddlFirm.sendKeys('test123');
        txtboxAddressAddlFirm.sendKeys('test123');
        txtTeleNoAddlFirm.sendKeys('test123');

        dtClosingDate.sendKeys('2018-02-02');
        lstTransactionType.element(by.cssContainingText('option', 'Existing Owner')).click();
        //    browser.waitForAngular();
        //    browser.sleep(2000);

        //console.log(radioSharePurchase.getAttribute()
        // radioSharePurchase.get(1).click();
        //browser.sleep(4000);
        // radioEnergyDeal.get(0).click();
        //browser.sleep(4000);  
        //  radioPolicyType.get(1).click();
        // browser.sleep(4000);          
    };

    this.VerifyDefaultDataFieldsForTransactionPage = function(LawyerNotryName, contactName) {
        /*Verify default of  fields for Transaction page  */
        expect(txtYourFileNo.getText()).toEqual("");
        expect(lstActingFor.element(by.cssContainingText('option', '--Select One--')).getAttribute("selected")).toEqual("true");
        expect(lstLawyerNotary.element(by.cssContainingText('option', LawyerNotryName)).getAttribute("selected")).toEqual("true");
        expect(lstContact.element(by.cssContainingText('option', contactName)).getAttribute("selected")).toEqual("true");
        browser.waitForAngular();
        btnAddAditionalFirm.click().then(function(text) { console.log("Clicked on Add Additional Firm", text) });
        browser.waitForAngular();
        // browser.sleep(1000);
        expect(lstActingForAddlFirm.element(by.cssContainingText('option', '--Select One--')).getAttribute("selected")).toEqual("true");
        expect(txtLawFirmAddlFirm.getText()).toEqual('');
        expect(txtContactAddlFirm.getText()).toEqual('');
        expect(txtLawFirmAddlFirm.getText()).toEqual('');
        expect(txtboxAddressAddlFirm.getText()).toEqual('');
        expect(txtTeleNoAddlFirm.getText()).toEqual('');
        expect(dtClosingDate.getAttribute('value')).toEqual('');
        expect(lstTransactionType.element(by.cssContainingText('option', 'Purchase with Mortgage')).getAttribute("selected")).toEqual("true");
    };

    this.ClickOnAddAdditionalFirm = function() {
        browser.waitForAngular();
        btnAddAditionalFirm.click();
    };


    this.EnterNonMandatoryFields = function() {
        /*Enter Mandatory fields for Property Details page  */
        rbtnIshisaCondominium.click();
        rbtnIsthisFirstNationsLand.click();
        rbtnIsthereamunicipaladdressassigned.click();
        txtUnitNo.sendKeys("12").getAttribute();
        txtCity.sendKeys("Toronto").getAttribute();
        txtPostalCode.sendKeys("A1A2A3").getAttribute();
        txtLegalDescription.sendKeys("Legal Description");

    };

    this.ClearFields = function() {
        //clear() All fields values
        txtPurchasePrice.clear();
        txtUnitNo.clear();
        txtStreetNo.clear();
        txtStreetName.clear();
        txtCity.clear();
        txtPostalCode.clear();
        txtPIN.clear();
        txtLegalDescription.clear();
        txtLandlord.clear();
        txtLeaseRegistrationNo.clear();
        txtTermofLeaseyears.clear();

    };

    /*
    this.EditTransactionMandatoryFields = function(){

                   txtPurchasePrice.sendKeys("300"); //Optional. But, Mandatory based on Business Rules.
                   rbtnIsthisVacantLand.click(); //Mandatory based on Business Rules
                   browser.waitForAngular();     
                   ddlIsItASelectOption.click();  
                   browser.waitForAngular();  
                   ddlPropertyTypeSelectOption.click();
                   browser.waitForAngular();
                   txtStreetNo.sendKeys("#41"); //Mandatory based on Business Rules
                   txtStreetName.sendKeys("Street Name"); //Mandatory based on Business Rules
                   browser.waitForAngular();
                   ddlProvinceSelectOption.click();
                   browser.waitForAngular();
                   ddlPIDSelectoption.click();
                   browser.waitForAngular();
                   ddlInterestHeldSelectoption.click();
                   browser.waitForAngular();
                   txtLandlord.sendKeys("Land lord"); //Mandatory based on Business Rules
                   txtLeaseRegistrationNo.sendKeys("#12345"); //Mandatory based on Business Rules
                   txtTermofLeaseyears.sendKeys('1234'); //Mandatory based on Business Rules
    };
    */
    this.EditTransactionNonMandatoryFields = function() {
        /*Edit non Mandatory fields for Property Details page  */
        rbtnIshisaCondominium.click();
        rbtnIsthisFirstNationsLand.click();
        rbtnIsthereamunicipaladdressassigned.click();
        txtUnitNo.sendKeys("12");
        txtCity.sendKeys("nova Sccotia");
        txtPostalCode.sendKeys("A1A2A2");
        txtLegalDescription.sendKeys("Edited Legal Description");
    };

    this.ClickOnSubmit = function() {
        /*Click on next button on Transaction Details Page */
        browser.waitForAngular();
        btnSubmitOrdar.click();
        browser.sleep(3000);
    };

    this.VerifyPrimaryMandetoryFieldsForTransactionPage = function() {
        expect(reqFileno.getText()).toEqual(' *');
        expect(reqActingFor.getText()).toEqual(' *');
        expect(reqLwNyName.getText()).toEqual(' *');
        expect(reqContName.getText()).toEqual(' *');
        expect(reqCDate.getText()).toEqual(' *');
        expect(reqTType.getText()).toEqual(' *');

    };

    this.VerifySecondaryMandetoryFieldsForTransactionPage = function() {
        expect(reqAdditionalActingFor.getText()).toEqual(' *');
        browser.waitForAngular();
        expect(reqAdditionalLwNyName.getText()).toEqual(' *');
        browser.waitForAngular();
        expect(reqAdditionalFirmName.getText()).toEqual(' *');
        browser.waitForAngular();

    };

    this.VerifyAllDropDownTransactionPage = function() {
        var ActingFor = lstActingFor.all(by.tagName('option')).getText();
        var Lawyer_Notary = lstLawyerNotary.all(by.tagName('option')).getText();
        var ContactName = lstContact.all(by.tagName('option')).getText();
        var TransactionType = lstTransactionType.all(by.tagName('option')).getText();
        ActingFor.then(function(Array) {
            console.log("Acting For drop down list Items :", Array);
            expect(ActingFor).toEqual(Transaction.data.TRANSACTION_DETAILS.DDActingforValidation.DDActingfor);
        })
        Lawyer_Notary.then(function(Array) {
            console.log("Lawyer/Notary drop down list Items :", Array);
            //expect(ActingFor).toEqual()
        })
        ContactName.then(function(Array) {
            console.log("Contact Name drop down list Items :", Array);
            // expect(ActingFor).toEqual()
        })
        TransactionType.then(function(Array) {
            console.log("Transaction Type drop down list Items :", Array);
            //expect(ActingFor).toEqual()
        })
    };

    this.verifyConditionalDataForTransationInfo = function(ddvalue) {

        //var TransactionTypeOptions = lstTransactionType.all(by.tagName('option')).getText();
        //TransactionTypeOptions.then(function (Array) {
        //    console.log("Transaction Type drop down list Items :", Array);
        //expect(ActingFor).toEqual()
        //})


        var TransactionType = lstTransactionType.element(by.cssContainingText('option', ddvalue)).click();
        browser.sleep(2000);
        var TType = TransactionType.getText().then(function(TType) {
            console.log("Transaction Type value is : ", TType);
            if (TType == 'Existing Owner Only (no mortgage)') {
                radioEnergyDeal.get(0).isSelected().then(function(text) {
                    console.log("Energy Deal 'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioEnergyDeal.get(1).isSelected().then(function(text) {
                    console.log("Energy Deal 'NO' is selected : ", text);
                    expect(text).toBe(true);
                });

                radioPolicyType.get(0).isSelected().then(function(text) {
                    console.log("Policy type 'LOAN' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(1).isSelected().then(function(text) {
                    console.log("Policy type 'OWNER' is selected : ", text);
                    expect(text).toBe(true);
                });
                radioPolicyType.get(2).isSelected().then(function(text) {
                    console.log("Policy type 'BOTH' is selected : ", text);
                    expect(text).toBe(false);
                });

            } else if (TType == 'Existing Owner with Mortgage') {

                radioEnergyDeal.get(0).isSelected().then(function(text) {
                    console.log("Energy Deal 'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioEnergyDeal.get(1).isSelected().then(function(text) {
                    console.log("Energy Deal 'NO' is selected : ", text);
                    expect(text).toBe(true);
                });

                radioPolicyType.get(0).isSelected().then(function(text) {
                    console.log("Policy type 'LOAN' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(1).isSelected().then(function(text) {
                    console.log("Policy type 'OWNER' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(2).isSelected().then(function(text) {
                    console.log("Policy type 'BOTH' is selected : ", text);
                    expect(text).toBe(true);
                });

            } else if (TType == 'Mortgage Only (no purchase)') {

                radioEnergyDeal.get(0).isSelected().then(function(text) {
                    console.log("Energy Deal 'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioEnergyDeal.get(1).isSelected().then(function(text) {
                    console.log("Energy Deal 'NO' is selected : ", text);
                    expect(text).toBe(true);
                });

                radioPolicyType.get(0).isSelected().then(function(text) {
                    console.log("Policy type 'LOAN' is selected : ", text);
                    expect(text).toBe(true);
                });
                radioPolicyType.get(1).isSelected().then(function(text) {
                    console.log("Policy type 'OWNER' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(2).isSelected().then(function(text) {
                    console.log("Policy type 'BOTH' is selected : ", text);
                    expect(text).toBe(false);
                });

            } else if (TType == 'Purchase (no mortgage)') {

                radioSharePurchase.get(0).isSelected().then(function(text) {
                    console.log("Is this a share purchase?  'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioSharePurchase.get(1).isSelected().then(function(text) {
                    console.log("Is this a share purchase?  'NO' is selected : ", text);
                    expect(text).toBe(true);
                });

                radioEnergyDeal.get(0).isSelected().then(function(text) {
                    console.log("Is this an energy deal? 'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioEnergyDeal.get(1).isSelected().then(function(text) {
                    console.log("Is this an energy deal? 'NO' is selected : ", text);
                    expect(text).toBe(true);
                });

                radioPolicyType.get(0).isSelected().then(function(text) {
                    console.log("Policy type 'LOAN' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(1).isSelected().then(function(text) {
                    console.log("Policy type 'OWNER' is selected : ", text);
                    expect(text).toBe(true);
                });
                browser.sleep(500);
                radioPolicyType.get(2).isSelected().then(function(text) {
                    console.log("Policy type 'BOTH' is selected : ", text);
                    expect(text).toBe(false);
                });


            } else {
                radioSharePurchase.get(0).isSelected().then(function(text) {
                    console.log("Is this a share purchase?  'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioSharePurchase.get(1).isSelected().then(function(text) {
                    console.log("Is this a share purchase?  'NO' is selected : ", text);
                    expect(text).toBe(true);
                });
                radioEnergyDeal.get(0).isSelected().then(function(text) {
                    console.log("Is this an energy deal? 'YES' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioEnergyDeal.get(1).isSelected().then(function(text) {
                    console.log("Is this an energy deal? 'NO' is selected : ", text);
                    expect(text).toBe(true);
                });
                radioPolicyType.get(0).isSelected().then(function(text) {
                    console.log("Policy type 'LOAN' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(1).isSelected().then(function(text) {
                    console.log("Policy type 'OWNER' is selected : ", text);
                    expect(text).toBe(false);
                });
                radioPolicyType.get(2).isSelected().then(function(text) {
                    console.log("Policy type 'BOTH' is selected : ", text);
                    expect(text).toBe(true);
                });

            }

        });
    };
    this.VerifyFieldFormatingTransactionPage = function() {
        txtYourFileNo.sendKeys("!@#.00$");
        browser.waitForAngular();
        expect(txtYourFileNo.getAttribute('value')).toEqual("!@#.00$");
        browser.waitForAngular();
        expect(dtClosingDate.getAttribute('placeholder')).toEqual('mm/dd/yyyy');
        dtClosingDate.sendKeys("!@#.$");
        browser.waitForAngular();
        expect(dtClosingDate.getAttribute('value')).toEqual('');
        browser.waitForAngular();
        dtClosingDate.sendKeys("01/01/2017");
        browser.waitForAngular();
        expect(dtClosingDate.getAttribute('value')).toEqual("01/01/2017");

    };
    this.EnterPrimaryMandatoryTransactionFields = function(FileNO) {
        /*Enter Mandatory fields for Property Details page  */


        txtYourFileNo.sendKeys(FileNO);
        browser.waitForAngular();
        // browser.sleep(2000);  
        lstActingFor.element(by.cssContainingText('option', 'Mortgagor')).click();
        browser.waitForAngular();
        //    browser.sleep(2000);
        lstLawyerNotary.element(by.cssContainingText('option', 'A utoCSLawyer')).click();
        browser.waitForAngular();
        // browser.sleep(2000);
        lstContact.element(by.cssContainingText('option', 'A utoCSLawyer')).click();
        // browser.waitForAngular();  
        browser.sleep(2000);
        this.SelectClosingDate();
        //btnAddAditionalFirm.click();
        //lstActingForAddlFirm.element(by.cssContainingText('option', 'Mortgagor')).click();
        //browser.waitForAngular();
        //  browser.sleep(2000);
        //txtLawyerNotaryAddlFirm.sendKeys('test123');
        //txtContactAddlFirm.sendKeys('test123');
        //txtLawFirmAddlFirm.sendKeys('test123');
        //txtboxAddressAddlFirm.sendKeys('test123');
        //txtTeleNoAddlFirm.sendKeys('test123');
        //    dtClosingDate.clear();
        //    dtClosingDate.sendKeys('2018-02-02');
        lstTransactionType.element(by.cssContainingText('option', 'Purchase with Mortgage')).click();
        //    browser.waitForAngular();
        //    browser.sleep(2000);

        //console.log(radioSharePurchase.getAttribute()
        // radioSharePurchase.get(1).click();
        //browser.sleep(4000);
        // radioEnergyDeal.get(0).click();
        //browser.sleep(4000);  
        //  radioPolicyType.get(1).click();
        // browser.sleep(4000);          
    };

    this.SelectClosingDate = function() {
        var DateToSelect = CustomFunction.DatePicker();
        dtClosingDate.sendKeys(DateToSelect);
    };

    this.EnterSecondaryMandatoryTransactionFields = function() {

        btnAddAditionalFirm.click();
        browser.waitForAngular();
        lstActingForAddlFirm.element(by.cssContainingText('option', 'Mortgagor')).click();
        browser.waitForAngular();
        txtLawyerNotaryAddlFirm.sendKeys('A utoCSLawyer');
        //txtContactAddlFirm.sendKeys('test123');
        txtLawFirmAddlFirm.sendKeys('Additional Firm');
        //txtboxAddressAddlFirm.sendKeys('test123');
        //txtTeleNoAddlFirm.sendKeys('test123');


    };

};


module.exports = new TransactionDetailsPage();
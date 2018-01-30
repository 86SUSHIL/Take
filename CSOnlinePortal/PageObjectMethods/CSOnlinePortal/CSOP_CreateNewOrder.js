'use strict';

//var userId = 'scsrt';
//var password = 'Password1';
var testData = require('../../testData/RunSettings.JSON.js');
var PurchaserMortgageData = require('../../testData/Testdata_PurchaserMortgageDetails.JSON.js');
var dataProvider = require('jasmine-data-provider');
//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");
//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");

//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var url = testData.data.Global.RQA1.URL_CSPORTAL.value;

var CreateNewOrder = function(){
    var   LM_Transation = element(by.css('#btn1 > span'));
    var   LM_Property = element(by.css('#btn2 > span'));
    var   LM_Purchaser = element(by.css('#btn3 > span'));
    var   LM_Mortgage = element(by.css('#btn4 > span'));
    var   LM_Underwriting = element(by.css('#btn5 > span'));
    var   LM_AdditionalInformation = element(by.css('#btn6 > span'));
   
////////////////////////////////////////////Transation Details Locators///////////////////////////////////////////

    //var lblTransactionDetailsHeader = element(by.css('//*[@id="stepper-step-1"]/div/div/div[1]/h3'));
    var lblTransactionDetailsHeader = element(by.css('body > div > div > section.content > app-createdeal > div > div > div > div > div.box.box-primary.stepper-box.with-border > ul > li.active > span'));

    //# Your Firm Information
    //var lblYourFirmInfoHeader = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-header.with-border > h3'));
    var lblYourFirmInfoHeader = element(by.cssContainingText('h3','Your Firm Information'));
    var lblYourFileNo = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(1) > div.col-sm-2 > label'));
    var lblActingFor = element(by.css(('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(3) > div.col-sm-2 > label')));
    var lblLawyerNotary = element(by.css(('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(5) > div.col-sm-2 > label')));
    var lblContact = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(7) > div.col-sm-2 > label'));

    var txtYourFileNo = element(by.css('#filenoText'));
    var lstActingFor = element(by.css('#actingForOption'));
    var lstLawyerNotary = element(by.css(('#LawyerNotaryOption')));
    var lstContact = element(by.css(('#ContactOption')));

    //# Additional Firm Acting on the Transaction
    var lblAdditionalFirmHeader = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > h3:nth-child(9)'));
    var lblActingForAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(11) > div.col-sm-2 > label'));
    var lblLawyerNotaryAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(13) > div.col-sm-2 > label'));
    var lblContactAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(15) > div.col-sm-2 > label'));
    var lblLawFirmAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(17) > div.col-sm-2 > label'));
    var lblboxAddressAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(19) > div.col-sm-2 > label'));
    var lblTeleNoAddlFirm = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(21) > div.col-sm-2 > label'));
    
    var btnAddAditionalFirm = element(by.xpath("//app-transaction-details/div/div[2]/div[3]/div[2]/button"));
    var lstActingForAddlFirm = element(by.css('#additionalactingForOption'));
    var txtLawyerNotaryAddlFirm = element(by.css('#additionalLawyerNotaryText'));
    var txtContactAddlFirm = element(by.css('#additionalContactText'));
    var txtLawFirmAddlFirm = element(by.css('#additionalLawyerFirmText'));
    var txtboxAddressAddlFirm = element(by.css('#additionalAddressText'));
    var txtTeleNoAddlFirm = element(by.css('#telephoneText'));

    var lblTransactionInformationHeader = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > h3:nth-child(23)'));
    var lblClosingDate = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(25) > div.col-sm-2 > label'));
    var lblTransactionType = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(27) > div.col-sm-2 > label'));
    var lblSharePurchase = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(29) > div.col-sm-2 > label'));
    var lblEnergyDeal = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(31) > div.col-sm-2 > label'));
    var lblPolicyType = element(by.css('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(33) > div.col-sm-2 > label'));

        
    var dtClosingDate = element(by.css('#closingDateText'));
    var lstTransactionType = element(by.css('#additionaltransactiontypeOption'));
    /*
    var radioSharePurchase = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(29) > div.col-sm-3 > input:nth-child(1)'));
    var radioEnergyDeal = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(31) > div.col-sm-3 > input:nth-child(2)'));
    var radioPolicyType = element(by.name('#stepper-step-1 > div > app-transaction-details > form > div > div.box-body > div > div > div:nth-child(33) > div.col-sm-3 > input:nth-child(2)'));
    */
        
    var radioSharePurchase = element.all(by.name('shareOption'));
    var radioEnergyDeal = element.all(by.name('energyOption'));
    var radioPolicyType = element.all(by.name('policyOption'));
    
    var btnSubmitOrdar = element(by.css("#stepper-step-1 > div > app-transaction-details > form > button"));
    var btnPrevious = element(by.css("#stepper-step-1 > button:nth-child(2)"));
    var btnNext = element(by.css("#stepper-step-1 > button:nth-child(3)"));

////////////////////////////////////////////Property Details Locators///////////////////////////////////////////
                var lblPropertyInfoHeader = element(by.xpath("//h3[text()='Property Information']"));
                var lblPurchasePrice = element(by.xpath("//label[text()='Purchase Price:']"));
                var lblIsthisVacantLand = element(by.xpath("//label[text()='Is this Vacant Land?']"));
                var lblIsItAOptions = element(by.xpath("//label[text()='Is it a:']"));
                var lblIshisaCondominium = element(by.xpath("//label[text()='Is this a Condominium?']"));

                var lblIsthisFirstNationsLand = element(by.xpath("//label[text()='Is this First Nations Land?']"));
                var lblPropertyType = element(by.xpath("//label[text()='Property Type:']"));
                var lblIsthereamunicipaladdressassigned = element(by.xpath("//label[text()='Is there a municipal address assigned?']"));
                var lblUnitNo = element(by.xpath("//label[text()='Unit No.:']"));
                var lblStreetNo = element(by.xpath("//label[text()='Street No.:']"));
                var lblStreetName = element(by.xpath("//label[text()='Street Name:']"));
                var lblCity = element(by.xpath("//label[text()='City:']"));
                var lblProvince = element(by.xpath("//label[text()='Province:']"));
                var lblPostalCode = element(by.xpath("//label[text()='Postal Code:']"));
                var lblPIN_PID = element(by.xpath("//label[text()='PIN/PID:']"));
                var lblInterestHeld = element(by.xpath("//label[text()='Interest Held:']"));
                var lblLegalDescription = element(by.xpath("//label[text()='Legal Description:']"));
                var lblLandlord = element(by.xpath("//label[text()='Landlord:']"));
                var lblLeaseRegistrationNo = element(by.xpath("//label[text()='Lease Registration No.:']"));
                var lblTermofLeaseyears = element(by.xpath("//label[text()='Term of Lease (years):']"));

                /*********************************Element locator*************************************/
                var iRightMinus = element(by.xpath("//*[@id='stepper-step-2']/div/div/div/div[2]/property/form/div/div/div/div[1]/div/button/i"));
                var iLeftMinus = element(by.xpath(".//*[@id='stepper-step-2']/div/div/div/div[1]/button/i"));
                var btnSubmitProperty = element(by.xpath("//button[contains(.,'Submit Property')]"));
                var btnPrevious = element(by.xpath(".//*[@id='stepper-step-2']/button[1]"));
                var btnNext = element(by.xpath(".//*[@id='stepper-step-2']/button[2]"));

		        var txtPurchasePrice = element(by.css('#purchasePriceText'));
		        //var rbtnIsthisVacantLand =element(by.xpath("//*[@id='stepper-step-2']/div/div/div/div[2]/property/div/div/div/div[2]/div/div[2]/div[2]/input[1]"));
                //var rbtnIsthisVacantLand =element(by.cssContainingText('input','vacantOption'));
                var rbtnIsthisVacantLand =element.all(by.name('vacantOption'));
                
		        var ddlIsItASelect = element(by.css('#vacantTypeOption'));
              
                
                var ddlIsItASelectOption = element(by.id('#vacantTypeOption'));

                var rbtnIshisaCondominium = element.all(by.name('condominiumOption'));

		
                var rbtnIsthisFirstNationsLand = element.all(by.name('firstNationsLandOption'));

                //var ddlPropertyType = element(by.css('#propertyTypeOption'));
                var ddlPropertyTypeSelectOption = element(by.css('#propertyTypeOption'));
                var rbtnIsthereamunicipaladdressassigned = element.all(by.name('municipalAddressOption'));

                var txtUnitNoProperty  = element(by.css('#unitNumberText'));
                var txtStreetNoProperty = element(by.css('#streetNoText'));
                var txtStreetNameProperty  = element(by.css('#streetNameText'));
                var txtCityProperty = element(by.css('#cityText'));
                var ddlProvince = element.all((by.css('#provinceOption')));
                var ddlProvinceSelectOption = element(by.css('#provinceOption'));
                var txtPostalCode = element(by.css('#postalCodeText'));
                var txtPIN = element(by.css('#pinText'));
                var ddlPIDSelect = element(by.css('#ltOption'));
                var ddlPIDSelectoption = element(by.xpath(".//*[@id='ltOption']"));
                var ddlInterestHeldt = element(by.css('#interestHeldOption'));
                var ddlInterestHeldSelectoption = element(by.xpath(".//*[@id='interestHeldOption']/option[2]"));
                var txtLegalDescription = element(by.css('#legalDescriptionText'));
                var txtLandlord = element(by.css('#LandlordText'));
                var txtLeaseRegistrationNo = element(by.css('#LeaseRegistrationNoText'));
                var txtTermofLeaseyears = element(by.css('#termofLeaseText'));

                var btnPrevious = element(by.xpath("//*[@id='stepper-step-2'']/button[1]"));
                var btnNext = element(by.xpath("//*[@id='stepper-step-2']/button[2]"));
////////////////////////////////////////////Purchaser/Mortgagore Details Locators///////////////////////////////////////////
                var lblPurchaserMortgagorInfoHeader = element(by.xpath('//h3[text()="Purchaser/Mortgagor Information"]'));
                var lblOwnershipType = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[1]/div[1]/label"));
                var lblFirstName = element(by.xpath("//label[text()='First Name:']"));
                var lblMiddleName = element(by.xpath("//label[text()='Middle Name:']"));
                var lblLastName = element(by.xpath("//label[text()='Last Name:']"));
                var lblCorporationName = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[1]/div[2]/label"));
                var lblOwnershipInterest = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[3]/div/label"));
                var lblBeneficialOwnerName= element(by.xpath("//label[text()='Beneficial Owner Name:']"));
                var lblBeneficialOwnerconsented = element(by.xpath("//label[text()='Has the Beneficial Owner consented to this transaction?']"));
                
                var lblAddForServiceHeader = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/h4"));  
                var lblUnitNo = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[1]/label"));
                var lblStreetNo = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[2]/label"));
                var lblStreetName = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[3]/label"));
                var lblCity = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[4]/label"));
                var lblProvince = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[5]/label"));
                var lblPostalCode = element(by.xpath("//*[@id=\'maincontent\']/section[2]/app-createdeal/form/div[1]/div/div/purchaser/div/div[2]/div[4]/div/div[6]/label"));
                var ddlOwnershipType = element(by.xpath(".//*[@id='ownershipTypeOption']"));
                var txtFirstName = element(by.css('#firstNameText'));
                var txtMiddleName = element(by.css('#middleNameText'));
                var txtLastName = element(by.css('#lastNameText'));
                var txtCorporationName = element(by.css('#corporationNameText'));
                var ddlOwnershipInterest = element(by.xpath(".//*[@id='ownershipInterestOption']"));
                var txtBeneficialOwnerName= element(by.css('#beneficialOwnerNameText'));
                var rbtnBeneficialOwnerconsented = element.all(by.name('beneficialOwnerConsentOption'))
                
                var txtUnitNo = element(by.xpath("//purchaser//input[@id='unitNumberText']"));
                var txtStreetNo = element(by.xpath("//purchaser//input[@id='streetNumberText']"));
                var txtStreetName = element(by.xpath("//purchaser//input[@id='addressText']"));
                var txtCity = element(by.xpath("//purchaser//input[@id='cityText']"));
                var ddlProvince = element(by.xpath("//purchaser//select[@id='provinceOption']"));
                //var ddlProvinceSelectOption = element.all((by.xpath(".//*[@id='provinceOption']/option[10]")));
                var txtPostalCode = element(by.xpath("//purchaser//input[@id='postalCodeText']"));

                var btnSubmitPurchaser = element(by.xpath("//purchaser/button"));
                var btnPrevious = element(by.xpath(".//*[@id='stepper-step-3']/div/button[1]"));
                var btnNext = element(by.xpath(".//*[@id='stepper-step-3']/div/button[2]"));
////////////////////////////////////////////Mortgage Details Locators///////////////////////////////////////////
        var txtMortgageDetailsHeader = element(by.xpath("//h3[text()='Mortgage INFORMATION']"));

        /*******label element locator for Mortagage Information Page */
        var lblLenderName = element(by.xpath("//label[text()='Lender Name:']"));
        var lblCustodianName = element(by.xpath("//label[text()='Custodian Name (If Applicable):']"));
        var lblMortgageAmount = element(by.xpath("//label[text()='Mortgage Amount:']"));
        var lblInsuredAmount = element(by.xpath("//label[text()='Insured Amount (If different from Mortgage Amount):']"));
        var lblLenderInterest = element(by.xpath("//label[text()='Lender Interest:']"));
        var lblMortgageRefNo = element(by.xpath("//label[text()='Mortgage Reference No.:']"));
        var lblMortgageType = element(by.xpath("//label[text()='Mortgage Type:']"));
        var lblMortgagePriority = element(by.xpath("//label[text()='Mortgage Priority:']"));
        var lblnCMSCInsured = element(by.xpath("//label[text()='Is the Mortgage CMHC Insured?']"));
        var lblNoOfUnits = element(by.xpath("//label[text()='No. of Units:']"));
        var lblchkbxLoanAgreement = element(by.xpath("//label[text()='Does the loan agreement allow for the following? (select all that apply)']"));

        //# Mortgage details Information
        
        var txtLenderName = element(by.css('#lenderNameText'));
        var txtCustodianName = element(by.css('#custodianNameText'));
        var txtMortgageAmount = element(by.css('#mortgageAmountText'));
        var txtInsuredAmount = element(by.css('#insuredAmountText'));
        var txtlenderInterest = element(by.css('#lenderInterestText'));
        var txtMortgageRefNo = element(by.css('#mortgageReferenceNoText'));
        var lstMortgageType = element(by.css('#mortgageTypeOption'));
        var lstMortgagePriority = element(by.css('#mortgagePriorityOption'));
        var rbtnCMSCInsured = element.all(by.xpath('//input[@name="isTheMortgageCMHCInsuredText"]'));
        var txtNoOfUnits = element(by.xpath("//input[@name='noofUnitsText']"));
        var chkbxLoanAgreement = element.all(by.xpath(".//*[@id='stepper-step-4']/div/div/mortgage/div/div/div/div[2]/div/div[11]/div[2]"));
            
        var btnPrevious = element(by.xpath(".//*[@id='stepper-step-4']/div/button[1]"));
        var btnNext = element(by.xpath(".//*[@id='stepper-step-4']/div/button[2]"));                

////////////////////////////////////////////Underwriting Details Locator///////////////////////////////////////////
    var FCTNotes = element(by.css('#Notes'));
    var chkConfirmROT = element.all(by.name('ConfirmROT'));
/**/

////////////////////////////////////////////Transation Details Methods///////////////////////////////////////////
this.VerifyLeftMenuItemInCreateOrder = function(){
        expect(LM_Transation.getText()).toEqual("Transaction Details");
        expect(LM_Property.getText()).toEqual("Property Details");
        expect(LM_Purchaser.getText()).toEqual("Purchaser/Mortgagor Details");
        expect(LM_Mortgage.getText()).toEqual("Mortgage Details");
        expect(LM_Underwriting.getText()).toEqual("Underwriting Details");
        expect(LM_AdditionalInformation.getText()).toEqual("Additional Information");
}
this.VerifyTranasactionDetailsPage = function(){
        //expect(lblTransactionDetailsHeader.getText()).toEqual("Transaction Details");
        expect(lblYourFirmInfoHeader.getText()).toEqual("Your Firm Information");
    };

this.VerifyTranasactionDetailsLabels = function(){
        expect(lblYourFirmInfoHeader.getText()).toEqual("Your Firm Information");
        expect(lblYourFileNo.getText()).toEqual("Your File No.:");
        expect(lblActingFor.getText()).toEqual("Acting For:");
        expect(lblLawyerNotary.getText()).toEqual("Lawyer/Notary:");
        expect(lblContact.getText()).toEqual("Contact:");

        expect(lblAdditionalFirmHeader.getText()).toEqual("Additional Firm Acting on the Transaction");
        expect(lblActingForAddlFirm.getText()).toEqual("Acting For:");
        expect(lblLawyerNotaryAddlFirm.getText()).toEqual("Lawyer/Notary:");
        expect(lblContactAddlFirm.getText()).toEqual("Contact:");
        expect(lblLawFirmAddlFirm.getText()).toEqual("Law Firm:");
        expect(lblboxAddressAddlFirm.getText()).toEqual("Address:");
        expect(lblTeleNoAddlFirm.getText()).toEqual("Telephone No.:");

        expect(lblTransactionInformationHeader.getText()).toEqual("Transaction Information");
        expect(lblClosingDate.getText()).toEqual("Closing Date:");
        expect(lblTransactionType.getText()).toEqual("Transaction Type:");
        expect(lblSharePurchase.getText()).toEqual("Is this a Share Purchase?");
        expect(lblEnergyDeal.getText()).toEqual("Is this an Energy Deal?");
        expect(lblPolicyType.getText()).toEqual("Policy Type:");
    };
/*
this.VerifyTranasactionDetailsLabels = function(){
        expect(lblYourFirmInfoHeader.getText()).toEqual("Your Firm Information");
        expect(lblYourFileNo.getText()).toEqual("Your File No.:");
        expect(lblActingFor.getText()).toEqual("Acting For:");
        expect(lblLawyerNotary.getText()).toEqual("Lawyer/Notary:");
        expect(lblContact.getText()).toEqual("Contact:");

        expect(lblAdditionalFirmHeader.getText()).toEqual("Additional Firm Involved in the Transaction");
        expect(lblActingForAddlFirm.getText()).toEqual("Acting on behalf:");
        expect(lblLawyerNotaryAddlFirm.getText()).toEqual("Lawyer/Notary:");
        expect(lblContactAddlFirm.getText()).toEqual("Contact:");
        expect(lblLawFirmAddlFirm.getText()).toEqual("Law Firm:");
        expect(lblboxAddressAddlFirm.getText()).toEqual("Address:");
        expect(lblTeleNoAddlFirm.getText()).toEqual("Telephone No.:");

        expect(lblTransactionInformationHeader.getText()).toEqual("Transaction Information");
        expect(lblClosingDate.getText()).toEqual("Closing Date:");
        expect(lblTransactionType.getText()).toEqual("Your Firm Information");
        expect(lblSharePurchase.getText()).toEqual("Your Firm Information");
        expect(lblEnergyDeal.getText()).toEqual("Your Firm Information");
        expect(lblPolicyType.getText()).toEqual("Your Firm Information");
    };
*/
this.ClickOnPrevious = function(){
        /*Click on previous button on TransactionDetailsPage */
        browser.waitForAngular();
        btnPrevious.click();
        browser.sleep(3000);
    };

   
this.ClickOnNext = function(){
        /*Click on next button on Transaction Details Page */
        browser.waitForAngular();
        btnNext.click();
        browser.sleep(3000);
    };    

this.EnterTransactionFieldsforLawclark = function(){
                   /*Enter Mandatory fields for Property Details page  */
                   txtYourFileNo.sendKeys('12345');
                   browser.waitForAngular();   
                  // browser.sleep(2000);  
                   lstActingFor.element(by.cssContainingText('option','Mortgagor')).click();
                   browser.waitForAngular();  
                //    browser.sleep(2000);
                   lstLawyerNotary.element(by.cssContainingText('option', 'Sid CSRT')).click();        
                   browser.waitForAngular();  
                  // browser.sleep(2000);
                   lstContact.element(by.cssContainingText('option','A utoCSLawyer')).click();        
                  // browser.waitForAngular();  
                   browser.sleep(2000);
                   btnAddAditionalFirm.click();
                   lstActingForAddlFirm.element(by.cssContainingText('option','Mortgagor')).click();
                   browser.waitForAngular();
                 //  browser.sleep(2000);
                   txtLawyerNotaryAddlFirm.sendKeys('test123');
                   txtContactAddlFirm.sendKeys('test123');
                   txtLawFirmAddlFirm.sendKeys('test123');
                   txtboxAddressAddlFirm.sendKeys('test123');
                   txtTeleNoAddlFirm.sendKeys('test123'); 
                //    dtClosingDate.clear();
                //    dtClosingDate.sendKeys('2018-02-02');
                   lstTransactionType.element(by.cssContainingText('option','Purchase with New Mortgage')).click();
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
    
    this.EnterTransactionFields = function () {
        /*Enter Mandatory fields for Property Details page  */
        txtYourFileNo.sendKeys('12345');
        browser.waitForAngular();
        // browser.sleep(2000);  
        lstActingFor.element(by.cssContainingText('option', 'Mortgagor')).click();
        browser.waitForAngular();
        //    browser.sleep(2000);
        lstLawyerNotary.element(by.cssContainingText('option', 'Sid CSRT')).click();
        browser.waitForAngular();
        // browser.sleep(2000);
        lstContact.element(by.cssContainingText('option', 'A utoCSLawyer')).click();
        // browser.waitForAngular();  
        browser.sleep(2000);
        btnAddAditionalFirm.click();
        lstActingForAddlFirm.element(by.cssContainingText('option', 'Mortgagor')).click();
        browser.waitForAngular();
        //  browser.sleep(2000);
        txtLawyerNotaryAddlFirm.sendKeys('test123');
        txtContactAddlFirm.sendKeys('test123');
        txtLawFirmAddlFirm.sendKeys('test123');
        txtboxAddressAddlFirm.sendKeys('test123');
        txtTeleNoAddlFirm.sendKeys('test123');
        //    dtClosingDate.clear();
        //    dtClosingDate.sendKeys('2018-02-02');
        lstTransactionType.element(by.cssContainingText('option', 'Purchase with New Mortgage')).click();
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
this.VerifySetOfDataFields = function(){
                   /*Verify set of  fields for Property Details page  */
                   expect(txtPurchasePrice.getAttribute()).toEqual(null); 
                   expect(rbtnIsthisVacantLand.getAttribute()).toBe(null); 
                   browser.waitForAngular();     
                   expect(ddlIsItASelect.getAttribute()).toEqual(null);  
                   browser.waitForAngular();  
                   expect(ddlPropertyType.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtStreetNo.getAttribute()).toEqual(null); 
                   browser.waitForAngular();  
                   expect(txtStreetName.getAttribute()).toEqual(null); 
                   browser.waitForAngular();
                   expect(ddlProvince.getAttribute()).toEqual([ null ]);
                   browser.waitForAngular();
                   expect(ddlPIDSelect.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(ddlInterestHeldt.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtLandlord.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtLeaseRegistrationNo.getAttribute()).toEqual(null); 
                   browser.waitForAngular();  
                   expect(txtTermofLeaseyears.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(rbtnIshisaCondominium.getAttribute()).toBe(null);
                   browser.waitForAngular();  
                   expect(rbtnIsthisFirstNationsLand.getAttribute()).toBe(null);
                   browser.waitForAngular();  
                   expect(rbtnIsthereamunicipaladdressassigned.getAttribute()).toBe(null);
                   browser.waitForAngular();  
                   expect(txtUnitNo.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtCity.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtPostalCode.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtLegalDescription.getAttribute()).toEqual(null);
		
	};

this.EnterNonMandatoryFields = function(){
                  /*Enter Mandatory fields for Property Details page  */
                  rbtnIshisaCondominium.click();
                  rbtnIsthisFirstNationsLand.click();
                  rbtnIsthereamunicipaladdressassigned.click();
                  txtUnitNo.sendKeys("12").getAttribute();
                  txtCity.sendKeys("Toronto").getAttribute();
                  txtPostalCode.sendKeys("A1A2A3").getAttribute();
                  txtLegalDescription.sendKeys("Legal Description");
			
	};
 
this.ClearFields = function(){
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
this.EditTransactionNonMandatoryFields = function(){
        /*Edit non Mandatory fields for Property Details page  */
                  rbtnIshisaCondominium.click();
                  rbtnIsthisFirstNationsLand.click();
                  rbtnIsthereamunicipaladdressassigned.click();
                  txtUnitNo.sendKeys("12");
                  txtCity.sendKeys("nova Sccotia");
                  txtPostalCode.sendKeys("A1A2A2");
                  txtLegalDescription.sendKeys("Edited Legal Description");
    };
this.ClickOnSubmit = function(){
        /*Click on next button on Transaction Details Page */
        browser.waitForAngular();
        btnSubmitOrdar.click();
        browser.sleep(3000);
    };    

////////////////////////////////////////////Property Details Methods///////////////////////////////////////////
this.VerifyPropertyDetailsPageHeader = function(){
                expect(lblPropertyInfoHeader.getText()).toEqual("Property Information");
        };
this.VerifyPropertyDetailsPageLabels = function(){
                                        
                   expect(lblPurchasePrice.getText()).toEqual("Purchase Price:");
                   expect(lblIsthisVacantLand.getText()).toEqual("Is this Vacant Land?");
                   expect(lblIshisaCondominium.getText()).toEqual("Is this a Condominium?");
                   expect(lblIsthisFirstNationsLand.getText()).toEqual("Is this First Nations Land?");
                   expect(lblPropertyType.getText()).toEqual("Property Type:");
                   expect(lblIsthereamunicipaladdressassigned.getText()).toEqual("Is there a municipal address assigned?");
                   expect(lblUnitNo.getText()).toEqual("Unit No.:");
                   expect(lblStreetNo.getText()).toEqual("Street No.:");
                   expect(lblStreetName.getText()).toEqual("Street Name:");
                   expect(lblCity.getText()).toEqual("City:");
                   expect(lblProvince.getText()).toEqual("Province:");
                   expect(lblPostalCode.getText()).toEqual("Postal Code:");
                   expect(lblPIN_PID.getText()).toEqual("PIN/PID:");
                   expect(lblInterestHeld.getText()).toEqual("Interest Held:");
                   expect(lblLegalDescription.getText()).toEqual("Legal Description:");
                   expect(lblLandlord.getText()).toEqual("Landlord:");
                   expect(lblLeaseRegistrationNo.getText()).toEqual("Lease Registration No.:");
                   expect(lblTermofLeaseyears.getText()).toEqual("Term of Lease (years):");

        };

this.EnterDetaillsForLegalInformation = function(){
                txtPIN.sendKeys("1234");
                ddlInterestHeldt.element(by.cssContainingText('option','Licence')).click();
               // txtLandlord.sendKeys("Land lord"); 
               // txtLeaseRegistrationNo.sendKeys("#12345"); 
              //  txtTermofLeaseyears.sendKeys("4");
                txtLegalDescription.sendKeys("Legal Description");
        };
        
this.EnterValueForPropertyInfo = function(){
                txtPurchasePrice.clear();
                txtPurchasePrice.sendKeys("200"); //Optional. But, Mandatory based on Business Rules.
                browser.waitForAngular(); 
                ddlPropertyTypeSelectOption.element(by.cssContainingText('option','Agricultural')).click();
                //browser.waitForAngular();
               // rbtnIsthisVacantLand.get(1).click();
               // browser.waitForAngular();  
                //rbtnIshisaCondominium.get(2).click();
               // browser.waitForAngular();
               // rbtnIsthisFirstNationsLand.get(1).click();           
                //browser.waitForAngular();
               // rbtnIsthereamunicipaladdressassigned.get(2).click();     
               // browser.waitForAngular();
               txtUnitNoProperty.sendKeys("12");
               // browser.waitForAngular();
               txtStreetNoProperty.sendKeys("#21"); //Mandatory based on Business Rules
               txtStreetNameProperty.sendKeys("Street Name"); //Mandatory based on Business Rules
                //browser.waitForAngular();
                txtCityProperty.sendKeys("Toronto");
                browser.waitForAngular();
                ddlProvinceSelectOption.element(by.cssContainingText('option','Ontario')).click();
                //browser.waitForAngular();
        };

    
this.VerifySetOfDataFields = function(){
                   /*Verify set of  fields for Property Details page  */
                   expect(txtPurchasePrice.getAttribute()).toEqual(null); 
                   expect(rbtnIsthisVacantLand.getAttribute()).toEqual([ null, null ]); 
                   browser.waitForAngular();     
                   expect(ddlIsItASelect.getAttribute()).toEqual(null);  
                   browser.waitForAngular();  
                   expect(ddlPropertyTypeSelectOption.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtStreetNo.getAttribute()).toEqual(null); 
                   browser.waitForAngular();  
                   expect(txtStreetName.getAttribute()).toEqual(null); 
                   browser.waitForAngular();
                   expect(ddlProvince.getAttribute()).toEqual([ null, null ]);
                   browser.waitForAngular();
                   expect(ddlPIDSelect.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(ddlInterestHeldt.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtLandlord.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtLeaseRegistrationNo.getAttribute()).toEqual(null); 
                   browser.waitForAngular();  
                   expect(txtTermofLeaseyears.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                 
                   expect(rbtnIsthisFirstNationsLand.getAttribute()).toEqual([ null, null ]);
                   browser.waitForAngular();  
                   expect(rbtnIsthereamunicipaladdressassigned.getAttribute()).toEqual([ null, null ]);
                   browser.waitForAngular();  
                   expect(txtUnitNo.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtCity.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtPostalCode.getAttribute()).toEqual(null);
                   browser.waitForAngular();  
                   expect(txtLegalDescription.getAttribute()).toEqual(null);
        };


this.ClearFields = function(){
                
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

this.EditPropertyMandatoryFields = function(){
                  /*Edit Mandatory fields for Property Details page  */
                   txtPurchasePrice.clear();
                   txtPurchasePrice.sendKeys("300"); //Optional. But, Mandatory based on Business Rules.
                   rbtnIsthisVacantLand.get(1).click(); //Mandatory based on Business Rules
                   browser.waitForAngular();     
                  // ddlIsItASelectOption.click();  
                //    browser.waitForAngular();  
                //    ddlPropertyTypeSelectOption.click();
                  // browser.waitForAngular();
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
       
this.EditPropertyNonMandatoryFields = function(){
        // Edit non Mandatory fields for Property Details page 
                  rbtnIshisaCondominium.click();
                  rbtnIsthisFirstNationsLand.click();
                  rbtnIsthereamunicipaladdressassigned.click();
                  txtUnitNo.sendKeys("12");
                  txtCity.sendKeys("nova Sccotia");
                  txtPostalCode.sendKeys("A1A2A2");
                  txtLegalDescription.sendKeys("Edited Legal Description");
        };

this.ClickOnPrevious = function(){
                  /*Click on previous button on property Details Page */
                  browser.waitForAngular();
                  btnPrevious.click();
                  browser.sleep(3000);
        };

this.ClickOnNext = function(){
                  /*Click on next button on property Details Page */
                  browser.waitForAngular();
                  btnNext.click();
                  browser.sleep(3000);
        };

////////////////////////////////////////////Purchaser/Mortgagore Details Methods///////////////////////////////////////////
this.VerifyPurchaserMortgagorDetailsPageHeader = function(){
                                  /*Verify all Labels available on Property Details page  */
                          expect(lblPurchaserMortgagorInfoHeader.getText()).toEqual("Purchaser/Mortgagor Information");
                          
          };
this.VerifyServicesHeader = function(){
                                  /*Verify all Labels available on Property Details page  */
                          expect(lblAddForServiceHeader.getText()).toEqual("Address for Service:");
                          
          };
this.VerifyPurchaserMortgagorDetailsPageLabels = function(){
                                  /*Verify all Labels available on Property Details page  */
                          expect(lblOwnershipType.getText()).toEqual("Ownership Type *");
                          //expect(lblFirstName.getText()).toEqual("First Name:");
                          //expect(lblMiddleName.getText()).toEqual("Middle Name:");
                          //expect(lblLastName.getText()).toEqual("Last Name:");
                          expect(lblCorporationName.getText()).toEqual("Corporation Name *");
                          expect(lblOwnershipInterest.getText()).toEqual("Ownership Interest *");
                          //expect(lblBeneficialOwnerName.getText()).toEqual("Beneficial Owner Name:");
                          //expect(lblBeneficialOwnerconsented.getText()).toEqual("Has the Beneficial Owner consented to this transaction?");

                          expect(lblAddForServiceHeader.getText()).toEqual('Address for Service');
                          expect(lblUnitNo.getText()).toEqual("Unit No.");
                          expect(lblStreetNo.getText()).toEqual("Street No.");
                          expect(lblStreetName.getText()).toEqual("Street Name");
                          expect(lblCity.getText()).toEqual("City");
                          expect(lblProvince.getText()).toEqual("Province *");
                          expect(lblPostalCode.getText()).toEqual("Postal Code");

          };
this.EnterAllFieldValues = function () {
        /*Enter Mandatory fields for Property Details page  */
        
        ddlOwnershipType.element(by.cssContainingText('option', 'Corporation')).click();
        browser.waitForAngular();
        txtCorporationName.sendKeys("Corporation Name");
        //txtFirstName.sendKeys("First Name"); 
        //txtMiddleName.sendKeys("Middle Name");
        //txtLastName.sendKeys("Last Name");
        
        ddlOwnershipInterest.element(by.cssContainingText('option', 'Other')).click();
        browser.waitForAngular();
        //txtBeneficialOwnerName.sendKeys("Beneficial Owner Name");
                     //rbtnBeneficialOwnerconsented.get(1).click(); 
    };
this.EnterAddressForService = function(){

                     txtUnitNo.sendKeys(PurchaserMortgageData.data.PURCHASER_MORTGAGE_DETAILS.ADDRESS.UNIT_NO.value);
                     browser.waitForAngular();
                     txtStreetNo.sendKeys(PurchaserMortgageData.data.PURCHASER_MORTGAGE_DETAILS.ADDRESS.STREET_NO.value);
                     browser.waitForAngular(); 
                     txtStreetName.sendKeys(PurchaserMortgageData.data.PURCHASER_MORTGAGE_DETAILS.ADDRESS.STREET_NAME.value); 
                     browser.waitForAngular();
                     txtCity.sendKeys(PurchaserMortgageData.data.PURCHASER_MORTGAGE_DETAILS.ADDRESS.CITY.value);
                     browser.waitForAngular();
                     ddlProvince.element(by.cssContainingText('option','Ontario')).click();
                     browser.waitForAngular();
                     txtPostalCode.sendKeys(PurchaserMortgageData.data.PURCHASER_MORTGAGE_DETAILS.ADDRESS.POSTAL_CODE.value);
                    // browser.waitForAngular();
          };
this.ClickOnPrevious = function(){
                  /*Click on previous button on Purchaser Mortgagor Details Page */
                  browser.waitForAngular();
                  btnPrevious.click();
                  browser.sleep(3000);
          };
this.ClickOnNext = function(){
                  /*Click on next button on Purchaser Mortgagor Details Page */
                  browser.waitForAngular();
                  btnNext.click();
                  browser.sleep(3000);
          };
this.ClearFieldsForInputBox = function(){
                   //clear() All fields values
                     txtFirstName.clear();
                     txtMiddleName.clear();
                     txtLastName.clear();
                     txtCorporationName.clear();
                     txtBeneficialOwnerName.clear();
                     
                     txtUnitNo.clear();
                     txtStreetNo.clear(); 
                     txtStreetName.clear(); 
                     txtCity.clear();
                     txtPostalCode.clear();
                    
          };
this.EditEnterAllFieldValues = function(){
                     /*Enter Mandatory fields for Property Details page  */
                     ddlOwnershipType.click(); 
                     txtFirstName.sendKeys("Edited First Name"); 
                     txtMiddleName.sendKeys("Edited Middle Name");
                     txtLastName.sendKeys("Edited Last Name");
                     txtCorporationName.sendKeys("Edited Corporation Name");
                     ddlOwnershipInterest.click();
                     txtBeneficialOwnerName.sendKeys("Edited Beneficial Owner Name");
                     rbtnBeneficialOwnerconsented.click();
                    
                     txtUnitNo.sendKeys("Edited 2");
                     txtStreetNo.sendKeys("Edited #21"); 
                     txtStreetName.sendKeys("Edited Street Name"); 
                     txtCity.sendKeys("Edited Toronto");
                     browser.waitForAngular();
                     ddlProvince.element(by.cssContainingText('option','British Columbia')).click();
                     txtPostalCode.sendKeys("B2B 2B2");
          };
this.VerifyDefaultSetOfDataFieldsValue = function(){
                   /*Verify default set of  fields for Purchaser Mortgagor Details page  */
                   expect(ddlOwnershipType.getAttribute()).toEqual(null); 
                   expect(txtFirstName.getAttribute()).toBe(null); 
                   browser.waitForAngular();     
                   expect(txtMiddleName.getAttribute()).toEqual(null);  
                   browser.waitForAngular();  
                   expect(txtLastName.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtCorporationName.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(ddlOwnershipInterest.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtBeneficialOwnerName.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(rbtnBeneficialOwnerconsented.getAttribute()).toEqual([ null, null ]);
                   browser.waitForAngular();
                   expect(txtUnitNo.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtStreetNo.getAttribute()).toEqual(null); 
                   browser.waitForAngular();  
                   expect(txtStreetName.getAttribute()).toEqual(null); 
                   browser.waitForAngular();
                   expect(txtCity.getAttribute()).toEqual(null); 
                   browser.waitForAngular();
                   expect(ddlProvince.getAttribute()).toEqual(null);
                   browser.waitForAngular();
                   expect(txtPostalCode.getAttribute()).toEqual(null);
                   browser.waitForAngular();
      };

////////////////////////////////////////////Mortgage Details Methods///////////////////////////////////////////
this.VerifyMortgageDetailsPageLabels = function(){
                         /*Verify all Labels available on Mortgage Details page*/
                   expect(lblLenderName.getText()).toEqual("Lender Name:");
                   expect(lblCustodianName.getText()).toEqual("Custodian Name (If Applicable):");
                   expect(lblMortgageAmount.getText()).toEqual("Mortgage Amount:");
                   expect(lblInsuredAmount.getText()).toEqual("Insured Amount (If different from Mortgage Amount):");
                   expect(lblLenderInterest.getText()).toEqual("Lender Interest:");
                   expect(lblMortgageRefNo.getText()).toEqual("Mortgage Reference No.:");
                   expect(lblMortgageType.getText()).toEqual("Mortgage Type:");
                   expect(lblMortgagePriority.getText()).toEqual("Mortgage Priority:");
                   expect(lblnCMSCInsured.getText()).toEqual("Is the Mortgage CMHC Insured?");
                   expect(lblNoOfUnits.getText()).toEqual("No. of Units:");
                   expect(lblchkbxLoanAgreement.getText()).toEqual("Does the loan agreement allow for the following? (select all that apply)");
			};


this.VerifyMortgagePageHeader = function() {
        it('Verify Mortgage Page Header', function() {
            expect(txtMortgageDetailsHeader.getText()).toMatch("Mortagage Information");
        });
    };

this.EnterMortgageDetailsPage = function() {
            //browser.waitForAngular();
            console.log(" Enter Lender Name: ");
            txtLenderName.sendKeys("Lender Name");
            browser.waitForAngular();
            console.log(" Enter Custodian Name:");
            txtCustodianName.sendKeys("Custodian Name");
            browser.waitForAngular();
            console.log(" Enter Mortgage Amount:");
            txtMortgageAmount.sendKeys("20000");
            browser.waitForAngular();
            console.log(" Enter Insured Amount:");
            txtInsuredAmount.sendKeys("20000");
            browser.waitForAngular();
            console.log(" Enter Mortgage Reference No");
            txtMortgageRefNo.sendKeys("1234");
            browser.waitForAngular();
            console.log("Select Mortgage Type from drop down:");
            browser.waitForAngular();
            lstMortgageType.element(by.cssContainingText('option','Amending Agreement')).click();
            browser.waitForAngular();
            console.log("Select Mortgage Priority from drop down:");
            lstMortgagePriority.element(by.cssContainingText('option','Eighth')).click();
        //     browser.waitForAngular();
            
        //     console.log("Select check box for CMSC Insured as Yes/No:");
        //     //rbtnCMSCInsured.get(1).click();

        //     console.log("Enter No. Of Units: ");
        //     txtNoOfUnits.sendKeys("432");
        //     browser.waitForAngular();
        //     console.log("Select for Loan Agreement options: ")
            //chkbxLoanAgreement.get(0).click();
           // chkbxLoanAgreement.get(1).click();
         };

this.EnterNonMandetoryFields = function(){
                  /*Enter mandetory fields for Mortgage Details page  */
                  txtCustodianName.sendKeys("Name");
                  txtMortgageAmount.sendKeys("100");
                  txtInsuredAmount.sendKeys("1000");
                  txtMortgageRefNo.sendKeys(100);
   	};
    
this.ClearFieldsForInputBox = function(){
                   //clear() All fields values
                     txtLenderName.clear();
                     txtCustodianName.clear();
                     txtMortgageAmount.clear();
                     txtInsuredAmount.clear();
                     txtlenderInterest.clear();
                     txtMortgageRefNo.clear();
                     txtNoOfUnits.clear(); 
                    
                    
          };

this.EditEnterAllFieldValues = function(){
                    
            txtLenderName.sendKeys("Edit Lender Name");
            txtCustodianName.sendKeys("Edit Custodian Name");
            txtMortgageAmount.sendKeys("40000");
            txtInsuredAmount.sendKeys("40000");
            txtMortgageRefNo.sendKeys("231234");
            lstMortgageType.element(by.cssContainingText('option','Assumption')).click();
            lstMortgagePriority.element(by.cssContainingText('option','Fifth')).click();
            rbtnCMSCInsured.get(0).click();
            txtNoOfUnits.sendKeys("Edit 432");
            
            console.log("Select for Loan Agreement options: ")
            //chkbxLoanAgreement.get(0).click();
        // chkbxLoanAgreement.get(1).click();
        //FCTNotes.sendKeys("Test Automation");
        //browser.sleep(3000);
        //chkConfirmROTYes.get(0).click();
        //browser.sleep(3000);

          };
this.ClickOnPrevious = function(){
                  /*Click on previous button on Purchaser Mortgagor Details Page */
                  browser.waitForAngular();
                  btnPrevious.click();
                  browser.sleep(3000);
          };

this.ClickOnNext = function(){
                  /*Click on next button on Purchaser Mortgagor Details Page */
                  browser.waitForAngular();
                  btnNext.click();
                  browser.sleep(3000);
    };

    this.ClickonPurchaserMenuItems = function () {
        browser.waitForAngular();
        LM_Purchaser.click();
        browser.sleep(3000);
    };
    
    this.ClickonAdditionalInfoMenuItems = function () {
        browser.waitForAngular();
        LM_AdditionalInformation.click();
        browser.sleep(3000);
    };
    
    this.ClickonMortgageMenuItems = function () {
        browser.waitForAngular();
        LM_Mortgage.click();
        browser.sleep(3000);
    };

	//#end region for methods

    //     function selectOption(selector, item) {
    //         var selectList, desiredOption;

    //         selectList = this.findElement(selector);
    //         selectList.click();

    //         selectList.findElements(protractor.By.tagName('option'))
    //             .then(function findMatchingOption(options) {
    //                 options.some(function(option) {
    //                     option.getText().then(function doesOptionMatch(text) {
    //                         if (item === text) {
    //                             desiredOption = option;
    //                             return true;
    //                         }
    //                     });
    //                 });
    //             })
    //             .then(function clickOption() {
    //                 if (desiredOption) {
    //                     desiredOption.click();
    //                 }
    //             });
    //     };
    // };

////////////////////////////////////////////Underwriting Details Methods///////////////////////////////////////////


    this.EnterMandatoryFields = function () {
        /*Enter Mandatory fields for Property Details page  */
        
        ddlOwnershipType.element(by.cssContainingText('option', 'Corporation')).click();
        browser.waitForAngular();
  
        ddlOwnershipInterest.element(by.cssContainingText('option', 'Other')).click();
        browser.waitForAngular();
        
    };

    this.EnterMandatoryforOtherFields = function () {
        /*Enter Mandatory fields for Property Details page  */
        
        ddlOwnershipType.element(by.cssContainingText('option', 'Person')).click();
        browser.waitForAngular();
        
        ddlOwnershipInterest.element(by.cssContainingText('option', 'Other')).click();
        browser.waitForAngular();
        
    };

    this.EnterMandatoryforBeneficialOwnerFields = function () {
        /*Enter Mandatory fields for Property Details page  */
        
        ddlOwnershipType.element(by.cssContainingText('option', 'Corporation')).click();
        browser.waitForAngular();
        txtCorporationName.sendKeys("Corporation Name");
        ddlOwnershipInterest.element(by.cssContainingText('option', 'Beneficial Owner')).click();
        browser.waitForAngular();
        
    };
};
module.exports = new CreateNewOrder();

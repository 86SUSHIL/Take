'use strict';

//var xPathToCss = require("../../../node_modules/xpath-to-css/index.js");
//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");
var PropertyInformationPage = function() {
    var lblPropertyInfoHeader = element(by.xpath("//h4[text()='Property Information']"));
    var lblPurchasePrice = element(by.xpath("//property-detail/div/div[2]/div[1]/div[1]/label"));
    var lblIsthisVacantLand = element(by.xpath("//property-detail/div/div[2]/div[3]/div[1]/label"));

    var lblIshisaCondominium = element(by.xpath("//property-detail/div/div[2]/div[3]/div[2]/label"));

    var lblIsthisFirstNationsLand = element(by.xpath("//property-detail/div/div[2]/div[3]/div[3]/label"));
    var lblPropertyType = element(by.xpath("//property-detail/div/div[2]/div[1]/div[2]/label"));
    var lblIsthereamunicipaladdressassigned = element(by.xpath("//property-detail/div/div[2]/div[3]/div[4]/label"));


    var lblUnitNo = element(by.xpath("//property-detail/div/div[2]/div[5]/div[1]/label"));
    var lblStreetNo = element(by.xpath("//property-detail/div/div[2]/div[5]/div[2]/label"));
    var lblStreetName = element(by.xpath("//property-detail/div/div[2]/div[5]/div[3]/label"));
    var lblCity = element(by.xpath("//property-detail/div/div[2]/div[7]/div[1]/label"));
    var lblProvince = element(by.xpath("//property-detail/div/div[2]/div[7]/div[2]/label"));
    var lblPostalCode = element(by.xpath("//property-detail/div/div[2]/div[7]/div[3]/label"));
    //Legal Information
    var lblPIN = element(by.xpath("//legal-info-detail/div/div[2]/div[1]/div[1]/label"));
    var lblInterestHeld = element(by.xpath("//legal-info-detail/div/div[2]/div[1]/div[2]/label"));
    var lblLegalDescription = element(by.xpath("//legal-info-detail/div/div[2]/div[5]/div/label"));

    /*********************************Element locator*************************************/
    //Property information 1
    var txtPurchasePrice = element(by.css('#purchasePriceText'));
    var ddlPropertyTypeSelectOption = element(by.css('#propertyTypeOption'));

    var rbtnIsthisVacantLand = element.all(by.name('vacantOption'));
    var rbtnIshisaCondominium = element.all(by.name('condominiumOption'));
    var rbtnIsthisFirstNationsLand = element.all(by.name('firstNationsLandOption'));
    var rbtnIsthereamunicipaladdressassigned_Yes = element(by.id('municipalAddressOptionYes0'));

    var txtUnitNoProperty = element(by.css('#unitNumberText'));
    var txtStreetNoProperty = element(by.css('#streetNoText'));
    var txtStreetNameProperty = element(by.css('#streetNameText'));
    var txtCityProperty = element(by.css('#cityText'));
    var ddlProvince = element.all((by.css('#provinceOption')));
    var ddlProvinceSelectOption = element(by.css('#provinceOption'));
    var txtPostalCode = element(by.css('#postalCodeText'));
    //Legal information 1
    var txtPIN = element(by.css('#pinText'));
    var ddlInterestHeld = element(by.css('#interestHeldOption'));
    var txtLegalDescription = element(by.css('#legalDescriptionText'));

    var btnAddLegalInformation = element(by.xpath("//legal-info-detail/div/div[1]/div/button[1]"));
    var btnAddProperty = element(by.xpath("//property-list/div/div[2]/div/div[2]/div/button"));
    var icollapsePropertyInfo_1 = element(by.xpath("//*[@id='property1']/div[1]/div/button"));

    //Property information 2
    var txtPurchasePrice2 = element(by.xpath('//*[@id="property2"]//*[@id="purchasePriceText"]'));
    var ddlPropertyTypeSelectOption2 = element(by.xpath('//*[@id="property2"]//*[@id="propertyTypeOption"]'));

    var rbtnIsthisVacantLand2 = element.all(by.name('vacantOption'));
    var rbtnIshisaCondominium2 = element.all(by.name('condominiumOption'));
    var rbtnIsthisFirstNationsLand2 = element.all(by.name('firstNationsLandOption'));
    var rbtnIsthereamunicipaladdressassigned2 = element.all(by.name('municipalAddressOption'));

    var txtUnitNoProperty2 = element(by.xpath('//*[@id="property2"]//*[@id="unitNumberText"]'));

    var txtStreetNoProperty2 = element(by.xpath('//*[@id="property2"]//*[@id="streetNoText"]'));

    var txtStreetNameProperty2 = element(by.xpath('//*[@id="property2"]//*[@id="streetNameText"]'));

    var txtCityProperty2 = element(by.xpath('//*[@id="property2"]//*[@id="cityText"]'));

    var ddlProvince2 = element(by.xpath('//*[@id="property2"]//*[@id="provinceOption"]'));

    var ddlProvinceSelectOption2 = element(by.xpath('//*[@id="property2"]//*[@id="provinceOption"]'));
    var txtPostalCode2 = element(by.xpath('//*[@id="property2"]//*[@id="postalCodeText"]'));
    //Legal information
    var txtPIN2 = element(by.css('#pinText'));
    var ddlInterestHeld2 = element(by.css('#interestHeldOption'));
    var txtLegalDescription2 = element(by.css('#legalDescriptionText'));



    //#end region for Elements

    var PropertyType = '';
    var Province = '';
    //#region for methods
    this.CollapsePropertyInfo_1 = function() {
        icollapsePropertyInfo_1.click();
    };
    this.VerifyPropertyDetailsPageHeader = function() {
        expect(lblPropertyInfoHeader.getText()).toEqual("Property Information");
    };
    this.VerifyPropertyDetailsPageLabels = function() {

        expect(lblPurchasePrice.getText()).toEqual("Purchase Price *");
        expect(lblIsthisVacantLand.getText()).toEqual("Is this vacant land?");
        expect(lblIshisaCondominium.getText()).toEqual("Is this a condominium/strata?");
        expect(lblIsthisFirstNationsLand.getText()).toEqual("Is this First Nations land?");
        expect(lblPropertyType.getText()).toEqual("Property Type *");
        expect(lblIsthereamunicipaladdressassigned.getText()).toEqual("Is there a municipal address assigned?");
        expect(lblUnitNo.getText()).toEqual("Unit No.");
        expect(lblStreetNo.getText()).toEqual("Street No. *");
        expect(lblStreetName.getText()).toEqual("Street Name *");
        expect(lblCity.getText()).toEqual("City *");
        expect(lblProvince.getText()).toEqual("Province *");
        expect(lblPostalCode.getText()).toEqual("Postal Code");
        //expect(lblPIN_PID.getText()).toEqual("PIN");
        expect(lblInterestHeld.getText()).toEqual("Interest Held *");
        expect(lblLegalDescription.getText()).toEqual("Legal Description");
        //expect(lblLandlord.getText()).toEqual("Landlord:");
        //expect(lblLeaseRegistrationNo.getText()).toEqual("Lease Registration No.");
        // expect(lblTermofLeaseyears.getText()).toEqual("Term of Lease (years)");

    };

    this.EnterDetaillsForLegalInformation_1 = function() {
        //txtPIN.sendKeys("1234");
        //ddlInterestHeld.element(by.cssContainingText('option','Licence')).click();
        //txtLandlord.sendKeys("Land lord"); 
        //txtLeaseRegistrationNo.sendKeys("#12345"); 
        //txtTermofLeaseyears.sendKeys("4");
        //txtLegalDescription.sendKeys("Legal Description");
    };

    this.EnterPrimaryMandatoryValueForPropertyInfo_1 = function(PropertyType, Province) {
        txtPurchasePrice.clear();
        txtPurchasePrice.sendKeys("2000000"); //Optional. But, Mandatory based on Business Rules.
        browser.waitForAngular();
        ddlPropertyTypeSelectOption.element(by.cssContainingText('option', PropertyType)).click();
        browser.waitForAngular();
        // rbtnIsthisVacantLand.get(1).click();
        // browser.waitForAngular();  
        //rbtnIshisaCondominium.get(2).click();
        // browser.waitForAngular();
        // rbtnIsthisFirstNationsLand.get(1).click();           
        //browser.waitForAngular();
        // rbtnIsthereamunicipaladdressassigned.get(2).click();     
        // browser.waitForAngular();
        //txtUnitNo.sendKeys("12");
        //browser.waitForAngular();
        txtStreetNoProperty.sendKeys("#21"); //Mandatory based on Business Rules
        txtStreetNameProperty.sendKeys("Street Name"); //Mandatory based on Business Rules
        browser.waitForAngular();
        txtCityProperty.sendKeys("Toronto");
        browser.waitForAngular();
        ddlProvinceSelectOption.element(by.cssContainingText('option', Province)).click();
        browser.waitForAngular();
    };

    this.EnterPrimaryMandatoryValueForPropertyInfo_2 = function(PropertyType, Province) {
        txtPurchasePrice2.clear();
        txtPurchasePrice2.sendKeys("3000000"); //Optional. But, Mandatory based on Business Rules.
        browser.waitForAngular();
        ddlPropertyTypeSelectOption2.element(by.cssContainingText('option', PropertyType)).click();
        // browser.waitForAngular();
        // // rbtnIsthisVacantLand.get(1).click();
        // // browser.waitForAngular();  
        // //rbtnIshisaCondominium.get(2).click();
        // // browser.waitForAngular();
        // // rbtnIsthisFirstNationsLand.get(1).click();           
        // //browser.waitForAngular();
        // // rbtnIsthereamunicipaladdressassigned.get(2).click();     
        // // browser.waitForAngular();
        // //txtUnitNo.sendKeys("12");
        // //browser.waitForAngular();
        txtStreetNoProperty2.sendKeys("#21_2"); //Mandatory based on Business Rules
        txtStreetNameProperty2.sendKeys("Street Name_2"); //Mandatory based on Business Rules
        browser.waitForAngular();
        txtCityProperty2.sendKeys("Toronto_2");
        browser.waitForAngular();
        ddlProvinceSelectOption2.element(by.cssContainingText('option', Province)).click();
        browser.waitForAngular();
    };
    this.EnterPrimaryMandatoryFieldsForLegalInformation = function() {
        ddlInterestHeld.element(by.cssContainingText('option', 'Licence')).click();
    }

    this.EnterMandatoryFields = function() {

        txtPurchasePrice.sendKeys("20000"); //Optional. But, Mandatory based on Business Rules.
        browser.waitForAngular();

        ddlPropertyTypeSelectOption.element(by.cssContainingText('option', 'Agricultural')).click();
        browser.waitForAngular();
        rbtnIsthisVacantLand.get(1).click();
        browser.waitForAngular();

        ddlIsItASelectOption.element(by.cssContainingText('option', 'Vacant Farmland')).click();
        browser.waitForAngular();


        txtStreetNo.sendKeys("#21"); //Mandatory based on Business Rules
        txtStreetName.sendKeys("Street Name"); //Mandatory based on Business Rules
        browser.waitForAngular();
        // browser.sleep(1000);
        ddlProvinceSelectOption.element(by.cssContainingText('option', 'Ontario')).click();
        browser.waitForAngular();
        //  browser.sleep(5000);                   

        ddlPIDSelect.element(by.cssContainingText('option', 'R')).click();
        browser.waitForAngular();
        // browser.sleep(1000);                   

        ddlInterestHeldt.element(by.cssContainingText('option', 'Licence')).click();
        browser.waitForAngular();
        // browser.sleep(1000);

        txtLandlord.sendKeys("Land lord"); //Mandatory based on Business Rules
        txtLeaseRegistrationNo.sendKeys("#12345"); //Mandatory based on Business Rules
        txtTermofLeaseyears.sendKeys("1234"); //Mandatory based on Business Rules

    };

    this.VerifySetOfDataFields = function() {
        /*Verify set of  fields for Property Details page  */
        expect(txtPurchasePrice.getAttribute()).toEqual(null);
        expect(rbtnIsthisVacantLand.getAttribute()).toEqual([]);
        browser.waitForAngular();
        //  expect(ddlIsItASelect.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(ddlPropertyTypeSelectOption.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtStreetNoProperty.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtStreetNameProperty.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(ddlProvince.getAttribute()).toEqual([null, null]);
        browser.waitForAngular();
        // expect(ddlPIDSelect.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(ddlInterestHeld.getAttribute()).toEqual(null);
        browser.waitForAngular();
        // expect(txtLandlord.getAttribute()).toEqual(null);
        // browser.waitForAngular();
        // expect(txtLeaseRegistrationNo.getAttribute()).toEqual(null);
        // browser.waitForAngular();
        // expect(txtTermofLeaseyears.getAttribute()).toEqual(null);
        // browser.waitForAngular();

        expect(rbtnIsthisFirstNationsLand.getAttribute()).toEqual([]);
        browser.waitForAngular();
        expect(rbtnIsthereamunicipaladdressassigned_Yes.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtUnitNoProperty.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtCityProperty.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtPostalCode.getAttribute()).toEqual(null);
        browser.waitForAngular();
        expect(txtLegalDescription.getAttribute()).toEqual(null);
    };

    //     this.EnterNonMandatoryFields = function(){

    //           rbtnIshisaCondominium.get(1).click();
    //           browser.waitForAngular();
    //           rbtnIsthisFirstNationsLand.get(0).click();             
    //           browser.waitForAngular();
    //           rbtnIsthereamunicipaladdressassigned.get(0).click();         
    //           browser.waitForAngular();
    //           txtUnitNo.sendKeys("12").getAttribute();
    //           txtCity.sendKeys("Toronto").getAttribute();
    //           txtPostalCode.sendKeys("A1A2A3").getAttribute();
    //           txtLegalDescription.sendKeys("Legal Description");

    // 	};

    this.ClearFields = function() {

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

    this.EditPropertyMandatoryFields = function() {
        /*Edit Mandatory fields for Property Details page  */
        txtPurchasePrice.sendKeys("300"); //Optional. But, Mandatory based on Business Rules.
        rbtnIsthisVacantLand.get(0).click(); //Mandatory based on Business Rules
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

    this.EditPropertyNonMandatoryFields = function() {
        // Edit non Mandatory fields for Property Details page 
        rbtnIshisaCondominium.click();
        rbtnIsthisFirstNationsLand.click();
        rbtnIsthereamunicipaladdressassigned_Yes.click();
        txtUnitNo.sendKeys("12");
        txtCity.sendKeys("nova Sccotia");
        txtPostalCode.sendKeys("A1A2A2");
        txtLegalDescription.sendKeys("Edited Legal Description");
    };

    this.ClickOnAddLegalInformation = function() {
        btnAddLegalInformation.click();
    }


    this.ClickOnAddProperty = function() {
        btnAddProperty.click();
    }

    this.VerifyDefaultvalueForIsMuncipleAddress = function() {
        rbtnIsthereamunicipaladdressassigned_Yes.isSelected().then(function(text) {
            console.log("Municipal address 'YES' is selected : ", text);
            expect(text).toBe(true);
            expect(lblUnitNo.getText()).toEqual("Unit No.");
            expect(lblStreetNo.getText()).toEqual("Street No. *");
            expect(lblStreetName.getText()).toEqual("Street Name *");
            expect(lblCity.getText()).toEqual("City *");
            expect(lblProvince.getText()).toEqual("Province *");
            expect(lblPostalCode.getText()).toEqual("Postal Code");
        })

    };

    //#end region for methods
};
module.exports = new PropertyInformationPage();
'use strict';

//var userData = require('../../testData/RunSettings.JSON.js');
var TransactionData = require('../../testData/Testdata_TransactionDetails.JSON.js');
var PurchaserMortgageData = require('../../testData/Testdata_PurchaserMortgageDetails.JSON.js');
var PropertyData = require('../../TestData/Testdata_PropertyDetails.JSON.js');
var closingDate = TransactionData.data.TRANSACTION_DETAILS.TRANSACTION_INFO.CLOSING_DATE.value;

var isMunicipalAddress = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.IS_MUNICIPAL_ADDR.value;
var purchasePrice = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.PURCHASE_PRICE.value;
var unitNumber = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.UNIT_NO.value;
var streetNumber = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.STREET_NO.value;
//var isMunicipalAddress = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.IS_MUNICIPAL_ADDR.value;
//var isMunicipalAddress = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.IS_MUNICIPAL_ADDR.value;
//var isMunicipalAddress = PropertyData.data.PROPERTY_DETAILS.PROPERTY1.PROPERTY_INFO.IS_MUNICIPAL_ADDR.value;

var CUCPropertyDetailsPage = function() {

    //#region for Elements

    var lnkPropertyDetailsMenu = element(by.css('#ctl00_LeftMenu1_theMenun2'));
    var tabProperty = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyLinkButton'));
    var tabPurchaserMortgage = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserLinkButton'));
    var tabMortgage = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageLinkButton'));
    var tabGuarantor = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorLinkButton'));

    // Footer section
    var btnCancel = element(by.css('#ctl00_DefaultContent_CancelImageButton'));
    var btnSave = element(by.css('#ctl00_DefaultContent_SaveImageButton'));
    var btnSaveAndContinue = element(by.css('#ctl00_DefaultContent_SaveAndContinueImageButton'));
    var btnSubmitDeal = element(by.css('#ctl00_DefaultContent_DealSubmit'));

    ///Property tab
    var lblPropertyHeader = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_HeaderLabel'));
    var lblPurchasePrice = element(by.xpath("//td[text()='Purchase Price']"));
    var lblOwnerpolicyClosingdate = element(by.xpath("//*[@id='ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_pnlPropertyInformation']/table[2]/tbody/tr/td[1]"));
    var lblIsMunicipalAddressAssigned = element(by.xpath("//td[text()='Is there a municipal address assigned?']"));
    var lblUnitNo = element(by.xpath("//*[@id='ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtUnitNumber_t']/tbody/tr/td[1]"));

    var txtPurchasePrice = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PurchasePriceTextBox'));
    var txtOwnerpolicyClosingdate = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_ClosingDateTextBox'));
    var rbtnIsMunicipalAddressAssigned = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$PropertyInfoUserControl$IsMunicipalAddressLabelRadioButtonList'));
    var txtUnitNo = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtUnitNumber'));
    var txtStreetNo = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtStreetNumber'));
    var txtAddress1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtAddressLine1'));
    var lnkAddAdditionalAddress = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_EditCustomerHidden'));
    var txtAddress2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtAddressLine2'));
    var txtCity = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtCity'));
    var ddlProvince = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_ProvinceLabelDropDown'));
    var txtPostalCode = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_AddressInfoUserControl_txtPostalCode'));
    var rbtnisThisvacantLand = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$PropertyInfoUserControl$IsVacantRadioButtonList'));
    var rbtnIsThisCondominium = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$PropertyInfoUserControl$IsCondoLabelRadioButtonList'));
    var rbtnisThisFirstNationLand = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$PropertyInfoUserControl$IsNativeLandRadioButtonList'));
    var ddlpropertyType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyTypeDropDown'));
    var txtPIN = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_PINLabelTextBox'));
    var ddlEsateType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_EstateTypeDropDown'));
    var txtlandLoard = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_LandlordLabelTextBox'));
    //Need to check this below eliment
    var txtInstrumentType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_InstrumentNumberLabelTextBox'));
    var txtInstrumentNumber = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_InstrumentNumberLabelTextBox'));
    var txtLegalDescription = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_LegalDescriptionLabelTextBox'));
    var lnkAddLegalInformation = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyPinListUserControl_PINsDataList_ctl00_lbAddPIN'));
    var chkboxThispropertyrequiresunderwritingquestions = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_IsUnderwritingRequiredCheckBox'));
    var lnkAddCollateraInformationCollateral = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyCollateralListControl_CollateralDataList_ctl00_lbAddCollateral'));
    var ddlProvince_Collateral = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyCollateralListControl_CollateralDataList_ctl00_ProvinceLabelDropDown'));
    var txtCollateral = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PropertyInfoUserControl_PropertyCollateralListControl_CollateralDataList_ctl00_CollateralDescriptionLabelTextBox'));

    //Purchaser/Mortgagor tab
    var ddlCopyExistingPurchaserMortgagor = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddExistingPurchaserLabelDropDown'));
    var ddlOwnershipType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_OwnershipTypeLabelDropDown'));

    var txtCorporationName = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_CorporationNameTextBox'));

    var txtFirstName = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_FirstNameTextBox'));
    var txtMiddleName = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_MiddleNameLabelTextBox'));
    var txtLastName = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_LastNameTextBox'));
    var ddlPOwnershipInterest = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_OwnershipInterestLabelDropDown'));

    var lnkCopyPropertyAddress = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_CopyPropertyAddressLinkButton'));

    var txtPurchaseMortgagorUnitNo = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtUnitNumber'));
    var txtPurchaseMortgagorStreetNo = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtStreetNumber'));
    var txtPurchaseMortgagorAddress1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtAddressLine1'));
    var txtPurchaseMortgagorAddress2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtAddressLine2'));
    var txtPurchaseMortgagorCity = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtCity'));
    var ddlPurchaseMortgagorProvince = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_ProvinceLabelDropDown'));
    var txtPurchaseMortgagorPostalCode = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_AddressInfoUserControl_txtPostalCode'));
    var ddlPurchaseMortgagorCountry = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_CountryLabelDropDown'));

    var txtBirthDate = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_BirthDateTextBox'));
    var txtChiefExecutiveOfficeofMortgagor = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_ChiefExecutiveOfficeTextBox'));
    var txtLocationofBusinessRecordsofMortgagor = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_BusinessRecordsLocationTextBox'));
    var txtSigningOfficer1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_SigningOfficerCorp1TextBox'));
    var txtSigningOfficer2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_SigningOfficerCorp2TextBox'));
    var txtPhone1Part1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone1Part1TextBox'));
    var txtPhone1Part2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone1Part2TextBox'));
    var txtPhone1Part3 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone1Part3TextBox'));
    var txtPhone2Part1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone2Part1TextBox'));
    var txtPhone2Part2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone2Part2TextBox'));
    var txtPhone2Part3 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_Phone2Part3TextBox'));
    var txtFaxPart1 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_FaxPart1TextBox'));
    var txtFaxPart2 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_FaxPart2TextBox'));
    var txtFaxPart3 = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_FaxPart3TextBox'));
    var txtEmail = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_PurchaserInfoUserControl_EmailTextBox'));

    //Mortgage

    var ddlAddExistingMortgage = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_AddExistingMortgageLabelDropDown'));
    var ddlMortgagType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_MortgageTypeLDD'));
    var ddlPriority = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_PriorityLDD'));
    var txtMortgagAmount = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_txtMortgageAmount'));
    var txtInsuredAmount = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_txtInsuredAmount'));
    var dateLoanPolicyClosingDate = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_ClosingDateTextBox'));
    var rbtnSubsequentAdvanceincreaseamountofInsurance = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$MortgageInfoUserControl$rblIsAdvanceIncrease'));
    var rbtnSubsequentAdvanceuptoamountOfInsurance = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$MortgageInfoUserControl$rblIsAdvanceUpTo'));
    var rbtnVariableRate = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$MortgageInfoUserControl$rblIsVariableRate'));

    var rbtnRevolvingCreditAdditionalPremiumApplies = element.all(by.name('ctl00$DefaultContent$PropertiesDataList$ctl01$MortgageInfoUserControl$rblIsRevolvingCredit'));

    var lblMortgageLenders = element(by.xpath("//*[@id='ctl00_DefaultContent_PropertiesDataList']/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table/tbody/tr[6]/td/table[5]/tbody/tr[1]/td"));
    var txtLenderInterest = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_LenderContributionLTB'));
    var txtReferenceNumber = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_ReferenceNumberLabelTextBox'));
    var txtStandardChargeTermsNo = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_StdChargeTextBox'));
    var dateMortgageDate = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_MtgDateTextBox'));
    var dateMortgageRegistrationDate = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_MtgRegDateTextBox'));
    var txtLenderContinued = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_LenderContinuedLabelTextBox'));
    var txtLenderProcessingInstructions = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_LenderMessageLabelTextBox'));
    var lblCustodian = element(by.xpath("//*[@id='ctl00_DefaultContent_PropertiesDataList']/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[3]/td[2]/table/tbody/tr/td/table/tbody/tr[6]/td/table[5]/tbody/tr[13]/td/table/tbody/tr[1]/td"));
    var lnkRemoveMortgagefromProperty = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_RemoveMortgageLinkButton'));
    var lnkDeleteMortgage = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_DeleteMortgageLinkButton'));
    var lnkAddLender = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_AddLenderLinkButton'));
    var lnkEditLender = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_EditLenderLinkButton'));
    var lnkRemoveLender = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_RemoveLenderLinkButton'));
    var lnkAdCustodian = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_CustodianInfoUserControl_AddCustodianLinkButton'));
    var lnkEditCustodian = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_CustodianInfoUserControl_EditCustodianLinkButton'));
    var lnkRemoveCustodian = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_MortgageInfoUserControl_LenderInfo1_CustodianInfoUserControl_RemoveCustodianLinkButton'));

    //Guarantor

    var ddlGuarantorType = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorInfoUserControl_GuarantorTypeLabelDropDown'));
    var txtCorporationName = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorInfoUserControl_CorporationNameTextBox'));
    var ddlGOwnershipInterest = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorInfoUserControl_OwnershipInterestLabelDropDown'));
    var txtLimitofGuaranteeAmount = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorInfoUserControl_LimitOfGuaranteeAmountLabelTextBox'));
    var lnkRemoveGuarantor = element(by.css('#ctl00_DefaultContent_PropertiesDataList_ctl01_GuarantorInfoUserControl_DeleteGuarantorLinkButton'));

    //#region for methods in Property tab
    var date = new Date();
    var cucToday = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + '/' + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '/' + date.getFullYear();

    this.VerifyPropertyDetailsPropertyTab = function() {
        browser.sleep(2000);
        expect(lblDealDetails.getText()).toContain("Deal Details - Deal Information");
    };

    this.VerifyPropertyDetailsPropertyContent = function(FCTURN) {

        var date = new Date();
        var cucToday = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + '/' + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '/' + date.getFullYear();
        var date1 = new Date(closingDate);
        var cucClosingDate = ((date1.getDate() + 1) > 9 ? (date1.getDate() + 1) : '0' + (date1.getDate() + 1)) + '/' + ((date1.getMonth() + 1) > 9 ? (date1.getMonth() + 1) : '0' + (date1.getMonth() + 1)) + '/' + date1.getFullYear();

        //var cucToday = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
        expect(txtPurchasePrice.getAttribute("value")).toEqual("2,000,000.00");
        //var cucToday = date.getUTCDate()+'/'+date.getUTCMonth()+'/'+date.getFullYear();

        expect(txtOwnerpolicyClosingdate.getAttribute("value")).toEqual(cucToday);
        expect(rbtnIsMunicipalAddressAssigned.get(0).getAttribute("checked")).toEqual("true");

        expect(txtUnitNo.getAttribute("value")).toEqual('');
        expect(txtStreetNo.getAttribute("value")).toEqual('#21');
        expect(txtAddress1.getAttribute("value")).toEqual("Street Name");
        expect(txtAddress2.getAttribute("value")).toEqual("");
        expect(txtCity.getAttribute("value")).toEqual("Toronto");
        expect(ddlProvince.element(by.cssContainingText('option', 'Ontario')).getAttribute("selected")).toEqual("true");
        expect(txtPostalCode.getAttribute("value")).toEqual('');

        //expect(rbtnisThisvacantLand.getgetAttribute("checked")).toEqual("true");
        expect(rbtnisThisvacantLand.get(0).getAttribute("checked")).toBe(null);

        //expect(rbtnIsThisCondominium.element(by.cssContainingText('td','No')).getAttribute("checked")).toEqual("true");		
        expect(rbtnIsThisCondominium.get(1).getAttribute("checked")).toBe("true");
        //expect(rbtnisThisFirstNationLand.element(by.cssContainingText('td','No')).getAttribute("checked")).toEqual("true");	
        expect(rbtnisThisFirstNationLand.get(1).getAttribute("checked")).toBe("true");

        expect(ddlpropertyType.element(by.cssContainingText('option', 'Industrial')).getAttribute("selected")).toEqual(null);
        expect(ddlEsateType.element(by.cssContainingText('option', "Leasehold")).getAttribute("selected")).toEqual(null);
        expect(txtlandLoard.getAttribute("value")).toEqual('');
        expect(txtInstrumentType.getAttribute("value")).toEqual('');
        expect(txtLegalDescription.getAttribute("value")).toEqual('');
        expect(chkboxThispropertyrequiresunderwritingquestions.getAttribute("checked")).toEqual("true");
        expect(ddlProvince_Collateral.element(by.cssContainingText('option', 'Ontario')).getAttribute("selected")).toEqual("true");

    };

    this.ClickOnPropertyTab = function() {
        tabProperty.click();
        browser.sleep(1000);
    };
    this.ClickOnMortgagorPurchaserTab = function() {
        tabPurchaserMortgage.click();
        browser.sleep(1000);
    };
    this.VerifyPropertyDetailsForMortgagorPurchaser = function() {

        //expect(ddlCopyExistingPurchaserMortgagor.element(by.cssContainingText('option','Select Purchaser')).getAttribute("selected")).toEqual("true");
        //expect(ddlOwnershipType.element(by.cssContainingText('option','Person')).getAttribute("selected")).toEqual("true");
        ////expect(txtFirstName.getAttribute("value")).toEqual("test");
        //expect(txtMiddleName.getAttribute("value")).toEqual("test");
        //expect(txtLastName.getAttribute("value")).toEqual("test");
        //expect(ddlPOwnershipInterest.element(by.cssContainingText('option','Registered Owner')).getAttribute("selected")).toEqual("true");
        expect(txtPurchaseMortgagorUnitNo.getAttribute("value")).toEqual('');
        expect(txtPurchaseMortgagorStreetNo.getAttribute("value")).toEqual('');
        expect(txtPurchaseMortgagorAddress1.getAttribute("value")).toEqual('');
        expect(txtPurchaseMortgagorAddress2.getAttribute("value")).toEqual("");
        expect(txtPurchaseMortgagorCity.getAttribute("value")).toEqual('');
        expect(ddlPurchaseMortgagorProvince.element(by.cssContainingText('option', 'Ontario')).getAttribute("selected")).toEqual("true");
        expect(txtPurchaseMortgagorPostalCode.getAttribute("value")).toEqual('');
        expect(ddlPurchaseMortgagorCountry.element(by.cssContainingText('option', 'Canada')).getAttribute("selected")).toEqual("true");
    };
    this.ClickOnMortgageTab = function() {
        tabMortgage.click();
        browser.sleep(1000);
    };

    this.VerifyPropertyDetailsForMortgage = function() {

        expect(ddlAddExistingMortgage.element(by.cssContainingText('option', 'Select Mortgage')).getAttribute("selected")).toEqual("true");
        expect(ddlMortgagType.element(by.cssContainingText('option', 'Mortgage')).getAttribute("selected")).toEqual(null);
        expect(ddlPriority.element(by.cssContainingText('option', 'First')).getAttribute("selected")).toEqual(null);
        expect(txtMortgagAmount.getAttribute("value")).toEqual("20,000.00");
        expect(txtInsuredAmount.getAttribute("value")).toEqual("20,000.00");
        expect(dateLoanPolicyClosingDate.getAttribute("value")).toEqual(cucToday);

        expect(rbtnSubsequentAdvanceincreaseamountofInsurance.get(1).getAttribute("checked")).toEqual("true");
        expect(rbtnSubsequentAdvanceuptoamountOfInsurance.get(0).getAttribute("checked")).toEqual(null);
        expect(rbtnVariableRate.get(1).getAttribute("checked")).toEqual('true');
        expect(rbtnRevolvingCreditAdditionalPremiumApplies.get(0).getAttribute("checked")).toEqual(null);

    };

    this.ClickOnGuarantorTab = function() {
        tabGuarantor.click();
        browser.sleep(1000);
    };


};

module.exports = new CUCPropertyDetailsPage();
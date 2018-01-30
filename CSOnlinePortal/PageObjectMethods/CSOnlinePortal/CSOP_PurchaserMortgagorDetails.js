'use strict';

var PurchaserMortgagorDetails = function(){

//#region for Elements
                var lblPurchaserMortgagorInfoHeader = element(by.xpath('//h3[text()="Purchaser/Mortgagor Information"]'));
                var lblOwnershipType = element(by.xpath("//label[text()='Ownership Type:']"));
                var lblFirstName = element(by.xpath("//label[text()='First Name:']"));
                var lblMiddleName = element(by.xpath("//label[text()='Middle Name:']"));
                var lblLastName = element(by.xpath("//label[text()='Last Name:']"));
                var lblCorporationName = element(by.xpath("//label[text()='Corporation Name:']"));
                var lblOwnershipInterest = element(by.xpath("//label[text()='Ownership Interest:']"));
                var lblBeneficialOwnerName= element(by.xpath("//label[text()='Beneficial Owner Name:']"));
                var lblBeneficialOwnerconsented = element(by.xpath("//label[text()='Has the Beneficial Owner consented to this transaction?']"));
                
                var lblAddForServiceHeader = element(by.xpath(".//*[@id='stepper-step-3']/div/div/div[2]/purchaser/div/div/div/div[2]/div/h3"));  
                var lblUnitNo = element(by.xpath("//purchaser//label[text()='Unit No.:']"));
                var lblStreetNo = element(by.xpath("//purchaser//label[text()='Street No.:']"));
                var lblStreetName = element(by.xpath("//purchaser//label[text()='Street Name:']"));
                var lblCity = element(by.xpath("//purchaser//label[text()='City:']"));
                var lblProvince = element(by.xpath("//purchaser//label[text()='Province:']"));
                var lblPostalCode = element(by.xpath("//purchaser//label[text()='Postal Code:']"));

// --------------------------------------------------------------------

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

// #Endregion for Elements

//# region for methods

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
                          expect(lblOwnershipType.getText()).toEqual("Ownership Type:");
                          expect(lblFirstName.getText()).toEqual("First Name:");
                          expect(lblMiddleName.getText()).toEqual("Middle Name:");
                          expect(lblLastName.getText()).toEqual("Last Name:");
                          expect(lblCorporationName.getText()).toEqual("Corporation Name:");
                          expect(lblOwnershipInterest.getText()).toEqual("Ownership Interest:");
                          expect(lblBeneficialOwnerName.getText()).toEqual("Beneficial Owner Name:");
                          expect(lblBeneficialOwnerconsented.getText()).toEqual("Has the Beneficial Owner consented to this transaction?");

                          expect(lblAddForServiceHeader.getText()).toEqual('Address for Service:');
                          expect(lblUnitNo.getText()).toEqual("Unit No.:");
                          expect(lblStreetNo.getText()).toEqual("Street No.:");
                          expect(lblStreetName.getText()).toEqual("Street Name:");
                          expect(lblCity.getText()).toEqual("City:");
                          expect(lblProvince.getText()).toEqual("Province:");
                          expect(lblPostalCode.getText()).toEqual("Postal Code:");
          };

          this.EnterPrimaryMandatoryFieldPurchaser = function(){
                    
                     
                     ddlOwnershipType.element(by.cssContainingText('option','Corporation')).click();
                     txtCorporationName.sendKeys("Corporation Name");
                     //txtFirstName.sendKeys("First Name"); 
                    // txtMiddleName.sendKeys("Middle Name");
                   //  txtLastName.sendKeys("Last Name");
                     
                     ddlOwnershipInterest.element(by.cssContainingText('option','Beneficial Owner')).click();
                     txtBeneficialOwnerName.sendKeys("Beneficial Owner Name");
                     //rbtnBeneficialOwnerconsented.get(1).click(); 
          };
        this.EnterAddressForService = function(){

                     txtUnitNo.sendKeys("2");
                     txtStreetNo.sendKeys('#21'); 
                     txtStreetName.sendKeys('Street Name'); 
                     txtCity.sendKeys('Toronto');
                     browser.waitForAngular();
                     ddlProvince.element(by.cssContainingText('option','Ontario')).click();
                     txtPostalCode.sendKeys('A1A 1A1');
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
};

// loginPage.prototype = Object.create({},{
// txtUser_id:{get:function(){ return element(by.css('[id="username"]'));}},
// txtPassword:{get:function(){ return element(by.css('[id="password"]'));}},
// btnSignin:{ get:function(){ return element(by.css('[id="btnSignIn"]'));}},
// txtDealSearch:{ get:function(){ return element(by.css('[id="inputError1"]'));}},
// //btnSearch:{ get:function(){ return element(by.class("btn btn-default"));}},

// fnLogin:{value: function(){ 
//     //this.txtUser_id.sendKeys('stest4');
//     //this.txtPassword.sendKeys('Password3');
//     this.btnSignin.click();
//     //let self = this;
//     // self.txtUser_id.sendkeys('stest4'); 
//     // self.txtPassword.sendkeys('Password3');
//     // self.prototype.btnSignin.click();
//     //console.log(this.txtUser_id.get("type"));
//     this.txtDealSearch.sendKeys('16323009211');
//     //this.btnSearch.click();


    
// }}
// });

module.exports = new PurchaserMortgagorDetails();
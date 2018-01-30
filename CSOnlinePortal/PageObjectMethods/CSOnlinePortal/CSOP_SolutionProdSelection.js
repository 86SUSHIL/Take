'use strict';

//import xPathToCss from 'xpath-to-css';

//var xPathToCss = require("C:/CSOnlineProject/CSOnlineProject/node_modules/xpath-to-css/index.js");
//var xPathToCss = require(".node_modules/xpath-to-css/index.js");

//var userId = 'scsrt';
//var password = 'Password1';
//var url = 'https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx';

var CSProductSelPage = function() {

    //txtUser_id:{get:function(){ return element(by.css('[id="username"]'));}}
    //var txtUserId = function(){return element(by.id('dataUserName'));};


    //var txtProdSelect = function(){ return element(by.css('[xpath="//*[@id=\"content\"]/h1"]'));};
    var txtProdSelect = function() { return element(by.xpath('//*[@id=\"content\"]/h1')); };
    var btnCommercialSol = function() { return element(by.id('ctl00_DefaultContent_ucProductSelection_btnCSP')); };
    var btnRTIS = function() { return element(by.id('ctl00_DefaultContent_ucProductSelection_lnkRTIS')); };
    //var btnSigningService = function(){ return element(by.id('ctl00_DefaultContent_ucProductSelection_lnkSSA'));};

    this.VerifyProdSelectionPage = function() {
        expect(txtProdSelect().getText()).toEqual("Product Selection");
        expect(btnCommercialSol().getText()).toEqual("Commercial Solutions");
        expect(btnRTIS().getText()).toEqual("Residential Title Insurance Services");
        // expect(btnSigningService().getText()).toEqual("Signing Service Application");           
    };

    this.SelectProduct = function(ProductName) {
        switch (ProductName) {
            case 'CS':
                btnCommercialSol().click();
                break;
            case 'RTIS':
                btnRTIS().click();
                break;
                // case 'SSA':
                //     btnSigningService().click();
                //     break;
        };
    };

};

module.exports = new CSProductSelPage();
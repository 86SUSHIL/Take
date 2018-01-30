'use strict';

var CUCLoginPage = require('../PageObjectMethods/CUCPortal/CUC_Login.js');
var CUCHomePage = require('../PageObjectMethods/CUCPortal/CUC_Home.js');
// var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
//var TestData = require('../testData/Testdata_E1_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';


describe('Login - CUC Lawyer Portal', function() {

  it('Access CUC Lawyer Portal - Login  - Lawyer', function() {

    userId = RunSettings.data.Global.Users.CUCLawyer.USER_ID.value;
    password = RunSettings.data.Global.Users.CUCLawyer.PASSWORD.value;

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CUCLoginPage.CUCPortalLogin(userId,password);

    //Uncomment the following line if the application in non-angular application
    browser.ignoreSynchronization = true;

    CUCHomePage.VerifyCUCHomePage();
  })
  });

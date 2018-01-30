'use strict';

var CSLoginPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_LoginPage_Update.js');
var CSHomePage = require('../PageObjectMethods/CSOnlinePortal/CSOP_Home.js');
var CSProdSelPage = require('../PageObjectMethods/CSOnlinePortal/CSOP_SolutionProdSelection.js');

var RunSettings = require('../testData/RunSettings.JSON.js');
//var TestData = require('../testData/Testdata_E1_Login.JSON.js');
//var dataProvider = require('jasmine-data-provider');

var userId = '';
var password = '';

//var PerfRunner = require('..');

describe('This is for testing', function() {

  //var perfRunner = new PerfRunner(protractor, browser);

  it('Debug test', function() {

	var date1 = new Date("2019-12-13");
  //var date1 = new Date("Dec 01, 2001");
	var cucToday = date1.getDate()+'/'+(date1.getMonth()+2)+'/'+date1.getFullYear();

	var date = new Date();
		var cucToday = (date.getDate()>9?date.getDate():'0'+date.getDate())+'/'+((date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1))+'/'+date.getFullYear();
		var date1 = new Date(closingDate);
		var cucClosingDate = ((date1.getDate()+1)>9?(date1.getDate()+1):'0'+(date1.getDate()+1))+'/'+((date1.getMonth()+1)>9?(date1.getMonth()+1):'0'+(date1.getMonth()+1))+'/'+date1.getFullYear();		
  

    console.log(cucToday);
    console.log(date1);
    
  });



});
'use strict';

var testData = require('../testData/RunSettings.JSON.js');
var dataProvider = require('jasmine-data-provider');

 var Env = testData.data.Global.ENVIRONMENT.value;
 var CustomeLibrary = function(){

            this.GenerateFileNumber = function(){
            var  now = new Date();
            var LawyerFileNumber = Env+now.getFullYear()+(now.getMonth()+1)+now.getDay()+now.getHours()+now.getMinutes()+now.getSeconds();
            return LawyerFileNumber;
        };

    this.DatePicker = function () {
        var ClosingDate = new Date();
        var dd = ClosingDate.getDate() - 1;
        var mm = ClosingDate.getMonth() + 1; //January is 0!
        var yyyy = ClosingDate.getFullYear();
        
        
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        
        var day = weekday[ClosingDate.getDay()];
        
        if (dd > 30) {
            mm = mm + 1;
        }
        
        if (day == "Saturday") {
            dd = 2 + dd
            
        }
        if (day = "Sunday") {
            dd = 1 + dd
        }
        
        if (dd < 10) {
            dd = '0' + dd
        }
        
        if (mm < 10) {
            mm = '0' + mm
        }
        if (dd > 30) {
            dd = dd - 4
            if (day == "Saturday") {
                dd = 2 + dd
            
            }
            if (day = "Sunday") {
                dd = 1 + dd
            }
        }
        
        return ClosingDate = mm + '/' + dd + '/' + yyyy;

    };
       
 };

 module.exports = new CustomeLibrary();
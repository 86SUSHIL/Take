'use strict';

var loginPage = function(){

};

loginPage.prototype = Object.create({},{
txtUser_id:{get:function(){ return element(by.css('[id="username"]'));}},
txtPassword:{get:function(){ return element(by.css('[id="password"]'));}},
btnSignin:{ get:function(){ return element(by.css('[id="btnSignIn"]'));}},
txtDealSearch:{ get:function(){ return element(by.css('[id="inputError1"]'));}},
//btnSearch:{ get:function(){ return element(by.class("btn btn-default"));}},

fnLogin:{value: function(){ 
    //this.txtUser_id.sendKeys('stest4');
    //this.txtPassword.sendKeys('Password3');
    this.btnSignin.click();
    //let self = this;
    // self.txtUser_id.sendkeys('stest4'); 
    // self.txtPassword.sendkeys('Password3');
    // self.prototype.btnSignin.click();
    //console.log(this.txtUser_id.get("type"));
    this.txtDealSearch.sendKeys('16323009211');
    //this.btnSearch.click();
    
}}
});

module.exports = loginPage;
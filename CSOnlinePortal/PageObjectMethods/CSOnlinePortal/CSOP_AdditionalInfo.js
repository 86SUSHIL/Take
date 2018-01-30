'use strict';

var AdditionalInfo = function(){
    var FCTNotes = element(by.css('#Notes'));
    var chkConfirmROT = element.all(by.name('ConfirmROT'));

    this.EnterAdditionalInfo = function () {
        FCTNotes.sendKeys("Test Automation");
        //browser.waitForAngular();
        browser.sleep(4000);
        browser.actions().doubleClick(chkConfirmROT.get(0)).perform();
        // chkConfirmROT.get(1).doubleClick();
        //browser.waitForAngular();
        browser.sleep(4000);
    }
};

module.exports = new AdditionalInfo();
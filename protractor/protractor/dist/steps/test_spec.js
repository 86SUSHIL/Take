"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        protractor_1.browser.sleep(5000);
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
});

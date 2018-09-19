import { browser} from 'protractor'
describe('Protractor Typescript Demo', function() {
	it('title verifications', function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		browser.sleep(5000);
	 browser.getTitle().then(function(title){
		console.log("The title is  : "+title)
		browser.sleep(5000);
	  })
	});
});
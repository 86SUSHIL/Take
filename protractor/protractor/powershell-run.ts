var shell = require('node-powershell');
var ps = new shell({ debugMsg: true, noProfile: true});
var versionUpdate = process.argv[2];
var version = process.argv[3];
var argument = versionUpdate ? (' -version '+ versionUpdate + '-number' + version): '';

console.log(argument);
ps.addCommand('echo "Running webdriver-manager update"');
ps.addCommand('./web_driver_update_run.ps1' + argument);
ps.addCommand('echo "Finished running webdriver-manager update"')
    .then(function() {

        return ps.invoke();

    }).then(function(output){
        console.log(output);
        ps.dispose();
    })
    .catch(function(err){
        console.log(err);
        ps.dispose();
    });
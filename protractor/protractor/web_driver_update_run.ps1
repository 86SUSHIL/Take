param(
    [string]$version="--versions.chrome=2.28",
    [string]$number="2.22"
)

New-Alias exists Test-Path
if(exists(".\node_modules\protractor\node_modules\webdriver-manager\selenium\")){
    ri .\node_modules\protractor\node_modules\webdriver-manager\selenium\* -recurse
}

node .\node_modules\protractor\bin\webdriver-manager update $versionrni 
rni ".\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_$number.exe" "chromedriver_2.28.exe"
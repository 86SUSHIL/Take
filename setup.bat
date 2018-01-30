

ECHO OFF
CLS

:MENU
ECHO.
ECHO ............................................................
ECHO PRESS 1, 2, 3 OR 4 TO SELECT TASK, 5 FOR HELP or 6 to EXIT
ECHO ............................................................
ECHO.
ECHO 1 - Install Protractor
ECHO 2 - Update Webdriver-Manager
ECHO 3 - Install Jasmine-Spec Reporter
ECHO 4 - Install Jasmine-HTML Reporter
ECHO 5 - HELP
ECHO 6 - EXIT
ECHO.
SET /P M=Type 1, 2, 3, or 4 then press ENTER:
IF %M%==1 GOTO PROTRACTOR
IF %M%==2 GOTO WEBDRIVER
IF %M%==3 GOTO SPEC
IF %M%==4 GOTO HTML
IF %M%==5 GOTO HELP
IF %M%==6 GOTO EXIT

:PROTRACTOR
call npm install -g protractor

GOTO MENU

:WEBDRIVER

call webdriver-manager update --ignore_ssl
GOTO MENU

:SPEC

call npm install jasmine-spec-reporter --save-dev


GOTO MENU

:HTML

call npm install --save-dev protractor-jasmine2-screenshot-reporter
GOTO MENU


:HELP
ECHO issue:
ECHO 1) While updating webdriver using command- "webdriver-manager update", if below issue arise:-

ECHO Error: ENOENT: no such file or directory, open 'C:\Users\damin\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver-v0.9.0-win64.zip'

ECHO *Please do the needful steps shown below:


ECHO A.goto below path
ECHO C:\Users\<User Name folder eg- admin>\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium

ECHO Delete "geckodriver-vx.x.x.exe"

ECHO B. run "webdriver-manager update" again.

pause
cls
GOTO MENU

:EXIT
ECHO Thank You. BYE!!!

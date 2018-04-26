 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

 var https = require('https');
 module.exports = {
   '@tags': ['Create Two Jobs Delete One.js'],
    'Create Two Jobs Delete One.js': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;

     var dataProvider = 'DigitalGlobe Imagery (Foundation GEOINT)'
     client
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
         .menuNavigation(client,"Create DataPack")
         .createDatapack(client,'Broadlands','1','DigitalGlobe Imagery (Foundation GEOINT)','Clone')
         .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
         .click(`.qa-BreadcrumbStepper-FloatingActionButton-case0 > button`, `CSS`, `Click move to next step`)
         .elementPresent(`.qa-BreadcrumbStepper-step2Label`,`CSS`,`Step two label is showing`)
         .click(`.qa-BreadcrumbStepper-NavigationArrowBack-previous-case1 > path`,`CSS`,`Click move back one step`)
         .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
         .click(`.qa-BreadcrumbStepper-FloatingActionButton-case0 > button`, `CSS`, `Click move to next step`)
         .elementPresent(`.qa-BreadcrumbStepper-step2Label`,`CSS`,`Step two label is showing`)
         .pause(1000)
         .click(`.qa-BreadcrumbStepper-FloatingActionButton-case1 > button`, `CSS`, `Click move next step`)
         .elementPresent(`.qa-BreadcrumbStepper-step3Label`,`CSS`,`Step three label is showing`)
         .elTextIs(`.qa-ExportSummary-tr-name > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Export Name`,`Confirm Export Name`)
         .elTextIs(`.qa-ExportSummary-tr-description > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Description`,`Confirm Description` )
         .elTextIs(`.qa-ExportSummary-tr-category > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Project`,`Confirm Project` )
         .elTextIs(`.qa-ExportSummary-tr-layers > td:nth-of-type(2) > p`,`CSS`,dataProvider,`Confirm data provider` )
         .click(`.qa-BreadcrumbStepper-NavigationArrowBack-previous-case2 > path`, `CSS`, `Click move back one step`)
         .elementPresent(`.qa-BreadcrumbStepper-step2Label`,`CSS`,`Step two label is showing`)
         .assert.value(`[name=exportName]`,dataProvider+` Happy Path Test Export Name`,`Confirm Export Name`)
         .assert.value(`[name=datapackDescription]`,dataProvider+` Happy Path Test Description`,`Confirm Description` )
         .assert.value(`[name=projectName]`,dataProvider+` Happy Path Test Project`,`Confirm Project` )
         .pause(1000)
         .click(`.qa-BreadcrumbStepper-FloatingActionButton-case1 > button`, `CSS`, `Click move next step`)
         .elementPresent(`.qa-BreadcrumbStepper-step3Label`,`CSS`,`Step three label is showing`)
         .elTextIs(`.qa-ExportSummary-tr-name > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Export Name`,`Confirm Export Name`)
         .elTextIs(`.qa-ExportSummary-tr-description > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Description`,`Confirm Description` )
         .elTextIs(`.qa-ExportSummary-tr-category > td:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Project`,`Confirm Project` )
         .elTextIs(`.qa-ExportSummary-tr-layers > td:nth-of-type(2) > p`,`CSS`,dataProvider,`Confirm data provider` )
         .click(`.qa-BreadcrumbStepper-FloatingActionButton-case2 > button`,`CSS`,`Click submit datapack`)
         .elTextIs(`.qa-DataCartDetails-div-name > div > div:nth-of-type(2)`,`CSS`,dataProvider+` Happy Path Test Export Name`,`Confirm Datapack Name`)
         .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `SUBMITTED`, `El text is... "SUBMITTED"`)
         .pause(60000)
         .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,240000)
         .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `COMPLETED`, `El text is... "COMPLETED"`)
         .menuNavigation(client,"DataPack Library")
         .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
         .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path Test Export Name`)
         .keys("\uE006")
         .elTextIs('.qa-MapView-GridList > div > div > div > div > span > div > div > div > a',`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path Test Export Name`,`DataPack 1 is visable`)
         .elTextIs('.qa-MapView-GridList > div:nth-of-type(2) > div > div > div > span > div > div > div > a',`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path Test Export Name`,`DataPack 2 is visable`)
         .click(`.qa-MapView-GridList > div > div > div > div > span > div > div > div > a`,`CSS`,`Click Datapack`)
         .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`)
         .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
         .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path Test Export Name`)
         .keys("\uE006")
         .assert.elementNotPresent(`.qa-MapView-GridList > div:nth-of-type(2) > div > div > div > span > div > div > div > a`,`Datapack 2 is gone after deleted`)
         .click(`.qa-MapView-GridList > div > div > div > div > span > div > div > div > a`,`CSS`,`Click Datapack`)
         .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`)
         .assert.elementNotPresent(`.qa-MapView-GridList > div > div > div > div > span > div > div > div > a`,`Datapack 1 is gone after deleted`)
     .end();

       }
 };
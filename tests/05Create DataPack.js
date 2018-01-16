 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['CreateDataPack'],
    'CreateDataPack': function(client) {

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || `https://eventkit.dev.geointservices.io`;


     client
       .url(`https://eventkit.geointservices.io/login?redirect=%2Fexports`, 500, 500, `Load page... "https://eventkit.geointservices.io/login?redirect=%2Fexports"`)
       .maximizeWindow()
       .click(`div > div > div > div > div:nth-of-type(2) > button > div > div > span`, `CSS`, `Click element`)
       .pathIs(`/oam/west/servlet/login.jsp`, `Path is... "/oam/west/servlet/login.jsp"`)
       .click(`div > ul > li:nth-of-type(4) > a`, `CSS`, `Click element`)
       .click(`[name=password]`, `CSS`, `Click element`)
       .changeInput(`[name=password]`, `CSS`, client.globals.GeoAxisPass, `Change input to... "client.globals.GeoAxisPass"`)
       .click(`[name=username]`, `CSS`, `Click element`)
       .changeInput(`[name=username]`, `CSS`, client.globals.GeoAxisUser, `Change input to... "client.globals.GeoAxisUser"`)
       .click(`[name=submit]`, `CSS`, `Click element`)
       .elTextIs(`.qa-Application-Link-exports`, `CSS`, `DataPack Library`, `El text is... "DataPack Library"`)
       .elTextIs(`.qa-Application-Link-create`, `CSS`, `Create DataPack`, `El text is... "Create DataPack"`)
       .elTextIs(`.qa-Application-Link-about`, `CSS`, `About EventKit`, `El text is... "About EventKit"`)
       .elTextIs(`.qa-Application-Link-account`, `CSS`, `Account Settings`, `El text is... "Account Settings"`)
       .elTextIs(`.qa-Application-Link-logout`, `CSS`, `Log Out`, `El text is... "Log Out"`)
       .elementPresent(`div .qa-Application-header img`, `CSS`, `El is present`)
       .click(`div > a > div > button > div > div`, `CSS`, `Click element`)
       .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
       .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `washington`, `Change input to... "washington"`)
       .click(`.bootstrap-typeahead-menu > :nth-child(5) .qa-TypeaheadMenuItem-name`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .changeInput(`[name=exportName]`, `CSS`, `Sele`, `Change input to... "Sele"`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .click(`[name=datapackDescription]`, `CSS`, `Click element`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .changeInput(`[name=exportName]`, `CSS`, `Selenium Test GeoPackage`, `Change input to... "Selenium Test GeoPackage"`)
       .click(`[name=datapackDescription]`, `CSS`, `Click element`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=projectName]`, `CSS`, `Click element`)
       .changeInput(`[name=projectName]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=makePublic]`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div > label > div > input`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div:nth-of-type(2) > label > div > input`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div:nth-of-type(3) > label > div > input`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`.qa-BreadcrumbStepper-NavigationCheck`, `CSS`, `Click element`)
       .elTextIs(`div > form > div > div:nth-of-type(2) > div > table > tbody > tr > td:nth-of-type(2)`, `CSS`, `Selenium Test GeoPackage`, `El text is... "Selenium Test GeoPackage"`)
       .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(3) > table > tbody > tr > td:nth-of-type(2)`, `CSS`, `SUBMITTED`, `El text is... "SUBMITTED"`)
       .elementPresent(`div > form > div > div:nth-of-type(2) > div:nth-of-type(3) > table > tbody > tr:nth-of-type(3) > td:nth-of-type(2)`, `CSS`, `El is present`)
       .elTextIs(`form > div > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(2) > button > div > span`, `CSS`, `CLONE`, `El text is... "CLONE"`)
       .click(`form > div > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(3) > button > div > span`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(3) > div:nth-of-type(2) > button > div > span`, `CSS`, `Click element`)
       .click(`.qa-Application-Link-logout`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }
 };
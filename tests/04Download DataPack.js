 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['DownloadDataPack'],
    'DownloadDataPack': function(client) {
     

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
       .changeInput(`[name=username]`, `CSS`, 'PzTestPass16', `Change input to... "client.globals.GeoAxisUser"`)
       .click(`[name=submit]`, `CSS`, `Click element`)
       .click(`div > a > div > button > div > div`, `CSS`, `Click element`)
       .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
       .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `brasilia`, `Change input to... "brasilia"`)
       .click(`.bootstrap-typeahead-menu > :nth-child(2) .qa-TypeaheadMenuItem-name`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div:nth-of-type(2) > label > div > input`, `CSS`, `Click element`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .changeInput(`[name=exportName]`, `CSS`, `sl`, `Change input to... "sl"`)
       .changeInput(`[name=exportName]`, `CSS`, `se`, `Change input to... "se"`)
       .changeInput(`[name=exportName]`, `CSS`, `sele`, `Change input to... "sele"`)
       .changeInput(`[name=exportName]`, `CSS`, `seleni`, `Change input to... "seleni"`)
       .changeInput(`[name=exportName]`, `CSS`, `selenium `, `Change input to... "selenium "`)
       .changeInput(`[name=exportName]`, `CSS`, `selenium t`, `Change input to... "selenium t"`)
       .changeInput(`[name=exportName]`, `CSS`, `selenium test`, `Change input to... "selenium test"`)
       .click(`[name=datapackDescription]`, `CSS`, `Click element`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `selen`, `Change input to... "selen"`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `selenium`, `Change input to... "selenium"`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `selenium test`, `Change input to... "selenium test"`)
       .click(`[name=projectName]`, `CSS`, `Click element`)
       .changeInput(`[name=projectName]`, `CSS`, `selen`, `Change input to... "selen"`)
       .changeInput(`[name=projectName]`, `CSS`, `seleni`, `Change input to... "seleni"`)
       .changeInput(`[name=projectName]`, `CSS`, `selenium`, `Change input to... "selenium"`)
       .changeInput(`[name=projectName]`, `CSS`, `selenium `, `Change input to... "selenium "`)
       .changeInput(`[name=projectName]`, `CSS`, `selenium test`, `Change input to... "selenium test"`)
       .click(`[name=makePublic]`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`.qa-BreadcrumbStepper-NavigationCheck`, `CSS`, `Click element`)
       .click(`.qa-BreadcrumbStepper-NavigationCheck`, `CSS`, `Click element`)
       .pause(60000)
       .waitForElementPresent(`div > :nth-child(3) .qa-ProviderRow-Check-providerStatus`,120000)
       .click(`.qa-ProviderRow-ArrowDown`, `CSS`, `Click element`)
       .click(`.qa-ProviderRow-ArrowDown`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div:nth-of-type(4) > div > div:nth-of-type(3) > div:nth-of-type(2) > table > tbody > tr > td:nth-of-type(2) > svg > path`, `CSS`, `Click element`)
       .switchToWindow(1, `CHANGE_WINDOW_AUTO`)
       .switchToWindow(2, `CHANGE_WINDOW_AUTO`)
       .click(`form > div > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(3) > button > div > span`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(3) > div:nth-of-type(2) > button > div > span`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }
 };
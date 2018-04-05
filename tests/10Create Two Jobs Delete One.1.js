 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

 var https = require('https');
 module.exports = {
   '@tags': ['Create Two Jobs Delete One.js'],
    'Create Two Jobs Delete One.js': function(client) {

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
     .url(client.globals.EventKitBase, 500, 500, `Load page... "client.globals.EventKitBase"`)
     .maximizeWindow()
     .click(`div > div > div > div > div:nth-of-type(2) > button > div > div > span`, `CSS`, `Click element`)
     .pathIs(`/oam/west/servlet/login.jsp`, `Path is... "/oam/west/servlet/login.jsp"`)
     .click(`div > ul > li:nth-of-type(4) > a`, `CSS`, `Click element`)
     .click(`[name=password]`, `CSS`, `Click element`)
     .changeInput(`[name=password]`, `CSS`, client.globals.GeoAxisPass, `Change input to... "client.globals.GeoAxisPass"`)
     .click(`[name=username]`, `CSS`, `Click element`)
     .changeInput(`[name=username]`, `CSS`, client.globals.GeoAxisUser, `Change input to... "client.globals.GeoAxisUser"`)
     .click(`[name=submit]`, `CSS`, `Click element`)
     .click(`.qa-Application-Link-create`, `CSS`, `Click element`)
     .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
     .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `chantilly`, `Change input to... "chantilly"`)
     .click(`.bootstrap-typeahead-menu > :nth-child(2) .qa-TypeaheadMenuItem-description`, `CSS`, `Click element`)
     .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
     .click(`#nameField`, `CSS`, `Click element`)
     .changeInput(`#nameField`, `CSS`, `Chantilly Test 1`, `Change input to... "Chantilly Test 1"`)
     .changeInput(`#descriptionField`, `CSS`, `test`, `Change input to... "test"`)
     .changeInput(`#projectField`, `CSS`, `test`, `Change input to... "test"`)
     .click(`[name=makePublic]`, `CSS`, `Click element`)
     .click(`div > form > div > div:nth-of-type(8) > div > div:nth-of-type(4) > label > div > input`, `CSS`, `Click element`)
     .click(`div > div:nth-of-type(2) > div > button > div > div > svg > path`, `CSS`, `Click element`)
     .click(`div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > button > div > div`, `CSS`, `Click element`)
     .pause(60000)
     .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,480000)
     .click(`.qa-Application-Link-exports`, `CSS`, `Click element`)
     .click(`div > a > div > button > div > div > span`, `CSS`, `Click element`)
     .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
     .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `chantilly`, `Change input to... "chantilly"`)
     .click(`.bootstrap-typeahead-menu > :nth-child(2) .qa-TypeaheadMenuItem-description`, `CSS`, `Click element`)
     .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
     .click(`#nameField`, `CSS`, `Click element`)
     .changeInput(`#nameField`, `CSS`, `Chantilly Test 2`, `Change input to... "Chantilly Test 2"`)
     .changeInput(`#descriptionField`, `CSS`, `test`, `Change input to... "test"`)
     .changeInput(`#projectField`, `CSS`, `test`, `Change input to... "test"`)
     .click(`[name=makePublic]`, `CSS`, `Click element`)
     .click(`div > form > div > div:nth-of-type(8) > div > div:nth-of-type(4) > label > div > input`, `CSS`, `Click element`)
     .click(`div > div:nth-of-type(2) > div > button > div > div > svg > path`, `CSS`, `Click element`)
     .click(`div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > button > div > div`, `CSS`, `Click element`)
     .pause(60000)
     .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,480000)
     .click(`.qa-Application-Link-exports`, `CSS`, `Click element`)
     .click(`.qa-MapView-GridList > :nth-child(1) .qa-DataPackListItem-NavigationMoreVert`, `CSS`, `Click element`)
     .click(`div > div:nth-of-type(2) > span > div > div > div`, `CSS`, `Click element`)
     .click(`.qa-DataPackPage-ToolbarGroup-search > div > input`, `CSS`, `Click element`)
     .changeInput(`.qa-DataPackPage-ToolbarGroup-search > div > input`, `CSS`, `Chantilly Test 2`, `Change input to... "Chantilly Test 2"`)
     .sendKeys(`.qa-DataPackPage-ToolbarGroup-search > div > input`, client.Keys.ENTER)
     .click(`div > div > div > div > div > div > span > div > div > div > a`, `CSS`, `Click element`)
     .click(`form > div > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(3) > button > div > span`, `CSS`, `Click element`)
     .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`, `CSS`, `Click element`)
     .end();

       },
      afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };
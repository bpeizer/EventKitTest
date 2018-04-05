 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Filters'],
    'Filters': function(client) {

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
       .url(client.globals.EventKitBase, 500, 500, `Load page... "client.globals.EventKitBase"`)
       .maximizeWindow()
       .click(`div > div > div:nth-of-type(3) > button > span`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div:nth-of-type(2) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div:nth-of-type(2) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div > button > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(4) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(4) > input`, `CSS`, `Click element`)
       .click(`.qa-DateFilter-DatePicker-from > div > input`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div > div:nth-of-type(3) > div > div > div:nth-of-type(2) > button:nth-of-type(2) > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`.qa-DateFilter-DatePicker-to > div > input`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div > div:nth-of-type(3) > div > div > div:nth-of-type(2) > button:nth-of-type(5) > div`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div > button > span`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };
const TIMEOUT = 10000;
const random = "" + parseInt(Math.random() * 1000000);
const random1 = "" + parseInt(Math.random() * 1000000);
const random2 = "" + parseInt(Math.random() * 1000000);
const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
module.exports = {
    '@tags': ['Create Group Add Remove User'],
    'Create Group Add Remove User': function(client) {

        require('../common/snaptest-nw-driver.js').bindHelpers(client);
        require('../common/components.js').bindComponents(client);

        var baseUrl = client.launchUrl || client.globals.EventKitBase;


        client
            .url(client.globals.EventKitBase)
            .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
            .menuNavigation(client,'Members and Groups')
            .click(`.qa-UserGroupsPage-RaisedButton-create`,`CSS`,`click create group`)
            .click(`.qa-CreateGroupDialog-textField > input`,`CSS`,`click group name input`)
            .changeInput(`.qa-CreateGroupDialog-textField > input`,`CSS`,`Selenium Testing`)
            .click(`.qa-CreateGroupDialog-save`,`CSS`,`Save testing group`)
            .elTextIs(`.qa-GroupsDrawer-groupItem > div > div > div:nth-of-type(2) > div`,`CSS`,`Selenium Testing`,`Selenium testing shows under groups`)
            .click(`.qa-UserGroupsPage-search > input`,`CSS`,`Search users input box`)
            .changeInput(`.qa-UserGroupsPage-search > input`,`CSS`,`pzuser02`,`Search users input box`)
            .click(`.qa-UserTableRowColumn-IconButton-options`,`CSS`,`Click group drop down`)
            .click(`.qa-GroupsDropDownMenuItem-groupName`,`CSS`,`Click group`)
            .click(`.qa-GroupsDrawer-groupItem > div > div > div:nth-of-type(2) > div`,`CSS`,`click Selenium Testing group`)
            .elTextIs(`.qa-UserTableRowColumn-email`,`CSS`,`pzuser02@gxaws.dev`,`pzuser02 in group`)
            .click(`.qa-UserTableRowColumn-IconButton-options`,`CSS`,`Click group drop down`)
            .click(`.qa-GroupsDropDownMenuItem-groupName`,`CSS`,`Click group`)
            .assert.elementNotPresent(`.qa-UserTableRowColumn-email`,`CSS`,`pzuser2 is no longer present`)
            .click(`.qa-GroupsDrawer-groupOptions`,`CSS`,`Click group options`)
            .click(`.qa-GroupsDrawer-group-delete`,`CSS`,`Delete group`)
            .click(`.qa-DeleteGroupDialog-delete`,`CSS`,`Confirm Delete group`)
            .assert.elementNotPresent(`.qa-GroupsDrawer-groupItem > div > div > div:nth-of-type(2) > div`,`CSS`,`Selenium testing doesnt shows under groups`)
            .menuNavigation(client,`Logout`)
            .end();
    }
};
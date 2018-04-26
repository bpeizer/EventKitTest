exports.command = function(client,nameOfAOI,numberOnList,dataProvider,otherOptions){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);

    var providerNumber;
    switch(dataProvider){
        case "DigitalGlobe Imagery (Foundation GEOINT)":
            providerNumber=1;
            break;
        case "NOME":
            providerNumber=2;
            break;
        case "OpenStreetMap Data (Themes)":
            providerNumber=3;
            break;
        case "OpenStreetMap Tiles":
            providerNumber=4;
            break;
    }

    client
        .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
        .click(`.bootstrap-typeahead-input-main`, `Click AOI input`)
        .changeInput(`.bootstrap-typeahead-input-main`,`CSS`,nameOfAOI, `Change input to...`+nameOfAOI)
        .click(`.bootstrap-typeahead-menu > :nth-child(`+numberOnList+`) .qa-TypeaheadMenuItem-name`, `CSS`, `Click AOI from finder`)
        .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
        .click(`.qa-BreadcrumbStepper-FloatingActionButton-case0 > button`, `CSS`, `Click move to next step`)
        .elementPresent(`.qa-BreadcrumbStepper-step2Label`,`CSS`,`Step two label is showing`)
        .click(`.qa-BreadcrumbStepper-NavigationArrowBack-previous-case1 > path`,`CSS`,`Click move back one step`)
        .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
        .click(`.qa-BreadcrumbStepper-FloatingActionButton-case0 > button`, `CSS`, `Click move to next step`)
        .elementPresent(`.qa-BreadcrumbStepper-step2Label`,`CSS`,`Step two label is showing`)
        .click(`[name=exportName]`, `CSS`, `Click datapack name`)
        .changeInput(`[name=exportName]`, `CSS`, dataProvider+` Happy Path Test Export Name`, `Change input to... `+dataProvider+` Happy Path Test Export Name`)
        .click(`[name=datapackDescription]`, `CSS`, `Click datapack description`)
        .changeInput(`[name=datapackDescription]`, `CSS`, dataProvider+` Happy Path Test Description`, `Change input to... `+dataProvider+` Happy Path Test Description`)
        .click(`[name=projectName]`, `CSS`, `Click datapack project`)
        .changeInput(`[name=projectName]`, `CSS`, dataProvider+` Happy Path Test Project`, `Change input to... `+dataProvider+` Happy Path Test Project`)
        .click(`[type=checkbox]:nth-of-type(`+providerNumber+`)`, `CSS`, `Click data provider checkbox`)
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
        .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `COMPLETED`, `El text is... "COMPLETED"`);
        switch(otherOptions){
            case "Run Export Again":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-rerunExport > button`,`CSS`,`Click Rerun Export`)
                    .click(`.qa-DataPackOptions-RaisedButton-rerun > button`,`CSS`,`Confirm Rerun`)
                break;
            case "Clone":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-cloneExport > button`,`CSS`,`Click Clone`)
                    .click(`.qa-DataPackOptions-RaisedButton-clone > button`,`CSS`,`Confirm Clone`);
                break;
            case "Delete":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
                    .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`);
                break;
            default:
                break;
        }
    return client;
};
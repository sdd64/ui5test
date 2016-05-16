jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"acando/blog/fiori/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"acando/blog/fiori/test/integration/pages/App",
	"acando/blog/fiori/test/integration/pages/Browser",
	"acando/blog/fiori/test/integration/pages/Master",
	"acando/blog/fiori/test/integration/pages/Detail",
	"acando/blog/fiori/test/integration/pages/Create",
	"acando/blog/fiori/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "acando.blog.fiori.view."
	});

	sap.ui.require([
		"acando/blog/fiori/test/integration/MasterJourney",
		"acando/blog/fiori/test/integration/NavigationJourney",
		"acando/blog/fiori/test/integration/NotFoundJourney",
		"acando/blog/fiori/test/integration/BusyJourney",
		"acando/blog/fiori/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});
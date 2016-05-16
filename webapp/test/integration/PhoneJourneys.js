jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"acando/blog/fiori/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"acando/blog/fiori/test/integration/pages/App",
	"acando/blog/fiori/test/integration/pages/Browser",
	"acando/blog/fiori/test/integration/pages/Master",
	"acando/blog/fiori/test/integration/pages/Detail",
	"acando/blog/fiori/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "acando.blog.fiori.view."
	});

	sap.ui.require([
		"acando/blog/fiori/test/integration/NavigationJourneyPhone",
		"acando/blog/fiori/test/integration/NotFoundJourneyPhone",
		"acando/blog/fiori/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});
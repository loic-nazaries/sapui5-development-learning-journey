sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.NotFound", {

        onNavToOverview: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            
            oRouter.navTo("overview", {}, true);
        }
    });
});
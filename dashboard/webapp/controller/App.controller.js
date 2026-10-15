sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("dashboard.controller.App", {
        onInit() {
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.attachRouteMatched(this._onRouteMatched, this);
        },

        onExit() {
            this._oRouter.detachRouteMatched(this._onRouteMatched, this);
        },

        onItemSelect(oEvent) {
            const sRouteName = oEvent.getParameter("item").getKey();
            this._oRouter.navTo(sRouteName);
        },

        onSideNavButtonPress() {
            const oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },

        _onRouteMatched(oEvent) {
            this.byId("navigationList").setSelectedKey(oEvent.getParameter("name"));
        }
    });
});
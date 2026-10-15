sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
	"use strict";

	return Controller.extend("sap.training.exc.controller.Detail", {

        onInit: function () { 
            var oRouter = this.getOwnerComponent().getRouter(); 

            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        
        _onObjectMatched: function (oEvent) {
            this.getView().bindElement("/UX_Customer" + oEvent.getParameter("arguments").customerId);
        },

        onNavBack: function () { 
            var oHistory = History.getInstance(); 
            var sPreviousHash = oHistory.getPreviousHash(); 
            
            if (sPreviousHash !== undefined) { 
                window.history.go(-1); 
            } else { 
                var oRouter = this.getOwnerComponent().getRouter(); 
                oRouter.navTo("overview", {}, true); 
            }
        }
    });
});
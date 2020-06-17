sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function(Controller, UIComponent, History){
    "use strict"

    return Controller.extend("webapp.controller.Master", {
        onInit: function(){

        },

        onListPress: function(oEvent){
           var oRouter = UIComponent.getRouterFor(this);
            var oItem = oEvent.getSource();
            var sPath = oItem.getBindingContext().getPath();
            console.log("oRouter", oRouter)
            console.log("oItem", oItem)
            console.log("sPath", sPath  )
            oRouter.navTo("detail", {
                supplierPath: encodeURIComponent(sPath)
            })
        }
    })
})
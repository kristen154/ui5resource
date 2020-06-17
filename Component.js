/**
 * Created by kitt on 2020/6/15.
 */
sap.ui.define([
    "sap/ui/core/UIComponent",

], function(UIComponent){
    "use strict"
    return UIComponent.extend("webapp.Component", {
        metadata: {
            manifest: "json"
        },


        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
        }
    })
})
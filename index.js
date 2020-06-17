/**
 * Created by kitt on 2020/6/15.
 */
sap.ui.define([
    "sap/m/Shell",
    "sap/ui/core/ComponentContainer",
    "webapp/Component"
], function(Shell, ComponentContainer, Component){
    new Shell({
        app: new ComponentContainer({
            height: "100%",
            component: new Component({
                id: "app"
            })
        })
    }).placeAt("content")
})
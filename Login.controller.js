sap.ui.controller("logintestsoftware.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf logintestsoftware.Login
*/
	onInit: function() {
		
//		var sServiceUrl = "https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01";
//		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
//		var oJsonModel = new sap.ui.model.json.JSONModel();
//		
//		oModel.read("/GatewayService01Set", null, null, true, function(oData,response) {
//			
//			oJsonModel.setData(oData);
//			
//		});
//		sap.ui.getCore().setModel(oJsonModel);
		

//		var oModel = new sap.ui.model.odata.ODataModel("https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01", false);
//		sap.ui.getCore().setModel(oModel);
		
		
//		const Http = new XMLHttpRequest();
//		const url='https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01/$metadata';
//		Http.onreadystatechange=(e)=>{
//		console.log(Http.responseText)
//		}
//		Http.open("GET", url);
//		Http.send();
		
			
		var sServiceUrl = "https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01/";
		
		var oModel = new sap.ui.model.odata.v4.ODataModel({
			  serviceUrl: sServiceUrl,
			  synchronizationMode: "None"
			});

//        var oModel = new sap.ui.model.odata.v4.ODataModel(sServiceUrl, { tokenHandling: false, headers: {
//            "Access-Control-Allow-Origin": "*.ovgu.de"
//        }});
        
//        ODataModel(url, {
//        	  tokenHandling: false
//        	})

        sap.ui.getCore().setModel(oModel);
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf logintestsoftware.Login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf logintestsoftware.Login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf logintestsoftware.Login
*/
//	onExit: function() {
//
//	}

});
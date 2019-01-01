sap.ui.controller("logintestsoftware.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf logintestsoftware.Login
*/
//	onInit: function() {
//		
		
		

//		
//
//	}
//	
	login: function(){
		
		//v4 Data binding test
																
//		var sServiceUrl = "https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01/";
//		var oModel = new sap.ui.model.odata.v4.ODataModel({
//			  serviceUrl: sServiceUrl,
//			  synchronizationMode: "None",
//			  updateGroupId : "$direct",
//			  groupId : "$direct",
//			});
//		
//		sap.ui.getCore().setModel(oModel);
//		
//		var oUser = this.getView().byId("User").getValue();
//		var oPwd  = this.getView().byId("Pwd").getValue();
//		
//		var oContext = oModel.bindContext("/Test(...)");
//		oContext.setParameter("IBenutzername" , oUser);
//		oContext.setParameter("IPasswort" , oPwd);
//		oContext.execute();

			//mit v2 und dirty quick chrome --disable-web-security --user-data-dir -> POST is forbidden
			//https://cors-anywhere.herokuapp.com/
		var sServiceUrl = "https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01/";
		
		var oModel = new sap.ui.model.odata.v2.ODataModel({
			  serviceUrl: sServiceUrl,
//			  synchronizationMode: "None"
			});
		
		oModel.setUseBatch(false);
		
		sap.ui.getCore().setModel(oModel);
		
		var oUser = this.getView().byId("User").getValue();
		var oPwd  = this.getView().byId("Pwd").getValue();
		
		var oEntry = {};
		oEntry.IBenutzername = oUser;
		oEntry.IPasswort	 = oPwd;
		oEntry.EResultString = "";
		
//		jQuery.sap.require("sap.ui.commons.MessageBox");
		console.log(oModel.create("/GatewayService01Set", oEntry)); //, null, function () {
		
//		console.log(oModel);
		
//
//			  sap.ui.commons.MessageBox.alert("Success!") ;
//
//			  }, function () {
//
//			  sap.ui.commons.MessageBox.alert("Error!");
//
//			  });
		
	},
	});
//		

//	}


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
//		var name = this.refs.text.value();
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf logintestsoftware.Login
*/
//	onExit: function() {
//
//	}



//sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {
//    var oModel = new ODataModel({
//        serviceUrl : "https://r51z.ucc.ovgu.de/sap/opu/odata/SAP/ZPROJEKT2019_N01_SRV_01/",
//        synchronizationMode : "None",
//        updateGroupId : "myAppUpdateGroup"
//    });
//});
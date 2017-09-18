define(['app','service/viewclientinfoservice'], function (app) {
	app.controller('viewclientinfocontroller', ['$scope', '$http','ViewClientInfo', function($scope, $http,ViewClientInfo) {
		
		initclientInformation();
		$scope.viewRecords = false; 
		$scope.countryselection = {};
		$scope.clientList = {};
		
		function initclientInformation(){
			
			//Load the client data - Service will be called to get the client Information
			ViewClientInfo.getClientList().then(function(response) {
				 $scope.showClientDataList = ViewClientInfo.response;
				 	$scope.viewRecords = true;
				});
			/*
			$(document).ready(function() {
			    $('#example').DataTable( {
			        "pagingType": "full_numbers"
			    } );
			} );*/
    	}
		
	}]);
});
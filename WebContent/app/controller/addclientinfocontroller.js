define(['app','service/addclientinfoservice'], function (app) {
	app.controller('addclientinfocontroller', ['$scope','$http','AddClientInfo',function($scope,$http,AddClientInfo) {
		
		initclientInformation();
		$scope.countryselection = {};
		$scope.clientList = {};
		$scope.savedrecord = false;
		
		
		function initclientInformation(){
			
			//Load the Country selection
			$http.get("app/mock-json/country.json").success(function(response) {
				$scope.countryselection = response;
				console.log($scope.countryselection);
				}).error(function (errorMessage){
					$scope.errorMessage = errorMessage; 
				});
			
			//Load the client data
			$http.get("app/mock-json/clientList.json").success(function(response) {
			    $scope.clientList = response;
			}).error(function (errorMessage){
				$scope.errorMessage = errorMessage; 
			});
			
			//Telephone Regular Expression
			$scope.Telregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
			
			//Postal Code Regular Expression
			$scope.postalregex = /^[A-Z]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/g;
    	}
    	//Salary Regex - Start
    	$scope.salaryregex = function(province){
    		var regex;
    		if(province.code == 'QU'){
    			 // CASE : 40000 , 40 000 and 40 000,00 are valid
    			regex  = '^[0-9, ]+$';
    		}else{
    			// Case : 40000 and 40,000.00 are valid
    			 regex  ='^[0-9.,]+$';
    		}
    		return regex;
    	}
    	//Salary Regex - End
    	
		//Save client record - start
		$scope.saverecord = function(a){
			
			
			$scope.user = a;
			console.log("JSON.stringify()=="+JSON.stringify($scope.user));
			AddClientInfo.getClientList($scope.user).then(function(response) {
				//alert(JSON.stringify(response));
				});
			$scope.savedrecord = true;
		};
		//Save client record - end
		
		$scope.clearRecord = function(user){
			
			$scope.savedrecord = false;
			user.name = "";
			user.province = "";
			user.telephone = "";
			user.postalcode = "";
			user.salary = "";
		}
	}]);
});
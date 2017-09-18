define(['angularAMD'], function (angularAMD) {
	angularAMD.factory('AddClientInfo', function ($http,$q) {
        
		var addClientInfo = {}; 
		addClientInfo.response = {};
		 
		addClientInfo.getClientList = function(queryData){
			
			//alert(JSON.stringify(queryData));

			var deferred = $q.defer();
			
			/*$http.get("app/mock-json/clientList.json").success(function(response) {
				addClientInfo.response = response;
				deferred.resolve();
			}).error(function (){
				deferred.reject("No data found corresponding to the request"); 
			});*/
			
			// Once you have your Rest Service up, please use the below code to access the same
			
			var request = {
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : queryData,
				url : 'http://127.0.0.1:8080/addRecord/add'
			}
    		$http(request).success(function(response)
    				{
             addClientInfo.response = response;
    			deferred.resolve();
    		}).error(function(){
    			deferred.reject("No data found corresponding to the request");
    		});
			
    		return deferred.promise;
		};
		
		return addClientInfo;
});

});

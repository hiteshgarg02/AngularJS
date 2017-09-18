define([ 'angularAMD', 'ui.bootstrap', 'directives'], function(angularAMD) {
	
	var app = angular.module("test", ['ui.bootstrap']);
	
	return angularAMD.bootstrap(app);
});
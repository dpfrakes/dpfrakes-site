var gtApp = angular.module('gtApp', ['ui.router']);

gtApp

	.run(function($rootScope) {

		$rootScope.$on('$stateChangeSuccess', function() {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

		// $rootScope.$on('$stateChangeStart', 
		// 	function(event, toState, toParams, fromState, fromParams){
		// 		// block transitionTo home for hamburger menu click
		// 		if (toState.name == "home") {
		// 			// event.preventDefault();
		// 		}
		// })

	})

	.config(function($provide) {

		// TODO

	})

	.filter('startFrom', function() {
      return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
      }
    })

;

angularMovieApp.directive('myStars', function() {
	
	return {
		templateUrl: 'partials/starsdirective.html',
		scope: {
			'rate': '='
		},
		//transclude: true,
		//controllerAs: 'starsCtrl',
		controller: function($scope) {
			$scope.fiveStars = [1,2,3,4,5];
		},
		link: function($scope, $element, $attributes) {
			//On introduit un peu de kitch dans notre directive avec jQuery
			$element.on('click','.star', function() {
				$(this).animate({
					'font-size': '28px'
				}).animate({
					'font-size': '14px'
				});
			})
		}
	};
	
});


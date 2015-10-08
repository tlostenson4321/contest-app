angular.module('videoApp', [])

angular.module('videoApp')
	.controller('rageTroller', ['$scope', '$http', function($scope, $http){

		$scope.greeting= 'Need to get some Rage out??'

		$http.get('/getPosts')
			.then(function(returnPost){
				$scope.posts= returnPost.data
			})


		$scope.createPost = function(){


			$http.post('/createpost', $scope.newPost)
				.then(function(returnPost){

					$scope.posts = returnPost.data
				})
		}






	}])
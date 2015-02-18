"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, $http) {

    $http.get('/server/api/movies').success(function(resp){
        $scope.movies = resp;
    });

        $scope.deleteMovie = function(index){

        $http.delete('/server/api/movies/' + $scope.movies[index].id)
            .success(function(){
                $scope.movies.splice(index,1);
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

angularMovieApp.controller("movieEditController" ,function ($scope, $http, $routeParams, $location) {

    $http.get('/server/api/movies/' + $routeParams.id).success(function(resp){
        $scope.movie = resp;
       
    });

    $scope.saveMovie = function(movie){

        $http.put('/server/api/movies', movie)
            .success(function(){
                $location.path('/movies');
                //$scope.movies.splice(index,1);
            })
            .error(function(resp){
                console.log(resp);
            });

    };

        

});

angularMovieApp.controller("movieFormController" ,function ($scope, $http) {

    $scope.addMovie = function(movie){

        $http.post('/server/api/movies', movie)
            .success(function($data){
                
                movie.id - $data.id;
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };




});


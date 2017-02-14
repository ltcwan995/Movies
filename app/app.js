(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',['ngRoute','top250App','detailApp','searchApp']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/detail/:id',{
            templateUrl:'detail/detail.html',
            controller:'detailController'
        }).when('/home_page',{
            templateUrl:'home_page/view.html'
        }).when('/search/:q',{
            templateUrl:'search/view.html',
            controller:"searchController"
        }).when('/:movieType/:page?',{
            //:后面接的是路由参数，加一个问题表示这个参数可有可无
            templateUrl:'movieType/view.html',
            controller:"top250Controller"
        }).otherwise({
            redirectTo:'/home_page'
        })
    }]);
   app.controller('setLocal',['$scope','$location',function ($scope,$location) {
        $scope.submit= function () {
            $location.url('/search/'+$scope.val);
        }
   }]);
})(angular);
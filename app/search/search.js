/**
 * Created by admin on 2016/11/4.
 */
var app = angular.module('searchApp',['MyService']);
app.controller('searchController',['MyJsonP','$routeParams','$scope',function (MyJsonP,$routeParams,$scope) {
    //MyJsonP.myJsonp()
    //   /search/:q
    //http://api.douban.com/v2/movie/search?q={text}
    MyJsonP.myJsonp('http://api.douban.com/v2/movie/search',{q:$routeParams.q}, function (response) {
        $scope.data=response;
    })

}]);
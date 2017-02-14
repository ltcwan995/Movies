/**
 * Created by admin on 2016/11/2.
 */
var app = angular.module('top250App',['MyService']);
app.controller('top250Controller',[
    "$scope",
    '$http',
    'MyJsonP',
    '$routeParams',
    '$route',
    '$location',
    function ($scope,$http,MyJsonP,$routeParams,$route,$location){
    console.log($location.url());
    var count = 5;
    $scope.page = $routeParams.page||1;
    $scope.start =  ($scope.page-1)*count;
    var url = "http://api.douban.com/v2/movie/"+$routeParams.movieType;
        MyJsonP.myJsonp(url,{count:count,start:$scope.start}, function (response) {
        $scope.total = response.total;
        $scope.totalPage = Math.ceil($scope.total/count);
        if($scope.page<1){
            $scope.page=1;
        }else if($scope.page>$scope.totalPage){
            $scope.page=$scope.totalPage
        }
        $scope.data = response;
        $scope.$apply();
    });

    $scope.str= function (arr) {
        var myStr="";
        for(var i=0;i<arr.length;i++){
            myStr+=arr[i]+" ";
        }
        return myStr;
    };
	
    $scope.goUp= function () {
        if($scope.page<2){
            return;
        }else{
            var prePage = ($scope.page-0)-1;
            //$route可以改变路由参数；
            $route.updateParams({page:prePage})
        }
    };
    $scope.goDown= function () {
            if($scope.page>$scope.totalPage){
                return;
            }else{
                var NextPage = ($scope.page-0)+1;
                //$route可以改变路由参数；
                $route.updateParams({page:NextPage})
            }

    }
}]);
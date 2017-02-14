/**
 * Created by admin on 2016/11/2.
 */
var app = angular.module('detailApp',['MyService']);
app.controller('detailController',['MyJsonP',
    '$routeParams',
    '$scope',
    function (MyJsonP,$routeParams,$scope) {
        var url = 'http://api.douban.com/v2/movie/subject/'+$routeParams.id;
        MyJsonP.myJsonp(url,{}, function (response) {
            $scope.data = response;
            console.log($scope.data);
            
            $scope.$apply();
        });
        
        $scope.str= function (arr) {
        var myStr="";
        for(var i=0;i<arr.length;i++){
            myStr+=arr[i]+" ";
        }
        return myStr;
    };
    $scope.actor= function (arr) {
		console.log(arr)
        var myStr="";
        for(var i=0;i<arr.length;i++){
            myStr+=arr[i].name+" ";
        }
        return myStr;
    };
//for(var i=0;i<$scope.data.casts.length;i++){
//                    var casts= $scope.data.casts.[i].avatars.name;
//                    console.log(casts)
//                  };
}]);
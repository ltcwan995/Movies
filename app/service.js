/**
 * Created by admin on 2016/11/3.
 */
var app = angular.module('MyService',[]);
app.service('MyJsonP',['$window',function ($window) {
    this.myJsonp =function(url,data,fn){
        var srcEle = $window.document.createElement("script");
        $window.document.body.appendChild(srcEle);
        var myUrl = url+"?";
        for(var key in data){
            myUrl+=key+"="+data[key]+"&";
        }
        var fnName = 'jsonp'+Math.random().toString().substr(2);
        $window[fnName]= function (data) {
            fn(data);
            $window.document.body.removeChild(srcEle);
        };
        srcEle.src=myUrl+("callback="+fnName)+"&apikey=0e5b8a3605ac4a0a2b129ea21104de1e";
    };
    //自定义模块使用方法：第一步：引入定义服务的js文件
    //第二步：哪里要用这个方法，就在哪里引入这个模块，同时在控制器中注入
    //这个方法；
}]);
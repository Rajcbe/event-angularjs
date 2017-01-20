
var app=angular.module('mymodule',[])
   .controller("mycontrlr",function($scope){
 	var employee=[{firstname:"Raj",
lastname:"sdfss",
designation:"Front end Developer",
likes:0,
dislikes:0

 },
 {firstname:"Pushparaj",
lastname:"Ckjh",
designation:"Front end Developer",
likes:0,
dislikes:0
 },
 {firstname:"Rajcool",
lastname:"werd",
designation:"Front end Developer",
likes:0,
dislikes:0
 }
 ];
 	$scope.emp=employee;

     $scope.incrementlikes=function(tech){
     	tech.likes++;
     }
     $scope.incrementdislikes=function(tech){
     	tech.dislikes++;
     }

 	 });
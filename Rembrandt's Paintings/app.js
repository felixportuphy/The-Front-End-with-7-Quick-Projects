let app = angular.module("RembrandtApp", []);
app.controller("PaintingController",function($scope){
    $scope.paintingCount = 0;
    $scope.paintings = [
        "images/avatar1.png",
        "images/avatar2.png",
        "images/avatar3.png",
        "images/avatar4.png",
        "images/avatar5.png",
        "images/avatar6.png",
        "images/avatar7.png",
    ];

    $scope.previous=function(){
        $scope.paintingCount =$scope.paintingCount -1;
    };

    $scope.next=function(){
        $scope.paintingCount =$scope.paintingCount +1;
    };
});
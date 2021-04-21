let app = angular.module("singersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic":"images/avatar4.png", "name":"beyonce","gender":"female", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"lady gaga","gender":"female", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"taylor swift","gender":"female", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"bruno mars","gender":"male", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"ariana grande","gender":"female", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"katy perry","gender":"female", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"justin bieber","gender":"male", "quality":"images/wrong.png"},
        {"pic":"images/avatar4.png", "name":"selena gomez","gender":"female", "quality":"images/wrong.png"},


    ]
   
});
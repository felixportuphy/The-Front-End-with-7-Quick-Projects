let app = angular.module("RankingLeadersApp", []);
app.controller("RankController",function($scope){

    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold;
    }
    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver;
    }
    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze;
    }
    

    $scope.Leaders = [
        {"pic":"images/avatar1.png", "rank":1},
        {"pic":"images/avatar2.png", "rank":1},
        {"pic":"images/avatar3.png", "rank":1},
        {"pic":"images/avatar4.png", "rank":2},
        {"pic":"images/avatar5.png", "rank":2},
        {"pic":"images/avatar6.png", "rank":2},
        {"pic":"images/avatar7.png", "rank":3},
        {"pic":"images/avatar8.png", "rank":3},
        {"pic":"images/avatar9.png", "rank":3},

    ]
   
});
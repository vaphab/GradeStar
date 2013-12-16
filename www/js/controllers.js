var GradeStar = angular.module("GradeStar", []);

GradeStar.controller("GradeStarController", function($scope) {
    $scope.students = [
	{"name": "Bart"},
	{"name": "Maggie"}
    ];
    $scope.newsfeed = [
	{"text": "Maggie gets an A+!"},
	{"text": "Bart barely passes the test!"}
    ]
});

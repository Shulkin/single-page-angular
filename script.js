// include ngRoute for all routing needs
var scotchApp = angular.module("scotchApp", ["ngRoute"]);

// configure routes
scotchApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    // route for the home page
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "mainController"
    })
    // route for the about page
    .when("/about", {
      templateUrl: "pages/about.html",
      controller: "aboutController"
    })
    // route for the contact page
    .when("/contact", {
      templateUrl: "pages/contact.html",
      controller: "contactController"
    }); // <--- ; here is mandatory!
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// create the controllers and inject Angular's $scope
scotchApp.controller("mainController", function($scope) {
  $scope.message = "Message from Main Controller";
});

scotchApp.controller("aboutController", function($scope) {
  $scope.message = "Message from About Controller";
});

scotchApp.controller("contactController", function($scope) {
  $scope.message = "Message from Contact Controller";
});

var app = angular.module('appNaturally', ['ngRoute']);

app.controller('naturallyController', ['$scope', function ($scope) {
    $scope.facebook = {
        username: "",
        email: ""
    };
    $scope.facebookLogin = function () {
        FB.login(function (response) {
           if(response.authResponse) {
               FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture'}, function(response) {
                   $scope.$apply(function () {
                       $scope.facebook.username = response.name;
                       $scope.facebook.first_name = response.first_name;
                       $scope.facebook.email = response.email;
                       $scope.fb_image = response.picture.data.url;
                   })
               });
           } else {
               //erro
           }
        }, {
            scope: 'email, user_likes',
            return_scopes: true
        });
    }
}]);
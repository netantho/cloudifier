# Declare app level module which depends on filters, and services
angular.module('cloudifier', [
  'ngRoute'
  'cloudifier.filters'
  'cloudifier.services'
  'cloudifier.directives'
  'cloudifier.controllers'
])
  .config(['$routeProvider', ($routeProvider) ->
    $routeProvider.when '/view1',
      templateUrl: 'templates/partials/partial1.html'
      controller: 'MyCtrl1'
    $routeProvider.when '/view2',
      templateUrl: 'templates/partials/partial2.html'
      controller: 'MyCtrl2'
    $routeProvider.otherwise {redirectTo: '/view1'}
  ])

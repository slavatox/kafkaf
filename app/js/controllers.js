'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
          $scope.test= 'всем привет';
          //alert('jjoo');
          
   $scope.phones = [
    {'name': 'Шамиль',
     'family': 'Минасов'},
    {'name': 'Светлана',
     'family': 'Милушкина'},
    {'name': 'Сагит',
     'family': 'Валеев'}
  ];     
  }]);
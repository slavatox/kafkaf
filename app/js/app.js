'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/О кафедре', {templateUrl: 'partials/Ab_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Бакалавриат', {templateUrl: 'partials/Bag_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Контакты', {templateUrl: 'partials/Kont_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Магистратура', {templateUrl: 'partials/Mg_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Научная работа', {templateUrl: 'partials/Nayc_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Специалитет', {templateUrl: 'partials/Spec_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Преподаватели', {templateUrl: 'partials/Prep_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Расписание', {templateUrl: 'partials/Raspis.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Новости', {templateUrl: 'partials/Novos.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Документы', {templateUrl: 'partials/Dock.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Направления и специальности', {templateUrl: 'partials/Spec.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/Лаборатории', {templateUrl: 'partials/Lab.html', controller: 'MyCtrl1'});
  $routeProvider.when('/О проекте', {templateUrl: 'partials/Razrab.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Главная', {templateUrl: 'partials/Glavnaya.html', controller: 'MyCtrl1'});
    $routeProvider.when('/Фотогалерея', {templateUrl: 'partials/Foto.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/Главная'});
}]);

$(function(){
 if ($(window).scrollTop()>="10") $("#ToTop").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="10") $("#ToTop").fadeOut("slow")
   else $("#ToTop").fadeIn("slow")
 });

 if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
   else $("#OnBottom").fadeIn("slow")
 });

 $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")})
 $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
});
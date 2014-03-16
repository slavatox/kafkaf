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
  $routeProvider.when('/О кафедре', {templateUrl: 'partials_en/Ab_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Бакалавриат', {templateUrl: 'partials_en/Bag_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Контакты', {templateUrl: 'partials_en/Kont_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Магистратура', {templateUrl: 'partials_en/Mg_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Научная работа', {templateUrl: 'partials_en/Nayc_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Специалитет', {templateUrl: 'partials_en/Spec_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Преподаватели', {templateUrl: 'partials_en/Prep_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Расписание', {templateUrl: 'partials_en/Raspis.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Новости', {templateUrl: 'partials_en/Novos.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Документы', {templateUrl: 'partials_en/Dock.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Направления и специальности', {templateUrl: 'partials_en/Spec.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/Лаборатории', {templateUrl: 'partials_en/Lab.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Главная', {templateUrl: 'partials_en/Glavnaya.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Фотогалерея', {templateUrl: 'partials_en/Foto.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Русская версия', {templateUrl: 'kafkaf/app/index.html', controller: 'MyCtrl1'});
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
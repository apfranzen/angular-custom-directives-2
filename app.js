(function() {
  'use strict';

  const app = angular.module('myApp', [])
  app
    .controller('AppController', AppController)
    .directive('todd',  ToddDirective)

  AppController.$inject = []

  function AppController () {}

  ToddDirective.$inject = []

  function ToddDirective() {
    console.log('todd!!!!!');
    return {
      restrict: 'A',
      scope: {},
      controller: function($scope) {
        $scope.sayHelloTodd = function() {
          alert('Hi.')
        }
      },
      // template: "<p style='border: 1px solid;'>hi</p>",
      // link: function (scope, element, attrs, ctrl, transcludeFn) {
      //   console.log('attrs', attrs);
      //   element.on('click', function() {
      //     scope.sayHelloTodd()
      template: "<p style='border: 1px solid;'>hi</p>",
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        console.log('attrs', attrs);
        element.on('mouseover', function() {
          // scope.sayHelloTodd()
          element.css('background-color', attrs.backgroundColor)
          element.css('color', attrs.textColor)
        })
        element.on('mouseleave', function() {
          element.css('background-color', 'blue')
        })
      }
    }
  }
}());

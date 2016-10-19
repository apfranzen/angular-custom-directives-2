(function() {
  'use strict';

  const app = angular.module('myApp', [])
  app
    .controller('AppController', AppController)
    .directive('dice',  DiceDirective)

  AppController.$inject = []

  function AppController () {}

  DiceDirective.$inject = []

  function DiceDirective() {
    console.log('dice!!!!!');
    return {
      restrict: 'A',
      scope: {},
      controller: function($scope) {
      },
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        element.on('click', function() {
          let num = Math.floor(Math.random() * 6);
          element.text(num)
        })
      }
    }
  }
}());

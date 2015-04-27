/**
 * Created by ahundiak on 4/25/2015.
 */
(function() { 'use strict';
  angular.module('myApp1',[])
    .factory('Person', function (visitor) {
      return function Person(name) {
        this.name = name;
        this.greet = function () {
          if (visitor.country === 'UK') {
            return 'Good day to you, ' + this.name + '.';
          }
          else {
            return 'Hey ' +  this.name + '!';
          }
        };
      };
    });

  angular.module('myApp',[]).factory('Person', PersonFactory2);

  //noinspection JSUnusedLocalSymbols
  function PersonFactory2(visitor)
  {
    return function(name) {
      this.name = name;

      //noinspection JSUnusedGlobalSymbols
      this.greet = function () {
        if (visitor.country === 'UK') {
          return 'Good day to you, ' + this.name + '.';
        }
        else {
          return 'Hey ' + this.name + '!';
        }
      };
    }
  }
  angular.module('myApp3',[]).factory('Person', PersonFactory);

  //noinspection JSUnusedLocalSymbols
  function PersonFactory(visitor)
  {
    var visitor;
    return Person;
  }
  function Person(name) {

    this.name = name;

    //noinspection JSUnusedGlobalSymbols
    this.greet = function () {
      if (visitor.country === 'UK') {
        return 'Good day to you, ' + this.name + '.';
      }
      else {
        return 'Hey ' + this.name + '!';
      }
    };
  }
})();

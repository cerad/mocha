/**
 * Created by ahundiak on 4/25/2015.
 */
(function() { 'use strict';

  exports.PersonFactory = PersonFactory;

  //noinspectionx JSUnusedLocalSymbols
  function PersonFactory(visitor)
  {
    return function (name) {
      this.name = name;

      //noinspectionx JSUnusedGlobalSymbols
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
/*
  function Person(name)
  {
    this.name = name;

    //noinspection JSUnusedGlobalSymbols
    this.greet = function () {
      if (visitor.country === 'UK') {
        return 'Good day to you, ' + this.name + '.';
      }
      else {
        return 'Hey ' +  this.name + '!';
      }
    };
  }
  */
})();

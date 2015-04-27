/**
 * Created by ahundiak on 4/24/2015.
 */
var assert = require("assert");
var calc   = require('../src/calc');

describe('Calculator', function() {
  describe('#multiple()', function () {
    it('should return 6 for 2x3', function () {
      assert.equal(6, calc.multiply(2,3));
    });
  });
});
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));

      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
      expect([1,2,3].indexOf(2)).to.equal( 1);
    });
  });

  describe('#length()', function(){
    it('should return 3', function(){
      assert.equal(3, [1,2,3].length);
      expect([1,2,3]).to.have.length(3);
    });
  });
});


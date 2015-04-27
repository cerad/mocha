/**
 * Created by ahundiak on 4/25/2015.
 */
var expect = require("chai").expect;
var person = require('../src-node/person');

var Person, visitor;

describe('Node Person', function () {
  beforeEach(function()
  {
    visitor = {country: 'USA'};
    Person = person.PersonFactory(visitor);
  });
  describe('Constructor', function () {
    it('assigns a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });
  });
  describe('#greet', function () {
    it('greets UK visitors formally', function () {

      visitor = {country: 'UK'}
      Person = person.PersonFactory(visitor);
      expect(new Person('Nigel').greet()).to.equal('Good day to you, Nigel.');
    });
    it('greets others visitors informally', function () {
      expect(new Person('Ben').greet()).to.equal('Hey Ben!');
    });
  });
});


var assert = require("chai").assert,
    expect = require("chai").expect,
    should = require("chai").should,
    p = require('./package.json');

describe('package.json', function () {

  it ('should exist', function () {
    assert.ok(p);
  });

  it ('should be an object', function () {
    should();
    p.should.be.a('object');
  });

  it ('should define a scripts tag', function () {
    expect(p).to.have.property('scripts');
  });

});

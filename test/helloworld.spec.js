var assert = require('chai').assert;
var helloworld = require('../app/helloworld');

describe('First suite', function () {
	it('should show hello world', function () {
      assert.equal(helloworld(), 'Hello world');
    });
});
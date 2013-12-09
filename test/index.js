var pinterestShare = 'undefined' == typeof window
  ? require('..')
  : require('pinterest-share'); // how to do this better?

var assert = require('assert');

describe('pinterestShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});

var assert = require("chai").assert;
var reverseArray = require("../check.js");

describe("reverseArray", function(){
  it("should reverse an array", function(){
    var array = [1, 2, 3, 4, 5];
    var result = reverseArray(array);
    assert.deepEqual([5, 4, 3, 2, 1], result);
  });
});
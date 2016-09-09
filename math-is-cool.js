var sum = function(x,y) {
  return x + y;
}

module.exports = {
  PHI: 1.618,
  explain: function(x,y) {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
    console.log("The sum of x and y is:" + sum(x,y));
    return "blah";
  }
};



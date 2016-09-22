
// Array.each - Array.forEach alias.
Array.prototype.each = Array.prototype.forEach;

// Object.eachKey - Iterates over key/value pairs.
Object.prototype.eachKey = function (cb) {
  var k = Object.keys(this);
  for (var i = 0; i < k.length; i++)
    cb(k[i], this[k[i]]);
};

// times - Runs cb() n times.
var times = function (n, cb) {
  for (var i = 0; i < n; i++) cb(n);
};

// Array.range - for a 2-item array, creates an array of numbers in that range.
Array.prototype.range = function () {
  var ar = [];
  for (var i = this[0]; i <= this[1]; i++)
    ar.push(i);
  return ar;
};

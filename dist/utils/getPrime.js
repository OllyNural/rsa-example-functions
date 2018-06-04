'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _primes = require('./primes.json');

var _primes2 = _interopRequireDefault(_primes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Very complex prime number selector
 * Selects a random prime number from a list of primes between 1000 and 5000
 * Very secure, the best
 */
var getPrime = function getPrime() {
  var rn = Math.floor(Math.random() * _primes2.default.length);
  return _primes2.default[rn];
};

exports.default = getPrime;
//# sourceMappingURL=getPrime.js.map
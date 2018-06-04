'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decryption = exports.encryption = exports.keyDistribution = exports.keyGen = undefined;

var _utils = require('./utils');

/**
 * https://en.wikipedia.org/wiki/RSA_(cryptosystem)
 */
var keyGen = function keyGen() {
    // Choose 2 distinct prime numbers, p and q
    var p = (0, _utils.getPrime)();
    var q = (0, _utils.getPrime)();
    // compute n = pq
    var n = p * q;
    // Compute and store totient = lcm(p - 1, q - 1) 
    var totient = (0, _utils.lcm)(p - 1, q - 1);
    // Choose an integer e, such that 1 < e < totient AND e is coprime with totient
    var e = (0, _utils.calcCoprime)(2, totient);
    // determine d as d = e-1 mod totient (mod multiplicative inverse of e)
    var d = (0, _utils.inverseMod)(e, totient);
    return {
        n: n,
        d: d
    };
};

var keyDistribution = function keyDistribution() {};

var encryption = function encryption() {};

var decryption = function decryption() {};

exports.keyGen = keyGen;
exports.keyDistribution = keyDistribution;
exports.encryption = encryption;
exports.decryption = decryption;
//# sourceMappingURL=index.js.map
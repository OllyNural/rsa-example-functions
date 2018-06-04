'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lcm = require('./lcm');

describe('lcm', function () {
    test('', function () {
        expect((0, _lcm.lcm)(48, 180)).toBe(720);
    });
});

describe('gcd', function () {
    test('', function () {
        expect((0, _lcm.gcd)(48, 180)).toBe(12);
    });

    test('', function () {
        expect((0, _lcm.gcd)(180, 48)).toBe(12);
    });

    test('', function () {
        expect((0, _lcm.gcd)(56, 15)).toBe(1);
    });
});

describe('calcCoprime', function () {
    test('Should calc coprime correctly', function () {
        var totient = 2924246; // lcm(4787 -1, 1223 - 1)
        expect(_typeof((0, _lcm.calcCoprime)(2000, totient))).toBe('number');
    });

    test('', function () {
        var totient = 121968; // lcm(1009 -1, 3389 - 1) 
        expect(_typeof((0, _lcm.calcCoprime)(2000, totient))).toBe('number');
    });
});
//# sourceMappingURL=lcm.test.js.map
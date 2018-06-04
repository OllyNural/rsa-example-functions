'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getPrime = require('./getPrime');

var _getPrime2 = _interopRequireDefault(_getPrime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('', function () {
    test('', function () {
        for (var i = 0; i < 2000; i++) {
            expect(_typeof((0, _getPrime2.default)())).toBe('number');
        }
    });
});
//# sourceMappingURL=getPrime.test.js.map
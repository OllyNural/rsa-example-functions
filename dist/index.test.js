'use strict';

var _ = require('./');

describe('keyGen', function () {

    var mockUtils = {
        getPrime: jest.fn(),
        lcm: jest.fn(),
        calcCoprime: jest.fn()
    };

    beforeAll(function () {
        jest.mock('./utils', function () {
            return mockUtils;
        });
    });

    beforeEach(function () {
        mockUtils.getPrime.mockReset().mockReturnValue(5);
        mockUtils.lcm.mockReset().mockReturnValue(10);
        mockUtils.calcCoprime.mockReset().mockReturnValue(15);
    });

    test('Basic test', function () {
        (0, _.keyGen)();
    });
});
//# sourceMappingURL=index.test.js.map
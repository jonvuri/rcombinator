var _ = require('underscore');


var rcomb = {};

rcomb.splat = function splat(fn) {
    return function (array) {
        return _.map(array, fn);
    };
};

rcomb.get = function get(attr) {
    return function (object) {
        return object[attr];
    }
};

rcomb.pluck = function pluck(attr) {
    return rcomb.splat(rcomb.get(attr));
};

rcomb.maybe = function maybe(fn) {
    return function () {
        var i;
        
        if (arguments.length === 0) {
            return;
        } else {
            for (i = 0; i < arguments.length; ++i) {
                if (arguments[i] == null) {
                    return arguments[i];
                }
            }
            return fn.apply(this.arguments);
        }
    };
};

module.exports = exports = rcomb;


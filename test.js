var rcomb = require('./');
var expect = require('chai').expect;

module.exports = {
    'splat': function () {
        var square = function (x) { return x * x; };
        var squareMap = rcomb.splat(square);
        
        var result = squareMap([2, 3]);
        expect(result).to.be.deep.equal([4, 9]);
    },
    
    'get': function () {
        var obj = {blend: 'veranda'};
        
        expect(rcomb.get('blend')(obj)).to.equal('veranda');
    },

    'pluck': function () {
        var obj = [{roast: 'dark'}, {roast: 'light'}];
        
        expect(rcomb.pluck('roast')(obj)).to.be.deep.equal(['dark', 'light']);
    },
    
    'maybe': function () {
        var returnfoo = function () { return 'foo'; };
        
        expect(rcomb.maybe(returnfoo)('bar')).to.equal('foo');
    },

    'maybe not': function () {
        var returnfoo = function () { return 'foo'; };
        
        expect(rcomb.maybe(returnfoo)()).to.be.undefined;
    }
};


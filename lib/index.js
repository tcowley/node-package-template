// Main template API. This is the guts of the app.
// This file is imported by the cli, the published api, and tests

module.exports = exports = {};

exports.foo = function() { 
    if (arguments.length) {
        throw new Error('no args allowed!');
    }
};

exports.bar = function(name, cb) {
    
    return name === 'bar' ? name : cb(true)
    
};

exports.baz = function() {};

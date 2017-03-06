// Main template API

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

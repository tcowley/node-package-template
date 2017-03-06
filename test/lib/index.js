var test = require('tape-catch');
var template = require('../../lib/index.js');

var fixtures = {};

test('test template.foo()', function(t) {
    t.throws(function() { template.foo('foo'); } , "foo cannot take arguments");
    t.equals(1, 1, "one is one");
    t.end()
});

test('test template.bar()', function(t) {
    t.plan(2);
    template.bar('barx', function cb1(err, out) {
        var msg = "bar must throw when name is not 'bar'";
        err ? t.pass(msg) : t.fail(msg);
    }); 
    t.equals('bar', template.bar('bar'), "bar must return 'bar' when name is 'bar'");
});

test('test template.baz()', function(t) {
    t.equals(1, 1, "one is one");
    t.end()
});

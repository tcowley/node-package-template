// this file is what gets imported when the app is used as a package in another app.
var template = require('./lib/index.js');

module.exports = {
    foo: template.foo,
    bar: template.bar
};



#!/usr/bin/env node

var program = require('commander');
var template = require('./lib/index.js');
var pkg = require('./package.json');

module.exports = program;

program
    .version(pkg.version);

program .command('init <arg1> <arg2>')
    .description('initialize')
    .option("-s, --silent", "skip interactive, and build the default setup")
    .action(init)
    .on('--help', initHelp);

program.parse(process.argv);
process.argv.slice(2).length || program.outputHelp();


function init(arg1, arg2, options) {
    console.log('running init: ', arg1, arg2, options.silent);
}

function initHelp() {
    console.log('formatted init help');
}

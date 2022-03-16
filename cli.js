#!/usr/bin/env node

const yargs = require("yargs");
const {
    findwordpronounce
} = require('.')
const usage = "\nUsage: persianpronunciation <word> persian word to get pronunciations";
const help = "\nUsage: persianpronunciation <word> persian word to get pronunciations .\n\nuse --help for more info";
const options = yargs
    .usage(usage)
    .option("r", {
        alias: "raw",
        describe: "return raw data",
        type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;
if (yargs.argv._[0] == null) {
    console.log(help);
    return;
}
console.log('> pronunciations of : "' + yargs.argv._[0] + "\"");
var pronounce = findwordpronounce(yargs.argv._[0]);

if (typeof pronounce != 'undefined') {
    if (yargs.argv.r == true) {
        console.log(pronounce);
        return;
    }
    console.log('> totaL pronunciations : "' + pronounce.length + "\"");
    console.log('> pronunciations : ');
    console.log(pronounce.join(','));
} else {
    console.log('no pronunciations found');
}
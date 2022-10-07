#!/usr/bin/env node
const program = require("commander");
const semver = require("semver");
const requiredVersion = require("../package.json").engines.node;
const { log } = require("./lib/utils");
const { tipMsg,create } = require("./lib");
const chalk = require('chalk')
//check node version

function checkNodeVersion (wanted){
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    log.error(
      `混沌CLI要求node版本为${wanted},当前你的node版本为${process.version},请升级`
    );
    process.exit(1);
  }
};
checkNodeVersion(requiredVersion);
// version
program.version(require("../package.json").version, "-v,--version");
async function executeCommand (){
await tipMsg(['welcome','to','hundun','cli']);
create()
  program.on('--help',()=>{
    log.success(`混沌工程化`)
    log.success(`官方网站：${chalk.cyan('http://39.105.46.228/')}`)
  })
  // log.success(`混沌工程化`)
  // log.success(`官方网站：${chalk.cyan('http://39.105.46.228/')}`)
  program.parse(process.argv);
};
executeCommand()


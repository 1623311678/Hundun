const path = require("path");
const { exit } = require("process");
const { hExec, log, hCopy,deleteFile } = require("../../lib/utils");
const {projectTypeMap} = require('./../../constant')

async function executeCreateproject(type, name) {
  log.success(`
  项目创建中……，
  `);
  const cmdStr = `git clone ${projectTypeMap[type]} ${name}`
  hExec(cmdStr)
  hExec(`cd ${name} && git remote remove origin`)
  deleteFile(`${process.cwd()}/${name}/.git`)
  log.success(`
  项目创建完成
  请按照下列步骤启动项目
  1、cd ${name}
  2、npm install
  3、npm start
  `);
 
}
module.exports = {
  executeCreateproject,
};

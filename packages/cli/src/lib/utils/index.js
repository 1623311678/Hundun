const fs = require("fs");
const { exit } = require("process");
const path = require('path')
const { execSync } = require("child_process");
const rimraf = require('rimraf');
const log = require("./log");

function hExec(commandStr, hCwd = process.cwd()) {
  execSync(`${commandStr}`, { cwd: hCwd }, (err, stdout, stderr) => {
    if (err) {
      log.error(err);
      return;
    }
  });
}
function hCopy(source, target) {
  // 为了在 Windows 上兼容，可以使用 xcopy 命令
  const copyCommand = process.platform === 'win32' ? 'xcopy' : 'cp -r';
  // 使用 execSync 执行同步命令
  execSync(`${copyCommand} ${source} ${target}`, { stdio: 'inherit' });
}
function checkDir(target) {
  const dirs = fs.readdirSync("./");
  for (let i = 0; i < dirs.length; i++) {
    const currentDir = dirs[i];
    if (currentDir === target) {
      log.error("当前工作区已经存在该目录，请重新输入项目名称");
      exit(1);
    }
  }
}
function deleteFile(filePath) {
  try {
      // 删除文件
      rimraf.sync(filePath);
  } catch (error) {
     // console.error(`删除文件时出错: ${error.message}`);
  }
}
module.exports = {
  log,
  checkDir,
  hExec,
  hCopy,
  deleteFile
};

const fs = require("fs");
const { exit } = require("process");
const { execSync } = require("child_process");
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
  hExec(`cp -r ${source} ${target}`);
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

module.exports = {
  log,
  checkDir,
  hExec,
  hCopy,
};

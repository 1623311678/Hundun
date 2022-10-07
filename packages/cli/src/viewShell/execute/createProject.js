const path = require("path");
const { exit } = require("process");
const { hExec, log, hCopy } = require("../../lib/utils");

async function executeCreateproject(type, name) {
  const basic = path.resolve(
    __dirname,
    "../../../node_modules/hundun-templates"
  );
  switch (type) {
    case "Vue": {
      log.error("暂不支持Vue项目，敬请期待");
      exit(1);
      break;
    }
    case "React": {
      const source = `${basic}/react`;
      hCopy(source, `${process.cwd()}/${name}`);
      // hExec()
      log.success(`
        项目创建完成
        请按照下列步骤启动项目
        1、cd ${name}
        2、npm install
        3、npm start
        `);
    }
  }
}
module.exports = {
  executeCreateproject,
};

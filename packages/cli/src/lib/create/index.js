const program = require("commander");
const inquirer = require("inquirer");
const { checkDir, log, hExec } = require("../utils");
const { CommandId,projectTypeMap } = require("../../constant");
const { viewShell } = require("../../viewShell");

const path = require("path");

function create() {
  program
    .command("create <项目名称>")
    .description("创建标准化项目，eg:hundun create my-app")
    .option("my-app", "要创建的项目名称")
    .action(async (name, option) => {
      checkDir(name);
      const res = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: "选择项目类型？",
          choices: Object.keys(projectTypeMap),
        },
      ]);
      const payload = {
        type: res.type,
        name: name,
      };
      await viewShell(CommandId.CREATE_PROJECT, payload);
    });
}
module.exports = {
  create,
};

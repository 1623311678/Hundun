const { execute } = require("./execute");
async function viewShell(cId, payload) {
  await execute(cId, payload);
}
module.exports = {
  viewShell,
};

const { log } = require("./utils");
const { create } = require("./create");
async function tipMsg(content) {
  log.tipMsg(content);
}
module.exports = {
  tipMsg,
  create,
};

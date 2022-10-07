const { CommandId } = require("../../constant");
const {executeCreateproject} = require('./createProject')
async function execute(cId, payload) {
  switch (cId) {
    case CommandId.CREATE_PROJECT: {
      const { type, name } = payload;
      await executeCreateproject(type, name);
    }
    break;
  }
}
module.exports = {
  execute,
};

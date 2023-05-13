const logger = async function (ctx, next) {
  let stime = new Date().toISOString();
  console.log(stime, ctx.method, ctx.host + ctx.url);
  await next();
};
module.exports = () => logger;

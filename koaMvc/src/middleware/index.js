const path = require('path')
const bodyParser = require('koa-bodyparser')
// const nunjucks = require('koa-nunjucks-2')
// const staticFiles = require('koa-static')

const miSend = require('./midsend')
const logger = require('./logger')
module.exports = (app) => {
//   app.use(staticFiles(path.resolve(__dirname, "../public")))
//   app.use(nunjucks({
//     ext: 'html',
//     path: path.join(__dirname, '../views'),
//     nunjucksConfig: {
//       trimBlocks: true
//     }
//   }));

  app.use(bodyParser())
  app.use(logger())
  app.use(miSend())
  
  // 最后拦截异常信息
  app.use(async (ctx,next) =>{
    try {
      await next();
    } catch (ex) {
      var jsonData={
        status:-1,
        message:ex.message
    }
    await ctx.send(jsonData);
    }
  })
}

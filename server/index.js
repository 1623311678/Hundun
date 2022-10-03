const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path')
app.use(serve(path.resolve(__dirname,'./../storybook-static')));
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(7000);
console.log('running')

const router = require('koa-router')()
const HomeController = require('./controller/home')
const CustomerController = require('./controller/customer')

module.exports = (app) => {
  router.get( '/', HomeController.index )
  router.get('/home', HomeController.home)
  // http://localhost:3000/home/1/dahlin
  router.get('/home/:id/:name', HomeController.homeParams)
  router.get('/user', HomeController.login)
  router.post('/user/register', HomeController.register)
  router.get('/customer',CustomerController.getAllCustomers)
  router.get('/customer/:id', CustomerController.getCustomerById)
  // http://localhost:3000/customer/name/dahlin
  router.get('/customer/name/:name', CustomerController.getCustomerByName)
  // 增加数据方法
  router.post('/customer', CustomerController.createCustomer)
  // 修改数据方法
  router.put('/customer/:id', CustomerController.updateCustomer)
  // 删除数据方法
  router.delete('/customer/:id', CustomerController.deleteCustomer)

  app.use(router.routes())
     .use(router.allowedMethods())
}

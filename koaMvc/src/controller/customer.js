const customerModel = require("../db/api/customer");
module.exports = {
  getAllCustomers: async (ctx, next) => {
    const customerobjs = await customerModel.getAllCustomers();
    var jsonData = {
      status: 0,
      data: customerobjs,
    };
    await ctx.send(jsonData);
  },
  getCustomerById: async (ctx, next) => {
    const customerobjs = await customerModel.getCustomerById(ctx.params.id);
    var jsonData = {
      status: 0,
      data: customerobjs,
    };
    await ctx.send(jsonData);
  },
  getCustomerByName: async (ctx, next) => {
    const customerobjs = await customerModel.getCustomerByName(ctx.params.name);
    var jsonData = {
      status: 0,
      data: customerobjs,
    };
    await ctx.send(jsonData);
  },
  updateCustomer: async (ctx, next) => {
    const customerobjs = await customerModel.updateCustomer(
      ctx.params.id,
      ctx.request.body
    );
    var jsonData = {
      status: 0,
      data: customerobjs,
    };
    ctx.send(jsonData);
  },
  createCustomer: async (ctx, next) => {
    const customerobj = ctx.request.body;
    const resultObj = await customerModel.createCustomer(customerobj);
    var jsonData = {
      status: 0,
      data: resultObj,
    };
    await ctx.send(jsonData);
  },
  deleteCustomer: async (ctx, next) => {
    const customerobjs = await customerModel.deleteCustomer(ctx.params.id);
    var jsonData = {
      status: 0,
      data: customerobjs,
    };
    await ctx.send(jsonData);
  },
};

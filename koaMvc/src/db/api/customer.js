const Customer = require("../models/customer");
const { Op } = require("sequelize");

module.exports = {
  getAllCustomers: async () => {
    return Customer.findAndCountAll({
      attributes: [
        "id",
        "name",
        "sex",
        "address",
        "phone",
        "email",
        "country",
        "city",
      ],
      order: [["id", "DESC"]],
    });
  },
  getCustomerById: async (id) => {
    return Customer.findAll({
      where: {
        id: `${id}`,
      },
    });
  },
  getCustomerByName: async (name) => {
    return Customer.findAll({
      where: {
        name: {
          [Op.like]: `${name}`,
        },
      },
    });
  },
  updateCustomer: async (id, data) => {
    var item = await Customer.findAll({
      where: {
        id: `${id}`,
      },
    });
    if (item != undefined) {
      return Customer.update(data, { where: { id: id } });
    } else {
      throw new Error("the customer is not exist!");
    }
  },
  createCustomer: async (data) => {
    return Customer.create(data);
  },
  deleteCustomer: async (id) => {
    var item = await Customer.findAll({
      where: {
        id: `${id}`,
      },
    });
    if (item != undefined) {
      return Customer.destroy({ where: { id: id } });
    } else {
      throw new Error("the customer is not exist!");
    }
  },
};

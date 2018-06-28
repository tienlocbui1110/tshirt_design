'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var customer = [{
      email: "example@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Đào",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    },{
      email: "example1@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Tho",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    },{
      email: "example2@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Thanh",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    },{
      email: "example3@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Nam",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    },{
      email: "admin@gmail.com",
      password: Customer.generateHash("admin"),
      isAdmin: true,
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }]
    return queryInterface.bulkInsert("Customer", customer, {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

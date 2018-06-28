'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var customer = [{
      email: "example@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Đào",
      avatar: "/img/avatar1.jpg",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      email: "example1@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Tho",
      avatar: "/img/avatar2.png",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      email: "example2@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Thanh",
      avatar: "/img/avatar3.jpg",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      email: "example3@gmail.com",
      password: Customer.generateHash("a"),
      firstName: "Nguyễ n Văn Nam",
      avatar: "/img/icon-login.png",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
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
    return queryInterface.bulkDelete('Customer', null, {});
  }
};
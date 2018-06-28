'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var purchasehistory = [{
      CustomerEmail: "example@gmail.com",
      PaymentId: 1,
      status: "Completed",
      createdAt: "21-6-2018",
      updatedAt: "21-6-2018"
    }, {
      CustomerEmail: "example@gmail.com",
      PaymentId: 1,
      status: "Cancelled",
      createdAt: "19-6-2018",
      updatedAt: "19-6-2018"
    }, {
      CustomerEmail: "example1@gmail.com",
      PaymentId: 2,
      status: "Received",
      createdAt: "15-6-2018",
      updatedAt: "15-6-2018"
    }, {
      CustomerEmail: "example1@gmail.com",
      PaymentId: 2,
      status: "Waiting",
      createdAt: "17-6-2018",
      updatedAt: "17-6-2018"
    }, {
      CustomerEmail: "example1@gmail.com",
      PaymentId: 2,
      status: "Completed",
      createdAt: "10-6-2018",
      updatedAt: "10-6-2018"
    },
    {
      CustomerEmail: "example1@gmail.com",
      PaymentId: 1,
      status: "Completed",
      createdAt: "10-5-2018",
      updatedAt: "10-5-2018"
    },
    {
      CustomerEmail: "example2@gmail.com",
      PaymentId: 3,
      status: "Completed",
      createdAt: "4-4-2018",
      updatedAt: "4-4-2018"
    },
    {
      CustomerEmail: "example2@gmail.com",
      PaymentId: 2,
      status: "Cancelled",
      createdAt: "20-6-2018",
      updatedAt: "20-6-2018"
    },
    {
      CustomerEmail: "example2@gmail.com",
      PaymentId: 3,
      status: "Completed",
      createdAt: "21-5-2018",
      updatedAt: "21-5-2018"
    },
    {
      CustomerEmail: "example3@gmail.com",
      PaymentId: 1,
      status: "Waiting",
      createdAt: "25-6-2018",
      updatedAt: "25-6-2018"
    }]
    return queryInterface.bulkInsert("PurchaseHistory", purchasehistory, {});

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

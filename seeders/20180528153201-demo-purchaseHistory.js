'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var purchasehistory = [{
        CustomerEmail: "example@gmail.com",
        PaymentId: 1,
        status: "Completed",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }, {
        CustomerEmail: "example@gmail.com",
        PaymentId: 1,
        status: "Cancelled",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }, {
        CustomerEmail: "example1@gmail.com",
        PaymentId: 2,
        status: "Received",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }, {
        CustomerEmail: "example1@gmail.com",
        PaymentId: 2,
        status: "Waiting",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }, {
        CustomerEmail: "example1@gmail.com",
        PaymentId: 2,
        status: "Completed",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        CustomerEmail: "example1@gmail.com",
        PaymentId: 1,
        status: "Completed",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        CustomerEmail: "example2@gmail.com",
        PaymentId: 3,
        status: "Completed",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        CustomerEmail: "example2@gmail.com",
        PaymentId: 2,
        status: "Cancelled",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        CustomerEmail: "example2@gmail.com",
        PaymentId: 3,
        status: "Completed",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        CustomerEmail: "example3@gmail.com",
        PaymentId: 1,
        status: "Waiting",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }
    ]
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
    return queryInterface.bulkDelete('PurchaseHistory', null, {});
  }
};
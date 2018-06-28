'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var purchasehistorydetails = [{
      PurchaseHistoryId: 1,
      ShirtId: 2,
      createdAt: "21-6-2018",
      updatedAt: "21-6-2018",
      amount: 2
    }, {
      PurchaseHistoryId: 1,
      ShirtId: 4,
      createdAt: "21-6-2018",
      updatedAt: "21-6-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 1,
      ShirtId: 9,
      createdAt: "21-6-2018",
      updatedAt: "21-6-2018",
      amount: 2
    }, {
      PurchaseHistoryId: 2,
      ShirtId: 5,
      createdAt: "19-6-2018",
      updatedAt: "19-6-2018",
      amount: 5
    },
    {
      PurchaseHistoryId: 3,
      ShirtId: 15,
      createdAt: "15-6-2018",
      updatedAt: "15-6-2018",
      amount: 1
    },
    {
      PurchaseHistoryId: 3,
      ShirtId: 20,
      createdAt: "15-6-2018",
      updatedAt: "15-6-2018",
      amount: 1
    },
    {
      PurchaseHistoryId: 4,
      ShirtId: 8,
      createdAt: "17-6-2018",
      updatedAt: "17-6-2018",
      amount: 1
    },
    {
      PurchaseHistoryId: 5,
      ShirtId: 17,
      createdAt: "10-6-2018",
      updatedAt: "10-6-2018",
      amount: 3
    }, {
      PurchaseHistoryId: 6,
      ShirtId: 14,
      createdAt: "10-5-2018",
      updatedAt: "10-5-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 6,
      ShirtId: 15,
      createdAt: "10-5-2018",
      updatedAt: "10-5-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 7,
      ShirtId: 6,
      createdAt: "4-4-2018",
      updatedAt: "4-4-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 8,
      ShirtId: 11,
      createdAt: "20-6-2018",
      updatedAt: "20-6-2018",
      amount: 5
    }, {
      PurchaseHistoryId: 9,
      ShirtId: 11,
      createdAt: "21-5-2018",
      updatedAt: "21-5-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 10,
      ShirtId: 11,
      createdAt: "25-6-2018",
      updatedAt: "25-6-2018",
      amount: 1
    }, {
      PurchaseHistoryId: 10,
      ShirtId: 12,
      createdAt: "25-6-2018",
      updatedAt: "25-6-2018",
      amount: 2
    }, {
      PurchaseHistoryId: 10,
      ShirtId: 13,
      createdAt: "25-6-2018",
      updatedAt: "25-6-2018",
      amount: 3
    }
    ]
    return queryInterface.bulkInsert("DetailsPurchaseHistory", purchasehistorydetails, {});

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

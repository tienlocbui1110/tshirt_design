'use strict';
var Customer = require("../models").Customer;

module.exports = {
  up: (queryInterface, Sequelize) => {

    var payment = [{
      name: "COD",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      name: "Paypal",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      name: "VN",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }]
    return queryInterface.bulkInsert("Payment", payment, {});

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

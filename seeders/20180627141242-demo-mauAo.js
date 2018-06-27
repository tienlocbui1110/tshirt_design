'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var mauAos = [{
      name: "aothun",
      imgPath: "/img/aothun.jpg",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      name: "aocotim",
      imgPath: "/img/aocotim.jpg",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }, {
      name: "aohoddie",
      imgPath: "/img/aohoddie.jpg",
      createdAt: Sequelize.literal("NOW()"),
      updatedAt: Sequelize.literal("NOW()")
    }]
    return queryInterface.bulkInsert("mauAo", mauAos, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("mauAo", null, {});
  }
};
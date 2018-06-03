"use strict";

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
    var shirts = [
      {
        name: "Skull Helmet Glass",
        cost: 100000,
        imgPath: "/img/ao1.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Skull Pivate Green",
        cost: 120000,
        imgPath: "/img/ao2.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Skull Indian Pro",
        cost: 110000,
        imgPath: "/img/ao3.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Skull Indian Pro",
        cost: 100000,
        imgPath: "/img/ao4.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }
    ];
    return queryInterface.bulkInsert("Shirt", shirts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Shirt", null, {});
  }
};

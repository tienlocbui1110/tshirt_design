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
    var kmshirts = [{
        name: "Gạch Bông 1",
        costKhuyenMai: 80000,
        imgPath: "/img/km1.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 2",
        costKhuyenMai: 80000,
        imgPath: "/img/km2.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 3",
        costKhuyenMai: 80000,
        imgPath: "/img/km3.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 4",
        costKhuyenMai: 80000,
        imgPath: "/img/km4.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 5",
        costKhuyenMai: 80000,
        imgPath: "/img/km5.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 6",
        costKhuyenMai: 80000,
        imgPath: "/img/km6.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 7",
        costKhuyenMai: 80000,
        imgPath: "/img/km7.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gạch Bông 8",
        costKhuyenMai: 80000,
        imgPath: "/img/km8.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Born Live Die United",
        costKhuyenMai: 80000,
        imgPath: "/img/km9.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "I love united forever",
        costKhuyenMai: 80000,
        imgPath: "/img/km10.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Your Love United",
        costKhuyenMai: 80000,
        imgPath: "/img/km11.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "The Red Devil 1878",
        costKhuyenMai: 80000,
        imgPath: "/img/km12.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "#IAMUNITED",
        costKhuyenMai: 80000,
        imgPath: "/img/km13.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Eat Sleep United",
        costKhuyenMai: 80000,
        imgPath: "/img/km14.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "One Love",
        costKhuyenMai: 80000,
        imgPath: "/img/km15.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "zlatan ibrahimovic",
        costKhuyenMai: 80000,
        imgPath: "/img/km16.jpg",
        status: true,
        isPublic: true,
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }
    ];
    return queryInterface.bulkInsert("khuyenmaishirt", kmshirts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("khuyenmaishirt", null, {});
  }
};
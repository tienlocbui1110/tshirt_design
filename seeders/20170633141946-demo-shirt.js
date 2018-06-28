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
    var shirts = [{
        name: "Orange - Skull Helmet",
        cost: 100000,
        imgPath: "/img/so1.jpg",
        status: true,
        isPublic: true,
        soluongmua: 70,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Blue - Skull Private",
        cost: 120000,
        imgPath: "/img/so2.jpg",
        status: true,
        isPublic: true,
        soluongmua: 30,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Gray - Skull Indian",
        cost: 110000,
        imgPath: "/img/so3.jpg",
        status: true,
        isPublic: true,
        soluongmua: 20,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Orange - Skull Indian",
        cost: 100000,
        imgPath: "/img/so4.jpg",
        status: true,
        isPublic: true,
        soluongmua: 80,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "1997",
        cost: 150000,
        imgPath: "/img/so5.jpg",
        status: true,
        isPublic: true,
        soluongmua: 90,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "1996",
        cost: 130000,
        imgPath: "/img/so6.jpg",
        status: true,
        isPublic: true,
        soluongmua: 10,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "1995",
        cost: 120000,
        imgPath: "/img/so7.jpg",
        status: true,
        isPublic: true,
        soluongmua: 35,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "1994",
        cost: 100000,
        imgPath: "/img/so8.jpg",
        status: true,
        isPublic: true,
        soluongmua: 25,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Yêu thương",
        cost: 130000,
        imgPath: "/img/so9.png",
        status: true,
        isPublic: true,
        soluongmua: 45,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Uml",
        cost: 120000,
        imgPath: "/img/so10.png",
        status: true,
        isPublic: true,
        soluongmua: 55,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Tao Đẹp",
        cost: 140000,
        imgPath: "/img/so11.png",
        status: true,
        isPublic: true,
        soluongmua: 15,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Sung Sướng",
        cost: 110000,
        imgPath: "/img/so12.png",
        status: true,
        isPublic: true,
        soluongmua: 25,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "MARVEL",
        cost: 110000,
        imgPath: "/img/so13.png",
        status: true,
        isPublic: true,
        soluongmua: 40,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "MR. IRON",
        cost: 120000,
        imgPath: "/img/so14.png",
        status: true,
        isPublic: true,
        soluongmua: 50,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Iron fist",
        cost: 130000,
        imgPath: "/img/so15.png",
        status: true,
        isPublic: true,
        soluongmua: 40,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "FALCON",
        cost: 120000,
        imgPath: "/img/so16.png",
        status: true,
        isPublic: true,
        soluongmua: 80,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Game over valentine",
        cost: 140000,
        imgPath: "/img/so17.jpg",
        status: true,
        isPublic: true,
        soluongmua: 75,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "I hate valentine",
        cost: 120000,
        imgPath: "/img/so18.jpg",
        status: true,
        isPublic: true,
        soluongmua: 20,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Awesome Valentine",
        cost: 130000,
        imgPath: "/img/so19.jpg",
        status: true,
        isPublic: true,
        soluongmua: 90,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "I hate valentine",
        cost: 110000,
        imgPath: "/img/so20.jpg",
        status: true,
        isPublic: true,
        soluongmua: 50,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "Y",
        cost: 120000,
        imgPath: "/img/so21.png",
        status: true,
        isPublic: true,
        soluongmua: 45,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "X",
        cost: 130000,
        imgPath: "/img/so22.png",
        status: true,
        isPublic: true,
        soluongmua: 25,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "V",
        cost: 150000,
        imgPath: "/img/so23.png",
        status: true,
        isPublic: true,
        soluongmua: 65,
        danhMuc: "Áo thun",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        name: "U",
        cost: 100000,
        imgPath: "/img/so24.png",
        status: true,
        isPublic: true,
        soluongmua: 75,
        danhMuc: "Áo thun",
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
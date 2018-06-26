var controller = {};
var models = require('../models');

// Lấy ra 12 cái áo khuyến mãi theo page
// Input: page
// Output: mảng áo và số lượng dòng khuyến mãi
controller.getKMShirtbyPage = function (page, callback) {
    models.khuyenmaishirt
        .count({
            where: {
                status: true,
                isPublic: true
            }
        })
        .then(function (num) {
            models.khuyenmaishirt
                .findAll({
                    where: {
                        status: true,
                        isPublic: true
                    },
                    offset: page * 12 - 12,
                    limit: 12
                })
                .then(function (shirts) {
                    callback(shirts, num);
                });
        });
}

module.exports = controller;
var controller = {};
var models = require('../models');

// Lấy ra 12 cái áo khuyến mãi theo page và danh mục
// Input: page, danh mục
// Output: mảng áo và số lượng dòng theo danh mục
controller.getShirtbyPageDanhMuc = function (danhMuc, page, callback) {
    models.Shirt
        .count({
            where: {
                status: true,
                isPublic: true,
                danhMuc: danhMuc
            }
        })
        .then(function (num) {
            models.Shirt
                .findAll({
                    where: {
                        status: true,
                        isPublic: true,
                        danhMuc: danhMuc
                    },
                    offset: page * 12 - 12,
                    limit: 12
                })
                .then(function (shirts) {
                    callback(shirts, num);
                });
        });
}

controller.getShirt = function(id, callback) {
    models.Shirt.findOne({ where: {id: id} }).then(function(shirt){
        callback(shirt);
    }).catch(async function(err){
        callback(null);
    });
}

module.exports = controller;
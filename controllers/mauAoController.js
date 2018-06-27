var controller = {};
var models = require('../models');

// Lấy tất cả mãu áo hiện có
controller.getMauAoAll = function (callback) {
    models.mauAo
        .findAll({})
        .then(function (mauAos) {
            callback(mauAos);
            console.log(mauAos);
        });
}

module.exports = controller;
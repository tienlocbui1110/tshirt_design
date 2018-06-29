var controller = {};
var models = require('../models');

controller.getInfoOne = function (email, callback) {
    models.Customer.findOne({
        where: {
            email: email
        }
    }).then(function (customer) {
        callback(customer);
    }).catch(async function (err) {
        callback(null);
    });
}

controller.updateInfoOne = function (email, callback) {
    var now = Date.now();
    models.Customer
        .update({
            lastname: lastname,
            firstname: firstname,
            address: address,
            phone: phone,
            dateOfBirth: dateOfBirth,
            isAdmin: false,
            updatedAt: now
        }, {
            where: {
                email: email
            }
        })
        .then(
            callback()
        );
}

module.exports = controller;
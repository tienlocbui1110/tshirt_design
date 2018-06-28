var controller = {};
var models = require('../models');
var Customer = require("../models").Customer;
var Payment = require("../models").Payment;
var DetailsPurchaseHistory = require("../models").DetailsPurchaseHistory;
var Shirt = require("../models").Shirt;

controller.getPurchaseHistory = function (limit, page , callback) {
    models.PurchaseHistory.count({
    }).then(num=>{
        models.PurchaseHistory.findAll({
            limit,
            offset: limit*(page-1),
            include: [
                { model: Customer, required: true},
                {model: Payment, required: true}
             ]
        }).then(result=>{
            callback(result,num);
        })
       
    });
}

module.exports = controller;
var controller = {};
var models = require('../models');
var Customer = require("../models").Customer;
var Payment = require("../models").Payment;
var Shirt = require("../models").Shirt;

controller.getPurchaseHistory = function (limit, page , callback) {
    models.PurchaseHistory.count({
    }).then(num=>{
        models.PurchaseHistory.findAll({
            include: [
                {
                    model: Shirt, required:true
                },  {
                    model: Customer, required:true
                },  {
                    model: Payment, required:true
                }
            ]
        }).then(result=>{
            callback(result,num);
        })
       
    });
}

controller.getShirts = function (callback) {
    models.Shirt.findAll().then(shirts=>{
        callback(shirts);
    })
}

module.exports = controller;
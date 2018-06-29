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

controller.insertShirt = function (shirt,callback) {
    models.Shirt.create({
        name: shirt.name,
        cost: shirt.cost,
        imgPath: shirt.imgPath,
        isPublic: true,
        soluongmua: 0
    }).then(newShirt=>{
        callback(newShirt);
    })
}

controller.deleteShirt = function(shirtId, callback){
    models.Shirt.destroy({
        where: {
            id: shirtId
        }
    }).then(object=>{
        callback(object);
    })
};

module.exports = controller;
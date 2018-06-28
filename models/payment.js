"use strict";
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define(
    "Payment", {
      name: DataTypes.STRING
    }, {
      freezeTableName: true
    }
  );
  Payment.associate = function (models) {
    // associations can be defined here
    Payment.belongsToMany(models.PurchaseHistory, {
      through: models.DetailsPurchaseHistory
    });
  };
  return Payment;
};
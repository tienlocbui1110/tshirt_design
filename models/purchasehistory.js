"use strict";
module.exports = (sequelize, DataTypes) => {
  var PurchaseHistory = sequelize.define(
    "PurchaseHistory",
    {},
    {
      freezeTableName: true
    }
  );

  PurchaseHistory.associate = function(models) {
    // associations can be defined here
    PurchaseHistory.belongsToMany(models.Shirt, {
      through: models.DetailsPurchaseHistory
    });
    PurchaseHistory.belongsTo(models.Customer);
  };
  return PurchaseHistory;
};

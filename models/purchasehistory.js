"use strict";
module.exports = (sequelize, DataTypes) => {
  var PurchaseHistory = sequelize.define(
    "PurchaseHistory",
    {
      status: DataTypes.STRING
    },
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
    PurchaseHistory.belongsTo(models.Payment);
  };
  return PurchaseHistory;
};

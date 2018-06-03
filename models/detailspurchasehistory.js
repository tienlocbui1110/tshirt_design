"use strict";
module.exports = (sequelize, DataTypes) => {
  var DetailsPurchaseHistory = sequelize.define(
    "DetailsPurchaseHistory",
    {
      amount: DataTypes.SMALLINT
    },
    {
      freezeTableName: true
    }
  );

  return DetailsPurchaseHistory;
};

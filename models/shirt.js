"use strict";
module.exports = (sequelize, DataTypes) => {
  var Shirt = sequelize.define(
    "Shirt",
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      imgPath: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      isPublic: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  );
  Shirt.associate = function(models) {
    // associations can be defined here
    Shirt.belongsToMany(models.PurchaseHistory, {
      through: models.DetailsPurchaseHistory
    });
  };
  return Shirt;
};

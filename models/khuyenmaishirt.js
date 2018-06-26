'use strict';
module.exports = (sequelize, DataTypes) => {
  var khuyenmaishirt = sequelize.define('khuyenmaishirt', {
    name: DataTypes.STRING,
    costKhuyenMai: DataTypes.INTEGER,
    imgPath: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    isPublic: DataTypes.BOOLEAN
  }, {
    freezeTableName: true
  });
  khuyenmaishirt.associate = function (models) {
    // associations can be defined here
    khuyenmaishirt.belongsToMany(models.PurchaseHistory, {
      through: models.DetailsPurchaseHistory
    });
  };
  return khuyenmaishirt;
};
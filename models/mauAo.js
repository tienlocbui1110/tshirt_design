'use strict';
module.exports = (sequelize, DataTypes) => {
    var mauAo = sequelize.define('mauAo', {
        name: DataTypes.STRING,
        imgPath: DataTypes.STRING
    }, {
        freezeTableName: true
    });
    mauAo.associate = function (models) {
        // associations can be defined here
    };
    return mauAo;
};
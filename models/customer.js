"use strict";

var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define(
    "Customer",
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: DataTypes.STRING,
      id: DataTypes.STRING,
      lastName: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      firstName: {
        type: DataTypes.STRING,
        defaultValue: "Anonymous"
      },
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      dateOfBirth: DataTypes.DATEONLY,
      avatar: {
        type: DataTypes.STRING,
        defaultValue: "/img/avatar1.jpg"
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      freezeTableName: true
    }
  );
  Customer.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  Customer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return Customer;
};

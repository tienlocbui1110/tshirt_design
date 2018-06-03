var express = require("express");
var router = express.Router();
var models = require("./../models");

router.get("/", function(req, res) {
  models.sequelize.sync().then(function() {
    res.send("database sync completed!");
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var passport = require("passport");
var Utils = require("../utils");
var db = require("../models");
var cookieParser = require("cookie-parser");

// GET REQUEST

router.get("/", function(req, res) {
  // get Designed Shirt
  db.Shirt.findAll({
    where: {
      status: true,
      isPublic: true
    }
  })
    .then(shirts => {
      payload = {};
      payload.shirts = shirts;
      if (req.isAuthenticated()) {
        payload.authenticated = true;
      } else {
        payload.authenticated = false;
      }
      res.render("render/index", { payload });
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/lamAo", function(req, res) {
  if (req.isAuthenticated()) {
    res.render("render/lamAo", { payload: { authenticated: true } });
  } else {
    res.render("render/lamAo", { payload: { authenticated: false } });
  }
});
router.get("/khuyenMai", function(req, res) {
  // get Designed Shirt
  db.Shirt.findAll({
    where: {
      status: true,
      isPublic: true
    }
  })
    .then(shirts => {
      payload = {};
      payload.shirts = shirts;
      if (req.isAuthenticated()) {
        payload.authenticated = true;
      } else {
        payload.authenticated = false;
      }
      res.render("render/khuyenMai", { payload });
    })
    .catch(err => {
      res.send(err);
    });
});
router.get("/aoHot", function(req, res) {
  // get Designed Shirt
  db.Shirt.findAll({
    where: {
      status: true,
      isPublic: true
    }
  })
    .then(shirts => {
      payload = {};
      payload.shirts = shirts;
      if (req.isAuthenticated()) {
        payload.authenticated = true;
      } else {
        payload.authenticated = false;
      }
      res.render("render/aoHot", { payload });
    })
    .catch(err => {
      res.send(err);
    });
});
router.get("/danhMuc", function(req, res) {
  // get Designed Shirt
  db.Shirt.findAll({
    where: {
      status: true,
      isPublic: true
    }
  })
    .then(shirts => {
      payload = {};
      payload.shirts = shirts;
      if (req.isAuthenticated()) {
        payload.authenticated = true;
      } else {
        payload.authenticated = false;
      }
      res.render("render/danhMuc", { payload });
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/cart", function(req, res) {
  if (req.isAuthenticated()) {
    res.render("render/cart", { payload: { authenticated: true } });
  } else {
    res.render("render/cart", { payload: { authenticated: false } });
  }
});

router.get("/info", Utils.isLoggedIn, function(req, res) {
  res.render("Member/personalInformation", {
    payload: { authenticated: true }
  });
});

router.get("/lichsu", Utils.isLoggedIn, function(req, res) {
  res.render("render/lichsu", { payload: { authenticated: true } });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/login", function(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("render/login");
  }
});

// POST REQUEST
router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/", // redirect to the secure profile section
    failureRedirect: "/login", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/ok", // redirect to the secure profile section
    failureRedirect: "/login", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

module.exports = router;

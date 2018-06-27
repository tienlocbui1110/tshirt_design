var express = require("express");
var router = express.Router();
var passport = require("passport");
var Utils = require("../utils");
var db = require("../models");
var cookieParser = require("cookie-parser");
var khuyenmaishirtController = require("./../controllers/khuyenmaishirtController");
var shirtController = require("./../controllers/shirtController");

// GET REQUEST

router.get("/", function (req, res) {
  // get Designed Shirt
  db.khuyenmaishirt.findAll({
      where: {
        status: true,
        isPublic: true
      },
      limit: 8
    })
    .then(kmshirts => {
      db.Shirt.findAll({
          where: {
            status: true,
            isPublic: true
          },
          order: [
            ['soluongmua', 'DESC']
          ],
          limit: 8
        })
        .then(hotshirts => {
          payload = {};
          payload.kmshirts = kmshirts;
          payload.hotshirts = hotshirts;
          if (req.isAuthenticated()) {
            payload.authenticated = true;
          } else {
            payload.authenticated = false;
          }
          res.render("render/index", {
            payload
          });
        }).catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/lamAo", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("render/lamAo", {
      payload: {
        authenticated: true
      }
    });
  } else {
    res.render("render/lamAo", {
      payload: {
        authenticated: false
      }
    });
  }
});

router.get("/khuyenMai", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  // get Designed Shirt
  khuyenmaishirtController.getKMShirtbyPage(page, function (shirts, totalRows) {
    // console.log(article);
    //console.log(comments);
    // console.log(totalRows);
    payload = {};
    payload.shirts = shirts;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/khuyenMai", {
      payload,
      pagination: {
        limit: 12,
        page: page,
        totalRows: totalRows
      }
    });
  });
});

router.get("/aoHot", function (req, res) {
  // get Designed Shirt
  db.Shirt.findAll({
      where: {
        status: true,
        isPublic: true
      },
      order: [
        ['soluongmua', 'DESC']
      ],
      limit: 12
    })
    .then(shirts => {
      payload = {};
      payload.shirts = shirts;
      if (req.isAuthenticated()) {
        payload.authenticated = true;
      } else {
        payload.authenticated = false;
      }
      res.render("render/aoHot", {
        payload
      });
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/danhMuc", function (req, res) {
  res.redirect("/danhMuc/aothun");
})

router.get("/danhMuc/aothun", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  var danhMuc = "Áo thun";
  // get Designed Shirt
  shirtController.getShirtbyPageDanhMuc(danhMuc, page, function (shirts, totalRows) {
    payload = {};
    payload.shirts = shirts;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/danhMuc", {
      payload,
      pagination: {
        limit: 12,
        page: page,
        totalRows: totalRows
      }
    });
  });
});

router.get("/danhMuc/aocotim", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  var danhMuc = "Áo cổ tim";
  // get Designed Shirt
  shirtController.getShirtbyPageDanhMuc(danhMuc, page, function (shirts, totalRows) {
    payload = {};
    payload.shirts = shirts;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/danhMuc", {
      payload,
      pagination: {
        limit: 12,
        page: page,
        totalRows: totalRows
      }
    });
  });
});

router.get("/danhMuc/aohoddie", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  var danhMuc = "Áo hoddie";
  // get Designed Shirt
  shirtController.getShirtbyPageDanhMuc(danhMuc, page, function (shirts, totalRows) {
    payload = {};
    payload.shirts = shirts;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/danhMuc", {
      payload,
      pagination: {
        limit: 12,
        page: page,
        totalRows: totalRows
      }
    });
  });
});

router.get("/cart", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("render/cart", {
      payload: {
        authenticated: true
      }
    });
  } else {
    res.render("render/cart", {
      payload: {
        authenticated: false
      }
    });
  }
});

router.get("/info", Utils.isLoggedIn, function (req, res) {
  res.render("Member/personalInformation", {
    payload: {
      authenticated: true
    }
  });
});

router.get("/lichsu", Utils.isLoggedIn, function (req, res) {
  res.render("render/lichsu", {
    payload: {
      authenticated: true
    }
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/login", function (req, res) {
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
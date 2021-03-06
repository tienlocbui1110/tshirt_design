var express = require("express");
var router = express.Router();
var passport = require("passport");
var Utils = require("../utils");
var db = require("../models");
var khuyenmaishirtController = require("./../controllers/khuyenmaishirtController");
var shirtController = require("./../controllers/shirtController");
var request = require('request');
var querystring = require('querystring');
var utils = require("../utils");
var multer = require('multer');
const path = require('path');
var mauAoController = require("./../controllers/mauAoController");
var fs = require('fs');
var fabric = require('fabric').fabric;

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

// -- For upload file --
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
// Init Upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('myImage');
// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}
// End -- For upload file --
router.get("/lamAo", function (req, res) {
  mauAoController.getMauAoAll(function (mauAos) {
    payload = {};
    payload.mauAos = mauAos;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/lamAo", {
      payload
    });
  });
});

router.post('/lamAo/upload', (req, res) => {
  mauAoController.getMauAoAll(function (mauAos) {
    upload(req, res, (err) => {
      if (err) {
        res.render('render/lamAo', {
          msg: err
        });
      } else {
        if (req.file == undefined) {
          res.render('render/lamAo', {
            msg: 'Error: No File Selected!'
          });
        } else {
          payload = {};
          payload.mauAos = mauAos;
          if (req.isAuthenticated()) {
            payload.authenticated = true;
          } else {
            payload.authenticated = false;
          }
          res.render("render/lamAo", {
            payload,
            msg: 'File Uploaded!',
            file: `/uploads/${req.file.filename}`
          });
        }
      }
    });
  });
});

router.post('/lamAo/submitshirt', (req, res) => {
  var json = req.body.dataCanvas;
  var canvas = fabric.createCanvasForNode(600, 600);
  canvas.loadFromJSON(json, function () {
    console.log("Here");
    canvas.renderAll();
    outDesign = fs.createWriteStream(__dirname + '/public/imageDesign/helloworld.png');
    var stream = canvas.createPNGStream();
    stream.on('data', function (chunk) {
      outDesign.write(chunk);
    });
    res.send("OK!");
  });
});
//

router.get("/khuyenMai", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  // get Designed Shirt
  khuyenmaishirtController.getKMShirtbyPage(page, function (shirts, totalRows) {
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
      },
      isAoThun: true
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
      },
      isAoCoTim: true
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
        totalRows: totalRows,
      }
    });
  });
});

router.get("/searching", function (req, res) {
  var page = parseInt(req.query.page);
  page = isNaN(page) ? 1 : page;
  var searchKey = req.query.searchKey;
  // get Designed Shirt
  shirtController.getBySearch(searchKey, page, function (shirts, totalRows) {
    payload = {};
    payload.shirts = shirts;
    payload.searchKey = searchKey;
    if (req.isAuthenticated()) {
      payload.authenticated = true;
    } else {
      payload.authenticated = false;
    }
    res.render("render/searching", {
      payload,
      pagination: {
        limit: 12,
        page: page,
        totalRows: totalRows,
        queryParams: req.query

      },
      isHoddie: true
    });
  });
});

router.get("/shirt", function (req, res) {
  var id = parseInt(req.query.id);
  var name = req.query.name;
  console.log(name);
  // get Designed Shirt
  if (name.trim() == "shirts".trim()) {
    shirtController.getShirt(id, function (shirt) {
      var json = JSON.stringify(shirt);
      res.send(json);
    });
  } else {
    khuyenmaishirtController.getShirt(id, function (shirt) {
      var json = JSON.stringify(shirt);
      res.send(json);
    });
  }
});

router.get("/cart", function (req, res) {
  if (req.cookies.cart == "") {
    if (req.isAuthenticated()) {
      res.render("render/cart", {
        payload: {
          authenticated: true,
          cart: {
            haveItem: false
          }
        }
      });
    } else {
      res.render("render/cart", {
        payload: {
          authenticated: false,
          cart: {
            haveItem: false
          }
        }
      });
    }
  } else {
    var cookiesCart = JSON.parse(req.cookies.cart);
    let shirts = [];
    let count = 0;
    let dataLength = cookiesCart.data.length;
    // async to get cart before render
    for (let data of cookiesCart.data) {
      shirtController.getShirt(data.id, function (shirt) {
        count++;
        if (!shirt) {
          cookiesCart.length -= data.length;
        } else {
          shirt.count = data.length;
          shirts.push(shirt);
        }
        if (count == dataLength) {
          lastShirts = shirts.pop();
          console.log(lastShirts.length);
          // update layout
          if (req.isAuthenticated()) {
            res.render("render/cart", {
              payload: {
                authenticated: true,
                shirtsCart: shirts,
                lastShirts: lastShirts,
                cart: {
                  haveItem: true
                }
              }
            });
          } else {
            res.render("render/cart", {
              payload: {
                authenticated: false,
                shirtsCart: shirts,
                lastShirts: lastShirts,
                cart: {
                  haveItem: true
                }
              }
            });
          }
        }
      });
    }
  }
});

router.get("/info", Utils.isLoggedIn, function (req, res) {
  res.render("render/personalInformation", {
    payload: {
      authenticated: true
    }
  });
});

router.get("/info/capnhapttcn", Utils.isLoggedIn, function (req, res) {
  res.render("render/personalInformation", {
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
    if (req.query.failedSignUp == "true") {
      res.render("render/login", {
        payload: {
          failedSignUp: true,
          failedSignUpMessage: req.query.failedSignUpMessage
        }
      });
    } else if (req.query.failedSignIn == "true") {
      res.render("render/login", {
        payload: {
          failedSignIn: true,
          failedSignInMessage: req.query.failedSignInMessage
        }
      });
    } else {
      res.render("render/login");
    }
  }
});

// POST REQUEST
router.post(
  "/login",
  function (req, res, next) {
    utils.validateEmail(req, res, "failedSignIn", "failedSignInMessage", function () {

      // check the reCaptcha v2
      var secretKey = "6LeH-mAUAAAAAGLRChzCagdlFhn3iVi2CTWhv9Mn";
      var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
      // req / res held in closure
      // Hitting GET request to the URL, Google will respond with success or error scenario.
      request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
          const query = querystring.stringify({
            failedSignIn: true,
            failedSignInMessage: "Incorrect Captcha."
          });
          return res.redirect('/login?' + query);
        } else {
          passport.authenticate("local-login", function (err, user, info) {
            if (err) {
              return next(err);
            }
            if (!user) {
              const query = querystring.stringify({
                failedSignIn: true,
                failedSignInMessage: "Email or password incorrect."
              });
              return res.redirect('/login?' + query);
            } else {
              return req.logIn(user, function (err) {
                if (err) {
                  const query = querystring.stringify({
                    failedSignIn: true,
                    failedSignInMessage: "Error when Sign in."
                  });
                  return res.redirect('/login?' + query);
                } else {
                  return res.redirect("/");
                }
              });
            }
          })(req, res, next);
        }
      });
    });
  });


router.post(
  "/signup",
  function (req, res, next) {
    utils.validateEmail(req, res, "failedSignUp", "failedSignUpMessage", function () {
      // check the reCaptcha v2
      var secretKey = "6LeH-mAUAAAAAGLRChzCagdlFhn3iVi2CTWhv9Mn";
      var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

      request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
          //if (0) {
          const query = querystring.stringify({
            failedSignUp: true,
            failedSignUpMessage: "Incorrect Captcha."
          });
          res.redirect("/login?" + query);
        } else {
          passport.authenticate("local-signup", function (err, user, info) {

            if (err) {
              return next(err);
            }
            if (!user) {
              const query = querystring.stringify({
                failedSignUp: true,
                failedSignUpMessage: "That user is already taken."
              });
              return res.redirect('/login?' + query);
            } else {
              return req.logIn(user, function (err) {
                if (err) {
                  const query = querystring.stringify({
                    failedSignUp: true,
                    failedSignUpMessage: "Error when signup."
                  });
                  return res.redirect('/login?' + query);
                } else {
                  return res.redirect("/");
                }
              });
            }
          })(req, res, next);
        }
      });
    });
  });

module.exports = router;
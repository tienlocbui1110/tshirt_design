var express = require("express");
var router = express.Router();
var passport = require("passport");
var multer = require("multer");
var AdminController = require("../controllers/AdminController");


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

router.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/index");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/order", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin) {
            AdminController.getPurchaseHistory(5, 5, function (result, sum) {
                res.render("Admin/order", {
                    payload: {
                        history: result
                    }
                });
            });
        }

        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/history", function (req, res) {

    if (req.isAuthenticated()) {
        if (req.user.isAdmin) {
            AdminController.getPurchaseHistory(5, 5, function (result, sum) {
                res.render("Admin/history", {
                    payload: {
                        history: result
                    }
                });
            });
        }
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/tshirt", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin) {
            AdminController.getShirts(function (shirts, num) {

                res.render("Admin/tshirt", {
                    payload: {
                        shirts
                    }
                });
            })
        }
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/edittshirt", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/edittshirt");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/coupon", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/coupon");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/findhistory", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/findhistory");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/login", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/index");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.delete("/shirt/:id", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin) {
            AdminController.deleteShirt(req.params.id, function (result) {
                res.redirect("/admin/tshirt");
            });
        }
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.post("/shirt", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin) {
            upload(req, res, (err) => {
                if (err) {
                    res.render('render/lamAo', {
                        msg: err
                    });
                } else {
                    if (req.file == undefined) {
                        res.redirect("/admin/editshirt");
                    } else {
                        const shirt = {
                            name: req.body.name,
                            cost: req.body.cost,
                            imgPath: `/upload/${req.file.filename}`
                        };

                    }
                }
            });
        }
        else
            res.redirect("Admin/login");
    }
});

/* Handle Login POST */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    failureFlash: true
}));

/* Handle Registration POST */
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/admin',
    failureRedirect: '/admin/signup',
    failureFlash: true
}));

router.get("*",function(req,res){
    res.redirect("/");
});

module.exports = router;
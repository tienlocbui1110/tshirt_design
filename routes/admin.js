var express = require("express");
var router = express.Router();
var passport = require("passport");


router.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/index");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/order",function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/order");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/history",function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/history");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/coupon",function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.isAdmin)
            res.render("Admin/coupon");
        else
            res.render("Admin/login");
    } else
        res.render("Admin/login");
});

router.get("/findhistory",function (req, res) {
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

module.exports = router;
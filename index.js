var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressHbs = require("express-handlebars");
var paginateHelper = require('express-handlebars-paginate');
var flash = require("connect-flash");
var Utils = require("./utils");
var methodOverride = require('method-override');

// require model

var md = require("./models");
var Customer = md.Customer;

// require routes
var sync = require("./routes/sync");
var member = require("./routes/member");
var admin = require("./routes/admin");

// setup Express
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(flash());
// For Passport

app.use(
  session({
    secret: "LocAndVinh",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(methodOverride('_method'));
require("./auth/passport")(passport);

var hbs = expressHbs.create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: __dirname + "/views/layouts/",
  partialsDir: __dirname + "/views/partials/",
  helpers: {
    paginate: paginateHelper.createPagination
  }
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(methodOverride('_method'));
// setup Routes

app.use("/sync", sync);
app.use("/", member);
app.use("/admin", admin);

// Set Server Port & Start Server
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("Server is listening at port " + app.get("port"));
});
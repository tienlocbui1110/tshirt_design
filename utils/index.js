var querystring = require('querystring');
var validator = require("email-validator");

module.exports = {
  isLoggedIn: function (req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) return next();

    // if they aren't redirect them to the home page
    res.redirect("/login");
  },
  validateEmail: function (req, res, isFailedString, isFailedMessage, next) {
    if (!validator.validate(req.body.email)) {
      const query = querystring.stringify({
        [isFailedString]: true,
        [isFailedMessage]: "Please enter valid email."
      });
      res.redirect("/login?" + query);
    } else {
      next();
    }
  }
};

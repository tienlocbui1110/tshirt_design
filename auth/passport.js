// config/passport.js

// load all the things we need
var LocalStrategy = require("passport-local").Strategy;

// load up the user model
var Customer = require("../models").Customer;

// expose this function to our app using module.exports
module.exports = function (passport) {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (customer, done) {
    done(null, customer.email);
  });

  // used to deserialize the user
  passport.deserializeUser(function (email, done) {
    Customer.findOne({
        where: {
          email: email
        }
      })
      .then(customer => {
        done(null, customer);
      })
      .catch(err => {
        done(err, null);
      });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    "local-signup",
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function () {
          // find a user whose email is the same as the forms email
          // we are checking to see if the user trying to login already exists
          Customer.findOne({
              where: {
                email: email
              }
            })
            .then(user => {
              if (user) {
                console.log("That user is already taken.");
                return done(
                  null,
                  false,
                  req.flash("signupMessage", "That user is already taken.")
                );
              } else {
                // if there is no user with that email
                // create the user
                console.log("Create user..");
                Customer.create({
                  email: email,
                  password: Customer.generateHash(password)
                }).then(customer => {
                  return done(null, customer);
                });
              }
            })
            .catch(err => {
              if (err) return done(err);
            });
        });
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Customer.findOne({
            where: {
              email: email
            }
          })
          .then(customer => {
            if (!customer) {
              console.log("Dont have match customer");
              return done(
                null,
                false,
                req.flash("loginMessage", "No customer found.")
              );
            }
            // if the customer is found but the password is wrong
            if (!customer.validPassword(password)) {
              console.log("Dont match password");
              return done(
                null,
                false,
                req.flash("loginMessage", "Oops! Wrong password.")
              );
            }

            // all is well, return successful customer
            return done(null, customer);
          })
          .catch(err => {
            console.log(err);
            return done(err);
          });
      }
    )
  );
};
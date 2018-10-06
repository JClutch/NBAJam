// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var User = require('../models/User');
var Google = require('../keys');

// passport.use(new GoogleStrategy({
    // clientID: Google.id,
    // clientSecret: Google.secret,
    // callbackURL: "http://127.0.0.1:3000/auth/google/callback"
//   },
//   (accessToken, refreshToken, profile, done) => {
//     //   console.log('is it breaking in here???', profile, accessToken)
//     //    User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, (err, user) => {
//     //      return done(err, user);
//     //    });
//     done(err, 'success')
//   }
// ));

// module.exports = passport;

const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: Google.id,
        clientSecret: Google.secret,
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    }, (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};


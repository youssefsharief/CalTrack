const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token');
var GoogleTokenStrategy = require('passport-google-id-token');

passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: process.env.facebookClientId,
    clientSecret: process.env.facebookClientSecret,
}, (accessToken, refreshToken, profile, done) => {
    try {
        done(null, profile)
    } catch (error) {
        done(error, false, error.message);
    }
}));

passport.use('googleToken', new GoogleTokenStrategy({
    clientID: process.env.googleClientId,
    clientSecret: process.env.googleClientSecret
}, (parsedToken, googleId, done) => {
    try {
        done(null, parsedToken)
    } catch (error) {
        done(error, false, error.message);
    }
}));




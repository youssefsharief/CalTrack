const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token');
var GoogleTokenStrategy = require('passport-google-id-token');

passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: '218590022238538',
    clientSecret: '960b72cbde439a99719c0883f78b5e49',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        done(null, profile)
    } catch (error) {
        done(error, false, error.message);
    }
}));

passport.use('googleToken', new GoogleTokenStrategy({
    clientID: '170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com',
    clientSecret: 'PBJk04dztK1h5o7ciNTxbEgl'
}, async (parsedToken, googleId, done) => {
    try {
        done(null, parsedToken)
    } catch (error) {
        done(error, false, error.message);
    }
}));




const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token');

passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: '218590022238538',
    clientSecret: '960b72cbde439a99719c0883f78b5e49',
}, (accessToken, refreshToken, profile, done) => {
    if (profile) {
        done (null, profile)
    } else {
        console.log('error')
        done()
    }
}));






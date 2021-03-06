const SocialAuth = require('services/social-auth')


module.exports = (req, res, next) => {
    const social = new SocialAuth(req.user.id, req.user.displayName, req.user.emails[0].value, 'facebook')
    social.action().then(payload => res.status(200).json(payload)).catch(err => next(err))
}

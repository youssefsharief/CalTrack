
const SocialAuth = require('services/social-auth')

module.exports = async (req, res, next) => {
    const social = new SocialAuth(req.user.payload.sub, req.user.payload.name, req.user.payload.email, 'google')
    social.action().then(payload => res.status(200).json(payload)).catch(err => next(err))
}

const SocialAuth = require('../../../services/social-auth')


module.exports = async (req, res, next) => {
    const social = new SocialAuth(req.user.id, req.user.displayName, 'facebookId')
    social.action().then(payload => res.status(200).json(payload)).catch(err => next(err))
}

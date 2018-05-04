
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com');
const SocialAuth = require('../../../services/social-auth')

module.exports = async (req, res, next) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.access_token,
        audience: '170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com',
    }).catch(console.error);
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const social = new SocialAuth(userid, payload.name, 'googleId')
    social.action().then(payload => res.status(200).json(payload)).catch(err => next(err))
}




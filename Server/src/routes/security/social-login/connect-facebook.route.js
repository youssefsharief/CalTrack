const db = require('data-layer/user/update-user-info.db')
const errorMessageWrapper = require('services/utility').errorMessageWrapper

module.exports = (req, res, next) => {
    db(req.decoded._id, { facebookId: req.user.id, facebookEmail: req.user.emails[0].value }).then(payload => res.status(200).json(payload)).catch(err => {
        if (err.code === 11000) {
            return res.status(409).json(errorMessageWrapper( 'This facebook account is already linked to another account' ))
        }
        else {
            return next(err)
        }
    })
}

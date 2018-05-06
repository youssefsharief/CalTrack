const db = require('../../../data-layer/user/update-user-info.db')

module.exports = (req, res, next) => {
    db(req.decoded._id, { facebookId: req.user.id, facebookEmail: req.user.emails[0].value }).then(payload => res.status(200).json(payload)).catch(err => next(err))
}

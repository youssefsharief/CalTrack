const db = require('data-layer/user/update-user-info.db')

module.exports = async (req, res, next) => {
    db(req.decoded._id, { googleId: req.user.payload.sub, googleEmail: req.user.payload.email }).then(payload => res.status(200).json(payload)).catch(err => next(err))
}

const db = require('data-layer/user/update-user-info.db')

module.exports = (req, res, next) => {
    db(req.decoded._id, { googleId: null, googleEmail: null }).then(payload => res.status(200).json(payload)).catch(err => next(err))
}

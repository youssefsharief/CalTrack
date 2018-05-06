const db = require('../../../data-layer/user/update-user-info.db')

module.exports = async (req, res, next) => {
    db(req.decoded._id, { facebookId: null, facebookEmail: null }).then(payload => res.status(200).json(payload)).catch(err => next(err))
}

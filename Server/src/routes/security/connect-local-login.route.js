const db = require('../../data-layer/user/update-user-info.db')

module.exports = async (req, res, next) => {
    db(req.decoded._id, { email: req.body.email, password: req.body.password }).then(payload => res.status(200).json(payload)).catch(err => next(err))
}

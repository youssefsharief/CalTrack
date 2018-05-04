const db = require('../../data-layer/remove-user.db')

module.exports = (req, res, next) => {
    return db(req.params.id).then(() => res.status(200).json({success: 'ok'})).catch(err => next(err))
}

const db = require('data-layer/user/remove-user.db')
const successMessage = require('services/utility').successMessageWrapper

module.exports = (req, res, next) => {
    return db(req.params.id).then(() => res.status(200).json(successMessage)).catch(err => next(err))
}

const successMessage = require('services/utility').successMessageWrapper
const db = require('data-layer/user/update-user-info.db')

module.exports = (req, res, next) => {
    return db(req.params.id, { active: true }).then(ok => ok ? res.status(200).json(successMessage) : next({nF:'User'}))
        .catch(err => next(err))
}


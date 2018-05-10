const setActiveTrue = require('data-layer/user/set-user-active-true.db')
const successMessage = require('services/utility').successMessageWrapper

module.exports = (req, res, next) => {
    return setActiveTrue(req.params.id).then(ok => ok ? res.status(200).json(successMessage) : next({nF:'User'}))
        .catch(err => next(err))
}


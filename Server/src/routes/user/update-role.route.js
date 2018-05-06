const db = require('data-layer/user/update-role.db')

module.exports = (req, res, next) => {
    return db(req.params.id, req.body.role).then(ok => ok ? res.status(200).json({success: 'ok'}) : next({nF:'User'}))
        .catch(err => next(err))
}


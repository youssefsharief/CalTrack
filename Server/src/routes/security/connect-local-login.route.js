const getUserById = require('data-layer/user/get-user-by-id.db')

module.exports = async (req, res, next) => {
    getUserById(req.decoded._id).then(user => {
        if (!user) return next({ nF: 'User' })
        user.email = req.body.email
        user.password = req.body.password
        return user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(e => next(e))
}

const getUserById = require('data-layer/user/get-user-by-id.db')
const clearUnneededDataFromPayload = require('services/clear-unneeded-data')

module.exports = (req, res, next) => {
    getUserById(req.decoded._id).then(user => {
        if (!user) {
            return next({ nF: 'User' })
        } else {
            user.email = req.body.email
            user.password = req.body.password
            user.active = true
            return user.save()
        }
    })
    .then(updatedUser => {
        return updatedUser ? res.status(200).json(clearUnneededDataFromPayload(updatedUser)) : next({ nF: 'User' })
    })
    .catch(e => next(e))
}

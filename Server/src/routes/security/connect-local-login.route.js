const getUserById = require('data-layer/user/get-user-by-id.db')
const clearUnneededDataFromPayload = require('services/clear-unneeded-data')

module.exports = async (req, res, next) => {
    const user = await getUserById(req.decoded._id).catch(err => next(err))
    if (!user) return next({ nF: 'User' })
    user.email = req.body.email
    user.password = req.body.password
    user.active = true
    const updatedUser = await user.save().catch(e => next(e))
    return res.status(200).json(clearUnneededDataFromPayload(updatedUser))
}

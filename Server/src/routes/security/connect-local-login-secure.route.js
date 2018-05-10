const clearUnneededDataFromPayload = require('services/clear-unneeded-data')
const mailer = require('services/mailer')
const generateRandomCode = require('services/generate-random-code').generateRandomCode
const getUserById = require('data-layer/user/get-user-by-id.db')

module.exports = async (req, res, next) => {
    const user = await getUserById(req.decoded._id).catch(err => next(err))
    if (!user) return next({ nF: 'User' })
    user.activationCode = generateRandomCode()
    user.email = req.body.email
    user.password = req.body.password
    const updatedUser = await user.save().catch(e => next(e))
    await mailer.sendActivationCode(user.email, user.activationCode).catch(e=>next(e))
    return res.status(200).json(clearUnneededDataFromPayload(updatedUser))
}

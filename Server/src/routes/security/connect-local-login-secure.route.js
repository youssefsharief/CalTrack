const clearUnneededDataFromPayload = require('services/clear-unneeded-data')
const mailer = require('services/mailer')
const generateRandomCode = require('services/generate-random-code').generateRandomCode
const getUserById = require('data-layer/user/get-user-by-id.db')

module.exports = (req, res, next) => {
    getUserById(req.decoded._id).then(user => {
        if (!user) {
            return next({ nF: 'User' })
        } else {
            user.activationCode = generateRandomCode()
            user.active = false
            user.email = req.body.email
            user.password = req.body.password
            return user.save()
        }
    }).then(updatedUser => {
        if (updatedUser) {
            return mailer.sendActivationCode(updatedUser.email, updatedUser.activationCode).then(()=>updatedUser)
        } else {
            return next({ nF: 'User' })
        }
    }).then((user) => {
        return res.status(200).json(clearUnneededDataFromPayload(user))
    }).catch(e => next(e))

}

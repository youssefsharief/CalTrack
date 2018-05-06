const db = require('../../data-layer/user/update-user-info.db')
const clearUnneededDataFromPayload = require('../../services/clear-unneeded-data')
const mailer = require('../../services/mailer')

module.exports = async (req, res, next) => {
    db(req.decoded._id, { email: req.body.email, password: req.body.password }).then( async user => {
        await mailer.sendActivationCode(user.email, user.activationCode)
        return res.status(200).json(clearUnneededDataFromPayload(user))
    }).catch(err => next(err))
}

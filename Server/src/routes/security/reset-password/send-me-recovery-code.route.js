const saveRecoveryCodeToDb = require('data-layer/user/save-recovery-code.db')
const generateRandomCode = require('services/generate-random-code').generateRandomCode
const mailer = require('services/mailer')
const errorMessageWrapper = require('services/utility').errorMessageWrapper

module.exports = async (req, res, next) => {
    const code = generateRandomCode()
    try {
        const user = await saveRecoveryCodeToDb(req.body.email, code)
        if(!user) return res.status(404).json(errorMessageWrapper( 'This email does not exist'))
        await mailer.sendEmailWithCode(req.body.email, code)
        return res.send({ success: 'An email has probably been sent with your recovery code' })
    } catch (e) {
        return next(e)
    }

}

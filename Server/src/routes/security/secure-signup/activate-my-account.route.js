
const getUserByEmail = require('data-layer/user/get-user-by-email')
const { getToken } = require('core/authentication')
const clearUnneededDataFromPayload = require('services/clear-unneeded-data')

module.exports = async (req, res, next) => {
    try {
        const user = await getUserByEmail(req.body.email)
        if (!user){
            return next({ nF: 'User' })
        } else if (user.activationCode !== req.body.code) {
            return res.status(400).json({msg: 'Wrong activation code' })
        } else {
            user.activationCode = undefined
            user.active = true
            await user.save()
            return res.status(200).json({ user: clearUnneededDataFromPayload(user), token: getToken(user._id, user.role) })
        }
    } catch (e) {
        return next(e)
    }


}
const { getToken } = require('core/authentication')
const comparePassword = require('services/compare-password').comparePassword
const getUserByEmail = require('data-layer/user/get-user-by-email')
const clearUnneededDataFromPayload = require('services/clear-unneeded-data')
const errorMessageWrapper = require('services/utility').errorMessageWrapper

module.exports = (req, res, next) => {
    let loginErr = new Error('Email or/and password are wrong')
    return getUserByEmail(req.body.email).then(user => {
        if (!user) return res.status(401).json(errorMessageWrapper(loginErr.message))
        if (!user.active) return res.status(403).json(errorMessageWrapper("Your account is not activated yet"))
        return comparePassword(req.body.password, user.password).then(ok => {
            if (!ok) return res.status(401).json(errorMessageWrapper(loginErr.message))
            return res.status(200).json({ user: clearUnneededDataFromPayload(user), token: getToken(user._id, user.role) })
        }).catch(err => next(err))
    })
}



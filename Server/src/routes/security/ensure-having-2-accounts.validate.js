
const getUserById = require('../../data-layer/user/get-user-by-id.db')


module.exports = async (req, res, next) => {
    const user = await getUserById(req.decoded._id).catch(e => next(e))
    if (!user) return next({ nF: 'User' })
    if (isDisallowedToDisconnect(user)) {
        return res.status(400).json({msg: 'You could not disconnect the last remaining login'})
    } else {
        return next()
    }
}

function isDisallowedToDisconnect(user) {
    let count = 3
    if (!user.googleId) {
        count--;
    }
    if (!user.facebookId) {
        count--;
    }
    if (!user.email) {
        count--;
    }
    return count === 1
}
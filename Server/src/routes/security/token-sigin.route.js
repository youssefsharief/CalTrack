
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com');
const getUserByGoogleId = require('../../data-layer/get-user-by-google-id')
const clearUnneededDataFromPayload = require('../../services/clear-unneeded-data')
const addNewUser = require('../../data-layer/add-new-user.db')
const ROLES = require('../../config/rolesConstants')
const { getToken } = require('../../core/authentication')

module.exports = async(req, res, next) => {

    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: '170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com',
    }).catch(console.error);
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    getUserByGoogleId(userid).then(user => {
        if (user) {
            return res.status(200).json({ user: clearUnneededDataFromPayload(user), token: getToken(user._id, user.role) })
        }
        if (!user) {
            user = {
                name: payload.name,
                meals: [],
                active: true,
                maxCalories: 2250,
                isTrackingDisplayed: true,
                googleId: userid
            }
            addNewUser(user, ROLES.regular).then(user => {
                return res.status(200).json({ user: clearUnneededDataFromPayload(user), token: getToken(user._id, user.role) })
            }).catch(e => next(e))
        }
    })
}




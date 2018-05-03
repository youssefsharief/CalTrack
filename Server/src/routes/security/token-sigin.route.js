
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com');
const getUserByGoogleId = require('../../data-layer/get-user-by-google-id')
const clearUnneededDataFromPayload = require('../../services/clear-unneeded-data')
const addNewUser = require('../../data-layer/add-new-user.db')
const ROLES = require('../../config/rolesConstants')

module.exports = async(req, res, next) => {

    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: '170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    }).catch(console.error);
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(userid)
    console.log(payload)

    // getUserByGoogleId(userid).then(user => {
    //     if (!user) {
    //         addNewUser(user, ROLES.regular).then(user => {
    //             return res.status(200).json(clearUnneededDataFromPayload(user))
    //         }).catch(e => next(e))
    //     }
    // })
    return res.status(200).json('ok')
}




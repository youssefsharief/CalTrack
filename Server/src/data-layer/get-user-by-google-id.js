const usersModel = require('../models/users.model')

module.exports = (googleId) =>{
    return usersModel.findOne({ googleId }).exec()
}
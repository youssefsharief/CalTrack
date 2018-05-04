const usersModel = require('../models/users.model')

module.exports = (attr) =>{
    return usersModel.findOne(attr).exec()
}
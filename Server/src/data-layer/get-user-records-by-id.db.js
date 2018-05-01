const usersModel = require('../models/users.model')

module.exports = (id) => {
    return usersModel.findById(id).select('_id name email meals role').lean().populate('meals').exec()
}
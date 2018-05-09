const usersModel = require('models/users.model')

module.exports = (_id, payload) => {
    return usersModel.findOneAndUpdate({ _id }, payload, { new: true }).select('-meals -password -__v')
}
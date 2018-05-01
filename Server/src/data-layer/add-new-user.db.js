const usersModel = require('../models/users.model')

module.exports = (payload, role) => {
    const newUser = new usersModel(payload)
    newUser.meals = []
    newUser.role = role
    return newUser.save()
}
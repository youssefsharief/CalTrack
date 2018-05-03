const usersModel = require('../models/users.model')

module.exports = (_id, {email, name, maxCalories, isTrackingDisplayed}) => {
    return usersModel.findOneAndUpdate({ _id }, { email, name, maxCalories, isTrackingDisplayed }, { new: true })
}
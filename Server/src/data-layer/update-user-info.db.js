const usersModel = require('../models/users.model')

module.exports = (_id, {name, maxCalories, isTrackingDisplayed}) => {
    return usersModel.findOneAndUpdate({ _id }, { name, maxCalories, isTrackingDisplayed }, { new: true })
}
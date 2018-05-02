const usersModel = require('../models/users.model')

module.exports = (userId, newMeal) => {
    console.log(newMeal)
    return usersModel.findOneAndUpdate(
        { _id: userId },
        { $push: { meals: newMeal } },
        { new: true })
}
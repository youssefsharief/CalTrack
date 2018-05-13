const usersModel = require('models/users.model')

module.exports = (_id, mealId, updatedRecord) => {
    return usersModel.findOneAndUpdate(
        { _id, "meals._id": mealId },
        { $set: { "meals.$.name": updatedRecord.name,  "meals.$.numOfCalories": updatedRecord.numOfCalories, "meals.$.date": updatedRecord.date} },
        { new: true }
    ).select('_id')
}



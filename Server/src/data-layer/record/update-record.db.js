const usersModel = require('../../models/users.model')

module.exports = (_id, mealId, updatedTimeZone) => {
    return usersModel.findOneAndUpdate(
        { _id, "meals._id": mealId },
        { $set: { "meals.$": updatedTimeZone } },
        { new: true }
    )
}



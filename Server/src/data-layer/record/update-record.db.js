const usersModel = require('models/users.model')

module.exports = (_id, mealId, updatedRecord) => {
    console.log(updatedRecord)
    return usersModel.findOneAndUpdate(
        { _id, "meals._id": mealId },
        { $set: { "meals.$": updatedRecord } },
        { new: true }
    ).select('-meals')
}



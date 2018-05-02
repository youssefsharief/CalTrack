const usersModel = require('../models/users.model')

module.exports =
    class getRecordsQuery {
        constructor(userId, limit, skip) {
            this.limit = limit
            this.skip = skip
            this.userId = userId
        }
        getMeals() {
            return usersModel.aggregate([
                { $match: { _id: this.userId } },
                { $project: { meals: { $slice: ["$meals", this.skip, this.limit] } } }
            ]
            ).exec().then(user => user[0].meals)

            // find({ _id: this.userId }, { meals: { $slice: [this.skip, this.limit] } })

            //     .then(user => console.log(user[0].meals))
        }
        getMealsCount() {
            return usersModel.find({ _id: this.userId }, { meals: { $slice: [this.skip, this.limit] } }).count().lean().exec()
        }

    }
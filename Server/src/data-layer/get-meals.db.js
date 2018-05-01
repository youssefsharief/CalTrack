const usersModel = require('../models/users.model')

module.exports =
    class getMealsQuery {
        constructor(userId, limit, skip) {
            this.limit = limit
            this.skip = skip
            this.userId = userId
        }
        getUsers() {
            return usersModel.find({_id: this.userId}, {meals:{$slice: [this.skip, this.limit]}}).lean().exec()
        }
        getUsersCount() {
            return usersModel.find({_id: this.userId}, {meals:{$slice: [this.skip, this.limit]}}).count().lean().exec()
        }

    }
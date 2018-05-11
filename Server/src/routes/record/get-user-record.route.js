const getRecord = require('data-layer/record/get-record.db')

module.exports = (req, res, next) => {
    return getRecord(req.params.id, req.params.mealId).then(x => {
        return x ? res.status(200).json(x) : next({nF: "Meal"})
    }).catch(err => next(err))
}
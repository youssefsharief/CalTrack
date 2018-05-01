const removeRecord = require('../../data-layer/remove-record.db')

module.exports = (req, res, next) => {
    return removeRecord(req.params.id, req.params.mealId)
    .then(update=> update ?  res.status(200).json(update) : next({nF: 'meal'}))
    .catch(err=>next(err))
}
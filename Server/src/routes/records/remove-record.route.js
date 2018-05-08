const removeRecord = require('data-layer/record/remove-record.db')

module.exports = (req, res, next) => {
    return removeRecord(req.params.id, req.params.mealId)
    .then(update=> update ?  res.status(200).json({success: 'ok'}) : next({nF: 'meal'}))
    .catch(err=>next(err))
}
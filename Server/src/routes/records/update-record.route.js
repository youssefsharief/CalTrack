
const updateRecord = require('../../data-layer/update-record.db')
const { getNutriCalories } = require('../../external-apis/nutritionix')
const { getDateIgnoringTimezone } = require('../../services/date-utility')

module.exports = async (req, res, next) => {
    const numOfCalories = req.body.numOfCalories ? req.body.numOfCalories : await getNutriCalories(req.body.name)
    return updateRecord(req.params.id, req.params.mealId, {
        name: req.body.name,
        numOfCalories,
        date: getDateIgnoringTimezone(req.body.date)
    }).catch(err => next(err)).then(user => res.status(200).json(user))
}

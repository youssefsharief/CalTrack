
const updateRecord = require('data-layer/record/update-record.db')
const { getNutriCalories } = require('external-apis/nutritionix')
const { getDateIgnoringTimezone } = require('services/date-utility')
const successMessage = require('services/utility').successMessageWrapper

module.exports = async (req, res, next) => {
    const numOfCalories = req.body.numOfCalories ? req.body.numOfCalories : await getNutriCalories(req.body.name)
    return updateRecord(req.params.id, req.params.mealId, {
        name: req.body.name,
        numOfCalories,
        date: getDateIgnoringTimezone(req.body.date)
    }).then((user) => {
        return user ? res.status(200).json(successMessage) : next({ nF: 'Meal' })
    }).catch(err => next(err))
}

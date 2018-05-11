const addRecord = require('data-layer/record/add-record.db')
const { getNutriCalories } = require('external-apis/nutritionix')
const { getDateIgnoringTimezone } = require('services/date-utility')
const successMessage = require('services/utility').successMessageWrapper


module.exports = async (req, res, next) => {
    const numOfCalories = req.body.numOfCalories ? req.body.numOfCalories : await getNutriCalories(req.body.name)
    return addRecord(req.params.id, {
        name: req.body.name,
        numOfCalories,
        date: getDateIgnoringTimezone(req.body.date)
    }).catch(err => next(err)).then((x) => x ? res.status(200).json(successMessage): next({nF: 'User'}))
}



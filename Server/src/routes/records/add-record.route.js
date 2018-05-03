const addRecord = require('../../data-layer/add-record.db')
const { getNutriCalories } = require('../../external-apis/nutritionix')
const { getDateIgnoringTimezone } = require('../../services/date-utility')


module.exports = async (req, res, next) => {
    const numOfCalories = req.body.numOfCalories ? req.body.numOfCalories : await getNutriCalories(req.body.name)
    return addRecord(req.params.id, {
        name: req.body.name,
        numOfCalories,
        date: getDateIgnoringTimezone(req.body.date)
    }).catch(err => next(err)).then(user => res.status(200).json(user))
}



const addRecord = require('../../data-layer/add-record.db')
const { getNutriCalories } = require('../../external-apis/nutritionix')


module.exports = async (req, res, next) => {
    const dateWithTimezone = new Date(req.body.date)
    const date = new Date(dateWithTimezone.getTime() - dateWithTimezone.getTimezoneOffset() * 60 * 1000)
    const numOfCalories = req.body.numOfCalories ? req.body.numOfCalories : await getNutriCalories(req.body.name)
    return addRecord(req.params.id, {
        name: req.body.name,
        numOfCalories,
        date
    }).catch(err => next(err)).then(user => res.status(200).json(user))
}



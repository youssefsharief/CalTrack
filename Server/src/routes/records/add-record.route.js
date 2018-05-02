const addRecord = require('../../data-layer/add-record.db')


module.exports = (req, res, next) => {
    const date = new Date(req.body.date)
    return addRecord(req.params.id, {
        name: req.body.name,
        numOfCalories: req.body.numOfCalories,
        date: new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
    }).catch(err => next(err)).then(user => res.status(200).json(user))
}

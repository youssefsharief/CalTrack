const getRecords = require('data-layer/record/get-todays-intake.db')

module.exports = (req, res, next) => {
    return getRecords(req.params.id).then(x => res.status(200).json(x)).catch(err => next(err))
}
const getRecords = require('data-layer/record/get-records.db')

module.exports = (req, res, next) => {
    return getRecords(req.params.id, 10, req.query.skip ? parseInt(req.query.skip) : 0, req.query.startDate, req.query.endDate,
        req.query.startTime, req.query.endTime).then(x => res.status(200).json(x)).catch(err => next(err))
}
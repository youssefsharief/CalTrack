const db = require('data-layer/user/update-user-info.db')


module.exports = (req, res, next) => {
    return db(req.params.id, {
        name: req.body.name,
        maxCalories: req.body.maxCalories,
        isTrackingDisplayed: req.body.isTrackingDisplayed
    }).then(() => res.status(200).json({ success: 'ok' }))
        .catch(err => next(err))
}

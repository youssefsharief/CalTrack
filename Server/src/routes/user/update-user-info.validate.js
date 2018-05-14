const Joi = require('joi')

module.exports =  (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(20).required().label('name'),
        maxCalories: Joi.number().required().min(500).max(8000).label('maxCalories'),
        isTrackingDisplayed: Joi.bool().required().label('isTrackingDisplayed'),
    })
    return Joi.validate(req.body, schema , (err) => next(err))
}
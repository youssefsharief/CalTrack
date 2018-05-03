const Joi = require('joi')

module.exports =  (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(20).required().label('name'),
        email: Joi.string().email().required().label('email'),
        maxCalories: Joi.number().min(500).max(8000).label('maxCalories'),
        isTrackingDisplayed: Joi.bool().label('isTrackingDisplayed'),
    })
    return Joi.validate(req.body, schema , (err) => next(err))
}
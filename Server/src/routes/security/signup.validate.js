const Joi = require('joi')
const passwordRegex = require('config/regexConstants').passwordRegex

module.exports = (req, res, next) => {
    if (!req.recaptcha.error) {
        const schema = Joi.object().keys({
            name: Joi.string().min(3).max(20).required().label('name'),
            password: Joi.string().regex(passwordRegex).required().label('password'),
            email: Joi.string().email().required().label('email'),
            meals: Joi.array().empty().label('meals'),
            maxCalories: Joi.number().required().min(500).max(8000).label('maxCalories'),
            isTrackingDisplayed: Joi.bool().required().label('isTrackingDisplayed'),
            "g-recaptcha-response": Joi.string()
        })
        return Joi.validate(req.body, schema, (err) => next(err))
    }
}
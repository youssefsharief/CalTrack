const Joi = require('joi')

module.exports = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().required().label('name'),
        numOfCalories: Joi.string().required().label('numOfCalories'),
        date: Joi.date(),
    })
    return Joi.validate(req.body, schema, (err) => next(err))
}
const Joi = require('joi')

module.exports = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().required().label('name'),
        numOfCalories: Joi.number().required().label('description'),
        date: Joi.date(),
    })
    return Joi.validate(req.body, schema, (err) => next(err))
}
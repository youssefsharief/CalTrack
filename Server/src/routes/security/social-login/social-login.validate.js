const Joi = require('joi')

module.exports =  (req, res, next) => {
    const schema = Joi.object().keys({
        access_token: Joi.string().min(10).required().label('access_token'),
    })
    return Joi.validate(req.body, schema , (err) => next(err))
}
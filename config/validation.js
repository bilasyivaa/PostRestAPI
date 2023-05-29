const Joi = require('joi')

const registerValidation = (data) => {
    const Schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return Schema.validate(data)
}

const LoginValidation = (data) => {
    const Schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return Schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.LoginValidation = LoginValidation
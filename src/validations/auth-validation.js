import Joi from 'joi'

const loginWithUsernameAndPassword = {
    body: Joi.object().keys({
        client_id: Joi.string().required(),
        client_secret: Joi.string().required(),
        audience: Joi.string().required(),
        grant_type: Joi.string().valid('client_credentials').required(),
    }),
}

export default {
    loginWithUsernameAndPassword,
}

import Joi from 'joi'
import getParamsFromJoiSchema from '../utils/getParamsFromJoiSchema'
import httpStatus from 'http-status'

const validate = (validationSchema) => (request, response, next) => {
    const validSchema = getParamsFromJoiSchema(validationSchema, [
        'params',
        'query',
        'body',
    ])
    const obj = getParamsFromJoiSchema(request, Object.keys(validSchema))
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(obj)

    if (error) {
        const errorMessage = error.details
            .map((details) => details.message)
            .join(', ')
        const errorMessageWithStatusCode = {
            statusCode: httpStatus.BAD_REQUEST,
            errorMessage,
        }
        return next(errorMessageWithStatusCode)
    }
    Object.assign(request, value)
    return next()
}

export default validate

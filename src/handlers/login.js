import envConfig from '../config/env'
import authValidation from '../validations/auth-validation'
import got from 'got'
import logger from '../config/logger'
import httpStatus from 'http-status'

const userAuthorization = async (next) => {
    console.log('Before auth!')
    const authRequest = {
        client_id: envConfig.clientId,
        client_secret: envConfig.clientSecret,
        audience: envConfig.audience,
        grant_type: envConfig.grandType,
    }
    console.log('After auth!')

    const { error } =
        authValidation.loginWithUsernameAndPassword?.body.validate(authRequest)

    if (error && error.details) {
        return {
            message: error.details[0].message,
            statusCode: httpStatus.BAD_REQUEST,
        }
    }

    try {
        const result = await got.post(envConfig.loginBase, {
            json: authRequest,
        })

        const { statusCode, body } = result

        logger.log({
            level: 'info',
            message: 'Auth token retrieved',
        })

        const token = `${JSON.parse(body)?.token_type} ${
            JSON.parse(body)?.access_token
        }`

        console.log(token)

        return {
            token,
            statusCode,
        }
    } catch (error) {
        next(error.response.body)
    }
}

export default userAuthorization

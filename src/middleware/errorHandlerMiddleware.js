import getErrorMessage from '../utils/getErrorMessage'
import httpStatusCode from '../utils/httpStatusCode'
import logErrorMessage from '../utils/logErrorMessage'

const BLAMELESS_ENV = process.env.BLAMELESS_ENV || 'development'

/**
 * Error handling middleware
 * @param {Error} error - Error object.
 * @param {Object} request - Request object.
 * @param {Object} response - Response object.
 * @param {Function} next - next() function.
 */
const errorHandlerMiddleware = (error, request, response, next) => {
    const errorMessage = getErrorMessage(error)
    const errorResponse = {
        statusCode: httpStatusCode({ error, response }),
        body: undefined,
    }

    logErrorMessage(errorMessage, 'error')

    if (response.headersSent) {
        return next(error)
    }

    // Append stack trance only if application is running on non-production enviorements
    if (BLAMELESS_ENV !== 'production') {
        errorResponse.body = errorMessage
    }

    response.status(errorResponse.statusCode)

    response.format({
        'application/json': () => {
            response.json({ message: errorResponse.body })
        },
        default: () => {
            response.type('text/plain').send(errorResponse.body)
        },
    })

    next()
}

export default errorHandlerMiddleware

import httpStatus from 'http-status'

/**
 * Not found routes handling middleware
 * @param {Object} request - Request object.
 * @param {Object} response - Response object.
 * @param {Function} next - next() function.
 */
const routeNotFoundHandlerMiddleware = (request, response, next) => {
    response.status(httpStatus.NOT_FOUND).send({
        message: `[${request.method}]: Route ${request.url} was not found!`,
    })
    next()
}

export default routeNotFoundHandlerMiddleware

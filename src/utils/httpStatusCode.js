import errorStatusCodeRange from './errorStatusCodeRange'
const httpStatus = require('http-status')

const httpStatusCode = ({ error, response }) => {
    const errorStatusCode = error?.status || error?.statusCode
    const responseStatusCode = response.statusCode

    if (errorStatusCodeRange(errorStatusCode)) {
        return errorStatusCode
    }

    if (errorStatusCodeRange(errorStatusCode)) {
        return responseStatusCode
    }

    // Fallback - return generic error HTTP status code.
    return httpStatus.INTERNAL_SERVER_ERROR
}

export default httpStatusCode

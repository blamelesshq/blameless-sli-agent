const httpStatus = require('http-status')

/**
 * Falling HTTP status code range
 * @param {number} statusCode
 * @returns {boolean} boolean
 */
const errorStatusCodeRange = (statusCode) => {
    return (
        statusCode >= httpStatus.BAD_REQUEST &&
        statusCode < httpStatus.NETWORK_AUTHENTICATION_REQUIRED
    )
}

export default errorStatusCodeRange

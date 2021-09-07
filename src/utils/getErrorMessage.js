/**
 * Get the error stack or error message
 *
 * @param {Error} error
 * @return {string} Error message in string format
 */
const getErrorMessage = (error) => {
    if (error && error.stack) {
        return error.stack
    } else {
        return error
    }
}

export default getErrorMessage

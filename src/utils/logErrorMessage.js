import logger from '../config/logger'

const logErrorMessage = (error, level) => {
    if (typeof error == 'object') {
        logger.log({
            level,
            message: JSON.stringify(error),
        })
    } else {
        logger.log({
            level,
            message: error,
        })
    }
}

export default logErrorMessage

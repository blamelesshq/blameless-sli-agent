import logger from '../config/logger'

/**
 * Router handler
 */
export default (handler) => {
    return async (request, response) => {
        logger.log({
            level: 'info',
            message: `REQUEST: ${JSON.stringify(
                {
                    body: request.body,
                    params: request.params,
                    query: request.query,
                    headers: request.headers,
                },
                null,
                '\t'
            )}`,
        })

        try {
            const result = await handler(request, response)

            logger.log({
                level: 'info',
                message: `RESPONSE: ${JSON.stringify(result, null, '\t')}`,
            })

            const statusCode = result && result.statusCode

            let cleanResult = result

            if (statusCode) {
                delete cleanResult.statusCode
            }

            return response.status(statusCode || 200).json(cleanResult)
        } catch (error) {
            logger.log({
                level: 'error',
                message: `ERROR: ${error}`,
            })
            return response
                .status(error.statusCode || 500)
                .json({ message: error.message })
        }
    }
}

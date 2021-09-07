const winston = require('winston')
import path from 'path'

const LOGS_PATH = path.join(__dirname, '../logs/')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
            ({ level, message, timestamp }) =>
                `[${level}]: ${timestamp} ${message}`
        )
    ),
    transports: [
        new winston.transports.File({
            filename: `${LOGS_PATH}/errors.log`,
            level: 'error',
        }),
        new winston.transports.File({
            filename: `${LOGS_PATH}/info.log`,
            level: 'info',
        }),
    ],
})

export default logger

// import app from './server'
// import logger from './config/logger'
import userAuthorization from './handlers/login'

// const port = process.env.PORT || 3005
// let server

// server = app.listen(port, () => {
//     logger.log({
//         level: 'info',
//         message: `Server is up and running on port: ${port}`,
//     })
// })

// const exitHandler = () => {
//     if (server) {
//         server.close(() => {
//             logger.log({
//                 level: 'info',
//                 message: 'Server closed!',
//             })
//             process.exit(1)
//         })
//     } else {
//         process.exit(1)
//     }
// }

// const unexpectedErrorOccurredHandler = (error) => {
//     logger.log({
//         level: 'error',
//         message: error,
//     })
//     exitHandler()
// }

// process.on('uncaughtException', unexpectedErrorOccurredHandler)
// process.on('unhandledRejection', unexpectedErrorOccurredHandler)

const run = async () => {
    try {
        const data = await userAuthorization()

        

    } catch (error) {}
}

run()

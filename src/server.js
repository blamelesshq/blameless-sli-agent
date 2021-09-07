import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware'
import routeNotFoundHandlerMiddleware from './middleware/routeNotFoundHandlerMiddleware'

const server = express()

server.use(helmet())
server.use(express.json())

server.use(cors())
server.options('*', cors())

// ROUTES

server.use(routeNotFoundHandlerMiddleware)

server.use(errorHandlerMiddleware)

export default server

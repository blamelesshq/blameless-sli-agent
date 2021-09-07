import { Router } from 'express'
import routeHandler from '../middleware/routeHandler'
import login from '../handlers/login'

const router = Router()

router.post('/api/v1/user/login', routeHandler(login))

export default router

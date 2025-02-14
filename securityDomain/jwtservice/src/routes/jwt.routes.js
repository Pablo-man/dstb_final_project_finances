import {Router} from 'express'
import { createJWT } from '../util/jwt.js'

const router = Router()

router.post("/", createJWT);

export default router
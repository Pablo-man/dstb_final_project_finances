import {Router} from 'express'
import { uploadImage } from '../controllers/s3.controllers.js';

const router = new Router()

router.post('/', uploadImage)

export default router;
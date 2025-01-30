import {Router} from 'express'
import { getURL, listImages } from '../controllers/s3.controllers.js';

const router = new Router()

router.get('/', listImages)

router.get('/URL/:filename', getURL)

export default router;
import { Router } from 'express';

import APIError from '../errors/APIError';
import errorHandler from '../middlewares/errorHandler';

import example from './router.example';

const router = Router();

router.use('/', example);
router.use(errorHandler);
router.use(() => { throw new APIError('page not fount', 404); });

export default router;

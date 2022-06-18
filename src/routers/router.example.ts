import { Router } from 'express';

import controller from '../controllers/controller.example';

const router = Router();

router.get('/hello', controller.say);

export default router;

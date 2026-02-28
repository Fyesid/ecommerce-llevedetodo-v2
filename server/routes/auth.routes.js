import { Router } from 'express';

import { login } from '../controllers/auth.controllers.js';
import { getProfile } from '../controllers/auth.controllers.js';

import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// LOGIN

router.post('/login', login);
router.get('/login', verifyToken, getProfile);



export default router;
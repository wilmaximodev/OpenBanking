import { Router } from 'express';
import clientRoute from './ClientRouter';

const router = Router();

router.use('/client', clientRoute);

export default router;

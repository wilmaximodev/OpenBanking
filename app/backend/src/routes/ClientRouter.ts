import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientController = new ClientController();

const router = Router();

router.post('/', (req, res) => clientController.createAccount(req, res));

export default router;

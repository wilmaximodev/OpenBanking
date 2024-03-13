import { Router } from 'express';
import ClientController from '../controllers/ClientController';
import ValidateClient from '../middlewares/validateClient';

const clientController = new ClientController();

const router = Router();

router.post('/',
  ValidateClient.inputClient,
(req, res) => clientController.createAccount(req, res),
);

export default router;

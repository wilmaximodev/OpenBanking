import { Router } from 'express';
import ClientController from '../controllers/ClientController';
import ValidateClient from '../middlewares/validateClient';
import ValidateUpdate from '../middlewares/validateUpdate';

const clientController = new ClientController();

const router = Router();

router.post(
  '/',
  ValidateClient.inputClient,
  (req, res) => clientController.createAccount(req, res),
);

router.put(
  '/:id',
  ValidateUpdate.inputClient,
  (req, res) => clientController.editAccount(req, res),
);

export default router;

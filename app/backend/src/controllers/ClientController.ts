import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ClientService from '../services/ClientService';

export default class ClientController {
  constructor(
    private clientService = new ClientService(),
  ) { }

  public async createAccount(req: Request, res: Response) {
    const { status, data } = await this.clientService.createAccount(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async editAccount(req: Request, res: Response) {
    const { status, data } = await this.clientService.editAccount(req.body, +req.params.id);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}

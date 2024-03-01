import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ClientService from '../services/ClientService';

export default class ClientController {
  constructor(
    private userService = new ClientService(),
  ) { }

  public async createAccount(req: Request, res: Response) {
    const { status, data } = await this.userService.createAccount(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}

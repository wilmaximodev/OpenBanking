// import * as bcrypt from 'bcryptjs';
// import Token from '../auth/jwt';
import { ServiceResponse } from '../utils/ServiceResponse';
import ClientModel from '../models/ClientModel';
import IClientModel from '../interfaces/client/IClientModel';
import IClient from '../interfaces/client/IClient';
import { NewInfos } from '../utils/types/NewInfos';

export default class ClientService {
  constructor(
    private clientModel: IClientModel = new ClientModel(),
  ) { }

  public async createAccount(client: IClient): Promise<ServiceResponse<IClient>> {
    const newClient = await this.clientModel.createAccount(client);
    return { status: 'successful', data: newClient };
  }

  public async editAccount(infos: NewInfos, clientID: number): Promise<ServiceResponse<IClient>> {
    try {
      await this.clientModel.editAccount(infos, clientID);
      return { status: 'successful', data: { message: 'Updated' } };
    } catch (e: unknown) {
      return { status: 'notFound', data: { message: e.message } };
    }
  }
}

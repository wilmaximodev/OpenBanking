import IClientModel from '../interfaces/client/IClientModel';
import IClient from '../interfaces/client/IClient';
import SequelizeClient from '../database/models/SequelizeClient';

export default class ClientModel implements IClientModel {
  private model = SequelizeClient;

  async createAccount(client: IClient): Promise<IClient> {
    const { name, email, password, document } = client;
    const clientDB = await this.model.create({
      name,
      email,
      password,
      document,
      isActive: 1,
    });

    return clientDB;
  }
}

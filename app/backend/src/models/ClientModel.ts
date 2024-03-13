import IClientModel from '../interfaces/client/IClientModel';
import IClient from '../interfaces/client/IClient';
import SequelizeClient from '../database/models/SequelizeClient';
import { NewInfos } from '../utils/types/NewInfos';

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

  async editAccount(infos: NewInfos, clientiD: number): Promise<void> {
    const validClient = await this.model.findByPk(clientiD);
    if (!validClient) throw new Error('Client not found');
    await this.model.update({
      name: infos.name,
      email: infos.email,
      password: infos.password,
    }, { where: { id: clientiD } });
  }
}

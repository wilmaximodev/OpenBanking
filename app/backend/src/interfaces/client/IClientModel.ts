import IClient from './IClient';

export default interface IClientModel {
  createAccount(client: IClient): Promise<IClient>;
}

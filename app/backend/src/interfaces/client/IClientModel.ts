import IClient from './IClient';

export default interface IClientModel {
  createAccount(client: IClient): Promise<IClient>;
  editAccount(newInfos: object, clientID: number): Promise<void>;
}

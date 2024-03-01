import IClient from './IClient';

export default interface IUserModel {
    createAccount(client: IClient): Promise<IClient>;
}

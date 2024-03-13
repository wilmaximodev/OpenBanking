export default interface IClient {
  id: number;
  name: string;
  email: string;
  password: string;
  document: string;
  isActive?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

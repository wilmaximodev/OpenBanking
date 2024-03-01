export default interface IClient {
    id: number;
    name: string;
    email: string;
    password: string;
    documentNumber: number;
    isActive?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'clients',
      [
        {
          name: 'Jose Antonio',
          email: 'emaildoantonio@email.com',
          password: '123456',
          document: '12345678129',
          isActive: 1,
        },
        {
          name: 'Tiago barbosa',
          email: 'emaildotiago@email.com',
          password: '124567',
          document: '12345679218',
          isActive: 1,
        },
        {
          name: 'Amanda Santos',
          email: 'emaildaamanda@email.com',
          password: '123457',
          document: '21345679812',
          isActive: 0,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('clients', {});
  },
};

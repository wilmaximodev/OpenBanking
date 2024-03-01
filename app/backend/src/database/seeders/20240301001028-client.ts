import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'clients',
      [
        {
          name: "Jose Antonio",
          email: "emaildoantonio@email.com",
          password: "123456",
          documentNumber: 123456789,
          isActive: 1,
        },
        {
          name: "Tiago barbosa",
          email: "emaildotiago@email.com",
          password: "124567",
          documentNumber: 123456798,
          isActive: 1,
        },
        {
          name: "Amanda Santos",
          email: "emaildaamanda@email.com",
          password: "123457",
          documentNumber: 213456798,
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

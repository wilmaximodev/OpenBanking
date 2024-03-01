import { Model, QueryInterface, DataTypes } from 'sequelize';
import IClient from '../../interfaces/client/IClient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IClient>>('clients', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        documentNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        isActive: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('clients');
  },
};
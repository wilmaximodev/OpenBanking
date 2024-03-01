import { Model, QueryInterface, DataTypes } from 'sequelize';
import IExample from '../../interfaces/Example';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IExample>>('example_mig', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('example_mig');
  },
};
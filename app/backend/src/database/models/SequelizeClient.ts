import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
  // import OtherModel from './OtherModel';
  
  export default class SequelizeClient extends Model<InferAttributes<SequelizeClient>,
  InferCreationAttributes<SequelizeClient>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare documentNumber: number;
    declare isActive: number;
  }
  
  SequelizeClient.init({
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    documentNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  }, {
    sequelize: db,
    timestamps: false,
    tableName: 'clients',
  });
  
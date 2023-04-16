import { Sequelize } from 'sequelize-typescript';

import { CompanyModel, EmployeeModel } from './models';

const models = [CompanyModel, EmployeeModel];

const database = new Sequelize(process.env.PG_URL as string, {
  define: { underscored: true },
  dialect: 'postgres',
  logging: false,
  models,
});

// database.sync({ alter: true });
// database.sync({ force: true });
// database.drop({ cascade: true });

export default database;

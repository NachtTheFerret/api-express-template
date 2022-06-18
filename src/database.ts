import { Sequelize } from 'sequelize-typescript';

import { ExampleModel } from './models';

const database = new Sequelize(process.env.PG_URL as string, {
  define: { underscored: true },
  dialect: 'postgres',
  logging: false,
  models: [ExampleModel],
});

// database.sync({ alter: true });
// database.sync({ force: true });
// database.drop({ cascade: true });

export default database;

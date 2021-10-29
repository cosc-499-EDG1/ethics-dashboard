import dbConfig from './config/db.config';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';

/* MODELS */
import Account from './models/account.model';

/**
 * Models must also be added in the 'models' field of this.
 * TODO: swap to process.env
 */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    quoteIdentifiers: false,
    dialect: dbConfig.dialect as Dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
    models: [Account],
});

const db = sequelize;

export { db };

import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config({ path: 'db.env' });

/* MODELS */
import Account from './models/account.model';

/**
 * Models must also be added to this.
 */
const MODELS = [Account];

const sequelize = new Sequelize(process.env.DB_NAME ?? 'cosc499', process.env.DB_USER ?? 'root', process.env.DB_PASSWORD ?? 'password', {
    host: process.env.DB_HOST ?? 'localhost',
    quoteIdentifiers: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    models: MODELS,
});

const db = sequelize;

export { db };

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { QueryTypes } from 'sequelize';
import { initApp } from './app';
import { db } from './database';

setImmediate(async () => {
    await initApp();

    /* Debug Accounts */
    if ((process.env.NODE_ENV ?? 'development') === 'development') {
        const createUser = async (username, email, first_name, last_name, password, type) => {
            const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
            const sql = `
                   INSERT IGNORE INTO Accounts (username, email, first_name, last_name, type, password)
                   VALUES ('${username}', '${email}', '${first_name}', '${last_name}', '${type}', '${passwordHash}');
                 `;
            db.getQueryInterface();
            return db.query(sql, { type: QueryTypes.INSERT });
        };
        await createUser('admin', 'admin@admin.com', 'Admin', 'Admin', 'admin', 'manager');
        await createUser('user', 'user@user.com', 'User', 'User', 'user', 'student');
        var sql = `
                   INSERT IGNORE INTO ClassGroups (code, name)
                   VALUES ('AAAAA', 'test class group');
             `;
        db.getQueryInterface();
        db.query(sql, { type: QueryTypes.INSERT });

        // sql = `SELECT id FROM Account WHERE username = admin`;
        // db.getQueryInterface();
        // var adminId = db.query(sql, {type:QueryTypes.SELECT});
        // sql = `INSERT INTO Dashboards (name, ownerId, createdAt, updatedAt) VALUES ('adminDashboard',1, ` + moment().format("YYYY-MM-DD hh:mm:ss") + `, ` + moment().format("YYYY-MM-DD hh:mm:ss") + `)`;
        // db.getQueryInterface();
        // db.query(sql, {type: QueryTypes.INSERT});
    }
});

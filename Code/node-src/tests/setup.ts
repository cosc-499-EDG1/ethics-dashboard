import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { QueryTypes } from 'sequelize';
import { initApp } from '../app/app';
import { db } from '../app/database';
import dotenv from 'dotenv';
import moment from 'moment';
dotenv.config({ path: 'jwt.env' });

/**
 * Start the app, then insert a test admin account into the database
 * Sets the admin token for further usage in tests.
 */
let server: any;
beforeAll(async () => {
    server = await initApp();
    const createUser = async (username, email, first_name, last_name, password, type) => {
        const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const sql = `
           INSERT INTO Accounts (username, email, first_name, last_name, type, password)
           VALUES ('${username}', '${email}', '${first_name}', '${last_name}', '${type}', '${passwordHash}');
         `;
        db.getQueryInterface();
        return db.query(sql, { type: QueryTypes.INSERT });
    };
    const adminResult = await createUser('admin', 'admin@admin.com', 'Admin', 'Admin', 'admin', 'manager');
    const adminToken = jwt.sign({ sub: adminResult[0] }, process.env.JSON_WEB_TOKEN_SECRET ?? '12345', { expiresIn: '7d' });
    global.adminToken = adminToken;

    const userResult = await createUser('user', 'user@user.com', 'User', 'User', 'user', 'student');
    const userToken = jwt.sign({ sub: userResult[0] }, process.env.JSON_WEB_TOKEN_SECRET ?? '12345', { expiresIn: '7d' });
    global.userToken = userToken;

    var classGroupInsert = `
           INSERT INTO ClassGroups (code, name)
           VALUES ('AAAAA', 'test class group');
     `;
    const classResult = await db.query(classGroupInsert, { type: QueryTypes.INSERT });

    const studentRelationInsert = `
        INSERT IGNORE INTO Students (studentId, classId)
        VALUES (${userResult[0]}, ${classResult[0]});
        `;
    await db.query(studentRelationInsert, { type: QueryTypes.INSERT });

    const instructorRelationInsert = `
        INSERT IGNORE INTO Instructors (instructorId, classId)
        VALUES (${adminResult[0]}, ${classResult[0]});
        `;
    await db.query(instructorRelationInsert, { type: QueryTypes.INSERT });
});

/**
 * Cleanup the database after tests and stop the app.
 */
afterAll(async () => {
    await db.sync({ force: true });
    server.close();
});

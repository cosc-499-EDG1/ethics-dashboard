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
            return db.query(sql, { type: QueryTypes.INSERT });
        };
        db.getQueryInterface();
        const adminResult = await createUser('admin', 'admin@admin.com', 'Admin', 'Admin', 'admin', 'manager');
        const userResult = await createUser('user', 'user@user.com', 'User', 'User', 'user', 'student');
        const classGroupInsert = `
                   INSERT IGNORE INTO ClassGroups (code, name)
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
    }
});

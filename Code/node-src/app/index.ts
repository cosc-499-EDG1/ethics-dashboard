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

        const dashboardInsert = `
            INSERT IGNORE INTO Dashboards (name, ownerId, summary, dilemmas, role)
            VALUES ('Test Dashboard', ${userResult[0]}, 'Testing Case Summary', 'Testing Dilemmas', 'Testing Role');
            `;
        const dashboardResult = await db.query(dashboardInsert, { type: QueryTypes.INSERT });

        const dashboardOptionInsert = `
            INSERT IGNORE INTO CaseOptions(option_title, option_desc, option_num, dashboard_id)
            VALUES ('Test Option 1', 'Testing Option 1', 1, ${dashboardResult[0]}),
            ('Test Option 2', 'Testing Option 2', 2, ${dashboardResult[0]}),
            ('Test Option 3', 'Testing Option 3', 3, ${dashboardResult[0]});
            `;
        await db.query(dashboardOptionInsert, { type: QueryTypes.INSERT });

        const stakeholderInsert = `
            INSERT IGNORE INTO Stakeholders (title, description, num, dashboard_id)
            VALUES ('Test Stakeholder 1', 'Testing Stakeholder 1', 0, ${dashboardResult[0]}),
            ('Test Stakeholder 2', 'Testing Stakeholder 2', 1, ${dashboardResult[0]}),
            ('Test Stakeholder 3', 'Testing Stakeholder 3', 2, ${dashboardResult[0]}),
            ('Test Stakeholder 4', 'Testing Stakeholder 4', 3, ${dashboardResult[0]}),
            ('Test Stakeholder 5', 'Testing Stakeholder 5', 4, ${dashboardResult[0]}),
            ('Test Stakeholder 6', 'Testing Stakeholder 6', 5, ${dashboardResult[0]});
        `;
        await db.query(stakeholderInsert, { type: QueryTypes.INSERT });
    }
});

import { QueryTypes } from 'sequelize';
import request from 'supertest';
import { app } from '../app/app';
import { db } from '../app/database';

describe('Routes', () => {   
    let dashboard_id = 1; 
    beforeAll(async () => {
        const dashboardInsert = `
            INSERT IGNORE INTO Dashboards (name, ownerId, summary, dilemmas, role)
            VALUES ('Test Dashboard', 2, 'Testing Case Summary', 'Testing Dilemmas', 'Testing Role');
            `;
        const dashboardResult = await db.query(dashboardInsert, { type: QueryTypes.INSERT });

        dashboard_id = dashboardResult[0];

        const dashboardOptionInsert = `
            INSERT IGNORE INTO CaseOptions(option_title, option_desc, option_num, dashboard_id)
            VALUES ('Test Option 1', 'Testing Option 1', 1, ${dashboard_id}),
            ('Test Option 2', 'Testing Option 2', 2, ${dashboard_id}),
            ('Test Option 3', 'Testing Option 3', 3, ${dashboard_id});
            `;
        await db.query(dashboardOptionInsert, { type: QueryTypes.INSERT });

        const stakeholderInsert = `
            INSERT IGNORE INTO Stakeholders (title, description, num, dashboard_id)
            VALUES ('Test Stakeholder 1', 'Testing Stakeholder 1', 0, ${dashboard_id}),
            ('Test Stakeholder 2', 'Testing Stakeholder 2', 1, ${dashboard_id}),
            ('Test Stakeholder 3', 'Testing Stakeholder 3', 2, ${dashboard_id}),
            ('Test Stakeholder 4', 'Testing Stakeholder 4', 3, ${dashboard_id}),
            ('Test Stakeholder 5', 'Testing Stakeholder 5', 4, ${dashboard_id}),
            ('Test Stakeholder 6', 'Testing Stakeholder 6', 5, ${dashboard_id});
        `;
        await db.query(stakeholderInsert, { type: QueryTypes.INSERT });
    });

    afterAll(async () => {
        await db.sync({ force: true });
    });

    //Test update option route
    it('UPDATE /deontology/update integration test', async () => {
        const req = await request(app).post('/api/deontology/update').set('Authorization', `Bearer ${global.userToken}`).send({ id: dashboard_id, option_num: 1 });
        expect(req.status).toBe(200);
    });

    //Test update moral law route
    it('UPDATE /deontology/updateLaw integration test', async () => {
        const req = await request(app).post('/api/deontology/updateLaw').set('Authorization', `Bearer ${global.userToken}`).send({ id: dashboard_id, option_num: 1 });
        expect(req.status).toBe(200);
    });
});

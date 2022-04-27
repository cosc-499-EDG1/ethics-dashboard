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
    });

    afterAll(async () => {
        await db.sync({ force: true });
    });

    it('UPDATE /stakeholders/update integration test', async () => {
        const stakeholderData = [
            {
                title: 'Test Stakeholder 1',
                description: 'Testing Stakeholder 1',
            },
            {
                title: 'Test Stakeholder 2',
                description: 'Testing Stakeholder 1',
            },
            {
                title: 'Test Stakeholder 3',
                description: 'Testing Stakeholder 1',
            },
        ];
        const req = await request(app).put('/api/stakeholders/update').set('Authorization', `Bearer ${global.userToken}`).send({ id: dashboard_id, data: stakeholderData });
        expect(req.status).toBe(200);
    });

    //Test update moral law route
    it('UPDATE /care-ethics/update integration test', async () => {
        const careEthicsData = {
            option_num: 1,
            attentiveness: 0.5,
            competence: 5.6,
            responsiveness: 2.4,
        }
        const req = await request(app).put('/api/care-ethics/update').set('Authorization', `Bearer ${global.userToken}`).send({ id: dashboard_id, ...careEthicsData });
        expect(req.status).toBe(200);
    });
});

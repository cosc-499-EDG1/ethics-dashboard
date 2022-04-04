import request from 'supertest';
import { app } from '../app/app';
import Dashboard from '../app/models/dashboard.model';
import CaseOption from '../app/models/option.model';

describe('Routes', () => {
    //Test dashboard creation route
    it('CREATE /dashboard/create integration test', async () => {
        const req = await request(app).post('/api/dashboard/create').set('Authorization', `Bearer ${global.adminToken}`).send({ name: 'Dashboard Test' });
        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Dashboard created successfully');
    });

    it('CREATE /dashboard/create user integration test', async () => {
        const req = await request(app).post('/api/dashboard/create').set('Authorization', `Bearer ${global.userToken}`).send({ name: 'Dashboard Test User' });
        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Dashboard created successfully');
    });

    it('GET /dashboard/find/id authorization integration test', async () => {
        const req = await request(app).get('/api/dashboard/find/1').set('Authorization', `Bearer ${global.userToken}`);
        expect(req.statusCode).toBe(403);
    });

    it('GET /dashboard/find/id integration test', async () => {
        const req = await request(app).get('/api/dashboard/find/2').set('Authorization', `Bearer ${global.userToken}`);
        expect(req.statusCode).toBe(200);
        expect(req.body.name).toBe('Dashboard Test User');
    });

    it('PUT /dashboard/update/id name integration test', async () => {
        const req = await request(app)
            .put('/api/dashboard/update/2')
            .set('Authorization', `Bearer ${global.userToken}`)
            .send({ updateType: 'name', name: 'Dashboard Test User 2' });
        expect(req.statusCode).toBe(200);
        const req2 = await request(app).get('/api/dashboard/find/2').set('Authorization', `Bearer ${global.userToken}`);
        expect(req2.body.name).toBe('Dashboard Test User 2');
    });

    it('PUT /dashboard/update/id data integration test', async () => {
        const updateData = {
            updateType: 'data',
            summary: 'Test Summary',
            dilemmas: 'Test Dilemmas',
            role: 'Test Role',
            options: ['Test Option 1', 'Test Option 2', 'Test Option 3'],
        };
        const req = await request(app).put('/api/dashboard/update/2').set('Authorization', `Bearer ${global.userToken}`).send(updateData);
        expect(req.statusCode).toBe(200);
        const req2 = await request(app).get('/api/dashboard/find/2').set('Authorization', `Bearer ${global.userToken}`);
        const dashboard = req2.body as Dashboard;
        expect(dashboard.summary).toBe(updateData.summary);
        expect(dashboard.dilemmas).toBe(updateData.dilemmas);
        expect(dashboard.role).toBe(updateData.role);
        expect(dashboard.options.map((option: CaseOption) => option.option_desc)).toEqual(updateData.options);
    });

    it('PUT /stakeholders/update data integration test', async () => {
        const updateData = {
            id: 2,
            data: [
                {
                    title: 'Test Stakeholder 1',
                    description: 'Test Description 1',
                },
                {
                    title: 'Test Stakeholder 2',
                    description: 'Test Description 2',
                },
                {
                    title: 'Test Stakeholder 3',
                    description: 'Test Description 3',
                },
                {
                    title: 'Test Stakeholder 4',
                    description: 'Test Description 4',
                },
                {
                    title: 'Test Stakeholder 5',
                    description: 'Test Description 5',
                }
            ]
        };

        const req = await request(app).put('/api/stakeholders/update').set('Authorization', `Bearer ${global.userToken}`).send(updateData);
        expect(req.statusCode).toBe(200);
        const req2 = await request(app).get('/api/dashboard/find/2').set('Authorization', `Bearer ${global.userToken}`);
        expect(req2.body.stakeholders.length).toBe(updateData.data.length);
        expect(req2.body.stakeholders[0].title).toBe(updateData.data[0].title);
        expect(req2.body.stakeholders[3].description).toBe(updateData.data[3].description);
    });
});

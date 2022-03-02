import request from 'supertest';
import { app } from '../app/app';

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
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
    });
});

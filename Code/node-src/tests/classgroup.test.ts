import request from 'supertest';
import { app } from '../app/app';

describe('Routes', () => {
    //Test class group creation route
    it('CREATE /groups/create authorization integration test', async () => {
        const req = await request(app).post('/api/groups/create').set('Authorization', `Bearer ${global.userToken}`).send({ class_code: 'BABAB', name: 'Class Group Test' });
        expect(req.statusCode).toBe(403);
    });

    it('CREATE /groups/create integration test', async () => {
        const req = await request(app).post('/api/groups/create').set('Authorization', `Bearer ${global.adminToken}`).send({ class_code: 'BABAB', name: 'Class Group Test' });
        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Class created successfully');
    });

    it('CREATE /groups/create duplicate integration test', async () => {
        const req = await request(app).post('/api/groups/create').set('Authorization', `Bearer ${global.adminToken}`).send({ class_code: 'BABAB', name: 'Class Group Test' });
        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Duplicate class code');
    });

    it('GET /groups/find/id integration test', async () => {
        const req = await request(app).get('/api/groups/find/1').set('Authorization', `Bearer ${global.adminToken}`);
        expect(req.statusCode).toBe(200);
    });
});

import request from 'supertest';
import { app } from '../app/app';

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
describe('Routes', () => {
    //Test account creation route
    it('CREATE /account/register integration test', async () => {
        const req = await request(app)
            .post('/api/account/register')
            .send({ username: 'test', email: 'test', password: 'test', first_name: 'test', last_name: 'test', class_code: 'AAAAA' });

        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Account created successfully');
    });

    it('CREATE /account/register invalid class test', async () => {
        const req = await request(app)
            .post('/api/account/register')
            .send({ username: 'test_2', email: 'test_2', password: 'test_2', first_name: 'test_2', last_name: 'test_2', class_code: 'AAAAB' });

        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Invalid class code');
    });

    //Test duplicate account creation
    it('CREATE /account/register Duplicate account integration test', async () => {
        const req = await request(app)
            .post('/api/account/register')
            .send({ username: 'test', email: 'test', password: 'test', first_name: 'test', last_name: 'test', class_code: 'AAAAA' });
        expect(req.statusCode).toBe(200);
        expect(req.body.message).toContain('Username or email already exists');
    });

    //Test login route and keep the token for further use
    let token: string;
    it('POST /account/login integration test', async () => {
        const req = await request(app).post('/api/account/login').send({ username: 'test', password: 'test' });
        expect(req.statusCode).toBe(200);
        token = req.body.token;
    });

    //Test fetching classes student should be apart of
    it('GET /account/classes integration test', async () => {
        const req = await request(app).get('/api/account/classes').set('Authorization', `Bearer ${token}`);

        expect(req.statusCode).toBe(200);
        expect(req.body.student.length).toBeGreaterThan(0);
    });

    //Test fetching all accounts
    it('GET /account integration test', async () => {
        expect(token).toBeDefined();
        const req = await request(app).get('/api/account').set('Authorization', `Bearer ${token}`);
        expect(req.statusCode).toBe(200);
    });

    //Should test a normal user account accessing admin actions (403 forbidden)
    it('DELETE /accounts/delete User integration test', async () => {
        expect(token).toBeDefined();
        const req = await request(app).delete('/api/account/delete/1').set('Authorization', `Bearer ${token}`);
        expect(req.statusCode).toBe(403);
    });

    //Should test an admin account accessing admin actions (200 ok)
    it('DELETE /accounts/delete Admin integration test', async () => {
        const req = await request(app).delete('/api/account/delete/1').set('Authorization', `Bearer ${global.adminToken}`);
        expect(req.statusCode).toBe(200);
    });
});

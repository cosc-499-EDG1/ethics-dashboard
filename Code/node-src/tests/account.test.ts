import request from 'supertest';
import { app } from '../app';

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
describe('Routes', () => {
    //Test account creation route
    it('CREATE /account/register integration test', done => {
        request(app)
            .post('/api/account/register')
            .send({ username: 'test', email: 'test', password: 'test', first_name: 'test', last_name: 'test', class_code: 'AAAAA' })
            .expect(200)
            .end(done);
    });

    it('CREATE /account/register invalid class test', done => {
        request(app)
            .post('/api/account/register')
            .send({ username: 'test_2', email: 'test_2', password: 'test_2', first_name: 'test_2', last_name: 'test_2', class_code: 'AAAAB' })
            .expect(200)
            .expect(res => {
                if (res.body.message !== 'Invalid class code') {
                    throw new Error('Checking class code failed, received: ' + res.body.message);
                }
            })
            .end(done);
    });

    //Test duplicate account creation
    it('CREATE /account/register Duplicate account integration test', done => {
        request(app)
            .post('/api/account/register')
            .send({ username: 'test', email: 'test', password: 'test', first_name: 'test', last_name: 'test', class_code: 'AAAAA' })
            .expect(200)
            .expect(res => {
                if (res.body.message !== 'Username or email already exists') {
                    throw new Error('Duplicate account creation failed, received: ' + res.body.message);
                }
            })
            .end(done);
    });

    //Test login route and keep the token for further use
    let token: string;
    it('POST /account/login integration test', done => {
        request(app)
            .post('/api/account/login')
            .send({ username: 'test', password: 'test' })
            .expect(200)
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    //Test fetching classes student should be apart of
    it('GET /account/classes integration test', done => {
        request(app)
            .get('/api/account/classes')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (!res.body.student.length) {
                    throw new Error('Class assignment failed, received: ' + res.body);
                }
                done();
            });
    });

    //Test fetching all accounts
    it('GET /account integration test', done => {
        expect(token).toBeDefined();
        request(app).get('/api/account').set('Authorization', `Bearer ${token}`).expect(200).end(done);
    });

    //Should test a normal user account accessing admin actions (403 forbidden)
    it('DELETE /accounts/delete User integration test', done => {
        expect(token).toBeDefined();
        request(app).delete('/api/account/delete/1').set('Authorization', `Bearer ${token}`).expect(403).end(done);
    });

    //Should test an admin account accessing admin actions (200 ok)
    it('DELETE /accounts/delete Admin integration test', done => {
        request(app).delete('/api/account/delete/1').set('Authorization', `Bearer ${global.adminToken}`).expect(200).end(done);
    });
});

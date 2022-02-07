import request from 'supertest';
import { app } from '../app';

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
describe('Routes', () => {
    //Test dashboard creation route
    it('CREATE /dashboard/create integration test', done => {
        request(app).post('/api/dashboard/create').set('Authorization', `Bearer ${global.adminToken}`).send({ name: 'Dashboard Test', type: 'dashboard' }).expect(200).expect(res => {
            if (res.body.message !== 'Dashboard created successfully') {
                throw new Error('Checking dashboard creation failed, received: ' + res.body.message);
            }
        }).end(done);
    });

    it('CREATE /dashboard/create user integration test', done => {
        request(app).post('/api/dashboard/create').set('Authorization', `Bearer ${global.userToken}`).send({ name: 'Dashboard Test User', type: 'dashboard' }).expect(200).expect(res => {
            if (res.body.message !== 'Dashboard created successfully') {
                throw new Error('Checking dashboard creation failed, received: ' + res.body.message);
            }
        }).end(done);
    });

    it('GET /dashboard/find/id authorization integration test', done => {
        request(app)
            .get('/api/dashboard/find/1')
            .set('Authorization', `Bearer ${global.userToken}`)
            .expect(403)
            .end(done);
    });

    it('GET /dashboard/find/id integration test', done => {
        request(app)
            .get('/api/dashboard/find/2')
            .set('Authorization', `Bearer ${global.userToken}`)
            .expect(200)
            .end(done);
    });
});

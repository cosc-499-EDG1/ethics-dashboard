import request from 'supertest';
import { app } from '../app/app';

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
describe('Routes', () => {
    //Test class group creation route
    it('CREATE /groups/create authorization integration test', done => {
        request(app).post('/api/groups/create').set('Authorization', `Bearer ${global.userToken}`).send({ class_code: 'BABAB', name: 'Class Group Test' }).expect(403).end(done);
    });

    it('CREATE /groups/create integration test', done => {
        request(app).post('/api/groups/create').set('Authorization', `Bearer ${global.adminToken}`).send({ class_code: 'BABAB', name: 'Class Group Test' }).expect(200).expect(res => {
            if (res.body.message !== 'Class created successfully') {
                throw new Error('Checking class group creation failed, received: ' + res.body.message);
            }
        }).end(done);
    });

    it('CREATE /groups/create duplicate integration test', done => {
        request(app)
            .post('/api/groups/create')
            .set('Authorization', `Bearer ${global.adminToken}`)
            .send({ class_code: 'BABAB', name: 'Class Group Test' })
            .expect(200)
            .expect(res => {
                if (res.body.message !== 'Duplicate class code') {
                    throw new Error('Checking duplicate class code failed, received: ' + res.body.message);
                }
            })
            .end(done);
    });

    it('GET /groups/find/id integration test', done => {
        request(app)
            .get('/api/groups/find/1')
            .set('Authorization', `Bearer ${global.adminToken}`)
            .expect(200)
            .end(done);
    });
});

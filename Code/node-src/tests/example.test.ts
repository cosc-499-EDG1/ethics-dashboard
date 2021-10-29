import request from 'supertest';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from '../app/config/jwt.config';
import { app, initApp } from '../app';
import { db } from '../app/database';
import { QueryTypes } from 'sequelize';

/**
 * Start the app, then insert a test admin account into the database
 * Sets the admin token for further usage in tests.
 */
let server: any;
let adminToken: string;
beforeAll(async () => {
    server = await initApp();
    const createAdminUser = async password => {
        const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const sql = `
          INSERT INTO Accounts (username, email, type, password)
          VALUES ('admin', 'admin', 'professor', '${passwordHash}');
        `;
        db.getQueryInterface();
        return db.query(sql, { type: QueryTypes.INSERT });
    };
    const result = await createAdminUser('admin');
    const token = jwt.sign({ sub: result[1] }, secret, { expiresIn: '7d' });
    adminToken = token;
});

/**
 * Cleanup the database after tests and stop the app.
 */
afterAll(async () => {
    await db.sync({ force: true });
    server.close();
});

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true);
    });
});

/**
 * Test API routes and expected responses.
 * Note: Once the app is further along, these should have set response data.
 * Right now it only checks the resposne code which could still have errors.
 */
describe('Routes', () => {
    //Test account creation route
    it('CREATE /accounts/create integration test', done => {
        request(app).post('/api/accounts/create').send({ username: 'test', email: 'test', password: 'test' }).expect(200).end(done);
    });

    //Test duplicate account creation
    it('CREATE /accounts/create Duplicate account integration test', done => {
        request(app).post('/api/accounts/create').send({ username: 'test', email: 'test', password: 'test' }).expect(400).end(done);
    });

    //Test fetching all accounts
    it('GET /accounts integration test', done => {
        request(app).get('/api/accounts').expect(200).end(done);
    });

    //Test login route and keep the token for further use
    let token: string;
    it('POST /accounts/login integration test', done => {
        request(app)
            .post('/api/accounts/login')
            .send({ username: 'test', password: 'test' })
            .expect(200)
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    //Should test a normal user account accessing admin actions (403 forbidden)
    it('DELETE /accounts/delete User integration test', done => {
        expect(token).toBeDefined();
        request(app).delete('/api/accounts/delete/1').set('Authorization', `Bearer ${token}`).expect(403).end(done);
    });

    //Should test an admin account accessing admin actions (200 ok)
    it('DELETE /accounts/delete Admin integration test', done => {
        request(app).delete('/api/accounts/delete/1').set('Authorization', `Bearer ${adminToken}`).expect(200).end(done);
    });
});

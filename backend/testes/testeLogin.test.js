const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('POST /user/login', () => {
    beforeAll(async () => {
        await User.create({ name: 'Test User', password: 'test123', admin: false, mail: 'test@example.com' });
    });

    it('should login a user', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                mail: 'test@example.com',
                password: 'test123'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.user.mail).toBe('test@example.com');
    });

    it('should not login with wrong password', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                mail: 'test@example.com',
                password: 'wrongpassword'
            });
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('Usuário ou senha inválidos!');
    });
});

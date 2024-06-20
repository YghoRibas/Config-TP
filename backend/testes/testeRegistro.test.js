const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('POST /user/register', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/user/register')
            .send({
                name: 'Test User',
                password: 'test123',
                admin: false,
                mail: 'test@example.com'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Usuário inserido');
    });

    it('should not register a user with existing email', async () => {
        await User.create({ name: 'Test User', password: 'test123', admin: false, mail: 'test@example.com' });

        const response = await request(app)
            .post('/user/register')
            .send({
                name: 'Test User',
                password: 'test123',
                admin: false,
                mail: 'test@example.com'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Usuário já existe.');
    });
});

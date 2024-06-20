// testeLogin.test.js
const request = require('supertest');
const app = require('../app');

describe('Login Tests', () => {
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
});

// testeRegistro.test.js
const request = require('supertest');
const app = require('../app');

describe('Register Tests', () => {
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
});

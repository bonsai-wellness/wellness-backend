import app from '../src/app';
import request from 'supertest';

describe('Test the root path', () => {
  test('It should respond 200 to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

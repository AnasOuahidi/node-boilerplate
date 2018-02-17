import * as request from 'supertest';
import * as app from '../app';

describe('GET /home', () => {
  it('should return 200 OK', (done: any) => {
    request(app).get('/home').expect(200, done);
  });
});

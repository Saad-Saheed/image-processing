import supertest from 'supertest';
import { app } from '../../..';
const request = supertest(app);

// test api endpoint using this suite
describe('testing dependencies endpoints', () => {
  var originalTimeout: number;

  // increase jasmine timeout interval
  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
  });

  it('test /api/dependences/testing endpoint response', async () => {
    const response = await request.get('/api/dependences/testing');
    expect(response.status).toBe(200);
  });

  // set jasmine timeout interval to default
  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});

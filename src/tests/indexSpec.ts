import supertest from 'supertest';
import { app } from '../index';
const request = supertest(app);

// test api endpoint using this suite
describe('Testing Main Image processing endpoints', () => {
  // if filename is not exist it return 422 else it return 200
  // if width or height is not supplied or invalid it will return 200 but it will not resize the image
  //it will only display the image in it original formart
  it('test /api//image/process endpoint response', async () => {
    const response = await request.get(
      '/api//image/process?filename=fjord&width=210&height=210'
    );
    expect(response.status).toBe(200);
  });
});

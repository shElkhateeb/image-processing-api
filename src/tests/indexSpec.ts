import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoint Tests', () => {
  it('gets the resize api endpoint', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(200);
  });
});

// describe('Image Processing Tests', () => {
//   it('sum of 3 and 2 is 5', () => {
//       expect(sum(3, 2)).toEqual(5);
//   });
// });

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoint Tests', () => {
	it('gets the resize api endpoint', async () => {
		const response = await request.get(
			'/api/resize?filename=fjord&width=1920&height=1280'
		);
		expect(response.status).toBe(200);
	});
});

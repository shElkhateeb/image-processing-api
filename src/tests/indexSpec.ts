import supertest from 'supertest';
import app from '../index';
import resizeImage from '../utilities/resizeimage';

const request = supertest(app);

describe('Endpoint Tests', () => {
	it('gets the resize api endpoint', async () => {
		const response = await request.get(
			'/api/resize?filename=fjord&width=1920&height=1280'
		);
		expect(response.status).toBe(200);
	});
});

describe('Image Processing Tests', () => {
	it('expects image with filename=icelandwaterfall, width=50 and height=30 to return path "thumbnail/icelandwaterfall50&30.jpg"', async () => {
		const path = await resizeImage('icelandwaterfall', '50', '30');
		expect(path).toEqual('thumbnail/icelandwaterfall50&30.jpg');
	});

	it('expects unavailable image name to return path "images/not_found.jpg"', async () => {
		const path = await resizeImage('icelandwater', '50', 'aa');
		expect(path).toEqual('images/not_found.jpg');
	});
});

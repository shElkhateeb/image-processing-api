import resizeImage from '../../utilities/resizeimage';

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

import express from 'express';
import path from 'path';
import resizeImage from '../../utilities/resizeimage';

// create router
const resizeImg = express.Router();

resizeImg.get('/', (req, res) => {
	const filename = req.query.filename as unknown as string;
	const width = req.query.width as unknown as number;
	const height = req.query.height as unknown as number;

	const resizedImagePath =
		'thumbnail/' + filename + width + '&' + height + '.jpg';

	// resize image
	resizeImage(filename, width, height, resizedImagePath);
	// send resized image to the browser
	res.sendFile(path.resolve(resizedImagePath));
});

export default resizeImg;

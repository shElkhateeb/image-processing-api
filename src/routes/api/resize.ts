import express from 'express';
import path from 'path';
import resizeImage from '../../utilities/resizeimage';

// create router
const resizeImg = express.Router();

resizeImg.get('/', async(req, res) => {
	const filename = req.query.filename as unknown as string;
	const width = req.query.width as unknown as string;
	const height = req.query.height as unknown as string;
	// resize image
	const resizedImagePath = await resizeImage(filename, width, height);
	// send resized image to the browser
	res.sendFile(path.resolve(resizedImagePath));
});

export default resizeImg;

import express from 'express';
import path from 'path';
import resizeImage from '../../utilities/resizeimage';

// create router
const resizeRoute = express.Router();

resizeRoute.get(
	'/',
	async (req: express.Request, res: express.Response): Promise<void> => {
		const filename = req.query.filename as unknown as string;
		const width = req.query.width as unknown as string;
		const height = req.query.height as unknown as string;
		// resize image
		const resizedImagePath = await resizeImage(filename, width, height);
		// send resized image to the browser
		res.sendFile(path.resolve(resizedImagePath));
	}
);

export default resizeRoute;

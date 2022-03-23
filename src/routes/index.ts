import express from 'express';
import resizeRoute from './api/resize';

// create router
const routes = express.Router();

routes.get('/', (req, res) => {
	res.send(
		'to resize an image visit http://localhost:3000/api/resize?filename=your_filename&width=width_you_want&height=height_you_want'
	);
});

routes.use('/resize', resizeRoute);

export default routes;

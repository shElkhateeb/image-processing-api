import express from 'express';
import routes from './routes/index';

// create app object
const app = express();
const port = 3000;

// use routes
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});

export default app;

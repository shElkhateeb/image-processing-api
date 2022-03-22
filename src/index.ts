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

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

let hema = 32;

console.log(sum(5, 6));

export default app;

import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

// configure my routes
app.use('/api', routes);

// create server
app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});

export { app };

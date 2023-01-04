import express from 'express';
import {
  checkEslint,
  checkPrettier,
  checkTypescript,
} from '../http/middlewares/dependenciesMiddleware';
import { processImage } from '../http/controllers/imageController';

const dependenciesMiddlewaers = [checkPrettier, checkEslint, checkTypescript];

const routes = express.Router();

routes.get(
  '/dependences/testing',
  dependenciesMiddlewaers,
  (req: express.Request, res: express.Response) => {
    res.status(200).send('Success: All dependencies works Fine.');
  }
);

routes.get('/image/process', processImage);

export default routes;

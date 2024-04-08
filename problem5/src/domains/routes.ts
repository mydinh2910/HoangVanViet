import { Express } from 'express';
import resourceRoute from './resource/resource.route';

export const routes = (app: Express) => {
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/resource', resourceRoute);
};

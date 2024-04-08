import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { dataSource } from './src/configs/data-source';
import { routes } from './src/domains/routes';
import { handleException } from './src/middleware/errorHandler';

async function bootstrap() {
  try {
    await dataSource.initialize();
    const app = express();

    app.use(cors(), express.json(), express.urlencoded({ extended: true }));
    routes(app);
    app.use(handleException);

    const port = process.env.PORT_SERVER || 3000;

    app.listen(port, () => {
      console.info(`Server listening on port ${port}`);
    });

  } catch (error) {
    console.error(error)
  }
};

bootstrap();
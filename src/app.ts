import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './shared/middleware/error-handler';
import { notFoundHandler } from './shared/middleware/not-found';
import { cmsRoutes, publicCmsRoutes } from './modules/cms/presentation/cms.routes';
import { env } from './config/env';

export function createApp() {
    const app = express();

    app.use(helmet());
    app.use(cors({ origin: env.corsOrigin }));
    app.use(morgan('dev'));
    app.use(express.json());

    app.get('/health', (_req, res) => {
        res.json({ service: 'cms-service', status: 'ok' });
    });

    app.use('/api/cms', cmsRoutes);
    app.use('/api/public/cms', publicCmsRoutes);

    app.use(notFoundHandler);
    app.use(errorHandler);

    return app;
}

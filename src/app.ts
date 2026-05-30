import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './docs/openapi';
import { errorHandler } from './shared/middleware/error-handler';
import { notFoundHandler } from './shared/middleware/not-found';
import { cmsRoutes, publicCmsRoutes } from './modules/cms/presentation/cms.routes';
import { env } from './config/env';

export function createApp() {
    const app = express();

    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    'script-src': ["'self'", "'unsafe-inline'"],
                    'style-src': ["'self'", "'unsafe-inline'"],
                    'img-src': ["'self'", 'data:'],
                },
            },
        }),
    );
    app.use(cors({ origin: env.corsOrigin }));
    app.use(morgan('dev'));
    app.use(express.json());

    app.get('/api/docs.json', (_req, res) => {
        res.json(openApiDocument);
    });
    app.use(
        '/api/docs',
        swaggerUi.serve,
        swaggerUi.setup(openApiDocument, {
            customSiteTitle: 'MedSphere CMS API Docs',
            swaggerOptions: {
                persistAuthorization: true,
            },
        }),
    );

    app.get('/health', (_req, res) => {
        res.json({ service: 'cms-service', status: 'ok' });
    });

    app.use('/api/cms', cmsRoutes);
    app.use('/api/public/cms', publicCmsRoutes);

    app.use(notFoundHandler);
    app.use(errorHandler);

    return app;
}

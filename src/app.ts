import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './docs/openapi';
import { errorHandler } from './shared/middleware/error-handler';
import { notFoundHandler } from './shared/middleware/not-found';
import { createRateLimiter } from './shared/middleware/rate-limit';
import { cmsRoutes, publicCmsRoutes } from './modules/cms/presentation/cms.routes';
import { corsOptions } from './config/cors';

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
    app.use(cors(corsOptions));
    app.use(createRateLimiter({
        windowMs: 15 * 60_000,
        maxRequests: 500,
        skip: (req) => req.method === 'OPTIONS' || req.path === '/health',
    }));
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

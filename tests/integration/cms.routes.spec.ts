import request from 'supertest';
import { createApp } from '../../src/app';

describe('CMS routes', () => {
    const app = createApp();

    it('returns service health status', async () => {
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            service: 'cms-service',
            status: 'ok',
        });
    });

    it('serves OpenAPI documentation for the CMS API', async () => {
        const response = await request(app).get('/api/docs.json');

        expect(response.status).toBe(200);
        expect(response.body.openapi).toBe('3.0.3');
        expect(response.body.paths).toHaveProperty('/api/cms/pages');
        expect(response.body.paths).toHaveProperty(
            '/api/cms/pages/{pageId}/sections/{id}/visibility',
        );
        expect(response.body.paths).toHaveProperty('/api/public/cms/banners');
        expect(response.body.components.securitySchemes).toHaveProperty(
            'bearerAuth',
        );
    });

    it('serves Swagger UI', async () => {
        const response = await request(app).get('/api/docs/');

        expect(response.status).toBe(200);
        expect(response.text).toContain('MedSphere CMS API Docs');
    });

    it('protects CMS mutations behind editor credentials', async () => {
        const response = await request(app)
            .post('/api/cms/pages')
            .send({ slug: 'home', title: 'Home' });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('CMS editor credentials required');
    });
});

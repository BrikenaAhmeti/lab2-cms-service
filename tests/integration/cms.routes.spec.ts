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

    it('protects CMS mutations behind editor credentials', async () => {
        const response = await request(app)
            .post('/api/cms/pages')
            .send({ slug: 'home', title: 'Home' });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('CMS editor credentials required');
    });
});

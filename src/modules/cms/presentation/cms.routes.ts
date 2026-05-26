import { Router } from 'express';
import { requireCmsEditor } from '../../../shared/middleware/require-cms-editor';
import { CmsController } from './cms.controller';

const controller = new CmsController();

export const cmsRoutes = Router();
export const publicCmsRoutes = Router();

cmsRoutes.get('/pages', (req, res) => controller.listPages(req, res));
cmsRoutes.post('/pages', requireCmsEditor, (req, res) =>
    controller.createPage(req, res),
);
cmsRoutes.get('/pages/:id', (req, res) => controller.getPageById(req, res));
cmsRoutes.put('/pages/:id', requireCmsEditor, (req, res) =>
    controller.updatePage(req, res),
);
cmsRoutes.delete('/pages/:id', requireCmsEditor, (req, res) =>
    controller.deletePage(req, res),
);

cmsRoutes.get('/pages/:pageId/sections', (req, res) =>
    controller.listSections(req, res),
);
cmsRoutes.post('/pages/:pageId/sections', requireCmsEditor, (req, res) =>
    controller.createSection(req, res),
);
cmsRoutes.patch('/pages/:pageId/sections/reorder', requireCmsEditor, (req, res) =>
    controller.reorderSections(req, res),
);
cmsRoutes.get('/pages/:pageId/sections/:id', (req, res) =>
    controller.getSectionById(req, res),
);
cmsRoutes.patch(
    '/pages/:pageId/sections/:id/visibility',
    requireCmsEditor,
    (req, res) => controller.toggleSectionVisibility(req, res),
);
cmsRoutes.put('/pages/:pageId/sections/:id', requireCmsEditor, (req, res) =>
    controller.updateSection(req, res),
);
cmsRoutes.delete('/pages/:pageId/sections/:id', requireCmsEditor, (req, res) =>
    controller.deleteSection(req, res),
);
cmsRoutes.get('/sections/:id', (req, res) =>
    controller.getSectionById(req, res),
);
cmsRoutes.put('/sections/:id', requireCmsEditor, (req, res) =>
    controller.updateSection(req, res),
);
cmsRoutes.delete('/sections/:id', requireCmsEditor, (req, res) =>
    controller.deleteSection(req, res),
);

cmsRoutes.get('/banners', (req, res) => controller.listBanners(req, res));
cmsRoutes.get('/banners/:id', (req, res) => controller.getBannerById(req, res));
cmsRoutes.post('/banners', requireCmsEditor, (req, res) =>
    controller.createBanner(req, res),
);
cmsRoutes.put('/banners/:id', requireCmsEditor, (req, res) =>
    controller.updateBanner(req, res),
);
cmsRoutes.delete('/banners/:id', requireCmsEditor, (req, res) =>
    controller.deleteBanner(req, res),
);

publicCmsRoutes.get('/pages/:slug', (req, res) =>
    controller.getPublicPage(req, res),
);
publicCmsRoutes.get('/banners', (req, res) =>
    controller.listPublicBanners(req, res),
);

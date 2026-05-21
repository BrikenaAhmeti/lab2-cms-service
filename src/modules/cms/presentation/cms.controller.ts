import { Request, Response } from 'express';
import { z } from 'zod';
import { CommandBus } from '../../../shared/core/buses/command-bus';
import { QueryBus } from '../../../shared/core/buses/query-bus';
import { contentEvents } from '../../../infrastructure/realtime/content-events';
import { cmsSectionTypes } from '../domain/cms.entity';
import { CmsPrismaRepository } from '../infrastructure/cms.prisma.repository';
import { CmsService } from '../services/cms.service';
import {
    CreateCmsBannerCommand,
    CreateCmsPageCommand,
    CreateCmsSectionCommand,
    DeleteCmsBannerCommand,
    DeleteCmsPageCommand,
    DeleteCmsSectionCommand,
    ReorderCmsSectionsCommand,
    UpdateCmsBannerCommand,
    UpdateCmsPageCommand,
    UpdateCmsSectionCommand,
} from '../application/commands/cms.commands';
import {
    CreateCmsBannerHandler,
    CreateCmsPageHandler,
    CreateCmsSectionHandler,
    DeleteCmsBannerHandler,
    DeleteCmsPageHandler,
    DeleteCmsSectionHandler,
    GetCmsPageByIdHandler,
    GetPublicCmsPageBySlugHandler,
    ListCmsBannersHandler,
    ListCmsPagesHandler,
    ListPublicCmsBannersHandler,
    ReorderCmsSectionsHandler,
    UpdateCmsBannerHandler,
    UpdateCmsPageHandler,
    UpdateCmsSectionHandler,
} from '../application/handlers/cms.handlers';
import {
    GetCmsPageByIdQuery,
    GetPublicCmsPageBySlugQuery,
    ListCmsBannersQuery,
    ListCmsPagesQuery,
    ListPublicCmsBannersQuery,
} from '../application/queries/cms.queries';

const createPageSchema = z.object({
    slug: z.string().min(1).max(120).optional(),
    title: z.string().min(2).max(160),
    metaTitle: z.string().max(160).nullable().optional(),
    metaDescription: z.string().max(255).nullable().optional(),
    isPublished: z.boolean().optional(),
});

const updatePageSchema = createPageSchema.partial();

const createSectionSchema = z.object({
    type: z.enum(cmsSectionTypes),
    title: z.string().max(160).nullable().optional(),
    subtitle: z.string().max(255).nullable().optional(),
    body: z.string().nullable().optional(),
    imageUrl: z.string().url().max(500).nullable().optional(),
    content: z.unknown().nullable().optional(),
    sortOrder: z.number().int().min(0).optional(),
    isVisible: z.boolean().optional(),
});

const updateSectionSchema = createSectionSchema.partial();

const reorderSectionsSchema = z.object({
    sections: z.array(
        z.object({
            id: z.string().uuid(),
            sortOrder: z.number().int().min(0),
        }),
    ),
});

const createBannerSchema = z.object({
    title: z.string().min(2).max(160),
    message: z.string().min(1),
    imageUrl: z.string().url().max(500).nullable().optional(),
    linkUrl: z.string().url().max(500).nullable().optional(),
    startDate: z.coerce.date().nullable().optional(),
    endDate: z.coerce.date().nullable().optional(),
    isActive: z.boolean().optional(),
    sortOrder: z.number().int().min(0).optional(),
});

const updateBannerSchema = createBannerSchema.partial();

function actorId(req: Request) {
    return req.header('x-user-id') ?? null;
}

function routeParam(req: Request, name: string) {
    const value = req.params[name];
    return (Array.isArray(value) ? value[0] : value) ?? '';
}

export class CmsController {
    private readonly commandBus = new CommandBus();
    private readonly queryBus = new QueryBus();
    private readonly repository = new CmsPrismaRepository();
    private readonly service = new CmsService(this.repository);

    async listPages(_req: Request, res: Response) {
        const handler = new ListCmsPagesHandler(this.service);
        const result = await this.queryBus.execute(handler, new ListCmsPagesQuery());

        return res.status(200).json(result);
    }

    async createPage(req: Request, res: Response) {
        const body = createPageSchema.parse(req.body);
        const handler = new CreateCmsPageHandler(this.service);
        const command = new CreateCmsPageCommand({
            ...body,
            slug: body.slug ?? body.title,
            createdBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: result.slug });

        return res.status(201).json(result);
    }

    async getPageById(req: Request, res: Response) {
        const handler = new GetCmsPageByIdHandler(this.service);
        const query = new GetCmsPageByIdQuery(routeParam(req, 'id'));

        const result = await this.queryBus.execute(handler, query);

        return res.status(200).json(result);
    }

    async updatePage(req: Request, res: Response) {
        const body = updatePageSchema.parse(req.body);
        const handler = new UpdateCmsPageHandler(this.service);
        const command = new UpdateCmsPageCommand(routeParam(req, 'id'), {
            ...body,
            updatedBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: result.slug });

        return res.status(200).json(result);
    }

    async deletePage(req: Request, res: Response) {
        const handler = new DeleteCmsPageHandler(this.service);
        const command = new DeleteCmsPageCommand(routeParam(req, 'id'));

        const result = await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: result.slug });

        return res.status(204).send();
    }

    async createSection(req: Request, res: Response) {
        const body = createSectionSchema.parse(req.body);
        const handler = new CreateCmsSectionHandler(this.service);
        const command = new CreateCmsSectionCommand(routeParam(req, 'pageId'), {
            ...body,
            createdBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        await this.publishPageUpdate(result.pageId);

        return res.status(201).json(result);
    }

    async updateSection(req: Request, res: Response) {
        const body = updateSectionSchema.parse(req.body);
        const handler = new UpdateCmsSectionHandler(this.service);
        const command = new UpdateCmsSectionCommand(routeParam(req, 'id'), {
            ...body,
            updatedBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        await this.publishPageUpdate(result.pageId);

        return res.status(200).json(result);
    }

    async reorderSections(req: Request, res: Response) {
        const body = reorderSectionsSchema.parse(req.body);
        const handler = new ReorderCmsSectionsHandler(this.service);
        const pageId = routeParam(req, 'pageId');
        const command = new ReorderCmsSectionsCommand(
            pageId,
            body.sections,
        );

        const result = await this.commandBus.execute(handler, command);
        await this.publishPageUpdate(pageId);

        return res.status(200).json(result);
    }

    async deleteSection(req: Request, res: Response) {
        const handler = new DeleteCmsSectionHandler(this.service);
        const command = new DeleteCmsSectionCommand(routeParam(req, 'id'));

        const result = await this.commandBus.execute(handler, command);
        await this.publishPageUpdate(result.pageId);

        return res.status(204).send();
    }

    async listBanners(_req: Request, res: Response) {
        const handler = new ListCmsBannersHandler(this.service);
        const result = await this.queryBus.execute(handler, new ListCmsBannersQuery());

        return res.status(200).json(result);
    }

    async createBanner(req: Request, res: Response) {
        const body = createBannerSchema.parse(req.body);
        const handler = new CreateCmsBannerHandler(this.service);
        const command = new CreateCmsBannerCommand({
            ...body,
            createdBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: 'banners' });

        return res.status(201).json(result);
    }

    async updateBanner(req: Request, res: Response) {
        const body = updateBannerSchema.parse(req.body);
        const handler = new UpdateCmsBannerHandler(this.service);
        const command = new UpdateCmsBannerCommand(routeParam(req, 'id'), {
            ...body,
            updatedBy: actorId(req),
        });

        const result = await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: 'banners' });

        return res.status(200).json(result);
    }

    async deleteBanner(req: Request, res: Response) {
        const handler = new DeleteCmsBannerHandler(this.service);
        const command = new DeleteCmsBannerCommand(routeParam(req, 'id'));

        await this.commandBus.execute(handler, command);
        contentEvents.publishContentUpdated({ slug: 'banners' });

        return res.status(204).send();
    }

    async getPublicPage(req: Request, res: Response) {
        const handler = new GetPublicCmsPageBySlugHandler(this.service);
        const query = new GetPublicCmsPageBySlugQuery(routeParam(req, 'slug'));

        const result = await this.queryBus.execute(handler, query);

        return res.status(200).json(result);
    }

    async listPublicBanners(_req: Request, res: Response) {
        const handler = new ListPublicCmsBannersHandler(this.service);
        const result = await this.queryBus.execute(
            handler,
            new ListPublicCmsBannersQuery(),
        );

        return res.status(200).json(result);
    }

    private async publishPageUpdate(pageId: string) {
        const page = await this.service.getPageById(pageId);
        contentEvents.publishContentUpdated({ slug: page.slug });
    }
}

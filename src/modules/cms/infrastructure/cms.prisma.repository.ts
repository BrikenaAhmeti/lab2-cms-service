import { prisma } from '../../../infrastructure/db/prisma';
import { Prisma } from '../../../generated/prisma';
import {
    CmsRepository,
    CreateCmsBannerData,
    CreateCmsPageData,
    CreateCmsSectionData,
    ReorderCmsSectionData,
    UpdateCmsBannerData,
    UpdateCmsPageData,
    UpdateCmsSectionData,
} from '../domain/cms.repository';

function toJson(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull {
    return value === null ? Prisma.JsonNull : (value as Prisma.InputJsonValue);
}

function maybeJson(value: unknown | undefined) {
    return value === undefined ? undefined : toJson(value);
}

export class CmsPrismaRepository implements CmsRepository {
    async listPages() {
        return prisma.cmsPage.findMany({
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async createPage(data: CreateCmsPageData) {
        return prisma.cmsPage.create({
            data,
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async findPageById(id: string) {
        return prisma.cmsPage.findUnique({
            where: { id },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async findPageBySlug(slug: string) {
        return prisma.cmsPage.findUnique({
            where: { slug },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async findPublishedPageBySlug(slug: string) {
        return prisma.cmsPage.findFirst({
            where: {
                slug,
                isPublished: true,
            },
            include: {
                sections: {
                    where: { isVisible: true },
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async updatePage(id: string, data: UpdateCmsPageData) {
        return prisma.cmsPage.update({
            where: { id },
            data,
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async deletePage(id: string) {
        return prisma.cmsPage.delete({
            where: { id },
            include: {
                sections: {
                    orderBy: { sortOrder: 'asc' },
                },
            },
        });
    }

    async listSectionsByPageId(pageId: string) {
        return prisma.cmsSection.findMany({
            where: { pageId },
            orderBy: { sortOrder: 'asc' },
        });
    }

    async createSection(data: CreateCmsSectionData) {
        return prisma.cmsSection.create({
            data: {
                ...data,
                content: maybeJson(data.content),
            },
        });
    }

    async findSectionById(id: string) {
        return prisma.cmsSection.findUnique({
            where: { id },
        });
    }

    async getNextSectionSortOrder(pageId: string) {
        const lastSection = await prisma.cmsSection.findFirst({
            where: { pageId },
            orderBy: { sortOrder: 'desc' },
            select: { sortOrder: true },
        });

        return (lastSection?.sortOrder ?? -1) + 1;
    }

    async updateSection(id: string, data: UpdateCmsSectionData) {
        return prisma.cmsSection.update({
            where: { id },
            data: {
                ...data,
                content: maybeJson(data.content),
            },
        });
    }

    async reorderSections(pageId: string, sections: ReorderCmsSectionData[]) {
        await prisma.$transaction(
            sections.map((section) =>
                prisma.cmsSection.updateMany({
                    where: {
                        id: section.id,
                        pageId,
                    },
                    data: {
                        sortOrder: section.sortOrder,
                    },
                }),
            ),
        );

        return prisma.cmsSection.findMany({
            where: { pageId },
            orderBy: { sortOrder: 'asc' },
        });
    }

    async deleteSection(id: string) {
        return prisma.cmsSection.delete({
            where: { id },
        });
    }

    async listBanners() {
        return prisma.cmsBanner.findMany({
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        });
    }

    async listActiveBanners(now: Date) {
        return prisma.cmsBanner.findMany({
            where: {
                isActive: true,
                AND: [
                    {
                        OR: [{ startDate: null }, { startDate: { lte: now } }],
                    },
                    {
                        OR: [{ endDate: null }, { endDate: { gte: now } }],
                    },
                ],
            },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        });
    }

    async createBanner(data: CreateCmsBannerData) {
        return prisma.cmsBanner.create({ data });
    }

    async findBannerById(id: string) {
        return prisma.cmsBanner.findUnique({
            where: { id },
        });
    }

    async updateBanner(id: string, data: UpdateCmsBannerData) {
        return prisma.cmsBanner.update({
            where: { id },
            data,
        });
    }

    async deleteBanner(id: string) {
        return prisma.cmsBanner.delete({
            where: { id },
        });
    }
}

import { AppError } from '../../../shared/core/errors/app-error';
import {
    CmsBannerEntity,
    CmsPageEntity,
    CmsSectionEntity,
} from '../domain/cms.entity';
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

function normalizeSlug(value: string) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function cleanText(value: string | null | undefined) {
    if (value === null) {
        return null;
    }

    const trimmed = value?.trim();
    return trimmed === '' ? null : trimmed;
}

export class CmsService {
    constructor(private readonly cmsRepository: CmsRepository) { }

    listPages(): Promise<CmsPageEntity[]> {
        return this.cmsRepository.listPages();
    }

    async getPageById(id: string): Promise<CmsPageEntity> {
        const page = await this.cmsRepository.findPageById(id);

        if (!page) {
            throw new AppError('CMS page not found', 404);
        }

        return page;
    }

    async getPublicPageBySlug(slug: string): Promise<CmsPageEntity> {
        const page = await this.cmsRepository.findPublishedPageBySlug(
            normalizeSlug(slug),
        );

        if (!page) {
            throw new AppError('CMS page not found', 404);
        }

        return page;
    }

    async createPage(data: CreateCmsPageData): Promise<CmsPageEntity> {
        const slug = normalizeSlug(data.slug || data.title);

        if (!slug) {
            throw new AppError('CMS page slug is required', 400);
        }

        const existingPage = await this.cmsRepository.findPageBySlug(slug);

        if (existingPage) {
            throw new AppError('CMS page slug already exists', 409);
        }

        return this.cmsRepository.createPage({
            ...data,
            slug,
            title: data.title.trim(),
            metaTitle: cleanText(data.metaTitle),
            metaDescription: cleanText(data.metaDescription),
        });
    }

    async updatePage(id: string, data: UpdateCmsPageData): Promise<CmsPageEntity> {
        await this.getPageById(id);

        const updateData: UpdateCmsPageData = {
            ...data,
            title: data.title?.trim(),
            metaTitle: cleanText(data.metaTitle),
            metaDescription: cleanText(data.metaDescription),
        };

        if (data.slug !== undefined) {
            const slug = normalizeSlug(data.slug);

            if (!slug) {
                throw new AppError('CMS page slug is required', 400);
            }

            const existingPage = await this.cmsRepository.findPageBySlug(slug);

            if (existingPage && existingPage.id !== id) {
                throw new AppError('CMS page slug already exists', 409);
            }

            updateData.slug = slug;
        }

        return this.cmsRepository.updatePage(id, updateData);
    }

    async deletePage(id: string): Promise<CmsPageEntity> {
        await this.getPageById(id);
        return this.cmsRepository.deletePage(id);
    }

    async createSection(
        pageId: string,
        data: Omit<CreateCmsSectionData, 'pageId' | 'sortOrder'> & {
            sortOrder?: number;
        },
    ): Promise<CmsSectionEntity> {
        await this.getPageById(pageId);

        const sortOrder =
            data.sortOrder ?? (await this.cmsRepository.getNextSectionSortOrder(pageId));

        return this.cmsRepository.createSection({
            ...data,
            pageId,
            title: cleanText(data.title),
            subtitle: cleanText(data.subtitle),
            body: cleanText(data.body),
            imageUrl: cleanText(data.imageUrl),
            sortOrder,
        });
    }

    async updateSection(
        id: string,
        data: UpdateCmsSectionData,
    ): Promise<CmsSectionEntity> {
        const section = await this.cmsRepository.findSectionById(id);

        if (!section) {
            throw new AppError('CMS section not found', 404);
        }

        return this.cmsRepository.updateSection(id, {
            ...data,
            title: cleanText(data.title),
            subtitle: cleanText(data.subtitle),
            body: cleanText(data.body),
            imageUrl: cleanText(data.imageUrl),
        });
    }

    async reorderSections(
        pageId: string,
        sections: ReorderCmsSectionData[],
    ): Promise<CmsSectionEntity[]> {
        await this.getPageById(pageId);

        if (sections.length === 0) {
            throw new AppError('At least one section is required for reorder', 400);
        }

        return this.cmsRepository.reorderSections(pageId, sections);
    }

    async deleteSection(id: string): Promise<CmsSectionEntity> {
        const section = await this.cmsRepository.findSectionById(id);

        if (!section) {
            throw new AppError('CMS section not found', 404);
        }

        return this.cmsRepository.deleteSection(id);
    }

    listBanners(): Promise<CmsBannerEntity[]> {
        return this.cmsRepository.listBanners();
    }

    listPublicBanners(now = new Date()): Promise<CmsBannerEntity[]> {
        return this.cmsRepository.listActiveBanners(now);
    }

    async createBanner(data: CreateCmsBannerData): Promise<CmsBannerEntity> {
        this.validateBannerSchedule(data.startDate, data.endDate);

        return this.cmsRepository.createBanner({
            ...data,
            title: data.title.trim(),
            message: data.message.trim(),
            imageUrl: cleanText(data.imageUrl),
            linkUrl: cleanText(data.linkUrl),
        });
    }

    async updateBanner(
        id: string,
        data: UpdateCmsBannerData,
    ): Promise<CmsBannerEntity> {
        const banner = await this.cmsRepository.findBannerById(id);

        if (!banner) {
            throw new AppError('CMS banner not found', 404);
        }

        this.validateBannerSchedule(
            data.startDate === undefined ? banner.startDate : data.startDate,
            data.endDate === undefined ? banner.endDate : data.endDate,
        );

        return this.cmsRepository.updateBanner(id, {
            ...data,
            title: data.title?.trim(),
            message: data.message?.trim(),
            imageUrl: cleanText(data.imageUrl),
            linkUrl: cleanText(data.linkUrl),
        });
    }

    async deleteBanner(id: string): Promise<CmsBannerEntity> {
        const banner = await this.cmsRepository.findBannerById(id);

        if (!banner) {
            throw new AppError('CMS banner not found', 404);
        }

        return this.cmsRepository.deleteBanner(id);
    }

    private validateBannerSchedule(startDate?: Date | null, endDate?: Date | null) {
        if (startDate && endDate && startDate > endDate) {
            throw new AppError('Banner start date must be before end date', 400);
        }
    }
}

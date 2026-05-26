import {
    CmsBannerEntity,
    CmsPageEntity,
    CmsSectionEntity,
    CmsSectionType,
} from './cms.entity';

export interface CreateCmsPageData {
    slug: string;
    title: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    isPublished?: boolean;
    createdBy?: string | null;
}

export interface UpdateCmsPageData {
    slug?: string;
    title?: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    isPublished?: boolean;
    updatedBy?: string | null;
}

export interface CreateCmsSectionData {
    pageId: string;
    type: CmsSectionType;
    title?: string | null;
    subtitle?: string | null;
    body?: string | null;
    imageUrl?: string | null;
    content?: unknown | null;
    sortOrder: number;
    isVisible?: boolean;
    createdBy?: string | null;
}

export interface UpdateCmsSectionData {
    type?: CmsSectionType;
    title?: string | null;
    subtitle?: string | null;
    body?: string | null;
    imageUrl?: string | null;
    content?: unknown | null;
    sortOrder?: number;
    isVisible?: boolean;
    updatedBy?: string | null;
}

export interface ReorderCmsSectionData {
    id: string;
    sortOrder: number;
}

export interface CreateCmsBannerData {
    title: string;
    message: string;
    imageUrl?: string | null;
    linkUrl?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    isActive?: boolean;
    sortOrder?: number;
    createdBy?: string | null;
}

export interface UpdateCmsBannerData {
    title?: string;
    message?: string;
    imageUrl?: string | null;
    linkUrl?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    isActive?: boolean;
    sortOrder?: number;
    updatedBy?: string | null;
}

export interface CmsRepository {
    listPages(): Promise<CmsPageEntity[]>;
    createPage(data: CreateCmsPageData): Promise<CmsPageEntity>;
    findPageById(id: string): Promise<CmsPageEntity | null>;
    findPageBySlug(slug: string): Promise<CmsPageEntity | null>;
    findPublishedPageBySlug(slug: string): Promise<CmsPageEntity | null>;
    updatePage(id: string, data: UpdateCmsPageData): Promise<CmsPageEntity>;
    deletePage(id: string): Promise<CmsPageEntity>;

    listSectionsByPageId(pageId: string): Promise<CmsSectionEntity[]>;
    createSection(data: CreateCmsSectionData): Promise<CmsSectionEntity>;
    findSectionById(id: string): Promise<CmsSectionEntity | null>;
    getNextSectionSortOrder(pageId: string): Promise<number>;
    updateSection(id: string, data: UpdateCmsSectionData): Promise<CmsSectionEntity>;
    reorderSections(
        pageId: string,
        sections: ReorderCmsSectionData[],
    ): Promise<CmsSectionEntity[]>;
    deleteSection(id: string): Promise<CmsSectionEntity>;

    listBanners(): Promise<CmsBannerEntity[]>;
    listActiveBanners(now: Date): Promise<CmsBannerEntity[]>;
    createBanner(data: CreateCmsBannerData): Promise<CmsBannerEntity>;
    findBannerById(id: string): Promise<CmsBannerEntity | null>;
    updateBanner(id: string, data: UpdateCmsBannerData): Promise<CmsBannerEntity>;
    deleteBanner(id: string): Promise<CmsBannerEntity>;
}

export const cmsSectionTypes = [
    'HERO',
    'TEXT',
    'CTA',
    'FAQ',
    'TESTIMONIALS',
    'STATS',
] as const;

export type CmsSectionType = (typeof cmsSectionTypes)[number];

export interface CmsSectionEntity {
    id: string;
    pageId: string;
    type: CmsSectionType;
    title?: string | null;
    subtitle?: string | null;
    body?: string | null;
    imageUrl?: string | null;
    content?: unknown | null;
    sortOrder: number;
    isVisible: boolean;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface CmsPageEntity {
    id: string;
    slug: string;
    title: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    isPublished: boolean;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: Date;
    updatedAt: Date;
    sections?: CmsSectionEntity[];
}

export interface CmsBannerEntity {
    id: string;
    title: string;
    message: string;
    imageUrl?: string | null;
    linkUrl?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    isActive: boolean;
    sortOrder: number;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

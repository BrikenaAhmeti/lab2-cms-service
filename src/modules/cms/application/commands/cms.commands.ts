import { Command } from '../../../../shared/core/buses/command-bus';
import {
    CmsSectionType,
} from '../../domain/cms.entity';
import {
    CreateCmsBannerData,
    ReorderCmsSectionData,
    UpdateCmsBannerData,
    UpdateCmsPageData,
    UpdateCmsSectionData,
} from '../../domain/cms.repository';

export class CreateCmsPageCommand implements Command {
    constructor(
        public readonly data: {
            slug: string;
            title: string;
            metaTitle?: string | null;
            metaDescription?: string | null;
            isPublished?: boolean;
            createdBy?: string | null;
        },
    ) { }
}

export class UpdateCmsPageCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly data: UpdateCmsPageData,
    ) { }
}

export class DeleteCmsPageCommand implements Command {
    constructor(public readonly id: string) { }
}

export class CreateCmsSectionCommand implements Command {
    constructor(
        public readonly pageId: string,
        public readonly data: {
            type: CmsSectionType;
            title?: string | null;
            subtitle?: string | null;
            body?: string | null;
            imageUrl?: string | null;
            content?: unknown | null;
            sortOrder?: number;
            isVisible?: boolean;
            createdBy?: string | null;
        },
    ) { }
}

export class UpdateCmsSectionCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly data: UpdateCmsSectionData,
        public readonly pageId?: string,
    ) { }
}

export class ReorderCmsSectionsCommand implements Command {
    constructor(
        public readonly pageId: string,
        public readonly sections: ReorderCmsSectionData[],
    ) { }
}

export class DeleteCmsSectionCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly pageId?: string,
    ) { }
}

export class CreateCmsBannerCommand implements Command {
    constructor(public readonly data: CreateCmsBannerData) { }
}

export class UpdateCmsBannerCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly data: UpdateCmsBannerData,
    ) { }
}

export class DeleteCmsBannerCommand implements Command {
    constructor(public readonly id: string) { }
}

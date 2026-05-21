import { CommandHandler } from '../../../../shared/core/buses/command-bus';
import { QueryHandler } from '../../../../shared/core/buses/query-bus';
import {
    CmsBannerEntity,
    CmsPageEntity,
    CmsSectionEntity,
} from '../../domain/cms.entity';
import { CmsService } from '../../services/cms.service';
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
} from '../commands/cms.commands';
import {
    GetCmsPageByIdQuery,
    GetPublicCmsPageBySlugQuery,
    ListCmsBannersQuery,
    ListCmsPagesQuery,
    ListPublicCmsBannersQuery,
} from '../queries/cms.queries';

export class ListCmsPagesHandler
    implements QueryHandler<ListCmsPagesQuery, CmsPageEntity[]> {
    constructor(private readonly cmsService: CmsService) { }

    execute(): Promise<CmsPageEntity[]> {
        return this.cmsService.listPages();
    }
}

export class GetCmsPageByIdHandler
    implements QueryHandler<GetCmsPageByIdQuery, CmsPageEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(query: GetCmsPageByIdQuery): Promise<CmsPageEntity> {
        return this.cmsService.getPageById(query.id);
    }
}

export class GetPublicCmsPageBySlugHandler
    implements QueryHandler<GetPublicCmsPageBySlugQuery, CmsPageEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(query: GetPublicCmsPageBySlugQuery): Promise<CmsPageEntity> {
        return this.cmsService.getPublicPageBySlug(query.slug);
    }
}

export class CreateCmsPageHandler
    implements CommandHandler<CreateCmsPageCommand, CmsPageEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: CreateCmsPageCommand): Promise<CmsPageEntity> {
        return this.cmsService.createPage(command.data);
    }
}

export class UpdateCmsPageHandler
    implements CommandHandler<UpdateCmsPageCommand, CmsPageEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: UpdateCmsPageCommand): Promise<CmsPageEntity> {
        return this.cmsService.updatePage(command.id, command.data);
    }
}

export class DeleteCmsPageHandler
    implements CommandHandler<DeleteCmsPageCommand, CmsPageEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: DeleteCmsPageCommand): Promise<CmsPageEntity> {
        return this.cmsService.deletePage(command.id);
    }
}

export class CreateCmsSectionHandler
    implements CommandHandler<CreateCmsSectionCommand, CmsSectionEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: CreateCmsSectionCommand): Promise<CmsSectionEntity> {
        return this.cmsService.createSection(command.pageId, command.data);
    }
}

export class UpdateCmsSectionHandler
    implements CommandHandler<UpdateCmsSectionCommand, CmsSectionEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: UpdateCmsSectionCommand): Promise<CmsSectionEntity> {
        return this.cmsService.updateSection(command.id, command.data);
    }
}

export class ReorderCmsSectionsHandler
    implements CommandHandler<ReorderCmsSectionsCommand, CmsSectionEntity[]> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: ReorderCmsSectionsCommand): Promise<CmsSectionEntity[]> {
        return this.cmsService.reorderSections(command.pageId, command.sections);
    }
}

export class DeleteCmsSectionHandler
    implements CommandHandler<DeleteCmsSectionCommand, CmsSectionEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: DeleteCmsSectionCommand): Promise<CmsSectionEntity> {
        return this.cmsService.deleteSection(command.id);
    }
}

export class ListCmsBannersHandler
    implements QueryHandler<ListCmsBannersQuery, CmsBannerEntity[]> {
    constructor(private readonly cmsService: CmsService) { }

    execute(): Promise<CmsBannerEntity[]> {
        return this.cmsService.listBanners();
    }
}

export class ListPublicCmsBannersHandler
    implements QueryHandler<ListPublicCmsBannersQuery, CmsBannerEntity[]> {
    constructor(private readonly cmsService: CmsService) { }

    execute(): Promise<CmsBannerEntity[]> {
        return this.cmsService.listPublicBanners();
    }
}

export class CreateCmsBannerHandler
    implements CommandHandler<CreateCmsBannerCommand, CmsBannerEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: CreateCmsBannerCommand): Promise<CmsBannerEntity> {
        return this.cmsService.createBanner(command.data);
    }
}

export class UpdateCmsBannerHandler
    implements CommandHandler<UpdateCmsBannerCommand, CmsBannerEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: UpdateCmsBannerCommand): Promise<CmsBannerEntity> {
        return this.cmsService.updateBanner(command.id, command.data);
    }
}

export class DeleteCmsBannerHandler
    implements CommandHandler<DeleteCmsBannerCommand, CmsBannerEntity> {
    constructor(private readonly cmsService: CmsService) { }

    execute(command: DeleteCmsBannerCommand): Promise<CmsBannerEntity> {
        return this.cmsService.deleteBanner(command.id);
    }
}

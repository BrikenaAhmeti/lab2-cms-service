import { Query } from '../../../../shared/core/buses/query-bus';

export class ListCmsPagesQuery implements Query { }

export class GetCmsPageByIdQuery implements Query {
    constructor(public readonly id: string) { }
}

export class GetPublicCmsPageBySlugQuery implements Query {
    constructor(public readonly slug: string) { }
}

export class ListCmsSectionsQuery implements Query {
    constructor(public readonly pageId: string) { }
}

export class GetCmsSectionByIdQuery implements Query {
    constructor(
        public readonly id: string,
        public readonly pageId?: string,
    ) { }
}

export class ListCmsBannersQuery implements Query { }

export class GetCmsBannerByIdQuery implements Query {
    constructor(public readonly id: string) { }
}

export class ListPublicCmsBannersQuery implements Query { }

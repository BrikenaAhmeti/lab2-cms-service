import { Query } from '../../../../shared/core/buses/query-bus';

export class ListCmsPagesQuery implements Query { }

export class GetCmsPageByIdQuery implements Query {
    constructor(public readonly id: string) { }
}

export class GetPublicCmsPageBySlugQuery implements Query {
    constructor(public readonly slug: string) { }
}

export class ListCmsBannersQuery implements Query { }

export class ListPublicCmsBannersQuery implements Query { }

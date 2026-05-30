import swaggerJSDoc from 'swagger-jsdoc';

const editorSecurity = [
    { bearerAuth: [] },
    { cmsEditorRole: [] },
    { cmsEditorPermissions: [] },
];

const actorHeader = {
    $ref: '#/components/parameters/ActorUserIdHeader',
};

const pageIdParam = {
    $ref: '#/components/parameters/PageId',
};

const idParam = {
    $ref: '#/components/parameters/Id',
};

const slugParam = {
    $ref: '#/components/parameters/Slug',
};

const commonErrorResponses = {
    '400': {
        description: 'Validation failed or invalid request data.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ValidationErrorResponse' },
            },
        },
    },
    '401': {
        description: 'Editor credentials are required.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
                example: { message: 'CMS editor credentials required' },
            },
        },
    },
    '403': {
        description: 'The caller does not have CMS edit permission.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
                example: { message: 'CMS edit permission required' },
            },
        },
    },
    '404': {
        description: 'The requested CMS resource was not found.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
                example: { message: 'CMS page not found' },
            },
        },
    },
    '409': {
        description: 'The request conflicts with existing CMS data.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
                example: { message: 'CMS page slug already exists' },
            },
        },
    },
    '500': {
        description: 'Unexpected server error.',
        content: {
            'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
                example: { message: 'Internal server error' },
            },
        },
    },
};

const openApiDefinition = {
    openapi: '3.0.3',
    info: {
        title: 'MedSphere CMS Service API',
        version: '1.0.0',
        description:
            'OpenAPI documentation for the independent MedSphere CMS microservice. The service owns CMS pages, page sections, banners, public read-only CMS endpoints, and Socket.IO live preview broadcasts using the cms:content-updated event.',
    },
    servers: [
        {
            url: 'http://localhost:3009',
            description: 'Local development server',
        },
    ],
    tags: [
        {
            name: 'Health',
            description: 'Service health checks.',
        },
        {
            name: 'CMS Pages',
            description: 'Admin CMS page management.',
        },
        {
            name: 'CMS Sections',
            description: 'Admin CMS page section management.',
        },
        {
            name: 'CMS Banners',
            description: 'Admin CMS banner management.',
        },
        {
            name: 'Public CMS',
            description: 'Public website read-only CMS endpoints.',
        },
    ],
    paths: {
        '/health': {
            get: {
                tags: ['Health'],
                summary: 'Check service health',
                responses: {
                    '200': {
                        description: 'The CMS service is running.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/HealthResponse',
                                },
                                example: {
                                    service: 'cms-service',
                                    status: 'ok',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/api/cms/pages': {
            get: {
                tags: ['CMS Pages'],
                summary: 'List CMS pages',
                description: 'Returns all CMS pages with sections ordered by sort order.',
                responses: {
                    '200': {
                        description: 'CMS pages returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/CmsPage' },
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            post: {
                tags: ['CMS Pages'],
                summary: 'Create a CMS page',
                description:
                    'Creates a CMS page. Mutating CMS requests require a super admin role or cms:edit permission.',
                security: editorSecurity,
                parameters: [actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateCmsPageRequest',
                            },
                            examples: {
                                homePage: {
                                    summary: 'Published home page',
                                    value: {
                                        slug: 'home',
                                        title: 'Home',
                                        metaTitle: 'MedSphere Clinic',
                                        metaDescription:
                                            'Book appointments and learn about MedSphere services.',
                                        isPublished: true,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: 'CMS page created successfully.',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/CmsPage' },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/pages/{id}': {
            get: {
                tags: ['CMS Pages'],
                summary: 'Get a CMS page by ID',
                parameters: [idParam],
                responses: {
                    '200': {
                        description: 'CMS page returned successfully.',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/CmsPage' },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            put: {
                tags: ['CMS Pages'],
                summary: 'Update a CMS page',
                security: editorSecurity,
                parameters: [idParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateCmsPageRequest',
                            },
                            examples: {
                                publishPage: {
                                    summary: 'Publish an existing page',
                                    value: {
                                        isPublished: true,
                                        metaDescription:
                                            'Updated public page description.',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS page updated successfully.',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/CmsPage' },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            delete: {
                tags: ['CMS Pages'],
                summary: 'Delete a CMS page',
                security: editorSecurity,
                parameters: [idParam],
                responses: {
                    '204': {
                        description: 'CMS page deleted successfully.',
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/pages/{pageId}/sections': {
            get: {
                tags: ['CMS Sections'],
                summary: 'List sections for a CMS page',
                parameters: [pageIdParam],
                responses: {
                    '200': {
                        description: 'CMS sections returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/CmsSection',
                                    },
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            post: {
                tags: ['CMS Sections'],
                summary: 'Create a CMS section',
                security: editorSecurity,
                parameters: [pageIdParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateCmsSectionRequest',
                            },
                            examples: {
                                heroSection: {
                                    summary: 'Hero section',
                                    value: {
                                        type: 'HERO',
                                        title: 'Care that moves with you',
                                        subtitle:
                                            'Book visits, review results, and manage care in one place.',
                                        imageUrl:
                                            'https://example.com/images/home-hero.jpg',
                                        sortOrder: 0,
                                        isVisible: true,
                                    },
                                },
                                faqSection: {
                                    summary: 'FAQ section with JSON content',
                                    value: {
                                        type: 'FAQ',
                                        title: 'Frequently asked questions',
                                        content: {
                                            items: [
                                                {
                                                    question:
                                                        'Can I book online?',
                                                    answer:
                                                        'Yes, patients can book appointments from the public website.',
                                                },
                                            ],
                                        },
                                        sortOrder: 3,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: 'CMS section created successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/pages/{pageId}/sections/reorder': {
            patch: {
                tags: ['CMS Sections'],
                summary: 'Reorder CMS page sections',
                security: editorSecurity,
                parameters: [pageIdParam],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ReorderCmsSectionsRequest',
                            },
                            example: {
                                sections: [
                                    {
                                        id: '8c35d5e4-ea63-45f0-8b93-4ed3e09f8b60',
                                        sortOrder: 0,
                                    },
                                    {
                                        id: 'b2f69304-daf1-4ab7-98c6-2f68c5b6f5e3',
                                        sortOrder: 1,
                                    },
                                ],
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS sections reordered successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/CmsSection',
                                    },
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/pages/{pageId}/sections/{id}': {
            get: {
                tags: ['CMS Sections'],
                summary: 'Get a CMS section by ID within a page',
                parameters: [pageIdParam, idParam],
                responses: {
                    '200': {
                        description: 'CMS section returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            put: {
                tags: ['CMS Sections'],
                summary: 'Update a CMS section within a page',
                security: editorSecurity,
                parameters: [pageIdParam, idParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateCmsSectionRequest',
                            },
                            example: {
                                title: 'Updated section title',
                                body: 'Updated section body copy.',
                                isVisible: true,
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS section updated successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            delete: {
                tags: ['CMS Sections'],
                summary: 'Delete a CMS section within a page',
                security: editorSecurity,
                parameters: [pageIdParam, idParam],
                responses: {
                    '204': {
                        description: 'CMS section deleted successfully.',
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/pages/{pageId}/sections/{id}/visibility': {
            patch: {
                tags: ['CMS Sections'],
                summary: 'Toggle CMS section visibility',
                security: editorSecurity,
                parameters: [pageIdParam, idParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ToggleCmsSectionVisibilityRequest',
                            },
                            example: {
                                isVisible: false,
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS section visibility updated successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/sections/{id}': {
            get: {
                tags: ['CMS Sections'],
                summary: 'Get a CMS section by ID',
                parameters: [idParam],
                responses: {
                    '200': {
                        description: 'CMS section returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            put: {
                tags: ['CMS Sections'],
                summary: 'Update a CMS section by ID',
                security: editorSecurity,
                parameters: [idParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateCmsSectionRequest',
                            },
                            example: {
                                sortOrder: 2,
                                isVisible: true,
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS section updated successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsSection',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            delete: {
                tags: ['CMS Sections'],
                summary: 'Delete a CMS section by ID',
                security: editorSecurity,
                parameters: [idParam],
                responses: {
                    '204': {
                        description: 'CMS section deleted successfully.',
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/banners': {
            get: {
                tags: ['CMS Banners'],
                summary: 'List CMS banners',
                responses: {
                    '200': {
                        description: 'CMS banners returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/CmsBanner',
                                    },
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            post: {
                tags: ['CMS Banners'],
                summary: 'Create a CMS banner',
                security: editorSecurity,
                parameters: [actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateCmsBannerRequest',
                            },
                            example: {
                                title: 'Flu vaccines available',
                                message:
                                    'Book your seasonal flu vaccination appointment today.',
                                imageUrl:
                                    'https://example.com/images/flu-vaccine.jpg',
                                linkUrl: 'https://example.com/services',
                                startDate: '2026-06-01T08:00:00.000Z',
                                endDate: '2026-06-30T18:00:00.000Z',
                                isActive: true,
                                sortOrder: 0,
                            },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: 'CMS banner created successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsBanner',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/cms/banners/{id}': {
            get: {
                tags: ['CMS Banners'],
                summary: 'Get a CMS banner by ID',
                parameters: [idParam],
                responses: {
                    '200': {
                        description: 'CMS banner returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsBanner',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            put: {
                tags: ['CMS Banners'],
                summary: 'Update a CMS banner',
                security: editorSecurity,
                parameters: [idParam, actorHeader],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateCmsBannerRequest',
                            },
                            example: {
                                message:
                                    'Updated banner message for the public website.',
                                isActive: true,
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'CMS banner updated successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CmsBanner',
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
            delete: {
                tags: ['CMS Banners'],
                summary: 'Delete a CMS banner',
                security: editorSecurity,
                parameters: [idParam],
                responses: {
                    '204': {
                        description: 'CMS banner deleted successfully.',
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/public/cms/pages/{slug}': {
            get: {
                tags: ['Public CMS'],
                summary: 'Get a published CMS page by slug',
                description:
                    'Returns a published page with only visible sections for public website rendering.',
                parameters: [slugParam],
                responses: {
                    '200': {
                        description: 'Published CMS page returned successfully.',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/CmsPage' },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
        '/api/public/cms/banners': {
            get: {
                tags: ['Public CMS'],
                summary: 'List active public CMS banners',
                description:
                    'Returns banners where isActive is true and the current datetime is within the optional start/end schedule.',
                responses: {
                    '200': {
                        description: 'Active CMS banners returned successfully.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/CmsBanner',
                                    },
                                },
                            },
                        },
                    },
                    ...commonErrorResponses,
                },
            },
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description:
                    'JWT bearer token used when the CMS service is accessed through the API Gateway.',
            },
            cmsEditorRole: {
                type: 'apiKey',
                in: 'header',
                name: 'x-user-role',
                description:
                    'Local service editor shortcut. Use super_admin. The service also accepts x-user-roles.',
            },
            cmsEditorPermissions: {
                type: 'apiKey',
                in: 'header',
                name: 'x-user-permissions',
                description:
                    'Local service editor shortcut. Use cms:edit. Comma-separated permissions are accepted.',
            },
        },
        parameters: {
            Id: {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    format: 'uuid',
                },
                description: 'CMS resource UUID.',
            },
            PageId: {
                name: 'pageId',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    format: 'uuid',
                },
                description: 'CMS page UUID.',
            },
            Slug: {
                name: 'slug',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    example: 'home',
                },
                description: 'Public CMS page slug.',
            },
            ActorUserIdHeader: {
                name: 'x-user-id',
                in: 'header',
                required: false,
                schema: {
                    type: 'string',
                    format: 'uuid',
                },
                description:
                    'Optional actor UUID recorded as createdBy or updatedBy on CMS mutations.',
            },
        },
        schemas: {
            HealthResponse: {
                type: 'object',
                required: ['service', 'status'],
                properties: {
                    service: {
                        type: 'string',
                        example: 'cms-service',
                    },
                    status: {
                        type: 'string',
                        example: 'ok',
                    },
                },
            },
            CmsSectionType: {
                type: 'string',
                enum: ['HERO', 'TEXT', 'CTA', 'FAQ', 'TESTIMONIALS', 'STATS'],
                example: 'HERO',
            },
            CmsPage: {
                type: 'object',
                required: [
                    'id',
                    'slug',
                    'title',
                    'isPublished',
                    'createdAt',
                    'updatedAt',
                ],
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    slug: {
                        type: 'string',
                        example: 'home',
                    },
                    title: {
                        type: 'string',
                        example: 'Home',
                    },
                    metaTitle: {
                        type: 'string',
                        nullable: true,
                        example: 'MedSphere Clinic',
                    },
                    metaDescription: {
                        type: 'string',
                        nullable: true,
                        example: 'Book appointments and manage care online.',
                    },
                    isPublished: {
                        type: 'boolean',
                        example: true,
                    },
                    createdBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    updatedBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    sections: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CmsSection',
                        },
                    },
                },
            },
            CreateCmsPageRequest: {
                type: 'object',
                required: ['title'],
                additionalProperties: false,
                properties: {
                    slug: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 120,
                        description:
                            'Optional slug. If omitted, the service normalizes the title into a slug.',
                        example: 'home',
                    },
                    title: {
                        type: 'string',
                        minLength: 2,
                        maxLength: 160,
                        example: 'Home',
                    },
                    metaTitle: {
                        type: 'string',
                        maxLength: 160,
                        nullable: true,
                    },
                    metaDescription: {
                        type: 'string',
                        maxLength: 255,
                        nullable: true,
                    },
                    isPublished: {
                        type: 'boolean',
                        default: false,
                    },
                },
            },
            UpdateCmsPageRequest: {
                type: 'object',
                additionalProperties: false,
                description:
                    'Partial CMS page update. Any create-page field may be supplied.',
                properties: {
                    slug: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 120,
                        example: 'home',
                    },
                    title: {
                        type: 'string',
                        minLength: 2,
                        maxLength: 160,
                        example: 'Home',
                    },
                    metaTitle: {
                        type: 'string',
                        maxLength: 160,
                        nullable: true,
                    },
                    metaDescription: {
                        type: 'string',
                        maxLength: 255,
                        nullable: true,
                    },
                    isPublished: {
                        type: 'boolean',
                    },
                },
            },
            CmsSection: {
                type: 'object',
                required: [
                    'id',
                    'pageId',
                    'type',
                    'sortOrder',
                    'isVisible',
                    'createdAt',
                    'updatedAt',
                ],
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    pageId: {
                        type: 'string',
                        format: 'uuid',
                    },
                    type: {
                        $ref: '#/components/schemas/CmsSectionType',
                    },
                    title: {
                        type: 'string',
                        maxLength: 160,
                        nullable: true,
                    },
                    subtitle: {
                        type: 'string',
                        maxLength: 255,
                        nullable: true,
                    },
                    body: {
                        type: 'string',
                        nullable: true,
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    content: {
                        nullable: true,
                        oneOf: [
                            {
                                type: 'object',
                                additionalProperties: true,
                            },
                            {
                                type: 'array',
                                items: {},
                            },
                            {
                                type: 'string',
                            },
                            {
                                type: 'number',
                            },
                            {
                                type: 'boolean',
                            },
                        ],
                        description:
                            'Flexible JSON content for section-specific data such as FAQ items, stats, or testimonials.',
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                        example: 0,
                    },
                    isVisible: {
                        type: 'boolean',
                        example: true,
                    },
                    createdBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    updatedBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                },
            },
            CreateCmsSectionRequest: {
                type: 'object',
                required: ['type'],
                additionalProperties: false,
                properties: {
                    type: {
                        $ref: '#/components/schemas/CmsSectionType',
                    },
                    title: {
                        type: 'string',
                        maxLength: 160,
                        nullable: true,
                    },
                    subtitle: {
                        type: 'string',
                        maxLength: 255,
                        nullable: true,
                    },
                    body: {
                        type: 'string',
                        nullable: true,
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    content: {
                        nullable: true,
                        oneOf: [
                            {
                                type: 'object',
                                additionalProperties: true,
                            },
                            {
                                type: 'array',
                                items: {},
                            },
                            {
                                type: 'string',
                            },
                            {
                                type: 'number',
                            },
                            {
                                type: 'boolean',
                            },
                        ],
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                    },
                    isVisible: {
                        type: 'boolean',
                        default: true,
                    },
                },
            },
            UpdateCmsSectionRequest: {
                type: 'object',
                additionalProperties: false,
                description:
                    'Partial CMS section update. Any create-section field may be supplied.',
                properties: {
                    type: {
                        $ref: '#/components/schemas/CmsSectionType',
                    },
                    title: {
                        type: 'string',
                        maxLength: 160,
                        nullable: true,
                    },
                    subtitle: {
                        type: 'string',
                        maxLength: 255,
                        nullable: true,
                    },
                    body: {
                        type: 'string',
                        nullable: true,
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    content: {
                        nullable: true,
                        oneOf: [
                            {
                                type: 'object',
                                additionalProperties: true,
                            },
                            {
                                type: 'array',
                                items: {},
                            },
                            {
                                type: 'string',
                            },
                            {
                                type: 'number',
                            },
                            {
                                type: 'boolean',
                            },
                        ],
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                    },
                    isVisible: {
                        type: 'boolean',
                    },
                },
            },
            ToggleCmsSectionVisibilityRequest: {
                type: 'object',
                required: ['isVisible'],
                additionalProperties: false,
                properties: {
                    isVisible: {
                        type: 'boolean',
                    },
                },
            },
            ReorderCmsSectionsRequest: {
                type: 'object',
                required: ['sections'],
                additionalProperties: false,
                properties: {
                    sections: {
                        type: 'array',
                        minItems: 1,
                        items: {
                            $ref: '#/components/schemas/ReorderCmsSectionItem',
                        },
                    },
                },
            },
            ReorderCmsSectionItem: {
                type: 'object',
                required: ['id', 'sortOrder'],
                additionalProperties: false,
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
            },
            CmsBanner: {
                type: 'object',
                required: [
                    'id',
                    'title',
                    'message',
                    'isActive',
                    'sortOrder',
                    'createdAt',
                    'updatedAt',
                ],
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    title: {
                        type: 'string',
                        maxLength: 160,
                        example: 'Flu vaccines available',
                    },
                    message: {
                        type: 'string',
                        example:
                            'Book your seasonal flu vaccination appointment today.',
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    linkUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    startDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    endDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    isActive: {
                        type: 'boolean',
                        example: true,
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                        example: 0,
                    },
                    createdBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    updatedBy: {
                        type: 'string',
                        format: 'uuid',
                        nullable: true,
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                },
            },
            CreateCmsBannerRequest: {
                type: 'object',
                required: ['title', 'message'],
                additionalProperties: false,
                properties: {
                    title: {
                        type: 'string',
                        minLength: 2,
                        maxLength: 160,
                    },
                    message: {
                        type: 'string',
                        minLength: 1,
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    linkUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    startDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    endDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    isActive: {
                        type: 'boolean',
                        default: true,
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
            },
            UpdateCmsBannerRequest: {
                type: 'object',
                additionalProperties: false,
                description:
                    'Partial CMS banner update. Any create-banner field may be supplied.',
                properties: {
                    title: {
                        type: 'string',
                        minLength: 2,
                        maxLength: 160,
                    },
                    message: {
                        type: 'string',
                        minLength: 1,
                    },
                    imageUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    linkUrl: {
                        type: 'string',
                        format: 'uri',
                        maxLength: 500,
                        nullable: true,
                    },
                    startDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    endDate: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    isActive: {
                        type: 'boolean',
                    },
                    sortOrder: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
            },
            ErrorResponse: {
                type: 'object',
                required: ['message'],
                properties: {
                    message: {
                        type: 'string',
                        example: 'CMS page not found',
                    },
                },
            },
            ValidationErrorResponse: {
                type: 'object',
                required: ['message'],
                properties: {
                    message: {
                        type: 'string',
                        example: 'Validation failed',
                    },
                    issues: {
                        type: 'array',
                        items: {
                            type: 'object',
                            additionalProperties: true,
                            example: {
                                code: 'invalid_type',
                                path: ['title'],
                                message:
                                    'Invalid input: expected string, received undefined',
                            },
                        },
                    },
                },
            },
        },
    },
};

export const openApiDocument = swaggerJSDoc({
    definition: openApiDefinition,
    apis: [],
});

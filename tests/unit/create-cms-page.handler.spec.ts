import { CreateCmsPageHandler } from '../../src/modules/cms/application/handlers/cms.handlers';
import { CreateCmsPageCommand } from '../../src/modules/cms/application/commands/cms.commands';
import { CmsRepository } from '../../src/modules/cms/domain/cms.repository';
import { CmsService } from '../../src/modules/cms/services/cms.service';
import { AppError } from '../../src/shared/core/errors/app-error';

function createRepositoryMock(): jest.Mocked<CmsRepository> {
    return {
        listPages: jest.fn(),
        createPage: jest.fn(),
        findPageById: jest.fn(),
        findPageBySlug: jest.fn(),
        findPublishedPageBySlug: jest.fn(),
        updatePage: jest.fn(),
        deletePage: jest.fn(),
        listSectionsByPageId: jest.fn(),
        createSection: jest.fn(),
        findSectionById: jest.fn(),
        getNextSectionSortOrder: jest.fn(),
        updateSection: jest.fn(),
        reorderSections: jest.fn(),
        deleteSection: jest.fn(),
        listBanners: jest.fn(),
        listActiveBanners: jest.fn(),
        createBanner: jest.fn(),
        findBannerById: jest.fn(),
        updateBanner: jest.fn(),
        deleteBanner: jest.fn(),
    };
}

describe('CreateCmsPageHandler', () => {
    let repository: jest.Mocked<CmsRepository>;
    let handler: CreateCmsPageHandler;

    beforeEach(() => {
        repository = createRepositoryMock();
        handler = new CreateCmsPageHandler(new CmsService(repository));
    });

    it('creates a CMS page with a normalized slug', async () => {
        repository.findPageBySlug.mockResolvedValue(null);
        repository.createPage.mockResolvedValue({
            id: 'b49f1d72-7fe6-4e8b-91e1-c4999ff78c50',
            slug: 'home-page',
            title: 'Home Page',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            sections: [],
        });

        const result = await handler.execute(
            new CreateCmsPageCommand({
                slug: ' Home Page ',
                title: 'Home Page',
                isPublished: true,
            }),
        );

        expect(repository.findPageBySlug).toHaveBeenCalledWith('home-page');
        expect(repository.createPage).toHaveBeenCalledWith(
            expect.objectContaining({
                slug: 'home-page',
                title: 'Home Page',
                isPublished: true,
            }),
        );
        expect(result.slug).toBe('home-page');
    });

    it('rejects duplicate CMS page slugs', async () => {
        repository.findPageBySlug.mockResolvedValue({
            id: 'b49f1d72-7fe6-4e8b-91e1-c4999ff78c50',
            slug: 'home',
            title: 'Home',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await expect(
            handler.execute(
                new CreateCmsPageCommand({
                    slug: 'home',
                    title: 'Home',
                }),
            ),
        ).rejects.toBeInstanceOf(AppError);
        expect(repository.createPage).not.toHaveBeenCalled();
    });
});

import { CmsRepository } from '../../src/modules/cms/domain/cms.repository';
import { CmsService } from '../../src/modules/cms/services/cms.service';
import { AppError } from '../../src/shared/core/errors/app-error';

const pageId = 'b49f1d72-7fe6-4e8b-91e1-c4999ff78c50';
const otherPageId = 'a18a8633-5c6f-4584-b7c9-11f8b80cb8b2';
const sectionId = 'cd5410fa-8654-4e07-8af7-8ad1190a6d1d';
const bannerId = '5985222d-48df-4ed7-8120-a34f87712a39';

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

describe('CmsService', () => {
    let repository: jest.Mocked<CmsRepository>;
    let service: CmsService;

    beforeEach(() => {
        repository = createRepositoryMock();
        service = new CmsService(repository);
    });

    it('rejects nested section updates when the section belongs to another page', async () => {
        repository.findPageById.mockResolvedValue({
            id: pageId,
            slug: 'home',
            title: 'Home',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        repository.findSectionById.mockResolvedValue({
            id: sectionId,
            pageId: otherPageId,
            type: 'TEXT',
            sortOrder: 0,
            isVisible: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await expect(
            service.updateSection(sectionId, { title: 'Updated' }, pageId),
        ).rejects.toBeInstanceOf(AppError);

        expect(repository.updateSection).not.toHaveBeenCalled();
    });

    it('rejects section reorder payloads with duplicate IDs', async () => {
        repository.findPageById.mockResolvedValue({
            id: pageId,
            slug: 'home',
            title: 'Home',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await expect(
            service.reorderSections(pageId, [
                { id: sectionId, sortOrder: 0 },
                { id: sectionId, sortOrder: 1 },
            ]),
        ).rejects.toBeInstanceOf(AppError);

        expect(repository.reorderSections).not.toHaveBeenCalled();
    });

    it('rejects section reorder payloads containing sections from another page', async () => {
        repository.findPageById.mockResolvedValue({
            id: pageId,
            slug: 'home',
            title: 'Home',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        repository.listSectionsByPageId.mockResolvedValue([
            {
                id: sectionId,
                pageId,
                type: 'HERO',
                sortOrder: 0,
                isVisible: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        await expect(
            service.reorderSections(pageId, [
                {
                    id: '65b05e3e-1d49-4ddd-963c-573c52b5fdbc',
                    sortOrder: 0,
                },
            ]),
        ).rejects.toBeInstanceOf(AppError);

        expect(repository.reorderSections).not.toHaveBeenCalled();
    });

    it('returns active public banners through the repository schedule filter', async () => {
        const now = new Date('2026-05-26T10:00:00.000Z');
        repository.listActiveBanners.mockResolvedValue([
            {
                id: bannerId,
                title: 'Welcome',
                message: 'Book online today',
                isActive: true,
                sortOrder: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        await service.listPublicBanners(now);

        expect(repository.listActiveBanners).toHaveBeenCalledWith(now);
    });

    it('rejects banners whose end date is before the start date', async () => {
        await expect(
            service.createBanner({
                title: 'Summer hours',
                message: 'Updated schedule',
                startDate: new Date('2026-06-01T00:00:00.000Z'),
                endDate: new Date('2026-05-01T00:00:00.000Z'),
            }),
        ).rejects.toBeInstanceOf(AppError);

        expect(repository.createBanner).not.toHaveBeenCalled();
    });
});

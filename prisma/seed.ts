import { prisma } from '../src/infrastructure/db/prisma';

const defaultPages = [
    {
        slug: 'home',
        title: 'Home',
        metaTitle: 'MedSphere',
        metaDescription: 'Healthcare management platform public homepage.',
        isPublished: true,
        sections: [
            {
                type: 'HERO' as const,
                title: 'MedSphere',
                subtitle: 'Modern care, organized clearly.',
                sortOrder: 0,
            },
        ],
    },
    {
        slug: 'about',
        title: 'About',
        metaTitle: 'About MedSphere',
        metaDescription: 'About the MedSphere healthcare platform.',
        isPublished: true,
        sections: [
            {
                type: 'TEXT' as const,
                title: 'About MedSphere',
                body: 'Placeholder CMS content for the public website.',
                sortOrder: 0,
            },
        ],
    },
    {
        slug: 'departments',
        title: 'Departments',
        metaTitle: 'Departments',
        metaDescription: 'Browse available medical departments.',
        isPublished: true,
        sections: [
            {
                type: 'TEXT' as const,
                title: 'Departments',
                body: 'Placeholder CMS content for department highlights.',
                sortOrder: 0,
            },
        ],
    },
    {
        slug: 'doctors',
        title: 'Doctors',
        metaTitle: 'Doctors',
        metaDescription: 'Browse public doctor profiles.',
        isPublished: true,
        sections: [
            {
                type: 'TEXT' as const,
                title: 'Doctors',
                body: 'Placeholder CMS content for public doctor profiles.',
                sortOrder: 0,
            },
        ],
    },
    {
        slug: 'services',
        title: 'Services',
        metaTitle: 'Services',
        metaDescription: 'Browse medical services.',
        isPublished: true,
        sections: [
            {
                type: 'TEXT' as const,
                title: 'Services',
                body: 'Placeholder CMS content for available services.',
                sortOrder: 0,
            },
        ],
    },
    {
        slug: 'contact',
        title: 'Contact',
        metaTitle: 'Contact',
        metaDescription: 'Contact the facility.',
        isPublished: true,
        sections: [
            {
                type: 'CTA' as const,
                title: 'Contact MedSphere',
                body: 'Placeholder CMS content for public contact details.',
                sortOrder: 0,
            },
        ],
    },
];

async function main() {
    for (const page of defaultPages) {
        const seededPage = await prisma.cmsPage.upsert({
            where: { slug: page.slug },
            update: {
                title: page.title,
                metaTitle: page.metaTitle,
                metaDescription: page.metaDescription,
                isPublished: page.isPublished,
            },
            create: {
                slug: page.slug,
                title: page.title,
                metaTitle: page.metaTitle,
                metaDescription: page.metaDescription,
                isPublished: page.isPublished,
                sections: {
                    create: page.sections.map((section) => ({
                        ...section,
                        isVisible: true,
                    })),
                },
            },
            include: {
                sections: true,
            },
        });

        if (seededPage.sections.length === 0 && page.sections.length > 0) {
            await prisma.cmsSection.createMany({
                data: page.sections.map((section) => ({
                    ...section,
                    pageId: seededPage.id,
                    isVisible: true,
                })),
            });
        }
    }
}

main()
    .finally(async () => {
        await prisma.$disconnect();
    });

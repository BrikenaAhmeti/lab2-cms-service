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
        sections: [],
    },
    {
        slug: 'doctors',
        title: 'Doctors',
        metaTitle: 'Doctors',
        metaDescription: 'Browse public doctor profiles.',
        isPublished: true,
        sections: [],
    },
    {
        slug: 'services',
        title: 'Services',
        metaTitle: 'Services',
        metaDescription: 'Browse medical services.',
        isPublished: true,
        sections: [],
    },
    {
        slug: 'contact',
        title: 'Contact',
        metaTitle: 'Contact',
        metaDescription: 'Contact the facility.',
        isPublished: true,
        sections: [],
    },
];

async function main() {
    for (const page of defaultPages) {
        await prisma.cmsPage.upsert({
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
        });
    }
}

main()
    .finally(async () => {
        await prisma.$disconnect();
    });

import { Prisma } from '../src/generated/prisma';
import { prisma } from '../src/infrastructure/db/prisma';

type SeedSection = {
    type: 'HERO' | 'TEXT' | 'CTA' | 'FAQ' | 'TESTIMONIALS' | 'STATS';
    title?: string;
    subtitle?: string;
    body?: string;
    imageUrl?: string;
    content?: Prisma.InputJsonValue;
    sortOrder: number;
    isVisible?: boolean;
};

type SeedPage = {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    isPublished: boolean;
    sections: SeedSection[];
};

type SeedBanner = {
    title: string;
    message: string;
    imageUrl?: string;
    linkUrl?: string;
    startDate?: Date | null;
    endDate?: Date | null;
    isActive: boolean;
    sortOrder: number;
};

const media = {
    heroClinic:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    hospitalTeam:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
    careRoom:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    doctorSarah:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    doctorMason:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    doctorElena:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    doctorAmira:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
    diagnostics:
        'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    patientCare:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
};

const sharedStats = [
    {
        value: '42',
        label: 'Care teams',
        description: 'Coordinated departments across primary and specialty care.',
    },
    {
        value: '18k+',
        label: 'Patient interactions',
        description: 'Supported each month across digital and in-person channels.',
    },
    {
        value: '4.9/5',
        label: 'Average satisfaction',
        description: 'Based on recent care navigation and support feedback.',
    },
    {
        value: '24/7',
        label: 'Digital support',
        description: 'Self-service guidance and secure messaging stay available.',
    },
];

const featuredServices = [
    {
        title: 'General Consultation',
        description:
            'A clear first step for everyday concerns, care planning, and referrals.',
        icon: 'stethoscope',
        href: '/services',
    },
    {
        title: 'Cardiology',
        description:
            'Heart health guidance, diagnostics, and follow-up plans with specialists.',
        icon: 'heart-pulse',
        href: '/departments',
    },
    {
        title: 'Dermatology',
        description:
            'Skin checks, treatment plans, and ongoing support for common conditions.',
        icon: 'sparkles',
        href: '/departments',
    },
    {
        title: 'Pediatrics',
        description:
            'Friendly preventive care and family support for children and teens.',
        icon: 'baby',
        href: '/departments',
    },
    {
        title: 'Diagnostics',
        description:
            'Lab, imaging, and screening information organized for quick next steps.',
        icon: 'activity',
        href: '/services',
    },
    {
        title: 'Virtual Care Support',
        description:
            'Digital check-ins, secure messaging, and care instructions after visits.',
        icon: 'video',
        href: '/services',
    },
];

const doctorProfiles = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'General Physician',
        specialty: 'Primary Care',
        rating: '4.9',
        reviews: 128,
        imageUrl: media.doctorSarah,
        tags: ['Preventive care', 'Family medicine', 'Care planning'],
    },
    {
        name: 'Dr. Mason Lee',
        role: 'Cardiologist',
        specialty: 'Heart Health',
        rating: '4.8',
        reviews: 96,
        imageUrl: media.doctorMason,
        tags: ['Cardiac screening', 'Blood pressure', 'Long-term follow-up'],
    },
    {
        name: 'Dr. Elena Rivera',
        role: 'Dermatologist',
        specialty: 'Skin Health',
        rating: '4.9',
        reviews: 87,
        imageUrl: media.doctorElena,
        tags: ['Skin checks', 'Acne care', 'Treatment plans'],
    },
    {
        name: 'Dr. Amira Patel',
        role: 'Pediatrician',
        specialty: 'Child and Teen Care',
        rating: '4.9',
        reviews: 112,
        imageUrl: media.doctorAmira,
        tags: ['Well-child visits', 'Immunization guidance', 'Family support'],
    },
];

const defaultPages: SeedPage[] = [
    {
        slug: 'home',
        title: 'Home',
        metaTitle: 'MedSphere | Health, Connected',
        metaDescription:
            'A polished MedSphere public homepage with care highlights, services, doctors, FAQs, and trust-building content.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'MedSphere',
                subtitle: 'Health, connected.',
                body:
                    'A patient-friendly healthcare experience with clear services, trusted clinicians, secure records, and digital support in one place.',
                imageUrl: media.heroClinic,
                sortOrder: 0,
                content: {
                    eyebrow: 'Modern care coordination',
                    layout: 'dashboard-inspired',
                    actions: [
                        { label: 'Explore Services', href: '/services', style: 'primary' },
                        { label: 'Meet Doctors', href: '/doctors', style: 'secondary' },
                    ],
                    trustPills: [
                        'Secure records',
                        'AI care guidance',
                        'Multi-channel support',
                    ],
                    preview: {
                        assistantTitle: 'AI Care Assistant',
                        assistantState: 'Listening',
                        promptExamples: [
                            'Find a cardiology service',
                            'Show clinic contact details',
                            'Explain what to bring for a visit',
                        ],
                        panels: [
                            { label: 'Care teams', value: '42' },
                            { label: 'Departments', value: '12' },
                            { label: 'Patient rating', value: '4.9' },
                        ],
                    },
                },
            },
            {
                type: 'STATS',
                title: 'Care That Feels Organized',
                subtitle:
                    'Clear information, responsive support, and thoughtful digital tools help patients move with confidence.',
                sortOrder: 1,
                content: {
                    stats: sharedStats,
                },
            },
            {
                type: 'TEXT',
                title: 'Connected Care Tools',
                subtitle:
                    'Inspired by the dashboard experience, these content blocks give the frontend strong material for polished cards and feature rows.',
                body:
                    'MedSphere combines human care with simple digital touchpoints so patients can understand services, clinicians, records, and support channels without friction.',
                imageUrl: media.patientCare,
                sortOrder: 2,
                content: {
                    display: 'feature-grid',
                    features: [
                        {
                            title: 'Patient Dashboard',
                            description:
                                'A calm overview for care details, messages, records, and next steps.',
                            icon: 'layout-dashboard',
                        },
                        {
                            title: 'AI Voice Guidance',
                            description:
                                'Natural-language help for common clinic questions and service discovery.',
                            icon: 'mic',
                        },
                        {
                            title: 'Secure Records',
                            description:
                                'Important health documents are organized behind privacy-first access.',
                            icon: 'shield-check',
                        },
                        {
                            title: 'Care Messages',
                            description:
                                'Patients can keep conversations and support updates easy to follow.',
                            icon: 'message-square',
                        },
                        {
                            title: 'Medical Summaries',
                            description:
                                'Plain-language information helps patients prepare for each care step.',
                            icon: 'file-text',
                        },
                        {
                            title: 'Operational Insights',
                            description:
                                'Care teams can surface trends while patients see only what matters to them.',
                            icon: 'bar-chart-3',
                        },
                    ],
                },
            },
            {
                type: 'TEXT',
                title: 'Featured Services',
                subtitle:
                    'A service card grid for the public website, focused on discovery rather than scheduling.',
                sortOrder: 3,
                content: {
                    display: 'service-cards',
                    services: featuredServices,
                },
            },
            {
                type: 'TEXT',
                title: 'Doctors Patients Trust',
                subtitle:
                    'Professional profile cards with specialties, ratings, and warm visual details.',
                sortOrder: 4,
                content: {
                    display: 'doctor-cards',
                    doctors: doctorProfiles.slice(0, 3),
                },
            },
            {
                type: 'TESTIMONIALS',
                title: 'What Patients Notice First',
                subtitle:
                    'Clear communication and fewer confusing handoffs make the experience feel easier.',
                sortOrder: 5,
                content: {
                    testimonials: [
                        {
                            quote:
                                'The service pages helped me understand exactly which department matched my concern.',
                            author: 'Nora P.',
                            role: 'Primary care patient',
                        },
                        {
                            quote:
                                'I liked seeing doctor profiles and practical visit information before contacting the clinic.',
                            author: 'Michael T.',
                            role: 'Cardiology patient',
                        },
                        {
                            quote:
                                'The site feels clean, secure, and easy to scan, which matters when health questions are stressful.',
                            author: 'Ari L.',
                            role: 'Patient portal user',
                        },
                    ],
                },
            },
            {
                type: 'FAQ',
                title: 'Common Questions',
                subtitle:
                    'Helpful answers for the public site without storing operational records in CMS.',
                sortOrder: 6,
                content: {
                    items: [
                        {
                            question: 'What can I find on the MedSphere website?',
                            answer:
                                'You can explore services, departments, doctor profiles, contact information, visit preparation notes, and patient support resources.',
                        },
                        {
                            question: 'Does CMS store patient records?',
                            answer:
                                'No. This CMS only stores public website content such as pages, banners, and reusable sections.',
                        },
                        {
                            question: 'Can the frontend style these sections as cards?',
                            answer:
                                'Yes. Each section includes structured JSON for grids, stats, profiles, FAQs, and calls to action.',
                        },
                    ],
                },
            },
            {
                type: 'CTA',
                title: 'Ready to Explore MedSphere?',
                subtitle:
                    'Find services, meet care teams, and get the information you need before reaching out.',
                body:
                    'Use the public site to learn about departments, doctor specialties, support channels, and practical visit details.',
                sortOrder: 7,
                content: {
                    actions: [
                        { label: 'Browse Services', href: '/services', style: 'primary' },
                        { label: 'Contact Us', href: '/contact', style: 'secondary' },
                    ],
                },
            },
        ],
    },
    {
        slug: 'about',
        title: 'About',
        metaTitle: 'About MedSphere',
        metaDescription:
            'Learn about MedSphere, a healthcare platform focused on connected care, clear communication, and patient trust.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'A Calmer Way to Coordinate Care',
                subtitle:
                    'MedSphere brings clinic information, care-team details, digital guidance, and patient support into one coherent experience.',
                body:
                    'Our public website content is designed to help patients quickly understand where to go, who can help, and what each service provides.',
                imageUrl: media.hospitalTeam,
                sortOrder: 0,
                content: {
                    eyebrow: 'About MedSphere',
                    actions: [{ label: 'View Departments', href: '/departments', style: 'primary' }],
                },
            },
            {
                type: 'TEXT',
                title: 'Our Mission',
                subtitle:
                    'Make healthcare information easier to understand before, during, and after each care interaction.',
                body:
                    'MedSphere supports patients with clear public content and supports care teams with structured, reusable CMS sections that are easy for the frontend to present beautifully.',
                sortOrder: 1,
                content: {
                    display: 'values',
                    values: [
                        {
                            title: 'Clarity First',
                            description:
                                'Patients should be able to understand services and care paths without decoding clinic language.',
                            icon: 'compass',
                        },
                        {
                            title: 'Connected Teams',
                            description:
                                'Departments, doctors, and support channels should feel like one system.',
                            icon: 'network',
                        },
                        {
                            title: 'Privacy by Design',
                            description:
                                'CMS content stays public while sensitive health workflows belong to secure services.',
                            icon: 'lock-keyhole',
                        },
                    ],
                },
            },
            {
                type: 'STATS',
                title: 'Built for Trust',
                subtitle:
                    'The website can present meaningful proof points without exposing protected health information.',
                sortOrder: 2,
                content: {
                    stats: [
                        { value: '12', label: 'Departments', description: 'Public service paths.' },
                        { value: '60+', label: 'Clinicians', description: 'Across specialty care teams.' },
                        { value: '99.9%', label: 'Content uptime', description: 'Designed for reliable access.' },
                        { value: 'HIPAA-aware', label: 'Architecture', description: 'Sensitive data lives outside CMS.' },
                    ],
                },
            },
            {
                type: 'TEXT',
                title: 'How MedSphere Helps',
                subtitle:
                    'A simple story section the frontend can render as steps or a timeline.',
                sortOrder: 3,
                content: {
                    display: 'timeline',
                    steps: [
                        {
                            title: 'Discover the right care area',
                            description:
                                'Patients browse services and departments with plain-language summaries.',
                        },
                        {
                            title: 'Understand the care team',
                            description:
                                'Doctor profiles highlight specialties, focus areas, and patient-friendly details.',
                        },
                        {
                            title: 'Prepare with confidence',
                            description:
                                'Support content explains documents, visit flow, and contact options.',
                        },
                    ],
                },
            },
            {
                type: 'CTA',
                title: 'Explore the Care Network',
                subtitle:
                    'Departments, services, doctors, and support channels are organized for fast scanning.',
                sortOrder: 4,
                content: {
                    actions: [
                        { label: 'See Services', href: '/services', style: 'primary' },
                        { label: 'Meet Doctors', href: '/doctors', style: 'secondary' },
                    ],
                },
            },
        ],
    },
    {
        slug: 'departments',
        title: 'Departments',
        metaTitle: 'MedSphere Departments',
        metaDescription:
            'Browse MedSphere medical departments with public descriptions, specialties, support details, and care highlights.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'Departments Designed Around Patients',
                subtitle:
                    'Clear public department pages help patients understand care areas before contacting the clinic.',
                body:
                    'Each department card includes focus areas, support notes, and a simple path to related services.',
                imageUrl: media.careRoom,
                sortOrder: 0,
                content: {
                    eyebrow: 'Care departments',
                    actions: [{ label: 'View Services', href: '/services', style: 'primary' }],
                },
            },
            {
                type: 'TEXT',
                title: 'Care Departments',
                subtitle:
                    'Use these cards for a polished grid similar to the dashboard-style component system.',
                sortOrder: 1,
                content: {
                    display: 'department-cards',
                    departments: [
                        {
                            title: 'Primary Care',
                            description:
                                'Everyday health needs, prevention, wellness guidance, and care coordination.',
                            icon: 'stethoscope',
                            services: ['General consultation', 'Health screening', 'Care planning'],
                        },
                        {
                            title: 'Cardiology',
                            description:
                                'Heart health assessments, diagnostics, risk guidance, and follow-up support.',
                            icon: 'heart-pulse',
                            services: ['ECG guidance', 'Blood pressure care', 'Risk review'],
                        },
                        {
                            title: 'Dermatology',
                            description:
                                'Skin health reviews, treatment education, and preventive checks.',
                            icon: 'sparkles',
                            services: ['Skin checks', 'Acne care', 'Rash evaluation'],
                        },
                        {
                            title: 'Pediatrics',
                            description:
                                'Child and teen care with supportive education for families.',
                            icon: 'baby',
                            services: ['Well-child guidance', 'Growth checks', 'Family education'],
                        },
                        {
                            title: 'Diagnostics',
                            description:
                                'Lab and imaging information made easier to understand and prepare for.',
                            icon: 'scan-line',
                            services: ['Lab work', 'Imaging prep', 'Screening support'],
                        },
                        {
                            title: 'Behavioral Health',
                            description:
                                'Mental wellness support with respectful, patient-centered guidance.',
                            icon: 'brain',
                            services: ['Counseling info', 'Stress support', 'Care resources'],
                        },
                    ],
                },
            },
            {
                type: 'STATS',
                title: 'Department Coverage',
                subtitle:
                    'Short metrics that give the page substance without needing operational records.',
                sortOrder: 2,
                content: {
                    stats: [
                        { value: '12', label: 'Departments', description: 'Primary and specialty care.' },
                        { value: '6', label: 'Digital channels', description: 'Website, portal, phone, chat, email, and in-clinic.' },
                        { value: '48h', label: 'Typical response window', description: 'For general non-urgent inquiries.' },
                    ],
                },
            },
            {
                type: 'FAQ',
                title: 'Department FAQs',
                subtitle: 'Small accordions for patient-facing department guidance.',
                sortOrder: 3,
                content: {
                    items: [
                        {
                            question: 'How do I know which department is right for me?',
                            answer:
                                'Start with the service descriptions and focus areas. Primary care can also help guide general questions.',
                        },
                        {
                            question: 'Are department pages clinical advice?',
                            answer:
                                'No. Public CMS content is informational and should not replace direct medical advice from a clinician.',
                        },
                    ],
                },
            },
        ],
    },
    {
        slug: 'doctors',
        title: 'Doctors',
        metaTitle: 'MedSphere Doctors',
        metaDescription:
            'Browse public MedSphere doctor profiles with specialties, focus areas, ratings, and patient-friendly details.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'Meet the Care Team',
                subtitle:
                    'Professional doctor cards help patients recognize specialties, care focus, and who may fit their needs.',
                body:
                    'Profiles are public website content only. Sensitive staff operations and clinical workflows belong outside CMS.',
                imageUrl: media.hospitalTeam,
                sortOrder: 0,
                content: {
                    eyebrow: 'Doctor profiles',
                    actions: [{ label: 'Explore Departments', href: '/departments', style: 'primary' }],
                },
            },
            {
                type: 'TEXT',
                title: 'Featured Doctors',
                subtitle:
                    'Profile data structured for cards, filters, carousels, or compact rows.',
                sortOrder: 1,
                content: {
                    display: 'doctor-directory',
                    filters: ['Primary Care', 'Heart Health', 'Skin Health', 'Child and Teen Care'],
                    doctors: doctorProfiles,
                },
            },
            {
                type: 'TEXT',
                title: 'What Profile Cards Can Show',
                subtitle:
                    'A supporting component for the frontend to render as icon rows or a feature list.',
                sortOrder: 2,
                content: {
                    display: 'feature-list',
                    features: [
                        {
                            title: 'Specialty and Focus',
                            description:
                                'Patients can quickly scan each doctor profile by specialty and focus tags.',
                            icon: 'badge-check',
                        },
                        {
                            title: 'Patient Confidence Signals',
                            description:
                                'Ratings, review counts, and short role descriptions make cards feel complete.',
                            icon: 'star',
                        },
                        {
                            title: 'Clear Next Steps',
                            description:
                                'Cards can link to department and service pages without CMS storing operational workflows.',
                            icon: 'arrow-right-circle',
                        },
                    ],
                },
            },
            {
                type: 'CTA',
                title: 'Find the Right Care Area',
                subtitle:
                    'Pair doctor profiles with service and department content for a complete browsing experience.',
                sortOrder: 3,
                content: {
                    actions: [
                        { label: 'Browse Departments', href: '/departments', style: 'primary' },
                        { label: 'View Services', href: '/services', style: 'secondary' },
                    ],
                },
            },
        ],
    },
    {
        slug: 'services',
        title: 'Services',
        metaTitle: 'MedSphere Services',
        metaDescription:
            'Browse MedSphere healthcare services, digital support options, FAQs, and patient-friendly care information.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'Services Made Easy to Compare',
                subtitle:
                    'Patients can scan service cards, learn what each care area supports, and choose the right information path.',
                body:
                    'The CMS provides content for public discovery while service execution remains in the dedicated frontend and domain services.',
                imageUrl: media.diagnostics,
                sortOrder: 0,
                content: {
                    eyebrow: 'Service catalog',
                    actions: [{ label: 'Contact Care Support', href: '/contact', style: 'primary' }],
                },
            },
            {
                type: 'TEXT',
                title: 'Patient Services',
                subtitle:
                    'A polished service card set for the public site, inspired by the clean component layout in the reference.',
                sortOrder: 1,
                content: {
                    display: 'service-cards',
                    services: [
                        ...featuredServices,
                        {
                            title: 'Medical Records Help',
                            description:
                                'Information about records access, summaries, and document support.',
                            icon: 'folder-heart',
                            href: '/contact',
                        },
                        {
                            title: 'Care Navigation',
                            description:
                                'Guidance for finding the right department, service, or support channel.',
                            icon: 'route',
                            href: '/contact',
                        },
                    ],
                },
            },
            {
                type: 'TEXT',
                title: 'Digital Support',
                subtitle:
                    'Use this section for rows or cards that echo the AI and dashboard pieces in the design reference.',
                imageUrl: media.patientCare,
                sortOrder: 2,
                content: {
                    display: 'support-features',
                    features: [
                        {
                            title: 'AI Care Assistant',
                            description:
                                'Helps patients understand services, clinic hours, preparation notes, and common questions.',
                            icon: 'bot',
                        },
                        {
                            title: 'Secure Messaging',
                            description:
                                'A clear entry point for non-urgent questions and support follow-up.',
                            icon: 'messages-square',
                        },
                        {
                            title: 'Records Guidance',
                            description:
                                'Plain-language instructions for documents, summaries, and access requests.',
                            icon: 'file-lock-2',
                        },
                    ],
                },
            },
            {
                type: 'FAQ',
                title: 'Service FAQs',
                subtitle: 'Short public answers for common service discovery questions.',
                sortOrder: 3,
                content: {
                    items: [
                        {
                            question: 'Can I compare services before contacting the clinic?',
                            answer:
                                'Yes. Service cards summarize what each area covers and point to related departments or support channels.',
                        },
                        {
                            question: 'Where do clinical workflows live?',
                            answer:
                                'CMS stores public content only. Clinical workflows and operational records live in separate services.',
                        },
                        {
                            question: 'Can the frontend add interactive service actions?',
                            answer:
                                'Yes. The frontend can add its own actions while using CMS for public copy, cards, and FAQs.',
                        },
                    ],
                },
            },
            {
                type: 'CTA',
                title: 'Need Help Choosing a Service?',
                subtitle:
                    'Contact the care support team for general guidance and patient information.',
                sortOrder: 4,
                content: {
                    actions: [
                        { label: 'Contact Support', href: '/contact', style: 'primary' },
                        { label: 'Meet Doctors', href: '/doctors', style: 'secondary' },
                    ],
                },
            },
        ],
    },
    {
        slug: 'contact',
        title: 'Contact',
        metaTitle: 'Contact MedSphere',
        metaDescription:
            'Contact MedSphere through public support channels, location information, hours, and patient resource links.',
        isPublished: true,
        sections: [
            {
                type: 'HERO',
                title: 'Contact MedSphere',
                subtitle:
                    'Reach the right team for general questions, records help, billing support, and location details.',
                body:
                    'Use these public contact options for general information. For emergencies, contact local emergency services immediately.',
                imageUrl: media.careRoom,
                sortOrder: 0,
                content: {
                    eyebrow: 'We are here to help',
                    actions: [{ label: 'View Services', href: '/services', style: 'primary' }],
                },
            },
            {
                type: 'TEXT',
                title: 'Contact Channels',
                subtitle:
                    'Structured cards for a clean public contact section.',
                sortOrder: 1,
                content: {
                    display: 'contact-cards',
                    channels: [
                        {
                            title: 'Main Desk',
                            description: 'General clinic questions and visitor guidance.',
                            icon: 'phone',
                            value: '+1 (555) 018-2400',
                        },
                        {
                            title: 'Patient Support',
                            description: 'Help finding services, departments, and care resources.',
                            icon: 'life-buoy',
                            value: 'support@medsphere.example',
                        },
                        {
                            title: 'Medical Records',
                            description: 'Records access instructions and document support.',
                            icon: 'folder-lock',
                            value: 'records@medsphere.example',
                        },
                        {
                            title: 'Billing Desk',
                            description: 'General payment, statement, and coverage questions.',
                            icon: 'credit-card',
                            value: 'billing@medsphere.example',
                        },
                    ],
                },
            },
            {
                type: 'TEXT',
                title: 'Visit Information',
                subtitle:
                    'Location and hours content that can be rendered beside a map or facility image.',
                body:
                    'MedSphere Medical Center, 123 Healthcare Blvd, New York, NY. Monday to Friday, 8:00 AM to 6:00 PM. Saturday, 9:00 AM to 1:00 PM.',
                sortOrder: 2,
                content: {
                    display: 'location-panel',
                    address: {
                        name: 'MedSphere Medical Center',
                        street: '123 Healthcare Blvd',
                        city: 'New York',
                        region: 'NY',
                    },
                    hours: [
                        { label: 'Monday to Friday', value: '8:00 AM to 6:00 PM' },
                        { label: 'Saturday', value: '9:00 AM to 1:00 PM' },
                        { label: 'Sunday', value: 'Closed' },
                    ],
                    highlights: ['Accessible entrance', 'Nearby parking', 'Public transit access'],
                },
            },
            {
                type: 'FAQ',
                title: 'Contact FAQs',
                subtitle: 'Useful public answers for contact and support pages.',
                sortOrder: 3,
                content: {
                    items: [
                        {
                            question: 'Can I use this page for urgent medical needs?',
                            answer:
                                'No. For emergencies or urgent medical symptoms, contact local emergency services immediately.',
                        },
                        {
                            question: 'Which team handles records questions?',
                            answer:
                                'Use the Medical Records channel for document access instructions and general records support.',
                        },
                        {
                            question: 'Where should service questions go?',
                            answer:
                                'Patient Support can help with general service discovery and public care resource questions.',
                        },
                    ],
                },
            },
            {
                type: 'CTA',
                title: 'Start with the Right Information',
                subtitle:
                    'Browse services or departments first if you are not sure which support channel fits your question.',
                sortOrder: 4,
                content: {
                    actions: [
                        { label: 'Browse Services', href: '/services', style: 'primary' },
                        { label: 'View Departments', href: '/departments', style: 'secondary' },
                    ],
                },
            },
        ],
    },
];

const defaultBanners: SeedBanner[] = [
    {
        title: 'AI Care Assistant Preview',
        message:
            'Guide patients through services, doctor profiles, records help, and clinic information with a polished AI support entry point.',
        imageUrl: media.heroClinic,
        linkUrl: '/services',
        startDate: null,
        endDate: null,
        isActive: true,
        sortOrder: 0,
    },
    {
        title: 'Secure Records Guidance',
        message:
            'Help patients understand how to access documents, summaries, and public records support without exposing private data.',
        imageUrl: media.patientCare,
        linkUrl: '/contact',
        startDate: null,
        endDate: null,
        isActive: true,
        sortOrder: 1,
    },
    {
        title: 'Meet the MedSphere Care Team',
        message:
            'Highlight trusted clinicians, specialties, ratings, and patient-friendly profile cards on the public website.',
        imageUrl: media.hospitalTeam,
        linkUrl: '/doctors',
        startDate: null,
        endDate: null,
        isActive: true,
        sortOrder: 2,
    },
];

async function ensureCmsSchema() {
    const statements = [
        'CREATE SCHEMA IF NOT EXISTS "public"',
        `DO $$
        BEGIN
            CREATE TYPE "CMSSectionType" AS ENUM ('HERO', 'TEXT', 'CTA', 'FAQ', 'TESTIMONIALS', 'STATS');
        EXCEPTION
            WHEN duplicate_object THEN NULL;
        END
        $$`,
        `CREATE TABLE IF NOT EXISTS "cms_pages" (
            "id" UUID NOT NULL,
            "slug" VARCHAR(120) NOT NULL,
            "title" VARCHAR(160) NOT NULL,
            "meta_title" VARCHAR(160),
            "meta_description" VARCHAR(255),
            "is_published" BOOLEAN NOT NULL DEFAULT false,
            "created_by" UUID,
            "updated_by" UUID,
            "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP(3) NOT NULL,
            CONSTRAINT "cms_pages_pkey" PRIMARY KEY ("id")
        )`,
        `CREATE TABLE IF NOT EXISTS "cms_sections" (
            "id" UUID NOT NULL,
            "page_id" UUID NOT NULL,
            "type" "CMSSectionType" NOT NULL,
            "title" VARCHAR(160),
            "subtitle" VARCHAR(255),
            "body" TEXT,
            "image_url" VARCHAR(500),
            "content" JSONB,
            "sort_order" INTEGER NOT NULL DEFAULT 0,
            "is_visible" BOOLEAN NOT NULL DEFAULT true,
            "created_by" UUID,
            "updated_by" UUID,
            "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP(3) NOT NULL,
            CONSTRAINT "cms_sections_pkey" PRIMARY KEY ("id")
        )`,
        `CREATE TABLE IF NOT EXISTS "cms_banners" (
            "id" UUID NOT NULL,
            "title" VARCHAR(160) NOT NULL,
            "message" TEXT NOT NULL,
            "image_url" VARCHAR(500),
            "link_url" VARCHAR(500),
            "start_date" TIMESTAMP(3),
            "end_date" TIMESTAMP(3),
            "is_active" BOOLEAN NOT NULL DEFAULT true,
            "sort_order" INTEGER NOT NULL DEFAULT 0,
            "created_by" UUID,
            "updated_by" UUID,
            "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP(3) NOT NULL,
            CONSTRAINT "cms_banners_pkey" PRIMARY KEY ("id")
        )`,
        'CREATE UNIQUE INDEX IF NOT EXISTS "cms_pages_slug_key" ON "cms_pages"("slug")',
        'CREATE INDEX IF NOT EXISTS "cms_sections_page_id_sort_order_idx" ON "cms_sections"("page_id", "sort_order")',
        'CREATE INDEX IF NOT EXISTS "cms_banners_is_active_start_date_end_date_idx" ON "cms_banners"("is_active", "start_date", "end_date")',
        `DO $$
        BEGIN
            ALTER TABLE "cms_sections"
                ADD CONSTRAINT "cms_sections_page_id_fkey"
                FOREIGN KEY ("page_id")
                REFERENCES "cms_pages"("id")
                ON DELETE CASCADE
                ON UPDATE CASCADE;
        EXCEPTION
            WHEN duplicate_object THEN NULL;
        END
        $$`,
    ];

    for (const statement of statements) {
        await prisma.$executeRawUnsafe(statement);
    }
}

function sectionData(pageId: string, section: SeedSection) {
    return {
        pageId,
        type: section.type,
        title: section.title ?? null,
        subtitle: section.subtitle ?? null,
        body: section.body ?? null,
        imageUrl: section.imageUrl ?? null,
        content:
            section.content === undefined
                ? Prisma.JsonNull
                : section.content,
        sortOrder: section.sortOrder,
        isVisible: section.isVisible ?? true,
    };
}

async function seedPages() {
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
            },
        });

        await prisma.$transaction([
            prisma.cmsSection.deleteMany({
                where: { pageId: seededPage.id },
            }),
            prisma.cmsSection.createMany({
                data: page.sections.map((section) =>
                    sectionData(seededPage.id, section),
                ),
            }),
        ]);
    }
}

async function seedBanners() {
    await prisma.$transaction([
        prisma.cmsBanner.deleteMany({
            where: {
                title: {
                    in: defaultBanners.map((banner) => banner.title),
                },
            },
        }),
        prisma.cmsBanner.createMany({
            data: defaultBanners,
        }),
    ]);
}

async function main() {
    await ensureCmsSchema();
    await seedPages();
    await seedBanners();

    console.log(
        `Seeded ${defaultPages.length} CMS pages and ${defaultBanners.length} banners.`,
    );
}

main()
    .finally(async () => {
        await prisma.$disconnect();
    });

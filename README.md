# MedSphere CMS Service

CMS microservice for the Lab2 MedSphere public website. It owns editable public pages, page sections, banners, public read-only CMS endpoints, and Socket.IO `cms:content-updated` live preview events.

It does not own departments, staff, patients, appointments, billing, reports, auth users, notifications, or AI workflows.

## Port

- Local and Docker API: `http://localhost:3009`
- Container port: `3009`
- Health: `GET /health`
- Admin API base path: `/api/cms`
- Public API base path: `/api/public/cms`
- Swagger UI: `http://localhost:3009/api/docs`
- OpenAPI JSON: `http://localhost:3009/api/docs.json`
- Socket.IO origin: `http://localhost:3009`

## Data Store

- PostgreSQL via Prisma.

Docker Compose starts a dedicated Postgres container and runs Prisma migrations before the service starts in development mode.

Owned tables:

- `cms_pages`
- `cms_sections`
- `cms_banners`

## Environment

Copy `.env.example` to `.env`.

Service keys:

- `PORT`
- `NODE_ENV`
- `CORS_ORIGIN`
- `DATABASE_URL`

Docker/Postgres helper key:

- `POSTGRES_PORT`

`CORS_ORIGIN` accepts a comma-separated list. Localhost origins are allowed in non-production for frontend development.

## Start Locally

```bash
npm install
cp .env.example .env
docker compose up -d postgres
npm run prisma:generate
npm run prisma:migrate
npm run db:seed
npm run dev
```

Stop the local Postgres container:

```bash
docker compose down
```

## Run With Docker

```bash
cp .env.example .env
npm run docker:up
npm run docker:logs
npm run docker:ps
```

Stop the stack:

```bash
npm run docker:down
```

## Build And Tests

```bash
npm run build
npm run test
```

Additional commands:

```bash
npm run test:watch
npm run docker:logs
npm run docker:ps
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
npm run db:seed
```

## Main Routes

Admin CMS:

- `GET /api/cms/pages`
- `POST /api/cms/pages`
- `GET /api/cms/pages/:id`
- `PUT /api/cms/pages/:id`
- `DELETE /api/cms/pages/:id`
- `GET /api/cms/pages/:pageId/sections`
- `POST /api/cms/pages/:pageId/sections`
- `PATCH /api/cms/pages/:pageId/sections/reorder`
- `GET /api/cms/pages/:pageId/sections/:id`
- `PATCH /api/cms/pages/:pageId/sections/:id/visibility`
- `PUT /api/cms/pages/:pageId/sections/:id`
- `DELETE /api/cms/pages/:pageId/sections/:id`
- `GET /api/cms/sections/:id`
- `PUT /api/cms/sections/:id`
- `DELETE /api/cms/sections/:id`
- `GET /api/cms/banners`
- `GET /api/cms/banners/:id`
- `POST /api/cms/banners`
- `PUT /api/cms/banners/:id`
- `DELETE /api/cms/banners/:id`

Public CMS:

- `GET /api/public/cms/pages/:slug`
- `GET /api/public/cms/banners`

Socket.IO:

- Clients join the `cms-preview` room.
- Server emits `cms:content-updated` after content changes.

## Access

Mutating CMS routes require either:

- `x-user-role: super_admin`
- `x-user-permissions: cms:edit`

Public routes are read-only.

## Database Normalization

The Prisma schema is normalized to 3NF for CMS-owned relational data:

- `CmsPage` owns page metadata and slug uniqueness.
- `CmsSection` belongs to one page and stores ordered page sections separately from page metadata.
- `CmsBanner` is independent because banners can be shown across public pages.

`CmsSection.content` is JSON by design for flexible section-specific payloads such as stats, FAQs, testimonials, and dynamic source settings. Reusable healthcare domain data, such as doctors and departments, remains owned by Core and is referenced from CMS content only as display configuration.

## Notes

- Deleting pages cascades to page sections.
- Live preview updates are best-effort realtime events; REST reads remain the source of truth.

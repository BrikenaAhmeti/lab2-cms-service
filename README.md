# MedSphere CMS Service

CMS microservice for the Lab2 MedSphere public website. It owns editable public pages, page sections, banners, public read-only CMS endpoints, and Socket.IO `cms:content-updated` live preview events.

It does not own departments, staff, patients, appointments, billing, reports, auth users, or AI workflows.

## Port

- Local and Docker API: `http://localhost:3009`
- Container port: `3009`
- Health: `GET /health`
- Admin API base path: `/api/cms`
- Public API base path: `/api/public/cms`

## Data Stores

- PostgreSQL via Prisma.
- Docker Compose starts a dedicated `postgres` container.

Owned tables:

- `cms_pages`
- `cms_sections`
- `cms_banners`

## Environment Keys

Copy `.env.example` to `.env`.

Service keys:

- `PORT`
- `NODE_ENV`
- `CORS_ORIGIN`
- `DATABASE_URL`

Docker/Postgres helper keys:

- `POSTGRES_PORT`

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

Docker starts Postgres, applies Prisma migrations, generates the Prisma client, and runs the CMS Service in development mode.

## Build And Tests

```bash
npm run build
npm run test
```

Additional commands:

```bash
npm run test:watch
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
npm run db:seed
```

## Swagger

- Swagger UI: `http://localhost:3009/api/docs`
- OpenAPI JSON: `http://localhost:3009/api/docs.json`

Swagger covers health, admin CMS pages, CMS sections, CMS banners, and public CMS reads.

## Main Routes

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
- `GET /api/public/cms/pages/:slug`
- `GET /api/public/cms/banners`

## Notes

- Mutating CMS routes require `x-user-role: super_admin` or `x-user-permissions: cms:edit`.
- `CORS_ORIGIN` accepts a comma-separated list. Localhost origins are allowed in non-production for frontend development.

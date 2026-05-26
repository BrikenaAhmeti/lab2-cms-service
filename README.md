# MedSphere CMS Service

## Overview

This repository is only the **MedSphere CMS Service** setup from MS-37. It owns the public website content tables and API surface:

- CMS pages
- CMS page sections
- CMS banners
- Public read-only CMS endpoints
- Socket.IO `cms:content-updated` events for live preview refreshes

Core service domains such as departments, staff, patients, appointments, billing, reports, and auth user storage do not belong in this service.

## Tech Stack

- Node.js + Express + TypeScript
- Prisma + PostgreSQL
- CQRS-style command/query handlers
- Zod request validation
- Socket.IO live preview events
- Jest + Supertest

## Data Model

The Prisma schema creates only CMS-owned tables:

- `cms_pages`
- `cms_sections`
- `cms_banners`

`CMSSectionType` supports:

- `HERO`
- `TEXT`
- `CTA`
- `FAQ`
- `TESTIMONIALS`
- `STATS`

## API

Admin CMS endpoints live under `/api/cms`.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/cms/pages` | List pages with sections |
| `POST` | `/api/cms/pages` | Create page |
| `GET` | `/api/cms/pages/:id` | Get page by ID |
| `PUT` | `/api/cms/pages/:id` | Update page |
| `DELETE` | `/api/cms/pages/:id` | Delete page |
| `GET` | `/api/cms/pages/:pageId/sections` | List sections for a page |
| `POST` | `/api/cms/pages/:pageId/sections` | Create section |
| `PATCH` | `/api/cms/pages/:pageId/sections/reorder` | Reorder sections |
| `GET` | `/api/cms/pages/:pageId/sections/:id` | Get section by ID |
| `PATCH` | `/api/cms/pages/:pageId/sections/:id/visibility` | Toggle section visibility |
| `PUT` | `/api/cms/pages/:pageId/sections/:id` | Update section |
| `DELETE` | `/api/cms/pages/:pageId/sections/:id` | Delete section |
| `GET` | `/api/cms/banners` | List banners |
| `GET` | `/api/cms/banners/:id` | Get banner by ID |
| `POST` | `/api/cms/banners` | Create banner |
| `PUT` | `/api/cms/banners/:id` | Update banner |
| `DELETE` | `/api/cms/banners/:id` | Delete banner |

Public website endpoints live under `/api/public/cms`.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/public/cms/pages/:slug` | Published page with visible sections |
| `GET` | `/api/public/cms/banners` | Active banners for current datetime |

Mutating CMS endpoints expect either:

- `x-user-role: super_admin`
- `x-user-permissions: cms:edit`

This keeps authorization setup local without pulling Auth Service tables into the CMS database.

## Local Setup

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run db:seed
npm run dev
```

Default URL:

```text
http://localhost:3009
```

Health check:

```text
GET /health
```

## Environment

```env
PORT=3009
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/medsphere_cms?schema=public"
```

The CMS service must use its own PostgreSQL database URL, separate from Auth, Core, Notification, and AI services.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Run service with `tsx` and `nodemon` |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled service |
| `npm run test` | Run Jest tests |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run Prisma development migration |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run db:seed` | Seed default public pages |

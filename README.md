# kashpages-golive

Production-grade SaaS foundation for **Kashpages** — a schema-driven, secure business go-live platform for Kashmir.

## Stack
- Next.js 14 (App Router), React 18, TypeScript, Tailwind, Framer Motion
- Firebase Auth / Firestore / Realtime Database / Storage / Functions
- Firebase Data Connect (PostgreSQL)
- Cashfree + Razorpay (server-mediated)

## Product shape
### Public
- `/`, `/templates`, `/pricing`, `/about`, `/privacy`, `/terms`, `/login`, `/signup`
- Single-page published business pages via `/[username]/pages/[slug]`

### User
- `/dashboard`, `/dashboard/pages`, `/dashboard/templates`, `/dashboard/settings`
- `/builder/[pageId]`

### Admin
- `/admin/users`, `/admin/pages`, `/admin/templates`, `/admin/analytics`, `/admin/settings`

## Security-first decisions
- Strict schema rendering (`src/types/platform.ts`)
- No arbitrary HTML blocks
- URL and text sanitization helpers (`src/lib/security/sanitize.ts`)
- Basic API rate limiting (`src/lib/security/rate-limit.ts`)
- Privileged actions reserved for server routes/functions

## Template system
- 50 templates distributed by category requirements:
  - Agency 7
  - eCommerce 8
  - Landing 7
  - Non-Profit 6
  - Portfolio 7
  - SaaS 7
  - Services 8

Generated in `src/lib/templates/catalog.ts` with plan gating (`free`, `starter`, `business`).

## Domain system (Business plan)
- Verification flow endpoint scaffold: `POST /api/domains/verify`
- State model included: `pending_dns`, `verifying`, `verified`, `ssl_pending`, `live`, `failed`
- Middleware host passthrough scaffold: `src/middleware.ts`

## Quickstart
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Quality tooling
- ESLint config: `.eslintrc.cjs`
- Prettier: `.prettierrc`
- CI: `.github/workflows/ci.yml`

## Deployment
See [`docs/SETUP_AND_DEPLOY.md`](docs/SETUP_AND_DEPLOY.md).

# Project status

## Current implementation

Baseline inspected: `dev` at
`b00c5997fab34e03f46ca2d5c43afa995fe2248f` (2026-11-05).
This is an inspection reference, not a permanent version pin; maintain this
document as the project evolves.

The repository is in its initial development phase:

- `apps/web` and `apps/admin` contain Next.js App Router placeholder pages.
- `apps/api` contains the initial NestJS application and Vitest unit/E2E tests.
- Shared ESLint and TypeScript packages, pnpm catalogs, Prettier, VS Code settings,
  Turborepo, Commitlint/Husky, and GitHub Actions CI are configured.

### Integrated stack

Manifests, catalogs, and the committed lockfile are authoritative for exact
resolved versions. These are the current declared versions/ranges, not a claim
that dependencies were installed during the documentation inspection.

| Tool                                | Declaration                    | Source                |
| ----------------------------------- | ------------------------------ | --------------------- |
| Node.js                             | `>=24`; CI uses `node@24`      | Root manifest; CI     |
| pnpm                                | `12.16.1`                      | Root `packageManager` |
| Turborepo                           | `^2.11.10`                     | Root manifest         |
| Next.js / React / React DOM         | `16.4.4` / `19.3.0` / `19.3.0` | Default catalog       |
| NestJS common/core/platform-express | `^12.0.1`                      | API manifest          |
| TypeScript, web/admin               | `^5`                           | `typescript5` catalog |
| TypeScript, API                     | `^6.0.2`                       | `typescript6` catalog |
| Tailwind CSS                        | `^4`                           | Default catalog       |
| ESLint                              | `^10.14.0`                     | Default catalog       |
| Prettier                            | `^3.9.10`                      | Root manifest         |
| Vitest                              | `^4.1.2`                       | API manifest          |
| Commitlint / Husky                  | `^21.2.4` / `^9.1.7`           | Root manifest         |

## Requirements that are not implemented capabilities

The [standards](../README.md) apply to new and changed work. The placeholder
applications do not yet provide the specified locale negotiation/switching,
persisted light/dark/system theme selection, or international SEO behavior.
No WCAG conformance or Lighthouse/Core Web Vitals result is claimed.

There are no frontend automated tests, database or Prisma schema, authentication
or authorization, completed design system, shared business-domain packages, real
estate listings/search, property management workflows, or ImmoPass implementation.

Remote Turborepo caching and production deployment are not configured.

## Future direction

The intended [domains](../domains/README.md) are listings, property management,
and ImmoPass. PostgreSQL, Prisma, and shadcn/ui are planned but not integrated.
Authentication, frontend testing, and production infrastructure require scoped,
approved implementation work.

Native Android and iOS applications are long-term possibilities, potentially
using Kotlin and Swift. Neither implementation nor language selection is final.
Preserve clear backend responsibilities and contracts without creating mobile
packages, infrastructure, or speculative abstractions now.

Do not introduce planned capabilities simply because they appear here. Major
product and architecture decisions require owner validation.

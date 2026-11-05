# Monorepo architecture

## Responsibilities

| Location                     | Responsibility                                                   |
| ---------------------------- | ---------------------------------------------------------------- |
| `apps/web`                   | Public Next.js website, future listings and search               |
| `apps/admin`                 | Next.js management application and future professional workflows |
| `apps/api`                   | NestJS backend, domain logic, and future data access             |
| `packages/eslint-config`     | Shared ESLint configurations                                     |
| `packages/typescript-config` | Shared TypeScript configurations                                 |

Business responsibilities describe the intended boundaries, not implemented
features. See [status](../project/status.md).

Do not introduce direct dependencies between applications. Keep application code
and framework-specific configuration in its application. Reuse components,
functions, types, and services through shared packages when there is genuine
recurring value; avoid duplication and premature abstractions.

All internal workspace packages use `@repo/*` with `workspace:*` dependencies.
Do not rename them to `@immoapp/*` or another branded namespace without explicit
instructions. Existing application package names remain `web`, `admin`, and
`api`; do not change the pnpm filter commands.

## Configuration boundaries

Use `@repo/typescript-config/base.json`, `nextjs.json`, and `nestjs.json`.
Preserve framework-specific compiler options:

- Next.js uses bundler module resolution.
- NestJS uses NodeNext and ESM with decorator support. Relative runtime imports
  in API TypeScript source use the existing `.js` extension convention.

Use the shared Next.js and NestJS ESLint configurations in
`@repo/eslint-config`; common TypeScript rules stay centralized.
Application-specific exceptions require justification.

Keep `next.config.ts` in each frontend, and `nest-cli.json`,
`tsconfig.build.json`, `vitest.config.ts`, and `vitest.config.e2e.ts` in the
API. Do not add configuration packages without demonstrated benefit.

## Module organization

Favor modules with one clear responsibility. Split excessively long files or
files accumulating unrelated responsibilities; use cohesion rather than an
arbitrary line limit.

Organize Next.js UI components consistently in `components` directories close to
their owning feature, or at application level for components reused within that
application. Retain App Router conventions for route files. Extract a shared UI
package only when cross-application reuse justifies it.

Follow official framework conventions and the
[engineering rules](../standards/engineering.md). Changes to architectural
boundaries or major patterns require owner validation.

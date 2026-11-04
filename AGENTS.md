# ImmoApp — Agent Instructions

## Project Overview

ImmoApp is an all-in-one real estate SaaS platform intended for individuals and real estate professionals.

The initial target market is Belgium, with potential international expansion in the future.

The platform is intended to cover three main domains:

- **Real Estate Listings:** Property publication, browsing, and search.
- **Property Management:** Properties, rentals, leases, rent indexation, and related documents.
- **ImmoPass:** Property lifecycle documentation, including maintenance, renovations, repairs, and significant events.

The project is currently in its initial development phase. Its applications and development tooling have been initialized, but the main business features have not yet been implemented.

**ImmoApp is a temporary project name.** Internal workspace packages must use the generic `@repo/*` namespace, independently of future product branding.

## Technology Stack

### Currently Integrated

- **Package manager:** pnpm 12
- **Monorepo orchestration:** Turborepo 2
- **Frontend:** Next.js 16, React 19
- **Backend:** NestJS 12
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 10
- **Formatting:** Prettier 3
- **API testing:** Vitest 4
- **Commit validation:** Commitlint and Husky
- **Continuous integration:** GitHub Actions

TypeScript 5 is currently used by the Next.js applications, while TypeScript 6 is used by the NestJS API.

### Planned, Not Yet Integrated

- shadcn/ui
- PostgreSQL
- Prisma
- Authentication and authorization
- Production deployment infrastructure

Do not assume that planned technologies, features, or infrastructure are already available.

Do not introduce them unless they are relevant to the requested task.

## Repository Organization

The monorepo follows this structure:

```text
apps/
  web/                 Public Next.js application
  admin/               Management Next.js application
  api/                 NestJS backend

packages/
  eslint-config/       Shared ESLint configurations
  typescript-config/   Shared TypeScript configurations
```

### Application Responsibilities

- `apps/web`: Public-facing website, property listings, and search.
- `apps/admin`: Property management and professional workflows.
- `apps/api`: Backend API, domain logic, and future data access.

Keep application-specific code and configuration within the corresponding application.

Do not introduce direct dependencies between applications.

Use shared workspace packages when code genuinely needs to be reused.

### Shared Package Naming

All internal workspace packages must use the `@repo/*` namespace.

Examples:

- `@repo/eslint-config`
- `@repo/typescript-config`
- `@repo/ui` (future, if needed)

Do not rename internal packages to `@immoapp/*` or another product-specific namespace without explicit instructions.

Use the `workspace:*` protocol for internal workspace dependencies.

## Development Principles

- Prioritize correctness, security, maintainability, and long-term sustainability.
- Prefer simple, explicit, and readable implementations.
- Keep changes incremental and focused on the requested task.
- Follow the existing architecture before introducing new patterns.
- Avoid unnecessary dependencies, abstractions, and configuration files.
- Avoid duplication when a shared abstraction has a clear and recurring purpose.
- Do not introduce premature generalization or optimization.
- Preserve separation of concerns between frontend, backend, and shared packages.
- Do not introduce a new framework, library, or architectural pattern without justification.
- Do not refactor unrelated code as part of a focused task.

Prefer solutions that are understandable and maintainable over solutions that are merely concise.

## TypeScript Conventions

- Use TypeScript strict mode.
- Avoid explicit `any` types.
- Avoid unsafe type assertions and unnecessary non-null assertions.
- Prefer well-defined types and explicit contracts.
- Handle nullable and optional values deliberately.
- Do not disable TypeScript compiler checks to suppress errors.
- Use the shared TypeScript configurations provided by `@repo/typescript-config`.
- Preserve framework-specific compiler options.

The shared TypeScript configuration files are:

- `@repo/typescript-config/base.json`
- `@repo/typescript-config/nextjs.json`
- `@repo/typescript-config/nestjs.json`

The Next.js applications use bundler module resolution.

The NestJS API uses NodeNext module resolution and ESM. Follow the existing `.js` extension convention for relative runtime imports in the API's TypeScript source files.

Do not change TypeScript major versions without verifying compatibility with the affected frameworks and tooling.

## ESLint and Formatting

### ESLint

Shared ESLint configurations are maintained in `@repo/eslint-config`.

- `web` and `admin` use the Next.js configuration.
- `api` uses the NestJS configuration.
- Common TypeScript linting rules are maintained centrally.

The shared configurations integrate `eslint-config-prettier`.

Do not duplicate shared linting rules inside application-level configuration files unless an application-specific exception is justified.

Do not disable linting rules solely to make checks pass.

### Prettier

Prettier is configured at the repository root using `.prettierrc`.

Project formatting conventions include:

- Semicolons.
- Double quotes.
- Trailing commas where supported.
- Two-space indentation.
- A print width of 80 characters.
- LF line endings.

Use Prettier for formatting and ESLint for code-quality checks.

Avoid introducing conflicting formatting rules into ESLint.

Do not manually edit the generated `pnpm-lock.yaml` to change dependency resolutions.

## Dependency Management

Use pnpm for all package management operations.

Do not use npm, Yarn, or another package manager for dependency installation or lockfile management.

Dependencies are managed through `pnpm-workspace.yaml`.

### pnpm Catalogs

Use the default catalog for dependencies already centralized there, including:

- Next.js
- React
- React DOM
- Tailwind CSS
- ESLint
- Shared React type definitions

Use the existing named catalogs for TypeScript:

- `catalog:typescript5`
- `catalog:typescript6`

Use `workspace:*` for internal `@repo/*` packages.

Before changing a dependency version:

1. Check whether the dependency is already managed by a catalog.
2. Check compatibility with all affected applications and packages.
3. Update the relevant catalog when appropriate.
4. Update the lockfile using pnpm.
5. Run relevant validation commands.

Do not add a dependency to a catalog merely because it exists. Catalogs should reflect a useful shared version policy.

Do not upgrade unrelated dependencies during a focused change.

## Framework-Specific Configuration

Keep framework-specific configuration files within their applications unless a shared configuration provides a clear benefit.

Examples include:

- `apps/web/next.config.ts`
- `apps/admin/next.config.ts`
- `apps/api/nest-cli.json`
- `apps/api/tsconfig.build.json`
- `apps/api/vitest.config.ts`
- `apps/api/vitest.config.e2e.ts`

Do not create additional configuration packages without a demonstrated need.

Use the existing shared ESLint and TypeScript packages instead of duplicating their configurations.

## Testing and Quality Assurance

Write readable, maintainable, and appropriately tested code.

Add or update automated tests when implementing or modifying behavior.

The API currently uses Vitest for unit and end-to-end tests.

Frontend testing is not configured yet.

### Root Commands

Run commands from the repository root unless a task requires otherwise.

```bash
pnpm lint
pnpm check-types
pnpm test
pnpm build
pnpm format:check
```

Use `pnpm format` to apply Prettier formatting when needed.

### API-Specific Testing

```bash
pnpm --filter api test
pnpm --filter api test:watch
pnpm --filter api test:cov
pnpm --filter api test:e2e
```

The root `pnpm test` command currently runs the API unit-test task. It does not automatically execute the API end-to-end test configuration.

### Validation Rules

- Run checks relevant to the files and workspaces changed.
- Prefer targeted checks during development.
- Run broader checks when changes affect shared configurations or multiple applications.
- Do not ignore or bypass failing tests, linting errors, or TypeScript errors.
- Investigate failures before proposing workarounds.
- Report which checks were executed and their results.
- Explicitly state when a check could not be executed.

Do not claim that code builds or tests pass unless those checks were actually executed successfully.

## Turborepo Conventions

Turborepo configuration is maintained in `turbo.json`.

- Use `pnpm dev` for the development tasks.
- Use `pnpm build` for workspace builds.
- Use `pnpm lint` for linting.
- Use `pnpm check-types` for TypeScript checks.
- Use `pnpm test` for available unit tests.

Respect the existing task dependency relationships and caching rules.

Development tasks are persistent and are not cached.

Build tasks may cache their declared outputs, including `.next` and `dist` artifacts.

Do not disable task caching without justification.

Do not add unnecessary build scripts to configuration-only workspace packages.

When introducing new compiled shared packages:

- Define the necessary package scripts.
- Declare appropriate build outputs.
- Ensure workspace dependencies are correct.
- Verify task ordering and cache behavior.

Remote Turborepo caching is not currently configured.

## Conventional Commits

**All commit messages must follow the Conventional Commits format with a mandatory scope.**

Required format:

```text
type(scope): description
```

Examples:

```text
feat(web): add property search filters
feat(admin): implement property dashboard
feat(api): add lease endpoints
fix(api): handle invalid lease dates
refactor(api): extract validation logic
test(api): add lease service unit tests
docs(repo): update project documentation
chore(repo): update development dependencies
ci(github): configure quality checks
```

### Commit Rules

- Always provide a valid Conventional Commit type.
- Always include a scope.
- Write scopes in lowercase kebab-case.
- Always write commit messages in English.
- Use lowercase descriptions without trailing periods.
- Keep the commit header within 100 characters.
- Use concise, descriptive messages.
- Describe the actual change rather than the development activity.

Use scopes that identify the affected application, package, or repository concern.

Common scopes include:

- `web`
- `admin`
- `api`
- `repo`
- `eslint-config`
- `typescript-config`
- `github`

These are conventions, not a hardcoded allowlist. Additional scopes may be used when justified.

### Commit Validation

Commitlint configuration is maintained in `.commitlintrc`.

Husky invokes Commitlint through `.husky/commit-msg`.

The root `package.json` provides the Husky `prepare` script.

Commitlint validates the commit structure, but it cannot reliably verify that the description is written in English. Agents must enforce that language convention when composing commit messages.

Do not bypass the commit message hook.

Do not create commits without an explicit request from the user.

When suggesting a commit message, always use the required `type(scope): description` format.

## GitHub Actions and Continuous Integration

Continuous integration is configured in:

```text
.github/workflows/ci.yml
```

The workflow is named `CI`.

It runs on pushes and pull requests targeting `dev` and `main`.

Its `Quality checks` job performs:

- Commit message validation.
- Pull request title validation for pull request events.
- Prettier formatting checks.
- ESLint checks.
- TypeScript type checks.
- Unit tests.
- API end-to-end tests.
- Application builds.

### CI Conventions

- Keep the CI workflow aligned with the repository's actual scripts.
- Prefer reusing root pnpm commands instead of duplicating tooling logic.
- Preserve the declared Node.js and pnpm requirements.
- Install dependencies using the committed lockfile.
- Keep GitHub Actions permissions minimal.
- Do not add secrets or external services unless required.
- Do not bypass failing CI checks.
- Do not claim CI passed without checking its actual result.

When adding tests, packages, or build requirements, update the CI workflow if necessary.

Remote Turborepo caching is not currently configured.

## Development Environment

Shared Visual Studio Code configuration is maintained in `.vscode/`.

The repository provides:

- Formatting on save with Prettier.
- ESLint integration.
- ESLint working directories for `web`, `admin`, and `api`.
- Recommended ESLint, Prettier, and Tailwind CSS extensions.

Respect the existing editor configuration when modifying development tooling.

Do not introduce personal editor preferences into the shared repository configuration without a project-level reason.

## Documentation and Language

Write the following in English:

- Source code identifiers.
- Code comments.
- Commit messages.
- Technical documentation.
- README and AGENTS files.
- Configuration documentation.

Keep documentation accurate and consistent with the actual repository.

Distinguish clearly between implemented features and planned functionality.

Update relevant documentation when introducing meaningful architectural changes, new workspace packages, or new development commands.

Do not add speculative implementation details to project documentation.

## Git and Change Management

The repository uses `dev` as its default development branch and maintains a separate `main` branch.

- Respect the current branch and existing Git workflow.
- Do not commit, push, merge, rebase, or deploy changes unless explicitly requested.
- Do not modify `main` without explicit instructions.
- Do not overwrite or discard unrelated work.
- Avoid unrelated formatting or refactoring changes.
- Review the affected files before proposing a commit.
- Always use the project's Conventional Commits format.

When branch protection requires pull requests, create a short-lived branch and propose changes through a pull request targeting the appropriate branch.

Do not assume branch protection rules are enabled solely because CI is configured.

A successful GitHub Actions workflow does not, by itself, prevent direct pushes or enforce pull request requirements.

Do not bypass configured branch protection rules or required status checks.

Do not assume that a commit, push, merge, or deployment has occurred unless the corresponding operation was actually performed.

## Agent Workflow

When working on the repository:

1. **Inspect first.** Read relevant files, scripts, dependencies, and existing conventions.
2. **Understand scope.** Identify the smallest coherent change that satisfies the request.
3. **Reuse existing architecture.** Prefer established packages and configurations.
4. **Implement incrementally.** Avoid unrelated changes and premature abstractions.
5. **Validate locally.** Run relevant checks available in the environment.
6. **Review the changes.** Examine modifications for correctness and unintended effects.
7. **Check CI when applicable.** Verify GitHub Actions results after pushing or opening a pull request.
8. **Report.** Summarize changes, validation results, and any remaining limitations.

Do not perform substantial refactoring without explicit approval.

Do not introduce external services, new infrastructure, or major dependencies without justification.

When a user asks for a proposal or review rather than direct implementation, provide the recommended changes without modifying the repository.

## Current Project Boundaries

The repository currently contains initialized applications, shared tooling packages, initial API tests, Conventional Commits validation, and GitHub Actions CI.

Do not assume the existence of:

- A database or Prisma schema.
- Authentication or authorization.
- A completed design system.
- Shared business-domain packages.
- Implemented property management workflows.
- Implemented real estate listings or search.
- Implemented ImmoPass functionality.
- Frontend automated tests.
- Remote Turborepo caching.
- Production deployment.

Introduce these capabilities progressively and only as part of an explicitly defined development task.

The long-term objective is a professional, maintainable real estate platform, not a collection of loosely connected features or unnecessary abstractions.

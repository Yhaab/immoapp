# Development setup and tooling

## Setup

Requires Git, Node.js `>=24`, and pnpm `12.16.1`, as declared in the root
`package.json`. CI uses Node.js 24. Use pnpm for package management and lockfile
operations; do not use npm, Yarn, or another installer.

From the repository root:

```bash
pnpm install
pnpm dev
```

Installation links workspace packages and invokes the Husky `prepare` script.
For reproducible CI installation, use the committed lockfile.

| Application | URL                   | Individual development command |
| ----------- | --------------------- | ------------------------------ |
| Web         | http://localhost:3000 | `pnpm --filter web dev`        |
| Admin       | http://localhost:3001 | `pnpm --filter admin dev`      |
| API         | http://localhost:3002 | `pnpm --filter api dev`        |

The API port defaults to 3002 and can be overridden by `PORT`.

## Root commands

Run from the repository root unless the task requires otherwise.

| Command             | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Start workspace development tasks          |
| `pnpm build`        | Build workspaces with build scripts        |
| `pnpm lint`         | Run ESLint across applicable workspaces    |
| `pnpm check-types`  | Run TypeScript checks                      |
| `pnpm test`         | Run available unit tests through Turborepo |
| `pnpm format`       | Apply Prettier formatting                  |
| `pnpm format:check` | Check formatting without changing files    |

API test commands and CI coverage are in [validation](validation.md).
Review the changed files after formatting; avoid unrelated formatting changes.

## Dependency catalogs

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

Catalogs should reflect a useful shared version policy; do not add a dependency
merely because it exists. Follow the dependency-change checklist in
[engineering](../standards/engineering.md#frameworks-and-dependencies).

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

The root `.prettierignore` excludes `pnpm-lock.yaml`.

## Turborepo Conventions

Turborepo configuration is maintained in `turbo.json`.

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

See [project status](../project/status.md) for remote caching availability.

To inspect the build task graph without executing it:

```bash
pnpm exec turbo run build --dry=json
```

When investigating caching, compare two successful `pnpm build` runs without
relevant file changes. Configuration-only packages expose files directly and do
not currently need builds.

## Development Environment

Shared Visual Studio Code configuration is maintained in `.vscode/`.

The repository provides:

- Formatting on save with Prettier.
- ESLint integration.
- ESLint working directories for `web`, `admin`, and `api`.
- Recommended ESLint, Prettier, and Tailwind CSS extensions.

Respect the existing editor configuration when modifying development tooling.

Do not introduce personal editor preferences into the shared repository configuration without a project-level reason.

Do not bypass `.husky/commit-msg`; it invokes
`pnpm exec commitlint --edit "$1"`. See [commit conventions](workflow.md#commit-conventions).

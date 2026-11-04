# ImmoApp

ImmoApp is an all-in-one real estate SaaS platform for individuals and real estate professionals.

The platform aims to centralize property-related activities across three main areas:

- **Real Estate Listings:** Publish, search, and browse property listings.
- **Property Management:** Manage properties, rentals, leases, rent indexation, and associated documents.
- **ImmoPass:** Maintain a structured property lifecycle history, including maintenance, renovations, repairs, works, and other significant events.

The initial target market is **Belgium**, with potential international expansion in the future.

> ImmoApp is a working project name and may change. Internal workspace packages use the generic `@repo/*` namespace to remain independent of the product's commercial identity.

## Project Status

ImmoApp is currently in its **initial development and architecture phase**.

The repository includes:

- Two Next.js applications with placeholder pages.
- A NestJS API with an initial application structure.
- Initial API unit and end-to-end tests.
- Shared ESLint and TypeScript configuration packages.
- Centralized dependency versions through pnpm Catalogs.
- Shared formatting conventions with Prettier.
- Shared Visual Studio Code settings and extension recommendations.
- Monorepo task orchestration and caching with Turborepo.
- Conventional Commits validation with Commitlint and Husky.
- GitHub Actions continuous integration.

Core business features, authentication, database integration, and production deployment are not implemented yet.

Development is incremental, with an emphasis on correctness, maintainability, security, and long-term sustainability.

## Technology Stack

ImmoApp uses a TypeScript monorepo organized with pnpm Workspaces and Turborepo.

| Category                | Technology                       |
| ----------------------- | -------------------------------- |
| Package manager         | pnpm 12                          |
| Monorepo                | Turborepo 2                      |
| Frontend                | Next.js 16 and React 19          |
| Backend                 | NestJS 12                        |
| Language                | TypeScript (strict mode)         |
| Styling                 | Tailwind CSS 4                   |
| Linting                 | ESLint 10                        |
| Formatting              | Prettier 3                       |
| API testing             | Vitest 4                         |
| Commit conventions      | Commitlint and Husky             |
| Continuous integration  | GitHub Actions                   |
| Development environment | Visual Studio Code configuration |

TypeScript versions currently differ between applications:

- **Web and Admin:** TypeScript 5.
- **API:** TypeScript 6.

These versions are managed through named pnpm Catalogs.

### Planned Technologies

The following technologies are planned but are **not yet integrated**:

- **UI components:** shadcn/ui
- **Database:** PostgreSQL
- **ORM:** Prisma

Additional infrastructure, testing, and deployment tooling will be introduced as needed.

## Repository Structure

```text
immoapp/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── commit-msg
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── apps/
│   ├── web/
│   │   ├── src/app/
│   │   ├── eslint.config.mjs
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── admin/
│   │   ├── src/app/
│   │   ├── eslint.config.mjs
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── api/
│       ├── src/
│       ├── test/
│       ├── eslint.config.mjs
│       ├── nest-cli.json
│       ├── package.json
│       ├── tsconfig.json
│       ├── tsconfig.build.json
│       ├── vitest.config.ts
│       └── vitest.config.e2e.ts
├── packages/
│   ├── eslint-config/
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── nest.js
│   │   └── package.json
│   └── typescript-config/
│       ├── base.json
│       ├── nextjs.json
│       ├── nestjs.json
│       └── package.json
├── .commitlintrc
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md
├── README.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

### Applications

| Application  | Description                       | Local port |
| ------------ | --------------------------------- | ---------- |
| `apps/web`   | Public-facing real estate website | 3000       |
| `apps/admin` | Property management platform      | 3001       |
| `apps/api`   | Backend API and business logic    | 3002       |

The frontend applications use Next.js App Router.

The API uses NestJS with Node.js ESM module resolution.

Each application retains its framework-specific configuration while sharing common development conventions.

### Shared Packages

#### `@repo/eslint-config`

Provides reusable ESLint configurations for Next.js and NestJS.

- `base.js`: Shared TypeScript linting rules.
- `next.js`: Next.js configuration, including Core Web Vitals and TypeScript rules.
- `nest.js`: NestJS configuration, including type-aware TypeScript linting.

The package integrates `eslint-config-prettier` to prevent conflicting formatting rules.

#### `@repo/typescript-config`

Provides reusable TypeScript configurations.

- `base.json`: Common compiler options, including strict mode.
- `nextjs.json`: Configuration for Next.js applications.
- `nestjs.json`: Configuration for the NestJS API.

Applications extend these configurations while maintaining their own application-specific settings.

Both shared packages are private workspace packages independent of the product name.

## Prerequisites

The following tools are required:

- **Node.js:** Version 24 or newer.
- **pnpm:** Version 12.16.1.
- **Git:** For repository management.

The Node.js requirement and package manager version are declared in the root `package.json`.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yhaab/immoapp.git
cd immoapp
git switch dev
```

### 2. Install Dependencies

Run the installation command from the repository root:

```bash
pnpm install
```

pnpm installs workspace dependencies, links internal `@repo/*` packages, and runs the Husky setup script.

### 3. Start the Development Environment

Start all development applications:

```bash
pnpm dev
```

Once started, the applications are available at:

| Application | URL                   |
| ----------- | --------------------- |
| Web         | http://localhost:3000 |
| Admin       | http://localhost:3001 |
| API         | http://localhost:3002 |

The current applications contain initial placeholder implementations.

### Running Applications Individually

```bash
pnpm --filter web dev
pnpm --filter admin dev
pnpm --filter api dev
```

These commands can be run from the monorepo root.

## Development Commands

The root `package.json` exposes the following commands:

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `pnpm dev`          | Start applications in development mode         |
| `pnpm build`        | Build workspaces with build scripts            |
| `pnpm lint`         | Run ESLint checks across applicable workspaces |
| `pnpm check-types`  | Run TypeScript type checks                     |
| `pnpm test`         | Run available unit tests                       |
| `pnpm format`       | Format supported project files with Prettier   |
| `pnpm format:check` | Check formatting without modifying files       |

Turborepo orchestrates development, build, lint, type-checking, and testing tasks.

Prettier runs directly from the repository root.

### API Testing

The NestJS API uses Vitest.

Run API unit tests:

```bash
pnpm --filter api test
```

Run unit tests in watch mode:

```bash
pnpm --filter api test:watch
```

Run unit tests with coverage:

```bash
pnpm --filter api test:cov
```

Run API end-to-end tests:

```bash
pnpm --filter api test:e2e
```

> Frontend tests are not configured yet. The root `pnpm test` command currently runs the API unit-test task through Turborepo. API end-to-end tests must be executed separately.

## Shared Development Configuration

### pnpm Workspaces and Catalogs

The monorepo is configured in `pnpm-workspace.yaml`.

Internal packages use the `workspace:*` protocol:

```json
{
  "@repo/eslint-config": "workspace:*",
  "@repo/typescript-config": "workspace:*"
}
```

Shared external dependency versions are centralized through pnpm Catalogs.

Examples include:

```json
{
  "next": "catalog:",
  "react": "catalog:",
  "eslint": "catalog:"
}
```

Named catalogs are currently used for TypeScript:

- `catalog:typescript5` for Next.js applications.
- `catalog:typescript6` for the NestJS API.

Dependencies already managed by a catalog should use that catalog rather than duplicating version declarations.

### ESLint

ESLint configurations are centralized in `@repo/eslint-config`.

- `web` and `admin` use the shared Next.js configuration.
- `api` uses the shared NestJS configuration.

The shared rules prohibit explicit `any` types.

The NestJS configuration also enables type-aware linting and checks for unhandled promises.

### TypeScript

TypeScript strict mode is enabled through `@repo/typescript-config`.

Framework-specific options remain separate:

- Next.js uses bundler module resolution.
- NestJS uses NodeNext module resolution, with ESM and decorator support.

Application-specific paths, generated types, and compilation settings remain in the relevant application directories.

### Prettier

The root `.prettierrc` defines formatting conventions:

- Semicolons enabled.
- Double quotes.
- Trailing commas where supported.
- A print width of 80 characters.
- Two-space indentation.
- LF line endings.

Prettier and ESLint are independent tools.

ESLint handles code-quality checks, while Prettier handles formatting. `eslint-config-prettier` disables conflicting ESLint formatting rules.

The root `.prettierignore` excludes `pnpm-lock.yaml` from Prettier formatting.

### Visual Studio Code

The `.vscode` directory contains shared editor settings and extension recommendations.

Recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense

The editor settings enable formatting on save, configure ESLint working directories for the three applications, and require the shared Prettier configuration.

## Conventional Commits

The repository follows the Conventional Commits specification.

Commit messages must use the following format:

```text
type(scope): description
```

Examples:

```text
feat(web): add property search filters
feat(admin): implement property dashboard
fix(api): handle invalid lease dates
refactor(api): extract validation logic
test(api): add lease service unit tests
docs(repo): update project documentation
chore(repo): update development dependencies
ci(github): configure automated checks
```

### Commit Rules

- The commit type is required.
- The scope is required and must use kebab-case.
- The description is required.
- Commit messages must be written in English.
- Use lowercase descriptions without a trailing period.
- Keep the commit header within 100 characters.
- Use a type supported by the conventional Commitlint configuration.

The repository uses:

- **Commitlint** to validate commit message structure.
- **Husky** to execute Commitlint through the local `commit-msg` Git hook.

The rules are defined in `.commitlintrc`, and the hook is defined in `.husky/commit-msg`.

The project language convention requires English, although Commitlint does not automatically detect the language of commit descriptions.

### Validate a Commit Message Manually

```bash
echo "feat(web): add property search filters" | pnpm exec commitlint
```

The local Git hook validates commit messages automatically when creating commits through Git.

## Turborepo

Turborepo orchestrates tasks across workspace applications and packages.

The task configuration is defined in `turbo.json`.

| Task          | Behavior                                                  |
| ------------- | --------------------------------------------------------- |
| `dev`         | Persistent development processes; caching disabled        |
| `build`       | Builds dependencies first and caches configured outputs   |
| `lint`        | Runs lint checks with workspace dependency ordering       |
| `check-types` | Runs TypeScript checks with workspace dependency ordering |
| `test`        | Executes tests after applicable dependency builds         |

Build outputs include Next.js build artifacts and backend `dist` directories.

Turborepo uses task inputs and dependencies to determine whether cached results can be reused.

To inspect the build task graph without executing it:

```bash
pnpm exec turbo run build --dry=json
```

To inspect cache behavior, run the same successful command twice without changing relevant files:

```bash
pnpm build
pnpm build
```

Local caching is available. Remote Turborepo caching has not been configured.

The shared ESLint and TypeScript packages do not currently require build scripts because they expose configuration files directly.

## Continuous Integration

Continuous integration is configured with GitHub Actions in:

```text
.github/workflows/ci.yml
```

The workflow is named `CI` and runs for:

- Pushes to `dev` and `main`.
- Pull requests targeting `dev` and `main`.

The `Quality checks` job validates:

1. Commit messages using Commitlint.
2. Pull request titles using Commitlint, for pull request events.
3. Repository formatting with Prettier.
4. ESLint checks.
5. TypeScript type checks.
6. Available unit tests.
7. API end-to-end tests.
8. Application builds.

The workflow uses Node.js 24, pnpm, and the committed lockfile.

GitHub Actions results are available in the repository's [Actions tab](https://github.com/Yhaab/immoapp/actions).

### Branch Workflow

The repository maintains two long-lived branches:

- **`dev`:** Default development branch.
- **`main`:** Main branch.

Use short-lived feature or maintenance branches when working through pull requests.

Suggested workflow:

```bash
git switch dev
git pull origin dev
git switch -c docs/update-project-documentation
```

After making and validating changes:

```bash
git add README.md AGENTS.md
git commit -m "docs(repo): update project documentation"
git push -u origin docs/update-project-documentation
```

Open a pull request targeting `dev`.

Branch protection rules may be configured in GitHub to require pull requests and successful CI checks before merging. Their enforcement depends on the repository's GitHub settings; the CI workflow alone does not prevent direct pushes.

## Development Principles

ImmoApp follows these principles:

- Prioritize correctness, maintainability, security, and long-term sustainability.
- Use TypeScript strict mode.
- Avoid explicit `any` types and unnecessary type assertions.
- Keep business logic modular and responsibilities clearly separated.
- Respect existing application and shared-package boundaries.
- Prefer incremental changes over premature abstractions.
- Avoid unnecessary dependencies and configuration packages.
- Use shared configurations for genuinely common conventions.
- Add or update tests when introducing or changing behavior.
- Use Conventional Commits with a mandatory scope.
- Keep code, comments, commit messages, and technical documentation in English.
- Validate changes locally before submitting them.

Detailed instructions for AI-assisted development are maintained in [AGENTS.md](./AGENTS.md).

## Planned Development

Future work includes:

- Defining the domain model and database architecture.
- Introducing PostgreSQL and Prisma.
- Building authentication and authorization.
- Implementing property and rental management features.
- Developing real estate listing and search functionality.
- Implementing ImmoPass property lifecycle tracking.
- Introducing shared UI components when needed.
- Expanding automated test coverage.
- Defining production deployment infrastructure.

These items describe the intended direction of the project and should not be considered implemented functionality.

## License

No license has been declared for this repository.

Unless a license is added, no open-source usage permissions are granted by default.

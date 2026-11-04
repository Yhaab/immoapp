# ImmoApp

ImmoApp is an all-in-one real estate SaaS platform for individuals and real estate professionals.

The project aims to centralize property-related activities in a single platform, covering three main areas:

- **Real Estate Listings:** Publish, search, and browse property listings.
- **Property Management:** Manage properties, rentals, leases, rent indexation, and associated documents.
- **ImmoPass:** Maintain a structured history of a property's lifecycle, including maintenance, renovations, repairs, works, and other significant events.

The initial target market is **Belgium**, with potential international expansion in the future.

> ImmoApp is a working project name and may change. Internal monorepo packages use the generic `@repo/*` namespace to remain independent of the product's commercial identity.

## Project Status

ImmoApp is currently in its **initial development and architecture phase**.

The monorepo, its three applications, and the shared development configurations have been initialized.

The current codebase includes:

- Two Next.js applications with placeholder pages.
- A NestJS API with an initial application structure.
- Initial API unit and end-to-end tests.
- Shared ESLint and TypeScript configuration packages.
- Centralized dependency versions through pnpm Catalogs.
- Shared formatting conventions with Prettier.
- Shared Visual Studio Code settings and extension recommendations.
- Monorepo task orchestration with Turborepo.

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

Additional infrastructure, testing, and deployment tooling will be introduced when needed.

## Repository Structure

```text
immoapp/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
│
├── apps/
│   ├── web/
│   │   ├── src/app/
│   │   ├── eslint.config.mjs
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── admin/
│   │   ├── src/app/
│   │   ├── eslint.config.mjs
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
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
│
├── packages/
│   ├── eslint-config/
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── nest.js
│   │   └── package.json
│   │
│   └── typescript-config/
│       ├── base.json
│       ├── nextjs.json
│       ├── nestjs.json
│       └── package.json
│
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
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

Applications retain their framework-specific configurations, while reusable development configurations are maintained in shared packages.

### Shared Packages

#### `@repo/eslint-config`

Provides reusable ESLint configurations for Next.js and NestJS.

- `base.js`: Shared TypeScript linting rules.
- `next.js`: Next.js configuration, including Core Web Vitals and TypeScript rules.
- `nest.js`: NestJS configuration, including type-aware TypeScript linting.

The package also integrates `eslint-config-prettier` to prevent conflicting formatting rules.

#### `@repo/typescript-config`

Provides reusable TypeScript configurations.

- `base.json`: Common compiler options, including strict mode.
- `nextjs.json`: Configuration for Next.js applications.
- `nestjs.json`: Configuration for the NestJS API.

Applications extend these configurations while maintaining their own application-specific settings.

Both shared packages are private workspace packages, independent of the product name.

## Prerequisites

The following tools are required:

- **Node.js:** Version 24 or newer.
- **pnpm:** Version 12.16.1.
- **Git:** For repository management.

The required Node.js version and package manager version are declared in the root `package.json`.

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

pnpm installs dependencies for the entire workspace and links internal `@repo/*` packages.

### 3. Start the Development Environment

Start all development applications:

```bash
pnpm dev
```

Turborepo executes the development scripts of the applications.

Once started, the applications are available at:

| Application | URL                   |
| ----------- | --------------------- |
| Web         | http://localhost:3000 |
| Admin       | http://localhost:3001 |
| API         | http://localhost:3002 |

The current applications display initial placeholder content.

### Running Applications Individually

Each application can also be started independently:

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

Named Catalogs are currently used for TypeScript:

- `catalog:typescript5` for Next.js applications.
- `catalog:typescript6` for the NestJS API.

Dependency versions should be managed through the relevant catalog when a shared version already exists.

### ESLint

ESLint configurations are centralized in `@repo/eslint-config`.

Applications import the configuration appropriate to their framework:

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

The root `.prettierrc` defines formatting conventions for the entire repository:

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

The `.vscode` directory provides shared editor settings and recommended extensions.

Recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense

The editor settings enable formatting on save, configure ESLint working directories for the three applications, and enforce the shared formatting configuration.

These files are versioned to provide consistent development conventions.

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
- Keep code, comments, commit messages, and technical documentation in English.

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
- Establishing automated CI checks and deployment infrastructure.

These items describe the intended direction of the project and should not be considered implemented functionality.

## License

No license has been declared for this repository.

Unless a license is added, no open-source usage permissions are granted by default.

# ImmoApp

ImmoApp is an all-in-one real estate SaaS platform designed for individuals and real estate professionals.

The project aims to bring together three core features:

- **Real Estate Listings**: Publish, search, and browse property listings.
- **Property Management**: Manage properties, rentals, leases, rent indexation, and documents.
- **ImmoPass**: Track a property's lifecycle, including maintenance, renovations, repairs, and other important events.

The initial target market is Belgium, with potential international expansion in the future.

## Tech Stack

ImmoApp is built as a TypeScript monorepo using the following technologies:

| Category        | Technology               |
| --------------- | ------------------------ |
| Package Manager | pnpm Workspaces          |
| Monorepo        | Turborepo                |
| Frontend        | Next.js 16, React 19     |
| Backend         | NestJS 12                |
| Language        | TypeScript (strict mode) |
| Styling         | Tailwind CSS 4           |
| Linting         | ESLint                   |
| Formatting      | Prettier                 |
| Testing         | Vitest (API)             |

**Planned technologies:**

- **UI Components**: shadcn/ui
- **ORM**: Prisma
- **Database**: PostgreSQL

> The project is in its initial development phase. Technologies and shared packages will be integrated progressively as needed.

## Project Structure

```text
immoapp/
├── apps/
│   ├── web/                   # Public website (Next.js)
│   ├── admin/                 # Management platform (Next.js)
│   └── api/                   # Backend API (NestJS)
├── .gitattributes             # Git line-ending configuration
├── .gitignore                 # Git ignore rules
├── AGENTS.md                  # AI agent development instructions
├── package.json              # Root scripts and dependencies
├── pnpm-lock.yaml             # Dependency lockfile
├── pnpm-workspace.yaml        # Workspace configuration
├── README.md                  # Project documentation
└── turbo.json                 # Turborepo task configuration
```

Shared packages will be added under `packages/` when required.

### Applications

| Application  | Description                       | Local Port |
| ------------ | --------------------------------- | ---------- |
| `apps/web`   | Public real estate website        | 3000       |
| `apps/admin` | SaaS property management platform | 3001       |
| `apps/api`   | Backend API and business logic    | 3002       |

Each application maintains its own dependencies, configuration, and framework-specific scripts.

## Prerequisites

- **Node.js** >= 24
- **pnpm** 12.16.1
- **Git**

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Yhaab/immoapp.git
cd immoapp
git switch dev
```

Install dependencies from the monorepo root:

```bash
pnpm install
```

Start all applications in development mode:

```bash
pnpm dev
```

Once started, the applications are accessible at:

- **Web**: http://localhost:3000
- **Admin**: http://localhost:3001
- **API**: http://localhost:3002

### Running Applications Individually

To start a specific application:

```bash
pnpm --filter web dev
pnpm --filter admin dev
pnpm --filter api dev
```

## Development Commands

The following commands are available from the monorepo root and are orchestrated through Turborepo where applicable.

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Start all applications in development mode |
| `pnpm build`        | Build applications and packages            |
| `pnpm lint`         | Run ESLint checks                          |
| `pnpm check-types`  | Run TypeScript type checks                 |
| `pnpm test`         | Run available automated tests              |
| `pnpm format`       | Format TypeScript, TSX, and Markdown files |
| `pnpm format:check` | Check formatting without modifying files   |

### API Testing

The NestJS application uses Vitest for unit and end-to-end tests.

Run unit tests:

```bash
pnpm --filter api test
```

Run unit tests in watch mode:

```bash
pnpm --filter api test:watch
```

Run tests with coverage:

```bash
pnpm --filter api test:cov
```

Run end-to-end tests:

```bash
pnpm --filter api test:e2e
```

> Frontend testing is not configured yet. The root `pnpm test` command currently executes the API unit tests, not its end-to-end tests.

## Development Conventions

The project follows these principles:

- Use TypeScript with strict mode enabled.
- Prioritize maintainability, security, and code quality.
- Keep applications and packages modular and independent.
- Manage dependencies with pnpm Workspaces.
- Orchestrate workspace tasks with Turborepo.
- Use ESLint for static code analysis and Prettier for formatting.
- Add automated tests as functionality is implemented.
- Avoid unnecessary dependencies and premature abstractions.

AI-assisted development instructions are maintained in [`AGENTS.md`](./AGENTS.md).

## Project Status

ImmoApp is currently in its **initial setup and architecture phase**.

The monorepo has been initialized, and the following applications have been scaffolded:

- **Web**: Next.js public website.
- **Admin**: Next.js management platform.
- **API**: NestJS backend with initial unit and end-to-end test configurations.

The applications currently contain minimal starter implementations. Business features, authentication, database integration, and shared packages have not yet been implemented.

The project is being developed progressively, with an emphasis on long-term maintainability, modularity, and scalability.

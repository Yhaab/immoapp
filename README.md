# ImmoApp

ImmoApp is an all-in-one real estate SaaS platform designed for individuals and real estate professionals.

The project aims to bring together three core features:

- **Real Estate Listings**: Publish, search, and browse property listings.
- **Property Management**: Manage properties, rentals, leases, rent indexation, and documents.
- **ImmoPass**: Track a property's lifecycle, including maintenance, renovations, repairs, and other important events.

## Tech Stack

The following technologies have been selected for the project:

- **Monorepo**: pnpm Workspaces + Turborepo
- **Frontend**: Next.js
- **Backend**: NestJS
- **Language**: TypeScript (strict mode)
- **UI**: Tailwind CSS + shadcn/ui
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Code Formatting**: Prettier

> The monorepo is currently in its initial setup phase. Applications, frameworks, and shared packages will be added progressively.

## Prerequisites

- Node.js >= 24
- pnpm 12.16.1

## Installation

Install the project dependencies:

```bash
pnpm install
```

## Project Structure

```text
immoapp/
├── apps/                  # Applications (planned)
├── packages/              # Shared packages (planned)
├── .gitignore             # Git ignore rules
├── package.json           # Root package configuration
├── pnpm-lock.yaml         # Dependency lockfile
├── pnpm-workspace.yaml    # Workspace configuration
├── README.md              # Project documentation
└── turbo.json             # Turborepo configuration
```

> The `apps/` and `packages/` directories are currently empty and will not be tracked by Git until files are added.

## Development

Development commands are managed through Turborepo.

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Run applications in development mode     |
| `pnpm build`        | Build applications and packages          |
| `pnpm lint`         | Run linting checks                       |
| `pnpm check-types`  | Run TypeScript type checks               |
| `pnpm test`         | Run automated tests                      |
| `pnpm format`       | Format supported files using Prettier    |
| `pnpm format:check` | Check formatting without modifying files |

> Application-specific commands will become operational as applications and packages are added.

## Project Status

ImmoApp is currently in its initial development phase.

- **Initial market**: Belgium
- **Future expansion**: International markets may be considered as the project evolves.
- **Development approach**: Modular, maintainable, and scalable architecture with an emphasis on code quality and long-term sustainability.

# ImmoApp — Agent Instructions

## Project

ImmoApp is an all-in-one real estate SaaS platform for individuals and real estate professionals.

The initial target market is Belgium, with potential international expansion in the future.

## Technology Stack

- **Monorepo:** pnpm Workspaces and Turborepo
- **Frontend:** Next.js
- **Backend:** NestJS
- **Language:** TypeScript (strict mode)
- **UI:** Tailwind CSS and shadcn/ui
- **ORM:** Prisma
- **Database:** PostgreSQL

Applications and packages will be introduced progressively. Do not assume that planned technologies are already installed.

## Development Principles

- Prioritize correctness, maintainability, security, and long-term sustainability.
- Keep implementations simple, modular, and explicit.
- Follow existing project conventions and configurations.
- Use TypeScript strict mode for all TypeScript projects.
- Avoid `any` and unsafe type assertions unless explicitly justified.
- Avoid unnecessary dependencies, abstractions, and premature optimizations.
- Do not introduce new frameworks, tools, or architectural patterns without justification.
- Keep changes focused on the requested scope.

## Monorepo Conventions

- Use pnpm as the package manager.
- Use Turborepo to orchestrate workspace tasks.
- Place applications in `apps/`.
- Place shared packages in `packages/`.
- Keep dependencies and configurations scoped to their respective workspaces whenever appropriate.

## Quality and Verification

- Write readable, maintainable, and appropriately tested code.
- Add or update tests when implementing or modifying behavior.
- Run relevant checks when available.
- Do not bypass TypeScript errors, linting rules, or failing tests to make changes pass.
- Report validation results and any checks that could not be executed.

## Agent Workflow

- Inspect relevant existing files before making changes.
- Respect the established architecture and project conventions.
- Do not modify unrelated files.
- Do not perform major refactoring without explicit approval.
- Do not commit, push, or deploy changes unless explicitly requested.
- Clearly communicate important assumptions, decisions, and unresolved issues.

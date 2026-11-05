# ImmoApp — Agent Instructions

ImmoApp is a temporary name for a real estate SaaS platform initially targeting
Belgium. Internal packages use `@repo/*`.

## Before working

1. Inspect the relevant code, manifests, configuration, and approved Issue.
2. Use the [documentation index](docs/README.md) to load only the guidance relevant
   to the task. Read the [delivery workflow](docs/contributing/workflow.md) and
   [engineering rules](docs/standards/engineering.md) for implementation work.
3. Distinguish [current capabilities](docs/project/status.md) from requirements
   and future plans. Never assume an unimplemented capability exists.
4. Keep changes within scope. Report unrelated problems; preserve unrelated work.
   Major product or architectural decisions require owner validation.

## Non-negotiable rules

- Follow the monorepo boundaries and existing pnpm Workspaces/Turborepo setup.
- Use strict TypeScript; explicit `any` is prohibited. Handle nullable values and
  promises deliberately. Fix causes instead of suppressing checks.
- Apply [security and privacy rules](docs/standards/security.md) to every relevant
  change. Never commit or log secrets.
- Add appropriate tests for behavior changes, execute relevant checks, report
  actual results, and update documentation. See the
  [Definition of Done](docs/contributing/validation.md).
- Write identifiers, comments, commits, README files, agent instructions, and
  technical documentation in English.
- Use [Conventional Commits with a mandatory scope](docs/contributing/workflow.md#commit-conventions).
- Do not commit, push, rebase, deploy, or perform substantial refactoring without
  explicit authorization. An implementation request authorizing a branch, commits,
  push, and PR covers those actions within its stated scope.
- Work on a dedicated branch from the approved base (normally `dev`); open a PR
  to the appropriate branch. Do not directly modify `dev` or `main`.
- Never bypass hooks, GitHub protections, required checks, or failing CI.
- Never merge without the owner's explicit authorization. Successful CI or an
  approval recommendation is not merge authorization.
- For a proposal or review request, provide the proposal or review without
  implementing changes unless asked.

Use the index for frontend, localization/SEO, performance, tooling, and domain
documentation. Update the relevant document and its index links in the same PR
when a decision, feature, or architecture changes.

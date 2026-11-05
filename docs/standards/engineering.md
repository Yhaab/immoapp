# Engineering rules

## Readability and correctness

Prioritize correctness, security, maintainability, and long-term sustainability.
Prefer simple, explicit, readable, testable implementations over terse or fragile
solutions. Reuse existing architecture; avoid unnecessary abstractions,
configuration, dependencies, and premature optimization.

Keep changes incremental and scoped. Preserve compatibility and prevent relevant
regressions. Do not introduce unrelated refactoring or unjustified temporary
workarounds. Report out-of-scope problems separately.

Use strict TypeScript. Explicit `any` is prohibited. Prefer defined types and
contracts, handle optional and nullable values deliberately, and avoid unsafe
assertions and unnecessary non-null assertions. Handle all promises, especially
in the API; do not leave rejected promises unhandled.

Fix errors at their source. Never disable TypeScript, ESLint, tests, or CI to hide
a defect. Use the shared configurations and preserve framework-specific options.

Write source identifiers, comments, commits, technical documentation, README and
AGENTS files, and configuration documentation in English. Product translations
follow the [localization rules](localization-seo.md).

## Frameworks and dependencies

Follow official conventions and documentation matching the versions actually
installed. Inspect manifests, catalogs, and the lockfile before consulting
version-specific documentation; do not assume the latest release is compatible.

Before introducing or updating a dependency:

1. Establish the scoped need and compatibility with affected frameworks, runtimes,
   applications, and tooling, including known relevant security vulnerabilities.
2. Check existing workspace packages and catalogs before adding a new dependency.
3. Use existing catalogs where applicable and update their versions centrally.
4. Use pnpm to update the lockfile; never edit dependency resolutions manually.
5. Run relevant validation and update the affected documentation.

Do not upgrade unrelated dependencies. Do not introduce a framework, major
dependency, external service, infrastructure, or architectural pattern without
justification and owner validation for major decisions. Tooling configuration
must retain existing pnpm Workspaces and Turborepo behavior.

See [development](../contributing/development.md) for catalog, formatting, and task
details, and [validation](../contributing/validation.md) for completion criteria.

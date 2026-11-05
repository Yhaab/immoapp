# Documentation index

## Find guidance by task

Read the documents relevant to the affected area, rather than the whole tree.

| Task or question                                             | Reference                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| Current capabilities, stack, and future plans                | [Project status](project/status.md)                             |
| Setup, commands, catalogs, formatting, editor, and Turborepo | [Development](contributing/development.md)                      |
| Prepare an Issue, implement it, review or deliver a PR       | [Delivery workflow](contributing/workflow.md)                   |
| Select checks and determine completion                       | [Validation and Definition of Done](contributing/validation.md) |
| Application responsibilities or shared packages              | [Monorepo architecture](architecture/monorepo.md)               |
| TypeScript, modularity, dependencies, and code quality       | [Engineering](standards/engineering.md)                         |
| Server operations, personal data, secrets, or threats        | [Security and privacy](standards/security.md)                   |
| UI, responsive design, accessibility, and themes             | [Frontend](standards/frontend.md)                               |
| Languages, Belgian formats, public URLs, and search indexing | [Internationalization and SEO](standards/localization-seo.md)   |
| Loading, rendering, Lighthouse, or Core Web Vitals           | [Performance](standards/performance.md)                         |
| Product domains and where to document features               | [Domain and feature documentation](domains/README.md)           |

## Ownership and status of documentation

- `AGENTS.md` is the concise agent entry point; this index routes readers.
- `project/` records observed capabilities and separately labels future plans.
- `contributing/` owns delivery procedures and actual tooling commands.
- `architecture/` owns application boundaries and structural conventions.
- `standards/` owns requirements shared across domains.
- `domains/` owns domain-specific behavior and feature documentation as it is
  approved and implemented.

Standards apply immediately to work in their scope. A requirement does not imply
that a corresponding feature or automated enforcement already exists. Existing
gaps are identified in project status; resolve them through approved work, not
unrelated changes.

## Maintenance rules

Keep one authoritative location per rule or fact and link to it elsewhere.
Update documentation in the same PR whenever a decision, behavior, architecture,
dependency policy, command, or status changes. Check links when moving content.

Each feature document must explicitly separate current implementation, approved
requirements awaiting implementation, and future ideas. Record important owner
decisions with rationale and an Issue/PR reference. Proposals must not be presented
as approved decisions. Link approved architecture decisions from the affected
architecture or feature document; create a separate decision record only when
the rationale warrants one.

Create documents only when there is concrete content. Do not create empty domain
trees, speculative feature specifications, or premature mobile infrastructure.
Split a document when distinct responsibilities make selective reading difficult.

Inspect actual code and configuration when facts disagree with prose; report the
mismatch and correct stale documentation within authorized scope. An Issue may
refine requirements but must not silently override standing architecture or
security rules. Escalate unresolved material conflicts to the owner before
dependent implementation.

# Delivery workflow

## Responsibilities and authorization

The owner validates needs and significant product/architecture decisions.
ChatGPT prepares execution-ready Issues and reviews delivery. Codex implements
approved scoped work, verifies it, updates documentation, and opens a PR.
Do not make major functional or architectural decisions without owner validation.

Respect explicit task authorization. Do not commit, push, rebase, deploy, or
perform substantial refactoring unless requested. Authorization for scoped
implementation with a branch, commits, push, and PR covers those operations;
it does not authorize a merge or unrelated work. Proposal/review requests do not
authorize implementation.

Never overwrite unrelated work, bypass hooks, GitHub protections, required checks,
or CI. Report out-of-scope defects rather than expanding the change silently.
A material missing decision blocks only the dependent work; document it for the
owner instead of guessing.

## From discussion to merge recommendation

1. The owner discusses needs and decisions with ChatGPT.
2. ChatGPT inspects relevant repository files, documentation, existing Issues,
   and applicable version-specific official references, then prepares a complete
   GitHub Issue using the checklist below.
3. The owner validates the Issue and material decisions before implementation.
4. Codex starts from the approved base (normally `dev`) on a dedicated short-lived
   branch. Inspect before editing, reuse existing architecture, and work
   incrementally within the Issue.
5. Codex implements, adds relevant tests, runs appropriate checks, reviews its
   diff, updates documentation, and creates a PR to the approved target branch.
6. The PR reports changes, checks actually executed and their results, risks,
   limitations, and migrations using the checklist below.
7. The owner tells ChatGPT that the PR is ready.
8. ChatGPT reviews the complete diff against the Issue, architecture, documented
   rules, tests, security, and quality requirements. Verify actual CI results.
9. ChatGPT records required corrections directly in the GitHub review with
   actionable explanations and file/line references where useful. Codex applies
   corrections within scope, updates verification evidence, and the PR is reviewed
   again.
10. If compliant, ChatGPT recommends approval, explaining remaining limitations.
11. Merge only after explicit owner authorization. A review recommendation,
    green checks, or implementation authorization alone never authorizes merging.

Do not directly modify `dev` or `main`. Branch protection depends on actual
GitHub settings; the CI workflow alone does not establish enforcement. Preserve
configured protections and do not assume a push, commit, merge, or deployment
occurred unless its operation was actually performed.

## Issue checklist

Every implementation Issue must provide enough information to avoid guessing
important decisions:

- Context, problem, user outcome, and objective.
- Scope, affected applications/domains, and explicit exclusions.
- Validated requirements and business rules, including relevant error/edge cases.
- Relevant architecture, feature documents, and existing implementation links.
- Constraints, compatibility, dependencies, security/privacy, and applicable
  frontend/localization/SEO/performance requirements.
- Concrete acceptance criteria that can be verified.
- Expected tests and checks, documentation updates, and migrations if applicable.
- Open decisions, risks, and dependencies. Resolve material decisions with the
  owner before calling the Issue ready for implementation.

Scale detail to the task. A documentation-only Issue does not need invented
application tests. Record owner approval or a link to its evidence; do not
fabricate approval history.

## PR checklist

- Link the Issue when one exists; describe the concrete problem and resulting
  behavior, scope, and affected files/modules.
- Explain architectural or business rule changes and documentation updates.
- List tests and checks actually run, commands, results, and unexecuted checks
  with reasons. Distinguish local results from CI; never invent either.
- Describe relevant risks, compatibility, security/privacy impact, limitations,
  unresolved decisions, and migrations/rollout needs, explicitly stating when
  none apply.
- For UI changes, include useful evidence of responsive, accessible, themed, and
  localized behavior; for performance-sensitive work, include measurements.
- Confirm the acceptance criteria and [Definition of Done](validation.md).
  Do not represent blocked work as completed.

For documentation reorganizations, also list created/moved/modified files,
consolidated rules, contradictions resolved, and decisions still requiring review.

## Commit conventions

All commits and PR titles use:

```text
type(scope): description
```

- Use a valid Conventional Commit type and a mandatory lowercase kebab-case scope.
- Write in English with lowercase descriptions and no trailing period.
- Keep the header within 100 characters and describe the actual change concisely.
- Identify the application, package, or repository concern in the scope.
  Common scopes are `web`, `admin`, `api`, `repo`, `eslint-config`,
  `typescript-config`, and `github`; these are not a hardcoded allowlist.

```text
feat(web): add property search filters
feat(admin): implement property dashboard
fix(api): handle invalid lease dates
refactor(api): extract validation logic
test(api): add lease service unit tests
docs(repo): update project documentation
chore(repo): update development dependencies
ci(github): configure quality checks
```

`.commitlintrc` extends `@commitlint/config-conventional`; Husky runs
Commitlint via `.husky/commit-msg`, configured by the root `prepare` script.
Do not bypass the hook. CI validates PR titles and commits. Commitlint validates
structure but cannot reliably detect English; agents must enforce that convention.

Manual validation:

```bash
echo "feat(web): add property search filters" | pnpm exec commitlint
```

When authorized, a typical documentation branch starts with:

```bash
git switch dev
git pull origin dev
git switch -c docs/update-project-documentation
```

Review and stage only the intended files, validate, commit with a compliant
message, push the dedicated branch, and open a PR targeting `dev` unless the
approved Issue specifies another target. Do not merge as part of that delivery.

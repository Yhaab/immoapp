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

## Branch lifecycle

### Task branches and naming

Never develop or push implementation or documentation changes directly on
`dev` or `main`, regardless of whether branch protection is enabled. Start each
new task from the approved, up-to-date base (normally `dev`) and create a
short-lived task branch. Apply review corrections to the existing PR branch
rather than creating a separate Issue or PR for the same work.

Use descriptive English branch names with a type prefix and a short lowercase
kebab-case description. Include an Issue reference when useful, for example
`feat/42-property-search`.

- `feat/<short-description>` for new behavior.
- `fix/<short-description>` for bug fixes.
- `docs/<short-description>` for documentation.
- `refactor/<short-description>` for refactoring.
- `test/<short-description>` for tests.
- `chore/<short-description>` for maintenance.
- `ci/<short-description>` for CI changes.

These prefixes are conventions, not an inflexible allowlist; justify exceptional
names. Keep changes on the task branch and open a PR to the approved target.
No branch naming or lifecycle rule grants permission to merge.

### Remote branch deletion after merge

Delete a remote task branch only after its PR has been successfully merged and
no other active work depends on it. Never delete a branch while its PR is open.

Prefer GitHub's **Settings → General → Pull Requests → Automatically delete head
branches** option for automatic remote cleanup after merge. This is a repository
setting, not a version-controlled configuration; documenting the preference does
not enable it or establish that it is enabled.

Confirm that the remote branch was actually removed after merge. If automatic
deletion is disabled or blocked by rules, arrange safe remote deletion after
merge without bypassing protections. Preserve any branch needed by other active
work and resolve that dependency before deletion.

### Manual, periodic local maintenance

Deleting a remote branch does not delete local branches. The owner handles local
cleanup manually and periodically when useful. It is optional maintenance, not
a Codex responsibility, a prerequisite for starting a task, or a completion
requirement after a merge. No separate Issue is required for this maintenance.

If the owner performs local maintenance, preserve uncommitted or unmerged work,
switch off the branch, and use `git branch -d` only for branches confirmed merged
and no longer needed. If deletion is refused, verify the PR merge status and
actual changes, including squash merges; never use `git branch -D` automatically.
Disposable workspaces do not need local cleanup.

This distinction follows the
[owner's clarification in PR #1](https://github.com/Yhaab/immoapp/pull/1#pullrequestreview-5786875363).

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
git pull --ff-only origin dev
git switch -c docs/update-project-documentation
```

Review and stage only the intended files, validate, commit with a compliant
message, push the dedicated branch, and open a PR targeting `dev` unless the
approved Issue specifies another target. Do not merge as part of that delivery.

# Validation and Definition of Done

## Select meaningful verification

Every functional change needs appropriate automated tests: unit, integration,
E2E, or other relevant coverage. Cover normal behavior, errors, boundaries, and
pertinent regressions. Keep tests reliable, reproducible, readable, and maintainable.

Use targeted checks during development. Broaden checks when shared configuration
or multiple applications are affected. Do not fabricate results, ignore failing
checks, bypass tests, or disable validation to conceal a problem. Investigate and
fix causes. Clearly report checks that could not be run and why.

Pure documentation changes need document review, link/reference checks, and
formatting verification, not artificial behavioral tests.

## Available commands and coverage

Root commands are listed in [development](development.md#root-commands).
The API uses Vitest:

```bash
pnpm --filter api test
pnpm --filter api test:watch
pnpm --filter api test:cov
pnpm --filter api test:e2e
```

The root `pnpm test` currently runs the API unit-test task through Turborepo.
It does **not** run the separate API E2E configuration. Frontend testing is not
configured yet; do not claim frontend automated coverage. If a frontend behavior
change needs new test infrastructure, define that scoped work explicitly rather
than silently omitting necessary verification.

## Continuous integration

[CI](../../.github/workflows/ci.yml) runs on pushes to and PRs targeting `dev`
and `main`. Its `Quality checks` job uses Node.js 24, pnpm, and the committed
lockfile, and performs:

1. Commit message validation.
2. PR title validation for PR events.
3. `pnpm format:check`.
4. `pnpm lint`.
5. `pnpm check-types`.
6. `pnpm test`.
7. `pnpm --filter api test:e2e`.
8. `pnpm build`.

Keep CI aligned with actual scripts; reuse root commands where appropriate,
preserve runtime requirements, install from the committed lockfile, and keep
GitHub Actions permissions minimal. Do not add secrets or external services
without a task need and required owner validation. When introducing tests,
packages, or build requirements, update CI if necessary within authorized scope.

Inspect actual results in [GitHub Actions](https://github.com/Yhaab/immoapp/actions).
Do not claim CI passed based on local checks or the mere presence of a workflow.

## Definition of Done

A task is complete only when:

- Approved acceptance criteria are satisfied and scope is respected.
- Relevant tests cover behavior changes and regression risks.
- Relevant checks have actually passed; unverified or blocked criteria are
  explicitly reported and prevent an unconditional completion claim.
- Security, compatibility, and applicable UI/localization/SEO/performance
  requirements have been considered and verified appropriately.
- Documentation reflects changed decisions, architecture, features, and commands;
  current, required, and future behavior remain clearly distinguished.
- The diff has been reviewed for correctness, unintended changes, and secrets.
- The PR provides actual validation evidence, risks, limitations, and migrations.

Completion and a recommendation to approve do not grant merge authorization.

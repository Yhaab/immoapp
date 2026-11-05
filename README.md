# ImmoApp

ImmoApp is a real estate SaaS platform intended for individuals and real estate
professionals, initially in Belgium. **ImmoApp is a temporary project name.**

The repository currently contains initialized Next.js applications, a NestJS API,
and shared development tooling. Business features are not implemented yet.
See [project status](docs/project/status.md) for current capabilities and plans.

## Start here

- [Documentation index](docs/README.md): guidance by task and documentation policy.
- [Agent entry point](AGENTS.md): instructions for ChatGPT and Codex.
- [Development setup and commands](docs/contributing/development.md).
- [Issue, implementation, and PR workflow](docs/contributing/workflow.md).
- [Architecture and workspace boundaries](docs/architecture/monorepo.md).

## Quick start

Requires Node.js `>=24`, pnpm `12.16.1`, and Git, as declared in
[package.json](package.json).

```bash
git clone https://github.com/Yhaab/immoapp.git
cd immoapp
git switch dev
pnpm install
pnpm dev
```

| Application  | Purpose                | Local URL             |
| ------------ | ---------------------- | --------------------- |
| `apps/web`   | Public website         | http://localhost:3000 |
| `apps/admin` | Management application | http://localhost:3001 |
| `apps/api`   | Backend API            | http://localhost:3002 |

## License

No license has been declared. No open-source usage permissions are granted by
default.

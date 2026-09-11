# allspire.tech (agency site)

The public site for Allspire Technologies. React + Vite + TypeScript on Cloudflare Pages, with
Pages Functions for the API. No Supabase client of its own.

## The codebase map

**[docs/CODEBASE-MAP.md](docs/CODEBASE-MAP.md)** is shared working memory for everyone on this
repo: the directory layout and the key flows. Read it twice, write it back once.

**Read it before you start.** Before searching the tree, before planning, before your first edit,
so you are not rediscovering structure that is already written down. If it disagrees with the
code, the code wins: correct the map in the same change that proves it wrong.

**Read it again before you commit.** Other agents work in parallel, in worktrees and other
sessions, so the map may have moved since you read it. This is also the moment to check whether
your own work has made part of it wrong. If two agents have edited it, resolve the conflict by
keeping both descriptions rather than taking one side.

**Update it in the same commit as the change**, never as a follow-up, so a reviewer sees both
together. Update it when you move or rename something the map names, change a flow it describes,
add an integration point (an allowlist entry, Edge Function, RPC, table, scheduled job), or find
a trap worth warning the next agent about. Do not touch it for a bug fix inside an existing flow,
copy changes, dependency bumps or a new test. The map earns its value by staying short and true.

## Copy rules

No em dashes anywhere a visitor can read. Enforced by `src/test/copyLint.test.ts`, which scans
`src/` and `functions/`.

## Working agreements

- Branch, commit, open a PR. Never push to `main`.
- One PR per change. Ask before folding unrelated work into an open PR.
- Comment sparingly: brief essential whys, not blocks. Rationale belongs in the PR description.
- Add a `CHANGELOG.md` entry when you ship a feature or fix.
- Verify UI work in a real browser before opening the PR.

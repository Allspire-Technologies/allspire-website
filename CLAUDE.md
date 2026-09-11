# allspire.tech (agency site)

The public site for Allspire Technologies. React + Vite + TypeScript on Cloudflare Pages, with
Pages Functions for the API. No Supabase client of its own.

## Read the codebase map first

Before starting any work in this repository, read **[docs/CODEBASE-MAP.md](docs/CODEBASE-MAP.md)**.
It gives the directory layout and the key flows (auth, data access, gating, migrations, deploys),
so you are not rediscovering structure that is already written down.

If the map disagrees with the code, the code wins: correct the map in the same change. When a
change alters the structure or a flow the map describes, update the map with it.

## Copy rules

No em dashes anywhere a visitor can read. Enforced by `src/test/copyLint.test.ts`, which scans
`src/` and `functions/`.

## Working agreements

- Branch, commit, open a PR. Never push to `main`.
- One PR per change. Ask before folding unrelated work into an open PR.
- Comment sparingly: brief essential whys, not blocks. Rationale belongs in the PR description.
- Add a `CHANGELOG.md` entry when you ship a feature or fix.
- Verify UI work in a real browser before opening the PR.

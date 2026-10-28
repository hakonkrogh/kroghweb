# kroghweb

Static site for [kroghweb.no](https://kroghweb.no). Plain HTML and CSS, no
framework, no dependencies, no build step. Hosted on Cloudflare Workers
(static assets).

## Files

| Path                 | Serves as                |
| -------------------- | ------------------------ |
| `public/index.html`  | `/`                      |
| `public/_headers`    | security + cache headers |
| `public/robots.txt`  | crawler rules            |
| `public/sitemap.xml` | sitemap                  |
| `wrangler.jsonc`     | Worker + domain config   |

Only `public/` is served.

## Local preview

```sh
npx wrangler dev
```

Then open <http://localhost:8787>. This also applies `_headers`.

## Deploying

Pushing to `main` deploys via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), which runs
`wrangler deploy`. Pull requests run `wrangler deploy --dry-run` as a check.
The workflow needs a `CLOUDFLARE_API_TOKEN` repository secret (Cloudflare API
token from the "Edit Cloudflare Workers" template). There is no build step.

To deploy by hand:

```sh
npx wrangler deploy
```

`wrangler.jsonc` binds `kroghweb.no` and `www.kroghweb.no` as custom domains.
The `kroghweb.no` zone must be on Cloudflare for this to work.

## Email

Email for `@kroghweb.no` is forwarded with Cloudflare Email Routing. Rules are
set in the Cloudflare dashboard (or `npx wrangler email routing rules`), not in
this repo.

## Editing

Edit `public/index.html` directly. Its CSS lives inline in a `<style>` block,
so the page is one self-contained file.

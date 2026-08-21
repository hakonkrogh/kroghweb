# kroghweb

Static site for [kroghweb.no](https://kroghweb.no). Plain HTML and CSS — no
framework, no dependencies, no build step.

## Files

| Path            | Serves as              |
| --------------- | ---------------------- |
| `index.html`    | `/`                    |
| `vercel.json`   | caching + clean URLs   |
| `robots.txt`    | crawler rules          |
| `sitemap.xml`   | sitemap                |

## Local preview

Any static file server works. With no install:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying

Pushing to `master` deploys via Vercel. There is no build — Vercel serves the
repository root as static files. The Vercel project's **Framework Preset** must
be set to **Other**; `vercel.json` sets `"framework": null` to match.

## Editing

Edit `index.html` directly. Its CSS lives inline in a `<style>` block, so the
page is one self-contained file.

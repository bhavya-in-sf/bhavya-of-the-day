# Things I'm Learning ✨

Bhavya's personal learning-notes blog. Rebuilt from scratch after the
original deployment's client-side navigation (clicking into past entries)
was throwing a JS error and silently failing.

## What's here

- `lib/entries.ts` — all posts live here. Add a new entry to the **top**
  of the `entries` array (newest first) and it shows up on the homepage
  and in search automatically.
- `app/page.tsx` — homepage: latest entry in full + list of past entries.
- `app/entry/[slug]/page.tsx` — individual entry page, with working
  Previous / Next links between entries (statically pre-rendered, no
  client-router bug).
- `components/SearchModal.tsx` — the ⌘K search over all entries.

## Run locally

```
npm install
npm run dev
```

## Deploy

Push this repo to GitHub and connect it to the existing
`bhavya-of-the-day` Vercel project (or `vercel --prod` from this folder
if the Vercel CLI is set up) to redeploy to the same URL.

# Goldthorpe Scouts — GitHub Pages site (Jekyll + Decap CMS)

This repository contains a simple, easy-to-update website for **goldthorpescouts.org.uk**.

## What you get

- **Pages for each section**: Beavers, Cubs, Scouts, Explorers — stored as Markdown in `/sections`.
- **Calendar subscribe buttons** using your `.ics` subscription URLs (set per section front matter).
- **Badge ideas** shown on each section page and an aggregated **Badges** page.
- Quick links to **Shop** (payments.goldthorpescouts.org.uk) and **OSM Parent Portal**.
- **Decap (Netlify) CMS** for editing in the browser at `/admin/` — commits changes to GitHub.
- Works with **GitHub Pages** (no extra servers needed).

## One-time setup (GitHub Pages)

1. Create a new repo on GitHub and push this folder.
2. In **Settings → Pages**, set:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (root)
3. Add a DNS `CNAME` record for `goldthorpescouts.org.uk` pointing to your GitHub Pages domain (e.g. `youruser.github.io`). The `CNAME` file is already included.

## Enable the CMS (Decap)

The CMS uses GitHub auth to commit on your behalf.

1. Edit `admin/config.yml` and set:
   ```yaml
   backend:
     name: github
     repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
     branch: main
     base_url: https://auth.decapcms.org
   ```
   The `auth.decapcms.org` service provides OAuth for GitHub — no server needed.
2. Commit and browse to `https://goldthorpescouts.org.uk/admin/`.
3. Log in with GitHub and you’ll be able to edit pages and sections.

> If you prefer not to use GitHub login, you can switch to another backend later (e.g. Netlify Identity).

## Customise your content

- Edit `/sections/*.md` to set **meeting_time**, **calendar_url** and **badge_ideas** for each section.
- The **Badges** page (`/badges/index.md`) pulls badge ideas from each section automatically.
- The **Shop** and **Parent Portal** links are hardcoded in the layout. Change them in `/_layouts/default.html` if needed.

## Calendars

Set each section's `calendar_url` to your iCal subscription link (ending `.ics`). We provide:
- A **Subscribe** button that uses `webcal://` so phones and desktops open the calendar app.
- The raw URL shown for copying into OSM/Google/Outlook if preferred.

## Local development (optional)

You can run Jekyll locally:

```bash
gem install bundler jekyll
jekyll serve
# Then visit http://127.0.0.1:4000
```

## Editing without the CMS

Everything is plain Markdown. Edit files directly on GitHub:
- `index.md` — home page
- `sections/*.md` — section pages
- `badges/index.md` — badges landing

## Brand & Accessibility

- Simple, clean layout with good contrast and large targets.
- You can drop images into `assets/uploads` via the CMS and embed them in pages.

---

Questions or tweaks? Open an issue!

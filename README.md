# Personal Website (Next.js + Tailwind)

One-page personal site focused on personal brand and direct professional tone.

## Local development

```bash
npm install
npm run dev
```

## Update your content

Edit the typed content file:

- `src/content/site.ts`

This controls:

- name, role, headline, bio
- email + social links
- selected projects
- writing teaser links

## Build checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment (Free, Recommended: Vercel)

1. Push this project to GitHub.
2. Go to Vercel and sign in with GitHub.
3. Click **Add New Project** and import this repository.
4. Keep default settings (framework auto-detected as Next.js).
5. Click **Deploy**.

After first deploy:

- Every push to `main` creates a production deploy.
- Every pull request gets a preview URL.
- You can attach a custom domain in Project Settings.

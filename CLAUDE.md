# Personal Website — Andrew Ju

## Project Overview
Personal portfolio site deployed on Vercel. Built with Next.js (App Router), Tailwind CSS v4, TypeScript.

## Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- **Font**: Space Grotesk (via `next/font/google`, variable `--font-space`)
- **Accent color**: #1955b5 blue — overridden in Tailwind theme as custom `--color-blue-*` scale
- **Deployment**: Vercel (auto-deploys on push to `main`)
- **Repo**: https://github.com/AndrewJu246/Website
- **Live**: https://andrewju.vercel.app

## Architecture
- `src/app/layout.tsx` — Root layout, font config, OG/Twitter meta
- `src/app/globals.css` — Tailwind theme overrides, custom blue palette, nav-link animation, fade-in-up keyframes
- `src/app/page.tsx` — Composes all sections, each wrapped in `<ScrollReveal>`
- `src/components/` — Navbar, Hero, About, Experience, Research, Projects, Skills, Contact, ScrollReveal
- `src/app/icon.svg` — AJ favicon (placeholder — user wants to design a proper logo later)
- `src/app/opengraph-image.tsx` — Dynamic OG image (1200x630) via `next/og` ImageResponse
- `public/resume.pdf` — Downloadable resume

## Key Design Decisions
- **ScrollReveal** uses IntersectionObserver with `opacity-0` → `animate-fade-in-up`. Sections are invisible until scrolled into view.
- **Section headings**: `text-base`, uppercase, tracking-widest, `text-blue-600`. No decorative bars/dashes.
- **Project cards**: hover lift (`-translate-y-0.5`) + blue shadow. Bruin Plans has both App Store (Apple icon) and GitHub links. Lone last card (odd count) is centered via `col-span-2 + max-w + mx-auto`.
- **Research items**: blue left border that intensifies on hover.
- **Nav links**: animated blue underline on hover via CSS `::after` pseudo-element.
- **Alternating section backgrounds**: white and `bg-blue-50/30`.

## Remaining TODO
- [ ] Logo design (replace AJ favicon placeholder)
- [ ] SEO: sitemap.xml, robots.txt
- [ ] Custom domain (user needs to purchase one)

## Dev Commands
```bash
npm run dev     # Start dev server (port 3000)
npm run build   # Production build
git push origin main  # Auto-deploys to Vercel
```

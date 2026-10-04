# Morrow Works Website

A responsive, multi-page corporate website for Morrow Works, an architecture and strategy studio. The site is built with plain HTML, CSS, and JavaScript; there is no build step or package installation.

## Pages

- [Home](index.html)
- [About](about.html)
- [Services](services.html)
- [Portfolio](portfolio.html)
- [Careers](careers.html)
- [Contact](contact.html)

## Run locally

Open `index.html` in a browser. For a local HTTP preview, run this from the project directory:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Features

- Responsive layouts with a collapsible mobile navigation.
- Light and dark themes; the selected theme is saved in browser local storage.
- Scroll-triggered reveals that respect reduced-motion preferences.
- Per-page titles, descriptions, Open Graph metadata, semantic landmarks, and skip links.
- Contact form validation that prepares an email using the visitor's configured email application.

## Project files

- `index.html`, `about.html`, `services.html`, `portfolio.html`, `careers.html`, `contact.html`: page content and metadata.
- `styles.css`: shared layout, responsive rules, theme variables, and motion styles.
- `script.js`: theme, mobile navigation, reveal animations, and contact form behavior.
- [Project report](PROJECT_REPORT.md): scope, implementation notes, validation, and production considerations.

## Before launch

Replace the fictional studio address, telephone number, email addresses, job openings, project descriptions, and sample imagery with approved business content. The contact form is client-side only and does not store or deliver submissions on its own; connect it to a secure form service or backend if direct submission is required. Google Fonts and Unsplash images are externally hosted and require internet access. Add a privacy notice and any required consent or analytics disclosures before adding tracking.

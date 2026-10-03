# SwapTech Solutions — Website

Production website for **SwapTech Solutions Pvt. Ltd.** — an IT services and software development company based in Pune, India.

Built with React + Vite + Tailwind CSS + Framer Motion.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and fill in your values
cp .env.example .env

# 3. Start development server
npm run dev
# → http://localhost:5173

# 4. Production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Project Structure

```
swaptech-solutions/
│
├── public/
│   ├── images/
│   │   └── projects/          ← Add project screenshots here
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/            ← Shared UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroDashboard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionLabel.jsx
│   │   └── ServiceIcon.jsx
│   │
│   ├── pages/                 ← One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Work.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Terms.jsx
│   │   └── NotFound.jsx
│   │
│   ├── config/
│   │   └── company.js         ← ✏️  Edit company info here
│   │
│   ├── data/
│   │   ├── services.js        ← ✏️  Edit/add services here
│   │   ├── projects.js        ← ✏️  Edit/add projects here
│   │   └── values.js          ← ✏️  Edit values, process, tech here
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## How to Update Company Information

Edit **`src/config/company.js`**:

```js
export const company = {
  name: "SwapTech Solutions Pvt. Ltd.",
  email: "hello@swaptechsolutions.in",   // ← your real email
  phone: "+91 98765 43210",              // ← your phone
  location: "Pune, Maharashtra, India",
  linkedin: "https://linkedin.com/company/...",  // ← your LinkedIn
  github: "https://github.com/...",              // ← your GitHub
  // ...
}
```

This single file drives the footer, contact page, about page, meta tags and all other references to contact details.

---

## How to Add a Project

Edit **`src/data/projects.js`** — add a new object to the array:

```js
{
  id: "your-project-id",           // used in the URL: /work/your-project-id
  title: "Project Name",
  tagline: "One-line description",
  category: "Category · Sub-category",
  description: "Longer description of the project.",
  problem: "What problem did the client have?",
  solution: "What did you build?",
  outcome: "What was the result?",
  technologies: ["React", "FastAPI", "PostgreSQL"],
  image: "/images/projects/your-project.png",  // add image to public/images/projects/
  imageAlt: "Description of the screenshot",
  featured: true,        // shows on homepage
  color: "blue",         // "blue" or "navy" — card background tint
  year: "2025",
  placeholder: false,
}
```

Add the screenshot to `public/images/projects/your-project.png`.

---

## How to Add or Edit a Service

Edit **`src/data/services.js`** — each service object drives both the Services listing page and the individual `/services/:id` detail page.

Key fields per service:
- `id` — used in the URL
- `number` — display number (e.g. "01")
- `title` / `shortDescription` — for cards
- `icon` — Lucide icon name (see `src/components/ServiceIcon.jsx` for available icons)
- `problem` / `approach` / `whatWeBuild` / `technologies` / `process` / `faqs` — detail page content

---

## How to Configure the Contact Form

The contact form submits to `VITE_CONTACT_ENDPOINT` if set.

**Option A — Formspree (recommended for quick setup):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, copy the endpoint URL
3. Set in `.env`: `VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id`

**Option B — Custom backend:**
Set the endpoint to any URL that accepts a POST request with a JSON body.

If no endpoint is set, the form shows a success message (useful for development).

---

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```env
# Analytics (Google Analytics 4 or similar)
VITE_ANALYTICS_ID=G-XXXXXXXXXX

# Contact form endpoint
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id

# Site URL
VITE_SITE_URL=https://swaptechsolutions.in
```

**Never commit `.env` to Git.** It's listed in `.gitignore`.

---

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial build: SwapTech Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/swaptech-solutions.git
git push -u origin main
```

---

## Vercel Deployment

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Framework preset: **Vite** (auto-detected)
5. Add environment variables (from your `.env` file) in the Vercel dashboard
6. Click **Deploy**
7. Vercel gives you a `.vercel.app` URL immediately

**Automatic deploys:** Every push to `main` triggers a new deployment.

---

## Custom Domain

After purchasing your domain (e.g. `swaptechsolutions.in`):

1. Go to Vercel project → **Settings → Domains**
2. Add your domain
3. Vercel provides DNS records — add them to your domain registrar
4. Wait for DNS propagation (usually 5–30 minutes)
5. HTTPS is automatic via Let's Encrypt

Update `VITE_SITE_URL` in Vercel env vars to your custom domain.
Also update canonical URL in `index.html` and `public/sitemap.xml`.

---

## Production Checklist

### Before going live

- [ ] Fill in real contact details in `src/config/company.js`
- [ ] Set `VITE_CONTACT_ENDPOINT` to a real form endpoint
- [ ] Add real project screenshots to `public/images/projects/`
- [ ] Update `public/sitemap.xml` with your real domain
- [ ] Update canonical URL in `index.html`
- [ ] Add `VITE_ANALYTICS_ID` if using analytics
- [ ] Replace founder initials placeholder with a real photo in `src/pages/About.jsx`
- [ ] Update `public/og-image.png` (1200×630px) for social sharing
- [ ] Verify all routes work: `/`, `/about`, `/services`, `/work`, `/careers`, `/contact`
- [ ] Test contact form submission
- [ ] Test on mobile (375px) and desktop (1440px)
- [ ] Verify no console errors
- [ ] Run `npm run build` — confirm clean build

### After going live

- [ ] Submit sitemap to Google Search Console
- [ ] Verify HTTPS is active
- [ ] Test from a mobile device (real device, not just browser DevTools)
- [ ] Check Lighthouse score (aim for 90+ performance)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Routing | React Router 6 |
| Deployment | Vercel |

---

© 2026 SwapTech Solutions Pvt. Ltd.

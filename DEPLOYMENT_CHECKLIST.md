# Aspect Marketing Solutions — Deployment Checklist

Version: 1.0  
Owner: Aspect Marketing Solutions  
Scope: Pre-launch → Launch → Post-launch for the AMS marketing site

---

## 1) Repository & Docs Readiness

- [ ] `README.md` is accurate and links to all canonical docs
- [ ] `WEBSITE_PLAN.md` matches current scope and positioning
- [ ] `COPY_HOME.md` reflects final homepage messaging and CTAs
- [ ] `FUNNEL_MAP.md` reflects the actual conversion flow
- [ ] `SITE_COMPONENTS.md` matches the planned UI implementation
- [ ] `IMPLEMENTATION_GUIDE.md` matches the chosen tech stack

---

## 2) Domain & DNS

- [ ] Domain purchased and ownership verified
- [ ] Decide canonical domain (example: `aspectmarketingsolutions.com`)
- [ ] Configure DNS records:
  - [ ] A/AAAA or CNAME (per hosting provider)
  - [ ] www → apex redirect (or apex → www), choose one canonical
- [ ] HTTPS enabled and verified (no mixed content)
- [ ] Redirect rules:
  - [ ] http → https
  - [ ] non-canonical → canonical domain

---

## 3) Hosting & Environments

- [ ] Hosting provider selected (Vercel recommended for Next.js)
- [ ] Environments defined:
  - [ ] Production
  - [ ] Preview/Staging (optional but recommended)
- [ ] Build pipeline working:
  - [ ] Build succeeds from `main`
  - [ ] Preview deploys on PR/branch (if enabled)

---

## 4) Analytics & Tracking

- [ ] Analytics installed (choose one primary):
  - [ ] GA4 OR
  - [ ] PostHog OR
  - [ ] Plausible
- [ ] Core events tracked:
  - [ ] Primary CTA click (Get Started / Signup)
  - [ ] Secondary CTA click (View Agents / Learn More)
  - [ ] Contact/Enterprise inquiry submit
  - [ ] Pricing view
- [ ] UTM strategy defined:
  - [ ] Source / Medium / Campaign conventions documented
- [ ] Conversion goals configured in analytics platform

---

## 5) SEO Foundations

- [ ] Title tags and meta descriptions set for core pages
- [ ] Open Graph + Twitter cards configured
- [ ] Sitemap generated and served (`/sitemap.xml`)
- [ ] Robots configured (`/robots.txt`)
- [ ] Canonical tags verified
- [ ] Structured data (Organization / Website) added (optional, recommended)
- [ ] Google Search Console verified + sitemap submitted
- [ ] Core Web Vitals checked (LCP, CLS, INP acceptable)

---

## 6) Performance & Quality

- [ ] Mobile responsive verified (hero, nav, CTA, sections)
- [ ] Lighthouse pass acceptable (Performance/SEO/Accessibility)
- [ ] Images optimized (modern formats, lazy-load where appropriate)
- [ ] No console errors in production
- [ ] 404 page exists and routes correctly
- [ ] All internal links valid (no dead links)

---

## 7) Security & Compliance

- [ ] `PRIVACY_POLICY.md` and `TERMS.md` exist and are linked in footer
- [ ] Cookie consent approach decided (if required for tracking jurisdiction)
- [ ] Contact forms protected (captcha or rate limiting if needed)
- [ ] No secrets committed to repo
- [ ] Headers set (hosting):
  - [ ] HSTS
  - [ ] X-Content-Type-Options
  - [ ] X-Frame-Options / frame-ancestors policy

---

## 8) Conversion & Funnel Verification

- [ ] Homepage matches `COPY_HOME.md` sections and CTAs
- [ ] Pricing page exists and routes to the correct action
- [ ] Enterprise flow routes to contact / booking
- [ ] Every page has a primary CTA (no dead ends)
- [ ] Confirmation pages/messages exist for submissions

---

## 9) Launch Execution

- [ ] Final deploy to production
- [ ] Smoke test:
  - [ ] Homepage loads
  - [ ] Navigation works
  - [ ] CTAs route correctly
  - [ ] Forms submit correctly
  - [ ] Analytics events firing
- [ ] Announce:
  - [ ] X/Twitter
  - [ ] LinkedIn
  - [ ] Discord/community
  - [ ] Email list (if any)

---

## 10) Post-Launch (First 72 Hours)

- [ ] Monitor uptime/errors (hosting + console logs)
- [ ] Check analytics for traffic + conversion events
- [ ] Patch broken links, layout issues, or tracking misses
- [ ] Capture feedback and open GitHub issues for fixes
- [ ] Set weekly review cadence:
  - [ ] Traffic sources
  - [ ] Conversion rate
  - [ ] Top pages
  - [ ] Drop-off points

# AGENTS.md
Permanent rules for Codex. Place this file in the root of every new site project.
Fill in the [bracketed] parts once based on your actual tool stack, then reuse as-is.

## Quality bar (non-negotiable)
Every site must look like it could help sell the startup for $1M+. It should read as a
real product, real market, real operating team — not an experiment or a template.
- Current baseline to beat: C/D-tier
- Target: A-tier quality on every new build (do not ship B/C-tier and call it done)
- Benchmark references for tone and completeness — pull up these before/during build if unsure:
  - https://bordiq.com — category-specific confidence and specificity
  - https://carbvault.com — logo, hero, product story, footer, and overall polish completeness
  - https://ramp-elegance.lovable.app — acceptable structural floor, not the finish line
- Desktop review only. Do not spend build time or credits on mobile polish unless the
  brief explicitly asks for it.

## Stack & conventions
- Framework: Static HTML, CSS, and JavaScript (no React/Next.js) — deployed directly to Vercel
- Styling: plain CSS with CSS variables in one tokens file, mobile-first, no inline styles unless dynamic
- Fonts: chosen per startup in that site's brief.md (this is a brand decision, not fixed) —
  always exactly 2 font families (one heading, one body), both from Google Fonts, defined as
  CSS variables (--font-heading, --font-body). Never more than 2 families on one site.
- Spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96px — do not invent other values
- Color system: always define as CSS variables in one tokens file
  (--color-primary, --color-bg, --color-text, --color-accent, --color-muted) —
  actual hex values are chosen per startup in that site's brief.md
- Animation library: plain CSS transitions + GSAP for scroll-triggered animation — 
- Icons: Lucide (SVG icons) — do not introduce a second icon set mid-project

## Required site structure (every site, no exceptions)

### Navigation
- Navbar transparent on first viewport
- Navbar includes dropdown menus (Product, Solutions at minimum)
- Product dropdown exposes each product module as its own link
- Solutions dropdown exposes use cases / industries / workflows
- Navbar includes: Product, Solutions, Pricing, About/Company, Contact, Sign In, Demo
- Navigation must work identically across homepage, product pages, pricing, sign-in,
  demo, contact, and footer

### Required separate pages
- One dedicated page per product (each with its own footer)
- Dedicated Sign In page
- Dedicated Demo / Request Demo page
- Pricing can live on homepage and/or as its own dedicated page

### Trust & social proof
- Trusted-by section: real company logos only, horizontal auto-scroll, smooth polished motion
- Testimonials on homepage: polished, believable names and roles, specific outcomes —
  never placeholder-sounding names or generic praise
- Contact details/address must read as credible and complete, not a stub

### Footer (present on every major page)
- Logo, short company description
- Product links, Solutions links, Company links, Legal links
- Contact details
- Social icons (LinkedIn, X, YouTube, Instagram, GitHub, or Facebook — pick what fits the company)
- All footer links must actually navigate, not dead-end

## Standard homepage structure (build in this order)
1. Brand foundation: logo, favicon, colors, typography, icon style, button style, product visual language
2. Transparent navbar: Product, Solutions, Features/Platform, Use Cases/Industries, Pricing, About, Contact, Sign In, Demo
3. Hero: headline, value proposition, primary CTA, secondary CTA, product visual, trust cue
4. Trusted-by: real company logos, horizontal auto-scroll
5. Product overview: what it does, who it's for, workflow improved, business outcome
6. Features: 3–6 specific, benefit-driven, each with an icon
7. Product screenshots/demo: realistic UI — dashboards, tables, charts, workflow states, owners, costs, approvals, timelines
8. Use cases: by role, industry, workflow, or company stage
9. Testimonials: polished names, credible roles, specific outcomes
10. Pricing: clear plans or demo-led pricing
11. About/company: mission, story, market, why the product exists
12. Conversion section: Request Demo / Contact Sales / Start Trial / Sign In
13. Footer: full structure per above

## Build order (follow every time, without asking permission between steps)
1. Read `brief.md` fully before writing any code
2. Create `tokens.css` (or tailwind config) — colors, fonts, spacing, radii
3. Build the shared component library: nav w/ dropdowns, buttons, cards, section wrapper, footer
4. Build logo (SVG, 2–3 variants: full lockup, icon-only, favicon-ready)
5. Build favicon from the icon-only logo
6. Build homepage per "Standard homepage structure" above
7. Build each separate required page (product pages, pricing, sign-in, demo, about, contact)
   reusing only existing components and tokens
8. Add animations last, matching the exact descriptions in `brief.md`
9. Run the QA checklist below and self-report pass/fail before declaring the build done

## Working rules
- Do not regenerate an entire file for a small change — patch only the affected section
- Do not ask "should I also add X / do you want Y" mid-build — follow the brief and this file as written
- If something is ambiguous, note it once at the very start of your response, then proceed
  with your best interpretation — do not pause the build to ask
- Never introduce a new font, color, icon set, or animation library not already in tokens.css
- Keep components reusable across sites — do not hardcode copy or colors inside component files
- When reusing the base template for a new site, only touch: copy, tokens.css values, logo, imagery,
  and product-specific screenshots/data
- No leftover Lovable/template artifacts, placeholder Lorem ipsum, or generic stock-photo feel
  in the final build

## QA checklist — run and self-report against this before calling any build complete
- [ ] Branding complete: logo + favicon present, no template artifacts remain
- [ ] Transparent navbar with dropdowns (Product, Solutions)
- [ ] Separate product pages exist, each with its own footer
- [ ] Separate Sign In page exists
- [ ] Separate Demo page exists
- [ ] Product overview is clear; features are specific, not generic
- [ ] Realistic product screenshots/visuals present (not vague abstract graphics)
- [ ] Use cases included
- [ ] Testimonials included, names/roles read as credible
- [ ] Pricing included on homepage
- [ ] Trusted-by section: real logos, horizontal auto-scroll, smooth motion
- [ ] About section exists
- [ ] Contact section exists with polished, complete details
- [ ] Request demo form exists and works
- [ ] Footer on every major page, with social icons
- [ ] Typography refined, spacing consistent, alignment clean
- [ ] Hover states exist; buttons feel premium; icons consistent; shadows restrained
- [ ] Desktop layout is complete and polished
- [ ] Overall: would a visitor believe this is a real, fundable company?

## Definition of done for a page
- Matches brief.md layout order exactly
- Uses only existing components/tokens
- Animations match the described timing/easing, nothing extra added
- Passes the QA checklist above on desktop

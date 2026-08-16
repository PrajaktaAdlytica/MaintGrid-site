# MaintGrid Website Brief

## Project Summary

MaintGrid is a Poland/EU-based SaaS startup for maintenance teams, factories, warehouses, and facility operators.

The product solves a simple but expensive problem: maintenance teams stay reactive because work orders, spare parts, failures, risk, and asset history are disconnected.

MaintGrid connects those pieces into one operational system:

- MaintGrid Orders: work order planning, assignment, approval, completion, and history.
- MaintGrid Risk: downtime risk, asset criticality, recurring defect signals, and safety/compliance exposure.
- MaintGrid Parts: spare parts inventory connected to assets, failure modes, vendors, usage, and lead times.

The site must feel like a real, fundable EU industrial SaaS company, not a generic CMMS template.

## Core Positioning

Primary positioning:

Connected maintenance operations for factories, warehouses, and facilities.

Hero message:

Stop reacting to breakdowns. Connect work orders, parts, asset history, and risk in one maintenance grid.

Supporting message:

MaintGrid gives maintenance leaders one live system for tasks, spares, failures, and asset history, so teams can plan earlier, fix faster, and reduce downtime risk.

## Audience

Primary users:

- Maintenance managers
- Plant managers
- Facility managers
- Reliability engineers
- Warehouse operations managers
- Spare parts and inventory coordinators

Buyers and influencers:

- Operations directors
- Manufacturing leaders
- Facility operators
- CFO/finance stakeholders evaluating downtime cost
- Safety/compliance leaders

## Brand Personality

MaintGrid should feel:

- Industrial but modern
- Calm, precise, and operational
- Premium SaaS, not heavy enterprise software
- EU-native and trustworthy
- Data-connected, not AI-hype-first
- Practical enough for technicians, strategic enough for managers

Avoid:

- Generic blue SaaS templates
- Copying MaintainX green/black too closely
- Overly futuristic AI visuals
- Abstract blob backgrounds
- Decorative cards with no operational meaning
- Placeholder-style dashboards

## Reference Website Takeaways

### MaintainX

What to borrow:

- Confident maintenance category language
- Clear vertical use cases
- Strong dashboard/product visuals
- Simple product navigation

What not to copy:

- Do not copy the green/black palette directly.
- Do not copy the exact grid/background treatment.
- Do not make the site feel like a MaintainX alternate skin.

MaintGrid alternative:

Use a more technical "maintenance map" or "operations grid" visual system. The grid should feel like asset topology, work routing, parts availability, and risk connections, not a decorative square background.

### Rockwell Automation

What to borrow:

- Industrial credibility
- Strong dashboard/content inspiration
- Serious operational language
- Scrolling sections that feel like a guided industrial story

MaintGrid use:

Use Rockwell-style confidence, but simplify the interface and copy for a modern SaaS buyer.

### UpKeep

What to borrow:

- Accessible platform framing
- Clear CMMS feature categories
- Easy-to-understand work order and asset language

What to improve:

- Make MaintGrid more distinctive, more story-driven, and more visually premium.

### Siemens Senseye

What to borrow:

- Scrolling storytelling around maintenance evolution
- Predictive/risk credibility
- Industrial seriousness

MaintGrid use:

Create a narrative flow: disconnected work today -> failure emerges -> parts are missing -> asset history reveals the pattern -> MaintGrid connects it -> risk drops.

### Timly

What to borrow:

- Interactive feature switching
- Different product visual for each selected feature
- Clear relationship between feature label and visual state

MaintGrid use:

Build an interactive "Operations Grid" section where clicking:

- Defect Issue
- Work Order
- Part Availability
- Asset History
- Risk Tracker
- Performance Data

changes the visual panel and supporting copy.

### SaaSpo

What to borrow:

- SaaS inspiration for layout polish, spacing, CTA rhythm, and hero quality.

MaintGrid use:

Use SaaSpo as inspiration for premium composition, not as a direct visual template.

## Visual Direction

Concept name:

The Connected Maintenance Grid

The visual system should show maintenance as a connected operating layer:

- Assets as nodes
- Work orders as routed cards
- Parts as availability/status signals
- Failures as incidents
- Risk as heat/priority overlays
- History as timeline traces

The grid is not just background decoration. It should explain the product.

## Color System

Use a distinctive industrial SaaS palette that avoids MaintainX green while keeping a strong operational feel.

CSS variables:

```css
:root {
  --color-bg: #F7F4EE;
  --color-surface: #FFFFFF;
  --color-text: #17201B;
  --color-muted: #66736B;
  --color-primary: #123C35;
  --color-primary-2: #0E2B28;
  --color-accent: #D6F15B;
  --color-accent-2: #38BDF8;
  --color-warning: #F59E0B;
  --color-danger: #D94A38;
  --color-line: #DCE2D8;
  --color-grid: #C8D4C8;
}
```

Palette intent:

- Warm off-white background for premium editorial calm.
- Deep mineral green/charcoal as the primary industrial color, darker and less bright than MaintainX.
- Acid-lime accent used sparingly for live status, priority, and CTA energy.
- Sky/cyan accent for data, sensors, and risk intelligence.
- Amber/red only for warning, downtime, and risk states.

Important color rules:

- Do not let the site become a green-only theme.
- Use lime as an accent, not the dominant color.
- Use large off-white and white spaces to keep the design premium.
- Dashboards can use darker panels, but the full site should not become a dark enterprise UI.

## Typography

Use exactly two Google Font families.

Heading font:

- Space Grotesk
- CSS variable: `--font-heading`
- Use for H1-H6, nav logo text, stats, and major labels.

Body font:

- Inter
- CSS variable: `--font-body`
- Use for paragraphs, buttons, forms, tables, dashboards, and navigation.

Typography scale:

- H1 desktop: 72px, line-height 0.95
- H1 medium sections: 56px, line-height 1
- H2: 44px, line-height 1.05
- H3: 28px, line-height 1.15
- H4: 20px, line-height 1.25
- Body large: 20px, line-height 1.55
- Body: 16px, line-height 1.6
- Small: 14px, line-height 1.5
- Micro labels: 12px, uppercase optional, letter spacing max 0.04em

Rules:

- No negative letter spacing.
- Keep dashboard text smaller and denser than marketing headings.
- Use strong hierarchy: large hero, tighter product UI, clear labels.

## Spacing And Layout

Use the required spacing scale only:

- 4px
- 8px
- 16px
- 24px
- 32px
- 48px
- 64px
- 96px

Page width:

- Max content width: 1200px
- Wide visual sections: 1400px max
- Section vertical padding desktop: 96px
- Compact section padding: 64px
- Header height: 80px

Grid system:

- Main page grid: 12 columns
- Column gap: 24px
- Hero: 5 columns text / 7 columns product visual
- Feature grids: 3 columns
- Product pages: 6/6 split for story + product visual
- Dashboard mockups: use fixed, stable dimensions so UI does not shift

Margins:

- Outer desktop page margin: 48px
- Inner section padding: 24px minimum
- Card padding: 24px or 32px only
- Dashboard panels: 16px or 24px internal spacing

Radii:

- Buttons: 8px
- Cards: 8px
- Dashboard panels: 8px
- Input fields: 8px
- Pills/status tags: 999px only when semantically appropriate

Shadows:

- Restrained, soft, operational.
- Avoid heavy floating card shadows.
- Use borders and subtle depth more than dramatic shadows.

## Logo Direction

Logo concept:

MaintGrid should use a simple industrial grid mark: four to six connected nodes forming an M/G-like maintenance map.

Logo requirements:

- Full lockup: icon + MaintGrid wordmark
- Icon-only version
- Favicon-ready version
- Must work on light and dark backgrounds
- No generic wrench-only logo
- No copied MaintainX-style icon

Preferred logo feel:

- Geometric
- Precise
- Slightly technical
- Easy to recognize at small size

## Product Visual Language

The site must include realistic dashboard/product visuals, not vague abstract graphics.

Required visual components:

- Operations Grid dashboard
- Work order detail panel
- Parts availability table
- Risk heatmap or risk queue
- Asset history timeline
- Performance chart
- Defect issue view

Product UI style:

- Dense but clean
- Tables, charts, timelines, status chips, asset cards
- Use real operational terms:
  - Asset ID
  - Failure mode
  - MTTR
  - Downtime cost
  - Part lead time
  - Criticality
  - Open work orders
  - Safety risk
  - Vendor
  - Stock level
  - Next service window

Dashboard data should feel credible for factories, warehouses, and facilities.

## Homepage Storytelling Structure

The homepage should feel like a guided story, not a list of sections.

Story arc:

1. Your team sees the breakdown.
2. The work order is created.
3. The part is missing or delayed.
4. The asset history reveals a recurring failure pattern.
5. Risk is recalculated.
6. MaintGrid connects the issue, part, asset, and next action.
7. The team moves from reactive work to planned uptime.

Homepage sections:

1. Transparent navbar with Product and Solutions dropdowns.
2. Hero with clear value prop, CTAs, product visual, and trust cue.
3. Trusted-by logo auto-scroll using real industrial/logistics/facility companies.
4. Problem story: disconnected maintenance creates reactive teams.
5. Connected Maintenance Grid: animated system diagram.
6. Product overview: Orders, Risk, Parts.
7. Interactive feature switcher inspired by Timly.
8. Product dashboard/demo visuals.
9. Use cases: factories, warehouses, facilities.
10. Outcomes/stats: faster response, lower downtime risk, fewer stockouts.
11. Testimonials with credible names/roles.
12. Pricing section.
13. FAQ section.
14. About/company section.
15. Request demo conversion section.
16. Full footer.

## Interactive Feature Switcher

Create a section titled:

See every maintenance signal in context.

Tabs/buttons:

- Defect Issue
- Work Order
- Parts Check
- Asset History
- Risk Tracker
- Performance Data

Behavior:

- Clicking each control changes the visual.
- Visual changes should feel immediate and polished.
- Use CSS/JS only.
- No page reload.
- Each selected state should show distinct data and layout.

## Animation And Scrolling

Use plain CSS transitions plus GSAP for scroll-triggered animation.

Animation principles:

- Storytelling, not decoration.
- Sections should reveal the maintenance story step by step.
- Use line drawing, node activation, panel transitions, and number count-ups.
- Keep motion precise and restrained.

Required effects:

- Hero product visual enters with layered dashboard panels.
- Trusted logos auto-scroll smoothly.
- Connected grid nodes activate as the user scrolls.
- Story cards reveal in sequence: issue -> order -> part -> history -> risk -> action.
- Interactive feature switcher uses panel fade/slide transitions.
- CTA hover states should feel premium and responsive.

Avoid:

- Random floating orbs
- Overuse of parallax
- Cartoon animation
- Bouncy easing
- Excessive scroll hijacking

## Navigation

Navbar must be transparent on first viewport and present on every page.

Required links:

- Product dropdown
  - MaintGrid Orders
  - MaintGrid Risk
  - MaintGrid Parts
  - Platform
- Solutions dropdown
  - Factories
  - Warehouses
  - Facilities
  - Maintenance Teams
- Pricing
- About
- Contact
- Sign In
- Demo

Navbar behavior:

- Dropdowns on hover/click.
- All links navigate.
- Same navigation across all pages.
- Demo button should be visually primary.

## Required Pages

Build separate pages:

- `index.html`
- `orders.html`
- `risk.html`
- `parts.html`
- `pricing.html`
- `about.html`
- `contact.html`
- `signin.html`
- `demo.html`

Every page must have:

- Shared navbar
- Shared footer
- Page-specific hero
- Clear CTA
- Polished desktop layout

## Page-Specific Notes

### Orders Page

Focus:

- Work orders, priorities, approvals, assignments, mobile execution, audit trail.

Required visuals:

- Work order queue
- Technician assignment
- Asset-linked work detail
- Completion timeline

### Risk Page

Focus:

- Downtime risk, asset criticality, safety/compliance risk, recurring defects.

Required visuals:

- Risk heatmap
- Critical asset queue
- Predicted downtime exposure
- Root-cause trend

### Parts Page

Focus:

- Spare parts connected to assets and failures.

Required visuals:

- Parts stock table
- Low-stock warning
- Vendor lead time
- Asset-part relationship map

### Pricing Page

Use demo-led pricing:

- Starter
- Operations
- Enterprise

Pricing should feel credible but not over-specific.

### FAQ Section

Include FAQ on the homepage and pricing page.

FAQ content should answer practical buyer questions:

- How is MaintGrid different from a normal CMMS?
- Can MaintGrid work with existing ERP, WMS, or spreadsheets?
- Do teams need sensors or IoT data to use MaintGrid Risk?
- Can MaintGrid track spare parts and vendor lead times?
- Is MaintGrid suitable for multi-site operations?
- Is the platform EU-ready for data and compliance expectations?

FAQ behavior:

- Use polished accordion interactions.
- Keep answers concise and specific.
- Include a CTA after FAQ that routes to the demo page.

### Sign In Page

Must feel complete and polished even without backend.

Include:

- Email/password fields
- SSO option
- Forgot password
- Product visual or trust panel

### Demo Page

Include a realistic request demo form:

- Name
- Work email
- Company
- Industry
- Number of assets
- Current maintenance system
- Message

Form can be frontend-only but should show success state.

### Contact Page

Include credible EU/Poland company details:

- MaintGrid Sp. z o.o.
- 5249 Charles Lane
- Limassol, LIM 3012
- Cyprus
- Phone: 19 268701
- hello@maintgrid.com
- sales@maintgrid.com
- EU operating hours

## Trusted-By Section

Use real company logos only.

Possible logo categories:

- Industrial automation
- Logistics
- Manufacturing
- Facilities
- Warehousing

Use company names only if allowed visually as text/logo-style marks. Do not imply they are real customers. Label section as:

Built for teams operating equipment-heavy sites.

Do not use "Trusted by" unless real customer proof exists.

## Testimonials

Testimonials should be believable but not claim real customers unless clearly fictionalized.

Use realistic names and roles:

- Maintenance Manager, automotive supplier
- Facilities Director, logistics campus
- Reliability Engineer, food production plant

Make outcomes specific:

- Reduced repeat failures
- Improved spare part planning
- Faster MTTR reviews
- Better visibility across sites

## Content Tone

Use clear, specific industrial language.

Good:

- Connect every work order to the asset, part, failure mode, and risk it affects.
- See which missing parts put tomorrow's production plan at risk.
- Turn repeated defects into planned maintenance before downtime spreads.

Avoid:

- Revolutionize your workflow.
- Seamless end-to-end platform.
- AI-powered everything.
- Unlock productivity.
- Generic "all-in-one solution" without specifics.

## Technical Stack

Use:

- Static HTML
- Plain CSS
- Plain JavaScript
- CSS variables in `tokens.css`
- GSAP for scroll-triggered animation
- Lucide SVG icons
- Google Fonts: Space Grotesk and Inter

Do not use:

- React
- Next.js
- Tailwind
- A second icon library
- Inline styles except where JavaScript absolutely requires dynamic values

## File Structure

Recommended:

```text
/
  brief.md
  AGENTS.md
  index.html
  orders.html
  risk.html
  parts.html
  pricing.html
  about.html
  contact.html
  signin.html
  demo.html
  assets/
    logo.svg
    logo-icon.svg
    favicon.svg
  css/
    tokens.css
    styles.css
  js/
    main.js
```

## Definition Of Done

The site is complete only when:

- Brand identity is complete.
- Logo and favicon are present.
- No template artifacts exist.
- Homepage follows the story arc.
- All required pages exist.
- Product pages are specific and polished.
- Dashboards look realistic.
- Interactive feature switcher works.
- Forms show frontend success states.
- Navbar dropdowns work on every page.
- Footer exists on every page.
- Desktop layout is polished.
- The site feels like a real EU industrial SaaS startup.

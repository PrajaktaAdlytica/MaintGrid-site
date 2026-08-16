const products = [
  ["orders.html", "clipboard-list", "MaintGrid Orders", "Plan, assign, approve, and close asset-linked work."],
  ["risk.html", "activity", "MaintGrid Risk", "Rank issues by criticality, recurrence, and downtime exposure."],
  ["parts.html", "boxes", "MaintGrid Parts", "Track spares, stock, lead times, and asset relationships."],
  ["index.html#platform", "network", "Platform", "See the connected operating layer behind the suite."]
];

const solutions = [
  ["index.html#factories", "factory", "Factories", "Protect production-critical lines and machines."],
  ["index.html#warehouses", "warehouse", "Warehouses", "Reduce conveyor, dock, and fulfillment downtime."],
  ["index.html#facilities", "building-2", "Facilities", "Coordinate service, vendors, and compliance tasks."],
  ["index.html#maintenance-teams", "hard-hat", "Maintenance Teams", "Give planners and technicians one shared context."]
];

const siteRoot = document.body.dataset.root || "";

function localHref(href) {
  if (/^(?:https?:|mailto:|tel:|#)/.test(href)) return href;
  return `${siteRoot}${href}`;
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function dropdown(items, eyebrow) {
  return `
    <div class="dropdown" role="menu">
      <div class="dropdown-eyebrow">${eyebrow}</div>
      ${items.map(([href, iconName, title, desc]) => `
        <a href="${localHref(href)}" role="menuitem">
          <i>${icon(iconName)}</i>
          <span><strong>${title}</strong><span>${desc}</span></span>
        </a>
      `).join("")}
    </div>
  `;
}

function injectHeader() {
  const mount = document.querySelector("#site-header");
  if (!mount) return;
  const page = document.body.dataset.page || "";
  mount.innerHTML = `
    <header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="${localHref("index.html")}" aria-label="MaintGrid home">
          <img class="brand-mark" src="${localHref("assets/logo-icon.svg")}" alt="" />
          <span>MaintGrid</span>
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <button class="nav-trigger" type="button">Product ${icon("chevron-down")}</button>
            ${dropdown(products, "Connected maintenance modules")}
          </div>
          <div class="nav-item">
            <button class="nav-trigger" type="button">Solutions ${icon("chevron-down")}</button>
            ${dropdown(solutions, "Built for equipment-heavy operations")}
          </div>
          <a class="nav-link ${page === "pricing" ? "active" : ""}" href="${localHref("pricing.html")}">Pricing</a>
          <a class="nav-link ${page === "news" ? "active" : ""}" href="${localHref("news/funding-announcement.html")}">News</a>
          <a class="nav-link ${page === "about" ? "active" : ""}" href="${localHref("about.html")}">About</a>
          <a class="nav-link ${page === "contact" ? "active" : ""}" href="${localHref("contact.html")}">Contact</a>
        </div>
        <div class="nav-actions">
          <a class="btn nav-news-compact ${page === "news" ? "active" : ""}" href="${localHref("news/funding-announcement.html")}">News</a>
          <a class="btn" href="${localHref("signin.html")}">${icon("log-in")} Sign In</a>
          <a class="btn btn-primary" href="${localHref("demo.html")}">${icon("rocket")} Demo</a>
        </div>
      </nav>
    </header>
  `;
}

function injectFooter() {
  const mount = document.querySelector("#site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="${localHref("index.html")}">
              <img class="brand-mark" src="${localHref("assets/logo-icon.svg")}" alt="" />
              <span>MaintGrid</span>
            </a>
            <p>5249 Charles Lane<br>Limassol, LIM 3012<br>Cyprus<br>Phone: 19 268701<br>hello@maintgrid.com<br>sales@maintgrid.com<br>Mon-Fri, 09:00-18:00 CET</p>
            <div class="footer-credibility" aria-label="Company funding record">
              <span>${icon("badge-check")} Backed by Dlabs</span>
              <strong>$555K funding</strong>
              <a href="https://d-labs-site.vercel.app/companies" target="_blank" rel="noreferrer noopener">Dlabs portfolio ${icon("arrow-up-right")}</a>
            </div>
            <div class="socials">
              <a href="https://www.linkedin.com/company/maintgrid/" target="_blank" rel="noreferrer noopener" aria-label="MaintGrid on LinkedIn">${icon("link")}</a>
              <a href="https://www.crunchbase.com/organization/maintgrid" target="_blank" rel="noreferrer noopener" aria-label="MaintGrid on Crunchbase">${icon("database")}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Product</h4>
            <a href="${localHref("orders.html")}">MaintGrid Orders</a>
            <a href="${localHref("risk.html")}">MaintGrid Risk</a>
            <a href="${localHref("parts.html")}">MaintGrid Parts</a>
            <a href="${localHref("index.html#platform")}">Platform</a>
            <a href="${localHref("pricing.html")}">Pricing</a>
          </div>
          <div class="footer-col">
            <h4>Solutions</h4>
            <a href="${localHref("index.html#factories")}">Factories</a>
            <a href="${localHref("index.html#warehouses")}">Warehouses</a>
            <a href="${localHref("index.html#facilities")}">Facilities</a>
            <a href="${localHref("index.html#maintenance-teams")}">Maintenance Teams</a>
            <a href="${localHref("parts.html")}">Spare Parts Teams</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="${localHref("about.html")}">About</a>
            <a href="${localHref("news/funding-announcement.html")}">Funding announcement</a>
            <a href="${localHref("contact.html")}">Contact</a>
            <a href="${localHref("demo.html")}">Request Demo</a>
            <a href="${localHref("signin.html")}">Sign In</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="${localHref("privacy.html")}">Privacy</a>
            <a href="${localHref("terms.html")}">Terms</a>
            <a href="${localHref("security.html")}">Security</a>
            <a href="${localHref("dpa.html")}">Data Processing</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 MaintGrid Sp. z o.o. All rights reserved.</span>
          <span>Built in Europe for maintenance teams operating critical sites.</span>
        </div>
      </div>
    </footer>
  `;
}

const switcherData = {
  defect: {
    title: "Defect linked to asset, shift, and failure mode.",
    body: "Capture what failed, where it happened, who reported it, and which prior incidents look similar.",
    rows: [["Conveyor M-204", "Belt drift", "Repeat"], ["HVAC AHU-09", "Bearing noise", "New"], ["Sorter S-18", "Jam sensor", "Risk"]],
    bars: [42, 68, 34, 76, 58, 88]
  },
  order: {
    title: "Work planned with priority, owner, and parts.",
    body: "Assign technicians, set service windows, add approvals, and keep every task tied to the asset record.",
    rows: [["WO-1048", "Marta K.", "Ready"], ["WO-1051", "Piotr W.", "Part wait"], ["WO-1056", "Vendor", "Approve"]],
    bars: [66, 52, 72, 38, 44, 60]
  },
  parts: {
    title: "Parts availability shown before the job starts.",
    body: "See stock level, lead time, vendor, reserved quantity, and which assets depend on the part.",
    rows: [["Drive belt A-72", "2 in stock", "Critical"], ["Bearing 6205", "18 in stock", "Ok"], ["PLC module", "9 day lead", "Watch"]],
    bars: [28, 86, 46, 62, 22, 74]
  },
  history: {
    title: "Every repair strengthens the asset record.",
    body: "Review previous work, failure modes, part usage, cost, downtime, and repeat issues in one timeline.",
    rows: [["Mar 18", "Belt replaced", "€420"], ["May 04", "Alignment", "2.1h"], ["Jul 09", "Repeat drift", "Open"]],
    bars: [24, 36, 42, 58, 74, 92]
  },
  risk: {
    title: "Risk updates as work, parts, and failures change.",
    body: "Prioritize jobs by downtime exposure, safety risk, recurrence, and production dependency.",
    rows: [["M-204", "87 risk", "Today"], ["S-18", "72 risk", "24h"], ["AHU-09", "64 risk", "Plan"]],
    bars: [82, 70, 66, 44, 38, 28]
  },
  data: {
    title: "Maintenance performance becomes measurable.",
    body: "Track MTTR, repeat defects, planned vs reactive work, stockouts, and asset downtime.",
    rows: [["MTTR", "3.8h", "-24%"], ["Repeat defects", "11", "-35%"], ["Stockouts", "4", "-18%"]],
    bars: [48, 52, 62, 70, 78, 88]
  }
};

const testimonials = [
  {
    quote: "The biggest change is context. We can see the work order, the part, the asset history, and the risk in one place before the shift starts.",
    name: "Marek Nowak",
    role: "Maintenance Manager, automotive supplier"
  },
  {
    quote: "MaintGrid makes recurring issues visible. We spend less time searching through notes and more time planning the next action.",
    name: "Elena Kovacs",
    role: "Facilities Director, logistics campus"
  },
  {
    quote: "The risk view gives us a practical way to decide which assets need attention before they interrupt production.",
    name: "Tomasz Zielinski",
    role: "Reliability Engineer, food production plant"
  }
];

function setupDropdowns() {
  document.querySelectorAll(".nav-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".nav-item");
      document.querySelectorAll(".nav-item.open").forEach((open) => {
        if (open !== item) open.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });
}

function setupSwitcher() {
  const panel = document.querySelector("[data-switch-panel]");
  if (!panel) return;
  const title = panel.querySelector("[data-switch-title]");
  const body = panel.querySelector("[data-switch-body]");
  const rows = panel.querySelector("[data-switch-rows]");
  const bars = panel.querySelector("[data-switch-bars]");

  function render(key) {
    const data = switcherData[key];
    title.textContent = data.title;
    body.textContent = data.body;
    rows.innerHTML = data.rows.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td><span class="status ${row[2].toLowerCase().includes("risk") || row[2].toLowerCase().includes("critical") ? "risk" : row[2].toLowerCase().includes("wait") || row[2].toLowerCase().includes("watch") ? "warn" : "good"}">${row[2]}</span></td></tr>`).join("");
    bars.innerHTML = data.bars.map((value) => `<span style="height:${value}%"></span>`).join("");
    if (window.gsap) {
      gsap.fromTo(panel, { opacity: 0.72, y: 8 }, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" });
    }
  }

  document.querySelectorAll("[data-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-switch]").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      render(button.dataset.switch);
    });
  });

  render("defect");
}

function setupPricingToggle() {
  const shell = document.querySelector("[data-pricing]");
  if (!shell) return;
  const prices = {
    monthly: ["€890", "€1,900", "Custom"],
    yearly: ["€790", "€1,690", "Custom"]
  };

  shell.querySelectorAll("[data-billing]").forEach((button) => {
    button.addEventListener("click", () => {
      shell.querySelectorAll("[data-billing]").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      shell.querySelectorAll("[data-price]").forEach((price, index) => {
        price.textContent = prices[button.dataset.billing][index];
      });
    });
  });
}

function setupFAQ() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      item.classList.toggle("open");
    });
  });
}

function setupForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const success = form.querySelector(".success-message") || form.nextElementSibling;
      if (success) success.classList.add("show");
      form.reset();
    });
  });
}

function setupTestimonials() {
  const shell = document.querySelector("[data-testimonial]");
  if (!shell) return;
  let index = 0;
  const quote = shell.querySelector("[data-quote]");
  const name = shell.querySelector("[data-name]");
  const role = shell.querySelector("[data-role]");

  function render(nextIndex) {
    index = (nextIndex + testimonials.length) % testimonials.length;
    const item = testimonials[index];
    if (window.gsap) {
      gsap.to([quote, name, role], {
        opacity: 0.28,
        y: 8,
        duration: 0.12,
        ease: "power2.out",
        onComplete: () => {
          quote.textContent = item.quote;
          name.textContent = item.name;
          role.textContent = item.role;
          gsap.fromTo([quote, name, role], { opacity: 0.28, y: 8 }, { opacity: 1, y: 0, duration: 0.28, stagger: 0.04, ease: "power2.out" });
        }
      });
    } else {
      quote.textContent = item.quote;
      name.textContent = item.name;
      role.textContent = item.role;
    }
  }

  shell.querySelector("[data-prev]").addEventListener("click", () => render(index - 1));
  shell.querySelector("[data-next]").addEventListener("click", () => render(index + 1));

  if (window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: shell,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const next = Math.round(self.progress * (testimonials.length - 1));
        if (next !== index) render(next);
      }
    });
  }
}

function setupEntrySequence() {
  const root = document.querySelector("[data-entry-sequence]");
  if (!root) return;

  const scenes = [
    {
      asset: "MOTOR M-204",
      status: "Inspecting vibration",
      detail: "Signal is linked to the asset record and current shift.",
      metricLabel: "Vibration",
      metric: "2.8 mm/s",
      context: "Asset history",
      caption: "Asset signal connected"
    },
    {
      asset: "WO-1051",
      status: "Work order created",
      detail: "Priority, service window, and technician are connected.",
      metricLabel: "Priority",
      metric: "Critical",
      context: "Marta K.",
      caption: "Owner and service window connected"
    },
    {
      asset: "PART 6205",
      status: "Critical part reserved",
      detail: "Stock, location, and asset dependency are confirmed.",
      metricLabel: "Available",
      metric: "18 units",
      context: "Bin B-14",
      caption: "Part availability connected"
    },
    {
      asset: "LINE A",
      status: "Production risk updated",
      detail: "The maintenance plan now protects the next shift.",
      metricLabel: "Risk score",
      metric: "87 → 28",
      context: "Shift ready",
      caption: "Operational risk connected"
    }
  ];

  const steps = [...root.querySelectorAll("[data-entry-step]")];
  const media = [...root.querySelectorAll("[data-entry-media]")];
  const pauseButton = root.querySelector("[data-entry-pause]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let active = 0;
  let paused = reducedMotion;
  let completed = false;
  let timer;

  const fields = {
    count: root.querySelector("[data-entry-count]"),
    asset: root.querySelector("[data-entry-asset]"),
    status: root.querySelector("[data-entry-status]"),
    detail: root.querySelector("[data-entry-detail]"),
    metricLabel: root.querySelector("[data-entry-metric-label]"),
    metric: root.querySelector("[data-entry-metric]"),
    context: root.querySelector("[data-entry-context]"),
    caption: root.querySelector("[data-entry-caption]"),
    progress: root.querySelector("[data-entry-progress]")
  };

  function syncMedia(index) {
    media.forEach((item, itemIndex) => {
      item.classList.toggle("active", itemIndex === index);
    });
  }

  function applyState(index) {
    active = (index + scenes.length) % scenes.length;
    const scene = scenes[active];

    steps.forEach((step, stepIndex) => {
      const isOn = stepIndex <= active;
      step.classList.toggle("is-on", isOn);
      step.classList.toggle("active", stepIndex === active);
      step.setAttribute("aria-pressed", String(isOn));
    });

    fields.count.textContent = String(active + 1).padStart(2, "0");
    fields.asset.textContent = scene.asset;
    fields.status.textContent = scene.status;
    fields.detail.textContent = scene.detail;
    fields.metricLabel.textContent = scene.metricLabel;
    fields.metric.textContent = scene.metric;
    fields.context.textContent = scene.context;
    fields.caption.textContent = scene.caption;
    fields.progress.style.width = `${((active + 1) / scenes.length) * 100}%`;

    if (active === scenes.length - 1) completed = true;
    root.classList.toggle("is-complete", completed);
    syncMedia(active);
  }

  function schedule(delay = 2700) {
    window.clearTimeout(timer);
    if (paused || reducedMotion) return;
    timer = window.setTimeout(() => {
      applyState(active === scenes.length - 1 ? 0 : active + 1);
      schedule(active === scenes.length - 1 ? 4300 : 2700);
    }, delay);
  }

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      paused = true;
      window.clearTimeout(timer);
      pauseButton.classList.add("paused");
      pauseButton.setAttribute("aria-label", "Play sequence");
      pauseButton.setAttribute("title", "Play sequence");
      applyState(Number(step.dataset.entryStep));
    });
  });

  pauseButton.addEventListener("click", () => {
    paused = !paused;
    pauseButton.classList.toggle("paused", paused);
    pauseButton.setAttribute("aria-label", paused ? "Play sequence" : "Pause sequence");
    pauseButton.setAttribute("title", paused ? "Play sequence" : "Pause sequence");
    if (paused) {
      window.clearTimeout(timer);
    } else {
      schedule(700);
    }
  });

  root.querySelectorAll("[data-entry-exit]").forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("entry-view");
      window.clearTimeout(timer);
      document.querySelector("#home-hero")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    });
  });

  const observer = new IntersectionObserver(([entry]) => {
    const entryVisible = entry.isIntersecting && entry.intersectionRatio > 0.35;
    document.body.classList.toggle("entry-view", entryVisible);
  }, { threshold: [0, 0.35, 0.6] });
  observer.observe(root);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearTimeout(timer);
    } else if (!paused) {
      schedule(1000);
    }
  });

  if (window.location.hash && window.location.hash !== "#top") {
    document.body.classList.remove("entry-view");
  }

  applyState(0);
  pauseButton.classList.toggle("paused", paused);
  schedule();
}

function setupGSAP() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("main > .section, main > .section-compact").forEach((section) => {
    const content = section.querySelector(".container, .wide-container, .marquee");
    if (!content) return;
    gsap.fromTo(content, { opacity: 0.86, y: 18 }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 86%", once: true }
    });
  });

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 24 }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 84%", once: true }
    });
  });

  gsap.utils.toArray(".stagger").forEach((group) => {
    gsap.fromTo(group.children, { opacity: 0, y: 28 }, {
      opacity: 1,
      y: 0,
      duration: 0.78,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: group, start: "top 82%", once: true }
    });
  });

  ScrollTrigger.batch(".logo-brand", {
    start: "top 88%",
    once: true,
    onEnter: (batch) => gsap.fromTo(batch, { opacity: 0, y: 18 }, {
      opacity: 1,
      y: 0,
      duration: 0.58,
      stagger: 0.05,
      ease: "power3.out"
    })
  });

  gsap.utils.toArray(".use-visual, .impact-visual").forEach((visual) => {
    gsap.fromTo(visual, { opacity: 0, scale: 0.96, y: 16 }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.82,
      ease: "power3.out",
      scrollTrigger: { trigger: visual.closest(".motion-card") || visual, start: "top 82%", once: true }
    });
  });

  gsap.utils.toArray(".mttr-visual [data-bar]").forEach((bar) => {
    gsap.fromTo(bar, { scaleY: 0.18 }, {
      scaleY: 1,
      duration: 0.88,
      ease: "power3.out",
      scrollTrigger: { trigger: bar.closest(".metric-card"), start: "top 82%", once: true }
    });
  });

  gsap.utils.toArray(".mini-row, .stock-card").forEach((item, i) => {
    gsap.fromTo(item, { opacity: 0, x: -12 }, {
      opacity: 1,
      x: 0,
      duration: 0.48,
      delay: (i % 3) * 0.06,
      ease: "power2.out",
      scrollTrigger: { trigger: item.closest(".motion-card") || item, start: "top 82%", once: true }
    });
  });

  gsap.utils.toArray(".map-node, .radial-node").forEach((node, i) => {
    gsap.from(node, {
      opacity: 0,
      scale: 0.88,
      duration: 0.72,
      delay: i * 0.04,
      ease: "power3.out",
      scrollTrigger: { trigger: node.closest(".grid-surface") || node, start: "top 78%", once: true }
    });
  });

  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    gsap.to(el, {
      y: -48,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section"),
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
  setupEntrySequence();
  setupDropdowns();
  setupSwitcher();
  setupPricingToggle();
  setupFAQ();
  setupForms();
  setupTestimonials();
  setupGSAP();
  if (window.lucide) {
    lucide.createIcons();
  }
});

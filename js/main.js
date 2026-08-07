/* ============================================================
   MAIN — Renders content from js/data.js, theme toggle,
   internship photo lightbox, mobile menu, and scroll animation.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Render: Hero ---------- */
  function renderProfile() {
    const p = PORTFOLIO.profile;

    document.title = `${p.name} — ${p.tagline}`;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.metaDescription || p.bio);

    $("#hero-root").innerHTML = `
      <div class="hero-grid">
        <div class="hero-inner">
          <br>
          <h1 class="hero-name reveal">${esc(p.name)}</h1>
          <p class="hero-role reveal">${esc(p.tagline)}</p>
          <p class="hero-bio reveal">${esc(p.bio)}</p>
          <div class="hero-cta reveal">
            <a href="#projects" class="btn btn-primary btn-lg">View Projects</a>
            <a href="${esc(p.resume)}" class="btn btn-accent btn-lg" target="_blank" rel="noopener">📄 Download CV</a>
          </div>
          <div class="hero-socials reveal">
            <a class="btn btn-outline btn-sm icon-only" href="${esc(p.socials.github)}" target="_blank" rel="noopener" aria-label="GitHub">${svgGithub()}</a>
            <a class="btn btn-outline btn-sm icon-only" href="${esc(p.socials.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${svgLinkedin()}</a>
            <a class="btn btn-outline btn-sm icon-only" href="${esc(p.socials.email)}" aria-label="Email">${svgMail()}</a>
            <a class="btn btn-outline btn-sm icon-only" href="${esc(p.socials.gdrive)}" target="_blank" rel="noopener" aria-label="Certificates on Google Drive">${svgFolder()}</a>
          </div>
          <p class="hero-location reveal">${esc(p.location)}</p>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-photo">
            <img src="${esc(p.photo)}" alt="Profile photo of ${esc(p.name)}" onerror="this.parentElement.classList.add('photo-fallback')">
          </div>
        </div>
      </div>`;

    const fe = $("#footer-email");
    if (fe) fe.href = p.socials.email;
    const fcv = $("#footer-cv");
    if (fcv) fcv.href = p.resume;
    const fli = $("#footer-linkedin");
    if (fli) fli.href = p.socials.linkedin;
    const fgh = $("#footer-github");
    if (fgh) fgh.href = p.socials.github;
    const navCv = $("#nav-cv");
    if (navCv) navCv.href = p.resume;

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Render: Projects ---------- */
  const PROJECT_LIMIT = 3;

  function renderProjects() {
    const root = $("#projects-root");
    const all = PORTFOLIO.projects;
    const hasMore = all.length > PROJECT_LIMIT;

    root.innerHTML = all
      .map((proj, i) => {
        const grad = `grad-${i % 5}`;
        const hidden = hasMore && i >= PROJECT_LIMIT ? " is-hidden" : "";
        const thumb = proj.image
          ? `<div class="project-thumb ${grad}">
               <img src="${esc(proj.image)}" alt="${esc(proj.title)}" loading="lazy"
                    onerror="this.parentElement.classList.add('thumb-fallback')">
             </div>`
          : `<div class="project-thumb ${grad} thumb-fallback">${proj.emoji || "📦"}</div>`;

        const links = projectLinks(proj);
        const actions = links.length
          ? `<div class="card-actions">
               ${links
                 .map(
                   (l, j) => `<a href="${esc(l.url)}" class="btn ${j === 0 ? "btn-primary" : "btn-outline"} btn-sm" target="_blank" rel="noopener">
                     ${linkIcon(l.type)}<span>${esc(l.label)}</span>
                   </a>`
                 )
                 .join("")}
             </div>`
          : "";

        return `
          <article class="card project-card reveal${hidden}" data-index="${i}" data-id="${esc(proj.id)}" role="link" tabindex="0" aria-label="View details: ${esc(proj.title)}">
            ${thumb}
            <div class="project-body">
              <h3 class="project-title">${esc(proj.title)}</h3>
              <p class="project-summary">${esc(proj.summary)}</p>
              <div class="tag-row">
                ${proj.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
              </div>
              ${actions}
            </div>
          </article>`;
      })
      .join("");

    /* Clicking the card (outside link buttons) → opens the project detail page */
    root.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      if (e.target.closest("a")) return;
      window.location.href = `project.html?id=${encodeURIComponent(card.dataset.id)}`;
    });

    root.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".project-card");
      if (!card) return;
      e.preventDefault();
      window.location.href = `project.html?id=${encodeURIComponent(card.dataset.id)}`;
    });

    if (hasMore) {
      const wrap = document.createElement("div");
      wrap.className = "show-all-wrap reveal";
      wrap.innerHTML = `<button class="btn btn-outline show-all-btn" id="projects-toggle" type="button" aria-expanded="false">
        <span>View All Projects</span>${svgChevronDown()}
      </button>`;
      root.after(wrap);

      const btn = $("#projects-toggle");
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        root.querySelectorAll(".project-card").forEach((c) => {
          if (Number(c.dataset.index) >= PROJECT_LIMIT) {
            c.classList.toggle("is-hidden", expanded);
          }
        });
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
        btn.classList.toggle("is-open", !expanded);
        btn.querySelector("span").textContent = expanded ? "View All Projects" : "Show Less";
      });
    }
  }

  /* ---------- Render: Experience ---------- */
  function renderExperience() {
    const root = $("#experience-root");
    root.innerHTML = PORTFOLIO.experience
      .map((exp) => {
        const gallery =
          exp.photos && exp.photos.length
            ? `<div class="exp-gallery">
                 <p class="gallery-label">📷 Internship Photo Gallery / Documentation</p>
                 <div class="gallery-grid">
                   ${exp.photos
                     .map(
                       (ph, i) => `
                       <button class="gallery-item" type="button" data-exp="${esc(exp.id)}" data-index="${i}"
                               aria-label="View photo: ${esc(ph.caption)}">
                         <img src="${esc(ph.src)}" alt="${esc(ph.caption)}" loading="lazy"
                              onerror="this.parentElement.classList.add('photo-fallback')">
                         <span class="gallery-zoom">${svgZoom()}</span>
                       </button>`
                     )
                     .join("")}
                 </div>
               </div>`
            : "";

        return `
          <article class="card exp-item reveal">
            <div class="exp-head">
              <div>
                <h3 class="exp-role">${esc(exp.role)}</h3>
                <p class="exp-company">${esc(exp.company)}${exp.location ? ` · ${esc(exp.location)}` : ""}</p>
              </div>
              <span class="exp-period">${esc(exp.period)}</span>
            </div>
            <ul class="exp-points">
              ${exp.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}
            </ul>
            ${gallery}
          </article>`;
      })
      .join("");
  }

  /* ---------- Render: Certificates ---------- */
  function renderCertificates() {
    const p = PORTFOLIO.profile;
    const root = $("#certificates-root");

    root.innerHTML = `
      <div class="banner reveal">
        <div class="banner-inner">
          <h3 class="banner-title">📁 All Certificates &amp; Complete Credentials</h3>
          <p class="banner-text">All certificates, transcripts, and supporting documents are neatly stored on Google Drive — freely accessible anytime.</p>
          <div class="banner-actions">
            <a href="${esc(p.socials.gdrive)}" class="btn btn-banner-primary" target="_blank" rel="noopener">📁 View All Certificates on Google Drive</a>
            <a href="${esc(p.resume)}" class="btn btn-banner-ghost" target="_blank" rel="noopener">📄 Download Latest CV / Resume (PDF)</a>
          </div>
        </div>
      </div>
      <div class="grid-certs">
        ${PORTFOLIO.certificates
          .map(
            (c) => `
          <a class="cert-card reveal" href="${esc(c.link)}" target="_blank" rel="noopener">
            <span class="cert-emoji">${c.emoji || "📜"}</span>
            <span class="cert-title">${esc(c.title)}</span>
            <span class="cert-meta">${esc(c.issuer)} · ${esc(c.year)}</span>
            <span class="cert-arrow">${svgArrow()}</span>
          </a>`
          )
          .join("")}
      </div>`;
  }

  /* ---------- Render: Skills ---------- */
  function svgDatabase() {
    return `<svg class="skill-icon skill-icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`;
  }

  function svgApi() {
    return `<svg class="skill-icon skill-icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="m7 7 3 9M17 7l-3 9M5 8v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/></svg>`;
  }

  function skillIconColor() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "f1f5f9" : "";
  }

  function skillSrc(slug) {
    const color = skillIconColor();
    return `https://cdn.simpleicons.org/${slug}${color ? "/" + color : ""}`;
  }

  function skillIconHtml(s) {
    const name = typeof s === "string" ? s : s.name || "";
    const slug = typeof s === "string" ? "" : s.icon || "";
    if (!slug) return /sql/i.test(name) ? svgDatabase() : svgApi();
    const isUrl = /^https?:\/\//.test(slug);
    const extra = isUrl ? "" : ` data-icon="${esc(slug)}"`;
    const src = isUrl ? slug : skillSrc(slug);
    return `<img class="skill-icon"${extra} src="${esc(src)}" alt="${esc(name)}" loading="lazy">`;
  }

  function renderSkills() {
    const groups = [
      { title: "Languages", icon: "💻", items: PORTFOLIO.skills.languages },
      {
        title: "Frameworks & Databases",
        icon: "🗄️",
        items: [...PORTFOLIO.skills.frameworks, ...PORTFOLIO.skills.databases]
      },
      { title: "Tools", icon: "🛠️", items: PORTFOLIO.skills.tools }
    ];

    const root = $("#skills-root");
    root.innerHTML = groups
      .map(
        (g) => `
        <div class="card skill-group reveal">
          <h3 class="skill-title">${g.icon} ${esc(g.title)}</h3>
          <div class="skill-grid">
            ${g.items
              .map((s) => {
                const name = typeof s === "string" ? s : s.name;
                return `<div class="skill-tile" title="${esc(name)}">
                  <span class="skill-icon-wrap">${skillIconHtml(s)}</span>
                  <span class="skill-name">${esc(name)}</span>
                </div>`;
              })
              .join("")}
          </div>
        </div>`
      )
      .join("");

    $$(".skill-icon").forEach((img) => {
      img.onerror = () => {
        const fallback = /sql/i.test(img.alt || "") ? svgDatabase() : svgApi();
        const tmp = document.createElement("div");
        tmp.innerHTML = fallback;
        const svg = tmp.firstChild;
        if (svg && img.parentNode) img.parentNode.replaceChild(svg, img);
      };
    });

    document.addEventListener("themechange", recolorSkillIcons);
  }

  function recolorSkillIcons() {
    $$(".skill-icon").forEach((img) => {
      const slug = img.dataset.icon;
      if (slug) img.src = skillSrc(slug);
    });
  }

  /* ---------- Lightbox ---------- */
  let lbList = [];
  let lbIndex = 0;

  function setupLightbox() {
    const lb = $("#lightbox");
    const img = $("#lightbox-img");
    const cap = $("#lightbox-caption");
    const closeBtn = $("#lightbox-close");
    const prevBtn = $("#lightbox-prev");
    const nextBtn = $("#lightbox-next");

    function render() {
      const item = lbList[lbIndex];
      if (!item) return;
      img.src = item.src;
      img.alt = item.caption;
      img.classList.remove("lightbox-fallback");
      img.onerror = function () {
        this.classList.add("lightbox-fallback");
      };
      cap.textContent = item.caption;
      prevBtn.style.visibility = lbList.length > 1 ? "visible" : "hidden";
      nextBtn.style.visibility = lbList.length > 1 ? "visible" : "hidden";
    }

    function open(list, index) {
      lbList = list;
      lbIndex = index;
      render();
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      img.removeAttribute("src");
    }

    function step(delta) {
      if (!lbList.length) return;
      lbIndex = (lbIndex + delta + lbList.length) % lbList.length;
      render();
    }

    closeBtn.addEventListener("click", close);
    $("#lightbox-backdrop").addEventListener("click", close);
    prevBtn.addEventListener("click", () => step(-1));
    nextBtn.addEventListener("click", () => step(1));

    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    $("#experience-root").addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-item");
      if (!btn) return;
      const exp = PORTFOLIO.experience.find((x) => String(x.id) === btn.dataset.exp);
      if (exp && exp.photos && exp.photos.length) {
        open(exp.photos, Number(btn.dataset.index));
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderProfile();
    renderProjects();
    renderExperience();
    renderCertificates();
    renderSkills();
    setupLightbox();
    setupMenu();
    setupReveal();
    bindThemeToggles();
  });
})();

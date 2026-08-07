(function () {
  "use strict";

  function getProject() {
    const raw = new URLSearchParams(window.location.search).get("id");
    return PORTFOLIO.projects.find((p) => String(p.id) === String(raw));
  }

  function renderProject() {
    const root = $("#project-root");
    const project = getProject();

    if (!project) {
      document.title = "Project Not Found — Wira Fadhil";
      root.innerHTML = `
        <div class="detail-notfound reveal">
          <p class="detail-notfound-emoji">🔍</p>
          <h1 class="detail-title">Project Not Found</h1>
          <p>This project link may have changed, or the ID is invalid.</p>
          <a href="index.html#projects" class="btn btn-primary">${svgArrowLeft()}<span>Back to Projects</span></a>
        </div>`;
      return;
    }

    document.title = `${project.title} — Wira Fadhil`;

    const links = projectLinks(project);
    const linkBtns = links.length
      ? `<div class="detail-links">
           ${links
             .map(
               (l) => `<a href="${esc(l.url)}" class="btn btn-primary" target="_blank" rel="noopener">
                 ${linkIcon(l.type)}<span>${esc(l.label)}</span>
               </a>`
             )
             .join("")}
         </div>`
      : "";

    const thumb = project.image
      ? `<div class="detail-thumb reveal">
           <img src="${esc(project.image)}" alt="${esc(project.title)}" onerror="this.parentElement.classList.add('thumb-fallback')">
         </div>`
      : `<div class="detail-thumb thumb-fallback reveal">${project.emoji || "📦"}</div>`;

    const desc =
      Array.isArray(project.description) && project.description.length
        ? `<section class="detail-section reveal">
             <h2>About the Project</h2>
             ${project.description.map((par) => `<p>${esc(par)}</p>`).join("")}
           </section>`
        : "";

    const highlights =
      Array.isArray(project.highlights) && project.highlights.length
        ? `<section class="detail-section reveal">
             <h2>Features &amp; Highlights</h2>
             <ul class="detail-highlights">
               ${project.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
             </ul>
           </section>`
        : "";

    const meta = [project.role, project.year].filter(Boolean).join(" · ");

    root.innerHTML = `
      <div class="detail-head reveal">
        <a href="index.html#projects" class="back-link">${svgArrowLeft()}<span>Back to Projects</span></a>
        ${meta ? `<p class="detail-meta">${esc(meta)}</p>` : ""}
        <h1 class="detail-title">${esc(project.title)}</h1>
        <p class="detail-summary">${esc(project.summary)}</p>
        <div class="tag-row">
          ${project.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>
        ${linkBtns}
      </div>
      ${thumb}
      ${desc}
      ${highlights}
      <div class="detail-other reveal">
        <a href="index.html#projects" class="btn btn-outline btn-lg">${svgArrowLeft()}<span>View All Projects</span></a>
        <a href="index.html#contact" class="btn btn-accent btn-lg">✉️ Contact Me</a>
      </div>`;
  }

  function fillFooter() {
    const p = PORTFOLIO.profile;
    const email = $("#footer-email");
    const cv = $("#footer-cv");
    const li = $("#footer-linkedin");
    const gh = $("#footer-github");
    const year = $("#year");
    if (email) email.href = p.socials.email;
    if (cv) cv.href = p.resume;
    if (li) li.href = p.socials.linkedin;
    if (gh) gh.href = p.socials.github;
    if (year) year.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderProject();
    fillFooter();
    setupMenu();
    setupReveal();
    bindThemeToggles();
  });
})();

async function loadComponent(id, file) {
  const res = await fetch(file)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

loadComponent("meta","components/00-meta.html")
loadComponent("styles","components/01-styles.html")
loadComponent("nav","components/02-nav.html")
loadComponent("hero","components/03-hero.html")
loadComponent("trust","components/04-trust-bar.html")
loadComponent("services","components/05-services.html")
loadComponent("who","components/06-who-we-serve.html")
loadComponent("philosophy","components/07-philosophy.html")
loadComponent("portfolio","components/08-portfolio.html")
loadComponent("cases","components/09-case-studies.html")
loadComponent("proof","components/10-proof.html")
loadComponent("process","components/11-process.html")
loadComponent("skills","components/12-skills.html")
loadComponent("pricing","components/13-pricing.html")
loadComponent("faq","components/14-faq.html")
loadComponent("modals","components/15-modals.html")
loadComponent("widgets","components/16-widgets.html")
loadComponent("scripts","components/17-scripts.html")

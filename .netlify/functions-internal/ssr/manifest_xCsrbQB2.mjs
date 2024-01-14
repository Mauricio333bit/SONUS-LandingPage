import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_tQrVra7f.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"localStorage.getItem(\"color-theme\")===\"dark\"||!(\"color-theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");class i{filtersSelector=\".cs-button\";galleriesSelector=\".cs-gallery\";activeClass=\"cs-active\";hiddenClass=\"cs-hidden\";constructor(){this.$galleries=document.querySelectorAll(this.galleriesSelector);const e=document.querySelectorAll(this.filtersSelector);this.onClick(e[0]);for(const o of e)o.addEventListener(\"click\",()=>this.onClick(o))}onClick(e){this.filter(e.dataset.filter);const{activeClass:o}=this;this.$activeFilter?.classList.remove(o),e.classList.add(o),this.$activeFilter=e}filter(e){const o=e==\"all\",{hiddenClass:r}=this;for(const c of this.$galleries){const n=o||c.dataset.category==e;c.classList.toggle(r,!n)}}}new i;var d=document.querySelector(\"body\");const m=document.querySelector(\"#cs-navigation\"),l=document.querySelector(\"#cs-navigation .cs-toggle\");l.addEventListener(\"click\",function(){l.classList.toggle(\"cs-active\"),m.classList.toggle(\"cs-active\"),d.classList.toggle(\"cs-open\"),g()});function g(){const t=document.querySelector(\"#cs-expanded\");t.getAttribute(\"aria-expanded\")===\"false\"?t.setAttribute(\"aria-expanded\",\"true\"):t.setAttribute(\"aria-expanded\",\"false\")}document.addEventListener(\"scroll\",t=>{document.documentElement.scrollTop>=100?document.querySelector(\"body\").classList.add(\"scroll\"):document.querySelector(\"body\").classList.remove(\"scroll\")});const u=Array.from(document.querySelectorAll(\"#cs-navigation .cs-dropdown\"));for(const t of u){const e=()=>{t.classList.toggle(\"cs-active\")};t.addEventListener(\"click\",e)}var s=document.getElementById(\"theme-toggle-dark-icon\"),a=document.getElementById(\"theme-toggle-light-icon\");localStorage.getItem(\"color-theme\")===\"dark\"||!(\"color-theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?a.classList.remove(\"hidden\"):s.classList.remove(\"hidden\");var h=document.getElementById(\"theme-toggle\");h.addEventListener(\"click\",function(){s.classList.toggle(\"hidden\"),a.classList.toggle(\"hidden\"),localStorage.getItem(\"color-theme\")?localStorage.getItem(\"color-theme\")===\"light\"?(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"color-theme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"color-theme\",\"light\")):document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"color-theme\",\"light\")):(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"color-theme\",\"dark\"))});\n"}],"styles":[{"type":"external","src":"/_astro/index.2NRijkSL.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mauri/Desktop/Sonus.Astro/SonusLP/Sonus-LandingPage/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/../../../../AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_-ue-rFLG.mjs","/src/pages/index.astro":"chunks/pages/index_tZbK3WPP.mjs","\u0000@astrojs-manifest":"manifest_xCsrbQB2.mjs","\u0000@astro-page:../../../../AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_2iHBeCKO.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_X5qcMnEu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.wtTWFJ-X.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/noto-serif-vithkuqi-latin-ext-wght-normal.-MyKONpZ.woff2","/_astro/noto-serif-vithkuqi-vithkuqi-wght-normal.j6KFk7fs.woff2","/_astro/noto-serif-vithkuqi-latin-wght-normal.nOqHTbxM.woff2","/_astro/index.2NRijkSL.css","/academyLAJob1.jpg","/academyLAJob2.jpg","/academyLAJob3.jpg","/academyLaJob4.jpg","/bath.jpg","/bath2.jpg","/bath3.jpg","/bath4.jpg","/brand.jpg","/brand2.jpg","/choise.jpg","/consultation.jpg","/creators.png","/deingEng.jpg","/designer.png","/electrical_solutions.png","/footer.jpg","/funktionSist.jpg","/funktionSist2.jpg","/funktionSist3.jpg","/heroBG.png","/ligth.jpg","/maintenance.jpg","/mission.jpg","/mmonitor.jpg","/ourMission.png","/programing.jpg","/project-man.jpg","/sonnus.svg","/sonnusLogo.svg","/sonnusPlay.svg","/support.jpg","/systemDoc.jpg","/whyUS.jpg","/wire.jpg"]});

export { manifest };

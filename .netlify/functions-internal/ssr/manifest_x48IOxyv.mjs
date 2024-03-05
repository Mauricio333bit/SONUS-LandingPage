import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_tQxh7zJv.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CHsTR4_D.js"}],"styles":[{"type":"external","src":"/_astro/comercialAutomation.HQc1SZmB.css"},{"type":"external","src":"/_astro/index.Il_TMWfa.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Xn_9Ikrl.js"}],"styles":[{"type":"external","src":"/_astro/comercialAutomation.HQc1SZmB.css"},{"type":"inline","content":".parallax-1[data-astro-cid-rqqyypc4]{background:linear-gradient(#00000080,#00000080),url({`${urlImg}`}) repeat fixed 100%}.parallax-1[data-astro-cid-rqqyypc4]{position:relative}\n@import\"https://fonts.googleapis.com/css2?family=Audiowide&display=swap\";html{scroll-behavior:smooth}@media only screen and (min-width: 0rem){.solution[data-astro-cid-o7o4bpp3]{padding:var(--sectionPadding);overflow:hidden}.solution[data-astro-cid-o7o4bpp3] .cs-container[data-astro-cid-o7o4bpp3]{width:100%;max-width:80rem;margin:auto;display:flex;flex-direction:column;align-items:center;gap:clamp(3rem,6vw,4rem)}.solution[data-astro-cid-o7o4bpp3] .cs-content[data-astro-cid-o7o4bpp3]{text-align:left;width:100%;max-width:33.875rem;display:flex;flex-direction:column;align-items:flex-start}.solution[data-astro-cid-o7o4bpp3] .cs-text[data-astro-cid-o7o4bpp3]{margin-bottom:1rem}.solution[data-astro-cid-o7o4bpp3] .cs-text[data-astro-cid-o7o4bpp3]:last-of-type{margin-bottom:2rem}.solution[data-astro-cid-o7o4bpp3] .cs-button-solid[data-astro-cid-o7o4bpp3]{font-size:1rem;line-height:clamp(2.875rem,5.5vw,3.5rem);text-decoration:none;font-weight:700;text-align:center;color:#fff;min-width:9.375rem;padding:0 1.5rem;background-color:var(--primary);border-radius:.25rem;display:inline-block;position:relative;z-index:1;box-sizing:border-box}.solution[data-astro-cid-o7o4bpp3] .cs-button-solid[data-astro-cid-o7o4bpp3]:before{content:\"\";position:absolute;height:100%;width:0%;background:var(--secondary);opacity:1;top:0;left:0;z-index:-1;border-radius:.25rem;transition:width .3s}.solution[data-astro-cid-o7o4bpp3] .cs-button-solid[data-astro-cid-o7o4bpp3]:hover:before{width:100%}.solution[data-astro-cid-o7o4bpp3] .cs-image-group[data-astro-cid-o7o4bpp3]{font-size:min(2.3vw,.75em);width:39.5em;height:51.25em;position:relative;z-index:1}.solution[data-astro-cid-o7o4bpp3] .cs-picture[data-astro-cid-o7o4bpp3]{width:19.125em;height:22.5em;overflow:hidden;display:block;position:absolute;box-shadow:0 0 20px 5px #0006,0 0 60px 10px var(--secondary)}.solution[data-astro-cid-o7o4bpp3] .cs-picture[data-astro-cid-o7o4bpp3] img[data-astro-cid-o7o4bpp3]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0}.solution[data-astro-cid-o7o4bpp3] .cs-picture1[data-astro-cid-o7o4bpp3]{top:5em;left:0}.solution[data-astro-cid-o7o4bpp3] .cs-picture2[data-astro-cid-o7o4bpp3]{top:0;right:0}.solution[data-astro-cid-o7o4bpp3] .cs-picture3[data-astro-cid-o7o4bpp3]{bottom:0;left:0}.solution[data-astro-cid-o7o4bpp3] .cs-picture4[data-astro-cid-o7o4bpp3]{bottom:5em;right:0}.solution[data-astro-cid-o7o4bpp3] .cs-graphic[data-astro-cid-o7o4bpp3]{display:none}}@media only screen and (min-width: 64rem){.solution[data-astro-cid-o7o4bpp3] .cs-container[data-astro-cid-o7o4bpp3]{flex-direction:row;justify-content:space-between}.solution[data-astro-cid-o7o4bpp3] .cs-image-group[data-astro-cid-o7o4bpp3]{font-size:min(1.2vw,1em);flex:none}.solution[data-astro-cid-o7o4bpp3] .cs-graphic[data-astro-cid-o7o4bpp3]{width:61.4375em;height:auto;display:block;position:absolute;bottom:10.3125em;right:-2em;z-index:-1}}@media only screen and (min-width: 0rem){body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-topper[data-astro-cid-o7o4bpp3] .cs-color[data-astro-cid-o7o4bpp3],body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-title[data-astro-cid-o7o4bpp3],body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-text[data-astro-cid-o7o4bpp3],body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-h3[data-astro-cid-o7o4bpp3],body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-item-p[data-astro-cid-o7o4bpp3]{color:#fff}body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-text[data-astro-cid-o7o4bpp3],body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-item-p[data-astro-cid-o7o4bpp3]{opacity:.8}body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-icon[data-astro-cid-o7o4bpp3]{filter:brightness(125%)}body.dark-mode .solution[data-astro-cid-o7o4bpp3] .cs-graphic[data-astro-cid-o7o4bpp3]{opacity:.2}}\n"}],"routeData":{"route":"/comercialautomation","type":"page","pattern":"^\\/comercialAutomation\\/?$","segments":[[{"content":"comercialAutomation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comercialAutomation.astro","pathname":"/comercialAutomation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.JpYrU5_g.js"}],"styles":[{"type":"external","src":"/_astro/comercialAutomation.HQc1SZmB.css"},{"type":"external","src":"/_astro/solutions.Va_IPiq7.css"},{"type":"inline","content":".parallax-1[data-astro-cid-rqqyypc4]{background:linear-gradient(#00000080,#00000080),url({`${urlImg}`}) repeat fixed 100%}.parallax-1[data-astro-cid-rqqyypc4]{position:relative}\n"}],"routeData":{"route":"/solutions","type":"page","pattern":"^\\/solutions\\/?$","segments":[[{"content":"solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solutions.astro","pathname":"/solutions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mauri/Desktop/Sonus.Astro/SonusLP/Sonus-LandingPage/src/pages/comercialAutomation.astro",{"propagation":"none","containsHead":true}],["C:/Users/mauri/Desktop/Sonus.Astro/SonusLP/Sonus-LandingPage/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mauri/Desktop/Sonus.Astro/SonusLP/Sonus-LandingPage/src/pages/solutions.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_xIT4p1Km.mjs","/src/pages/index.astro":"chunks/pages/index_sHQgWJPy.mjs","/src/pages/solutions.astro":"chunks/pages/solutions_xKMYAlyP.mjs","\u0000@astrojs-manifest":"manifest_x48IOxyv.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_kNaeaHD-.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_e9e17kFM.mjs","\u0000@astro-page:src/pages/comercialAutomation@_@astro":"chunks/comercialAutomation_kmxsuSBY.mjs","\u0000@astro-page:src/pages/solutions@_@astro":"chunks/solutions__RD1NBUl.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.JpYrU5_g.js","/astro/hoisted.js?q=1":"_astro/hoisted.Xn_9Ikrl.js","/astro/hoisted.js?q=0":"_astro/hoisted.CHsTR4_D.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/noto-serif-vithkuqi-vithkuqi-wght-normal.j6KFk7fs.woff2","/_astro/noto-serif-vithkuqi-latin-ext-wght-normal.-MyKONpZ.woff2","/_astro/noto-serif-vithkuqi-latin-wght-normal.nOqHTbxM.woff2","/_astro/comercialAutomation.HQc1SZmB.css","/_astro/index.Il_TMWfa.css","/_astro/solutions.Va_IPiq7.css","/a-audio.svg","/abbeyandchapel1.jpg","/abbeyandchapel2.jpg","/academyLAJob1.webp","/academyLAJob2.webp","/academyLAJob3.webp","/academyLaJob4.webp","/afs-connect-1.svg","/ass-project-.svg","/bath.webp","/bath2.webp","/bath3.webp","/bath4.webp","/brand.webp","/brand2.webp","/chillSala.png","/chillSubWofer.png","/choise.webp","/coastalBrand.png","/comercial.png","/comercialAuditorio.png","/comercialDental.png","/comercialHead.png","/comercialHotel.png","/comercialOficce.png","/consultation.webp","/creators.webp","/crestronBrand.png","/deingEng.webp","/designer.webp","/electrical_solutions.webp","/enfocus.svg","/fifth-level-project.svg","/footer.webp","/funktionSist.webp","/funktionSist2.webp","/funktionSist3.webp","/heroBG.webp","/ligth.webp","/lucess.svg","/lutronBrand.png","/ma-audio.svg","/maintenance.webp","/mission.webp","/mmonitor.webp","/nestBrand.png","/onda.svg","/ourMission.webp","/panasonicBrand.png","/parlante.svg","/partnerGetVisual.jpg","/pioneer.svg","/pioneerBrand.png","/pioneerBrand2.png","/playSonus.svg","/pro-circuit-1.svg","/programing.webp","/project-man.webp","/reforma.jpg","/reforma1.jpg","/reforma2.jpg","/rtl.png","/satro.svg","/savant.png","/sennheiser-3.svg","/sennheiser.svg","/seuraBrand.png","/sn1.jpg","/sn2.jpg","/sonnus.svg","/sonnusLogo.svg","/sonnusPlay.svg","/Sonus Logo.png","/SonusLogo.svg","/soundN.jpg","/soundnight.jpg","/SS.svg","/support.webp","/systemDoc.webp","/tocadisco.svg","/visual-matrix-corporation.svg","/whyUS (1).jpg","/wire.webp","/_astro/Header.astro_astro_type_script_index_0_lang.qpblvS0E.js","/_astro/hoisted.CHsTR4_D.js","/_astro/hoisted.JpYrU5_g.js","/_astro/hoisted.Xn_9Ikrl.js"]});

export { manifest };

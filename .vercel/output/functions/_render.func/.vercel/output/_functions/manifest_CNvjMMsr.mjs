import 'cookie';
import 'kleur/colors';
import './chunks/shared_bZ5hYQlZ.mjs';
import { d as decodeKey } from './chunks/astro/server_CKpkL0RA.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_BXRoNaIo.mjs';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
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
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/elpla/Desktop/Git/portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function a(){const e=document.getElementById(\"mobile-navbar\"),t=document.querySelector(\"body\");e.classList.contains(\"opacity-0\")?(e.classList.remove(\"animate-fade-out\",\"opacity-0\",\"invisible\"),e.classList.add(\"animate-fade-in\"),t.style.overflow=\"hidden\"):(e.classList.remove(\"animate-fade-in\"),e.classList.add(\"animate-fade-out\"),setTimeout(()=>{e.classList.add(\"opacity-0\",\"invisible\"),t.style.overflow=\"auto\"},300))}const n=document.getElementById(\"open-navbar\");n.addEventListener(\"click\",a);const o=document.getElementById(\"close-navbar\");o.addEventListener(\"click\",a);function i(){const e=document.getElementById(\"email\");navigator.clipboard.writeText(e.innerText)}const c=document.getElementById(\"copy-email\");c.addEventListener(\"click\",()=>i());\n"}],"styles":[{"type":"external","src":"/_astro/index.CjNRm1FY.css"}],"routeData":{"route":"/[lang]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function a(){const e=document.getElementById(\"mobile-navbar\"),t=document.querySelector(\"body\");e.classList.contains(\"opacity-0\")?(e.classList.remove(\"animate-fade-out\",\"opacity-0\",\"invisible\"),e.classList.add(\"animate-fade-in\"),t.style.overflow=\"hidden\"):(e.classList.remove(\"animate-fade-in\"),e.classList.add(\"animate-fade-out\"),setTimeout(()=>{e.classList.add(\"opacity-0\",\"invisible\"),t.style.overflow=\"auto\"},300))}const n=document.getElementById(\"open-navbar\");n.addEventListener(\"click\",a);const o=document.getElementById(\"close-navbar\");o.addEventListener(\"click\",a);function i(){const e=document.getElementById(\"email\");navigator.clipboard.writeText(e.innerText)}const c=document.getElementById(\"copy-email\");c.addEventListener(\"click\",()=>i());\n"}],"styles":[{"type":"external","src":"/_astro/index.CjNRm1FY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/elpla/Desktop/Git/portfolio/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/elpla/Desktop/Git/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/elpla/Desktop/Git/portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CNvjMMsr.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.Cf6Mgnpf.js","/astro/hoisted.js?q=0":"_astro/hoisted.BgzxeYTy.js"},"inlinedScripts":[],"assets":["/_astro/outfit-latin-ext-wght-normal.5oMg_0D4.woff2","/_astro/outfit-latin-wght-normal.CdKZfrg9.woff2","/_astro/index.CjNRm1FY.css","/experience1.png","/favicon.svg","/foundations.png","/Israel_Solís_Iglesias_CV.pdf","/mongodb.png","/personal-photo-optimized.jpg","/project1.png","/project2.png","/project3.png","/_astro/astro_scripts/before-hydration.js.Cf6Mgnpf.js"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mYql+NZF+O6DeBqS98Gocc6KqJq68lIQoaM7vT+7Oh8=","experimentalEnvGetSecretEnabled":false});

export { manifest };

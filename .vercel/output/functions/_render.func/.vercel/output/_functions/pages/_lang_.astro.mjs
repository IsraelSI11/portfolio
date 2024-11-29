/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CKpkL0RA.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$ContentLayout, b as $$Hero, c as $$Experience, d as $$Projects, e as $$Education, f as $$Certifications, g as $$Skills, h as $$Footer, l as langBasedHomePageTitle, i as $$BaseLayout } from '../chunks/ContentLayout_BeOnz4I6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": langBasedHomePageTitle() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "ContentLayout", $$ContentLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Experience", $$Experience, {})} ${renderComponent($$result3, "Projects", $$Projects, {})} ${renderComponent($$result3, "Education", $$Education, {})} ${renderComponent($$result3, "Certifications", $$Certifications, {})} ${renderComponent($$result3, "Skills", $$Skills, {})} ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "C:/Users/elpla/Desktop/Git/portfolio/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/elpla/Desktop/Git/portfolio/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { d as defineMiddleware, s as sequence } from './chunks/index_CcsA9z4V.mjs';
import './chunks/shared_bZ5hYQlZ.mjs';
import 'cookie';
import { s as sourceLanguageTag, i as isAvailableLanguageTag, a as setLanguageTag } from './chunks/runtime_DpcZTW4t.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';

const onRequest$2 = defineMiddleware((context, next) => {
  const lang = context.params.lang;
  if (lang === "en") {
    const pathName = context.url.pathname.replace("/en/", "");
    return context.redirect(`/en/${pathName}`);
  }
  return next();
});

const localeStorage = new AsyncLocalStorage();
const onRequest$1 = async ({ url, locals, currentLocale }, next) => {
  setLanguageTag(() => {
    const maybeLang = localeStorage.getStore();
    return maybeLang ?? sourceLanguageTag;
  });
  const normalizedBase = normalizeBase();
  const locale = currentLocale ?? getLangFromPath(url.pathname, normalizedBase) ?? sourceLanguageTag;
  const dir = guessTextDirection(locale);
  locals.paraglide = {
    lang: locale,
    dir
  };
  return await localeStorage.run(locale, next);
};
function normalizeBase(rawBase) {
  return "";
}
function getLangFromPath(path, base) {
  if (!path.startsWith(base))
    return void 0;
  const withoutBasePath = path.replace(base, "");
  const langOrPath = withoutBasePath.split("/").find(Boolean);
  return isAvailableLanguageTag(langOrPath) ? langOrPath : void 0;
}
function guessTextDirection(lang) {
  try {
    const locale = new Intl.Locale(lang);
    if ("textInfo" in locale) {
      return locale.textInfo.direction;
    }
    if ("getTextInfo" in locale) {
      return locale.getTextInfo().direction;
    }
    return "ltr";
  } catch (e) {
    return "ltr";
  }
}

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };

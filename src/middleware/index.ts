import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const lang = context.params.lang;

  // If you want to redirect to another language
  if (lang === 'en') {
    const pathName = context.url.pathname.replace('/en/', '');
    return context.redirect(`/en/${pathName}`);
  }

  return next();
});

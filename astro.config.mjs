import { defineConfig } from 'astro/config';

export default defineConfig({
  // Subdominio de esta landing. Cámbialo por el real.
  site: 'https://coronas.perfectsmiledental.com.mx',

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true },
  },

  build: {
    // /es/index.html -> URL /es/
    format: 'directory',
  },
});

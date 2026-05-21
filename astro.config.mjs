// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANTE: cambia los siguientes valores antes de desplegar a GitHub Pages
//   - site: URL pública del sitio
//       · Si usas el subdominio gratis de GitHub: "https://TU-USUARIO.github.io"
//       · Si usas dominio propio: "https://midominio.com"
//   - base: subruta donde vive el sitio
//       · Si el repo se llama "portafolio-carlos": "/portafolio-carlos"
//       · Si el repo se llama "TU-USUARIO.github.io" (usuario.github.io): "/"
//       · Si usas dominio propio con CNAME: "/"
// Documentación: https://docs.astro.build/en/guides/deploy/github/

export default defineConfig({
  site: 'https://CarlosArmijos1.github.io',
  base: '/portafolio-carlos',
  vite: {
    plugins: [tailwindcss()],
  },
});

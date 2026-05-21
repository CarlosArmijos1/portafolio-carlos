# Portafolio — Carlos Armijos

Portafolio personal en una sola página construido con **Astro 6** y **Tailwind CSS v4**. Estático, rápido, responsive y con modo oscuro. Pensado para desplegar gratis en **GitHub Pages**.

---

## 1. Requisitos

Antes de empezar necesitas:

- **Node.js** 22.12 o superior — [https://nodejs.org/](https://nodejs.org/) (versión LTS)
- **npm** (viene con Node)
- **Git** — [https://git-scm.com/](https://git-scm.com/)
- Cuenta de **GitHub** — [https://github.com/](https://github.com/)
- Editor de código (recomendado: **VS Code** — [https://code.visualstudio.com/](https://code.visualstudio.com/))

Verifica en la terminal:

```bash
node -v   # v22.x.x o superior
npm -v    # 10.x.x o superior
git --version
```

---

## 2. Instalación local

1. Descomprime el `.zip` donde quieras tener el proyecto.
2. Abre una terminal **dentro de esa carpeta** (en VS Code: `Ctrl + ñ`).
3. Instala las dependencias:

   ```bash
   npm install
   ```

   La primera vez puede tomar 1-2 minutos.

---

## 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

- Abre [http://localhost:4321](http://localhost:4321)
- Cualquier cambio guardado se refleja al instante (hot reload)
- Para detener: `Ctrl + C`

---

## 4. Generar la versión de producción

```bash
npm run build
```

Genera la carpeta `dist/` con HTML/CSS/JS optimizados. Para previsualizarla local:

```bash
npm run preview
```

---

## 5. Cómo editar el contenido

Toda la información personal está centralizada en **un solo archivo**:

```
src/data/site.ts
```

| Sección       | Qué controla                                            |
|---------------|---------------------------------------------------------|
| `site`        | Nombre, rol, tagline, ubicación, email, teléfono, redes |
| `skills`      | Grupos de tecnologías                                   |
| `experience`  | Trayectoria profesional                                 |
| `projects`    | Tarjetas de proyectos                                   |
| `achievements`| Lista de logros destacados                              |
| `navLinks`    | Enlaces del menú superior                               |

### Cambiar la foto

Reemplaza `public/img/carlos.jpg` por la nueva (mismo nombre). Recomendado: **600×800 px en vertical**.

### Cambiar el favicon

Edita `public/favicon.svg`.

### Cambiar el color de acento

En `src/styles/global.css`, busca `--color-primary` y cambia los valores `#dc2626` (claro) y `#ef4444` (oscuro).

---

## 6. Despliegue en GitHub Pages

El proyecto incluye un workflow de GitHub Actions ya configurado (`.github/workflows/deploy.yml`) que **construye y publica el sitio automáticamente** cada vez que haces `git push` a `main`.

### Paso 1 — Crear el repositorio

1. Entra en [https://github.com/new](https://github.com/new)
2. Crea un repo **público** llamado `portafolio-carlos` (puede llamarse distinto, pero recuerda el nombre).
3. **No** marques "Initialize this repository with a README".

### Paso 2 — Editar `astro.config.mjs`

Abre `astro.config.mjs` y reemplaza los placeholders:

```js
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',   // ← cambia TU-USUARIO por tu usuario de GitHub
  base: '/portafolio-carlos',             // ← debe coincidir EXACTO con el nombre del repo
  vite: {
    plugins: [tailwindcss()],
  },
});
```

#### Casos especiales

- **Si tu repo se llama `TU-USUARIO.github.io`** (sitio principal del usuario): pon `base: '/'`
- **Si vas a usar un dominio propio** (ej: `carlosarmijos.dev`): pon `site: 'https://carlosarmijos.dev'` y `base: '/'`, y crea un archivo `public/CNAME` con el dominio dentro.

### Paso 3 — Subir el proyecto a GitHub

Desde la terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio-carlos.git
git push -u origin main
```

### Paso 4 — Activar GitHub Pages en el repo

1. En tu repo, entra a **Settings → Pages** (en la barra lateral izquierda).
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Guarda. No hace falta elegir workflow, ya está incluido en el proyecto.

### Paso 5 — Verificar el despliegue

1. Entra a la pestaña **Actions** del repo.
2. Verás un workflow llamado "Deploy to GitHub Pages" ejecutándose. Tarda 1-2 minutos.
3. Cuando termine en verde, el sitio está disponible en:

   ```
   https://TU-USUARIO.github.io/portafolio-carlos/
   ```

A partir de aquí, **cada `git push` a `main` re-despliega automáticamente**.

### Actualizaciones futuras

```bash
# editas lo que quieras (por ejemplo src/data/site.ts)
git add .
git commit -m "Actualizo proyectos"
git push
```

GitHub Actions detecta el push y vuelve a publicar en minuto y medio.

---

## 7. Conectar el formulario de contacto (opcional)

Por defecto el formulario abre el cliente de correo del visitante con `mailto:`. Para recibir mensajes sin abrir nada:

- **Formspree** ([https://formspree.io/](https://formspree.io/)) — gratis hasta 50 envíos/mes. Reemplazas el `action` del `<form>` en `src/components/Contact.astro` por la URL de Formspree.

---

## 8. Estructura del proyecto

```
portafolio-carlos/
├── .github/
│   └── workflows/
│       └── deploy.yml           # CI/CD para GitHub Pages
├── public/
│   ├── favicon.svg              # icono del navegador
│   └── img/
│       └── carlos.jpg           # foto del hero
├── src/
│   ├── components/              # piezas de UI
│   ├── data/
│   │   └── site.ts              # ⭐ TODO el contenido editable
│   ├── layouts/
│   │   └── Layout.astro         # plantilla base, meta tags, fuentes
│   ├── pages/
│   │   └── index.astro          # arma la página
│   └── styles/
│       └── global.css           # paleta, fuentes, animaciones
├── astro.config.mjs             # ⚠️ ajustar site y base antes de desplegar
├── package.json
├── tsconfig.json
└── README.md
```

---

## 9. Comandos (resumen)

| Comando            | Qué hace                                          |
|--------------------|---------------------------------------------------|
| `npm install`      | Instala dependencias (solo la primera vez)        |
| `npm run dev`      | Servidor local en `localhost:4321` con hot reload |
| `npm run build`    | Genera `dist/` para producción                    |
| `npm run preview`  | Previsualiza el `build` localmente                |

---

## 10. Solución de problemas

**`command not found: npm`** — Node.js no está instalado. [https://nodejs.org/](https://nodejs.org/)

**`EADDRINUSE: address already in use :::4321`** — Otro proceso usa el puerto. Cambia con `npm run dev -- --port 3000`.

**El sitio se ve sin estilos en GitHub Pages** — `base` en `astro.config.mjs` no coincide con el nombre del repo. Debe ser exactamente `/nombre-del-repo`.

**Página 404 en GitHub Pages** — Revisa en *Settings → Pages* que la fuente sea **GitHub Actions** y que el workflow haya terminado en verde.

**El workflow falla con permisos** — En *Settings → Actions → General*, baja a "Workflow permissions" y marca "Read and write permissions".

**La foto no aparece** — Verifica que está en `public/img/carlos.jpg` con ese nombre exacto.

---

## 11. Stack técnico

- [Astro 6](https://astro.build/) — generador de sitios estáticos
- [Tailwind CSS v4](https://tailwindcss.com/) — estilos
- TypeScript (modo strict)
- Fuentes: Outfit + Fraunces + JetBrains Mono (Google Fonts)
- Iconos: SVG inline (sin dependencias externas)
- 100% estático, sin base de datos ni backend

Guía oficial de despliegue de Astro en GitHub Pages:
[https://docs.astro.build/en/guides/deploy/github/](https://docs.astro.build/en/guides/deploy/github/)

---

## Contacto del desarrollador

Si tienes dudas sobre cómo editar o desplegar, escribe al desarrollador que te entregó el proyecto.

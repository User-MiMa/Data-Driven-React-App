# Data-DrivenReact / Vocales Kana / Kana vowels

**Español:** Una página informativa para aprender las cinco vocales japonesas (Hiragana y Katakana), construida con Vite + React. Muestra datos sobre cada kana con un diseño minimalista y contenerizada con Nginx para producción.

**English:** An informational page for learning the five Japanese vowel kana (Hiragana and Katakana), built with Vite + React. Displays data for each kana with a minimalist design and containerized with Nginx for production.

---

<details>
<summary>🏁 Inicio Rápido / Quick Start</summary>

**Español:**
1. Clona el repositorio (HTTPS, SSH o GitHub CLI).
2. Para desarrollo local: `pnpm install` → `pnpm dev`
3. Para contenedorizar: `docker build -t kana-vowels .` → `docker run -p 8080:80 kana-vowels`

**English:**
1. Clone repository (HTTPS, SSH, or GitHub CLI).
2. For local development: `pnpm install` → `pnpm dev`
3. For containerization: `docker build -t kana-vowels .` → `docker run -p 8080:80 kana-vowels`

</details>

<details>
<summary>📁 Archivos del proyecto / Project files</summary>

**Español:**
- `index.html` / `index.jsx` — Punto de entrada de la aplicación
- `App.jsx` — Componente raíz que renderiza Header y las tarjetas de kana
- `components/Header.jsx` — Encabezado con título del proyecto
- `components/Entry.jsx` — Tarjeta individual con imagen, descripción, pista mnemotécnica y enlace
- `data.js` — Datos de cada kana (imágenes, URLs de Wikipedia, consejos mnemotécnicos)
- `index.css` — Estilos globales
- `vite.config.js` — Configuración de Vite
- `Dockerfile` — Compilación en varias etapas (Node para compilar, Nginx para servir)
- `.dockerignore` — Archivos excluidos de la construcción de Docker
- `package.json` / `pnpm-lock.yaml` — Dependencias del proyecto

**English:**
- `index.html` / `index.jsx` — Application entry point
- `App.jsx` — Root component rendering Header and kana cards
- `components/Header.jsx` — Header with project title
- `components/Entry.jsx` — Individual card with image, description, mnemonic tip, and link
- `data.js` — Data for each kana (images, Wikipedia URLs, mnemonic tips)
- `index.css` — Global styles
- `vite.config.js` — Vite configuration
- `Dockerfile` — Multi-stage build (Node to build, Nginx to serve)
- `.dockerignore` — Files excluded from Docker build
- `package.json` / `pnpm-lock.yaml` — Project dependencies

</details>

<details>
<summary>▶️ Cómo empezar a usarlo / How to start using it</summary>

### Opción 1: Localmente (servidor de desarrollo) / Locally (dev server)

```bash
pnpm install
pnpm dev
```

**Español:**
- Inicia el servidor de desarrollo de Vite con recarga en caliente
- Disponible en `http://localhost:XXXX`

**English:**
- Starts Vite development server with hot reload
- Available at `http://localhost:XXXX`

---

### Opción 2: Docker (producción con Nginx) / Option 2: Docker (Nginx production)

```bash
docker build -t kana-vowels .
docker run -p XXXX:YY kana-vowels
```

**Español:**
- Compilación en varias etapas: compila con Node, sirve con Nginx Alpine
- Imagen ligera
- Aplicación disponible en `http://localhost:XXXX`

> **Nota sobre puertos:** `XXXX` es el puerto que desees exponer en tu máquina local (ej: 8080, 3000), y `YY` es el puerto que Nginx usa dentro del contenedor (normalmente 80). Ejemplo: `-p 8080:80` expone la app en `localhost:8080`.

**English:**
- Multi-stage build: compiles with Node, serves with Nginx Alpine
- Lightweight image
- App available at `http://localhost:XXXX`

> **Port note:** `XXXX` is the port you want to forward the app in your local machine (e.g: 8080, 3000), and `YY` is the Nginx port used within the container (usually 80). Example: `-p 8080:80` exposes the app in `localhost:8080`.

</details>

<details>
<summary>📦 ¿Qué necesitas? / What you need?</summary>

**Español:**
- Node.js 20+ (para desarrollo local)
- pnpm (gestor de paquetes)
- Docker (opcional, para contenedorizar)

**English:**
- Node.js 20+ (for local development)
- pnpm (package manager)
- Docker (optional, for containerization)

</details>

<details>
<summary>🧱 Estructura de archivos / File structure</summary>

Entry points:
```
├── index.jsx                     → Punto de entrada (renderiza App en #root)
└── App.jsx                       → Componente raíz (Header + Entry cards)

Componentes:
├── Header.jsx                    → Título del proyecto (仮名 : Vowels in japanese)
└── Entry.jsx                     → Tarjeta con imagen, descripción y enlace
```

**Español:**
- `index.jsx` y `App.jsx` son los puntos de entrada de la aplicación
- `Header` y `Entry` son los componentes principales
- Los datos se definen en `data.js` con imágenes, enlaces a Wikipedia y pistas mnemotécnicas

**English:**
- `index.jsx` and `App.jsx` are the app entry points
- `Header` and `Entry` are the main components
- Data is defined in `data.js` with images, Wikipedia links, and mnemonic tips

</details>
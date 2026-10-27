# DevSquad — TP2 React

Trabajo Práctico Grupal 2 de **Desarrollo de Sistemas Web (Front End)** —
2do cuatrimestre 2026, IFTS N°29.

Aplicación React del equipo DevSquad: continúa el sitio estático de TP1
con la misma identidad, pero organizada como una app navegable (React
Router), con una sidebar compartida, datos locales con búsqueda/filtro,
consumo de una API pública y un árbol de renderizado de los componentes
reales del proyecto.

🔗 **Sitio publicado (Vercel):** [Ver proyecto](https://tp-2-front-ifts-29-grupo-7.vercel.app/)
🔗 **Repositorio:** [Repositorio](https://github.com/ivanshifman/TP2-FRONT-IFTS29-GRUPO-7)

---

## 📋 Consigna (resumen)

TP2 grupal, continuación de TP1, a entregar como un único enlace al
repositorio del grupo. Puntos centrales que pide la consigna:

- Migrar el proyecto de TP1 a **React**, con pantallas por componentes y
  navegación por **React Router**.
- **Sidebar compartida**: identidad del equipo, enlaces a las secciones y
  la sección activa identificada.
- **Navegación completa**: ninguna pantalla depende del botón "Atrás".
- **Portada** con presentación propia del equipo + acceso a los perfiles.
- **Perfil de cada integrante** dentro de React (no alcanza con enlazar
  las páginas del TP1).
- **JSON local** con 20+ registros mostrados dinámicamente.
- **Búsqueda y filtro** funcionales sobre esos datos.
- **API pública**, con estados de carga y error.
- **Árbol de renderizado** real de los componentes del proyecto.
- **Bitácora**, continuación de la de TP1.
- **README** con descripción, enlace al deploy, integrantes (con GitHub)
  y declaración de uso de IA por integrante.
- Repositorio público, independiente de TP1, con todos los integrantes
  invitados y con la invitación aceptada.

---

## 👥 Integrantes

| Nombre | Perfil de GitHub |
| --- | --- |
| Iván Shifman | <https://github.com/ivanshifman> |
| Ángel Sabato | <https://github.com/SabatoCom24212> |
| Flavio Rinaldi | <https://github.com/flaviorin> |
| Marcelo Zárate | <https://github.com/mmandrakes> |

---

## 🛠️ Tecnologías utilizadas

- React 19 + Vite
- React Router (`react-router-dom`)
- CSS propio (sin frameworks de estilos), con variables CSS
- Google Fonts: Sora, Inter, IBM Plex Mono
- API pública: [api.github.com](https://docs.github.com/en/rest/users/users)
- Vercel (publicación)

---

## ▶️ Cómo correrlo localmente

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## 📁 Estructura del proyecto

```text
tp2-react/
├── .gitignore
├── .oxlintrc.json
├── index.html               # documento HTML de entrada
├── package.json             # dependencias y scripts
├── package-lock.json
├── vercel.json              # rewrites para que React Router funcione en producción
├── vite.config.js
├── public/
│   └── img/
│       ├── avatar-angel.webp
│       ├── avatar-flavio.webp
│       ├── avatar-ivan.webp
│       └── avatar-marcelo.webp
├── src/
│   ├── main.jsx               # monta <App/> dentro de <BrowserRouter>
│   ├── App.jsx                # define las rutas sobre <Layout/>
│   ├── index.css              # hoja de estilos global única
│   ├── data/
│   │   ├── members.js         # datos reales de los 4 integrantes (fuente única)
│   │   ├── logEntries.js      # entradas de la bitácora (TP1 + TP2)
│   │   ├── resources.json     # registros de stack/herramientas del equipo
│   │   └── componentTree.js   # jerarquía real de componentes, para /arbol
│   ├── components/
│   │   ├── Layout.jsx          # topbar mobile + Sidebar + <Outlet/>
│   │   ├── Sidebar.jsx         # navegación compartida, sección activa
│   │   ├── MemberCard.jsx      # tarjeta de integrante (reutilizada con props)
│   │   ├── DevCard.jsx         # tarjeta de perfil + elige la interacción
│   │   ├── Chips.jsx           # lista de chips reutilizable
│   │   ├── FlipCard.jsx        # interacción propia de Iván
│   │   ├── Tabs.jsx            # interacción propia de Ángel
│   │   ├── Accordion.jsx       # interacción propia de Flavio
│   │   ├── SkillBars.jsx       # interacción propia de Marcelo
│   │   ├── LoadingState.jsx    # estado de carga reutilizable
│   │   ├── ErrorState.jsx      # estado de error reutilizable (con reintentar)
│   │   ├── RenderTree.jsx      # árbol de componentes recursivo, expandible
│   │   ├── SplitFlapText.jsx   # efecto de texto de panel mecánico
│   │   ├── SplitFlapText.css
│   │   ├── TextType.jsx        # efecto de texto que se escribe
│   │   └── TextType.css
│   └── pages/
│       ├── Home.jsx            # portada y sección del equipo
│       ├── ProfilePage.jsx     # ruta /perfil/:id
│       ├── Resources.jsx       # ruta /recursos
│       ├── ApiPage.jsx         # ruta /api
│       ├── RenderTreePage.jsx  # ruta /arbol
│       └── LogPage.jsx         # ruta /bitacora
```

Los datos (integrantes, bitácora, recursos, árbol de componentes) viven
en `src/data/` como arrays u objetos; cada página los recorre con
`map` para armar su contenido, en vez de tenerlo tipeado a mano. Esto
continúa directamente el enfoque de TP1 (`members-data.js` + `render.js`),
ahora expresado como componentes de React en lugar de funciones que
manipulan el DOM.

---

## 🧭 Navegación y sidebar

La `Sidebar` se monta una sola vez en `Layout.jsx` y queda fija mientras
cambia el contenido (`<Outlet/>`) según la ruta. `NavLink` de React
Router marca automáticamente el link de la sección activa. En pantallas
angostas (≤900px) la sidebar se convierte en un panel que se abre con el
botón ☰ de la topbar y se cierra solo, tanto al tocar el fondo oscuro
como al navegar a otra sección.

Todas las pantallas tienen salida propia (sidebar, breadcrumb, botón
"Volver al equipo" o navegación entre compañeros en los perfiles), así
que no hace falta el botón "Atrás" del navegador en ningún momento. Las
rutas con parámetro (`/perfil/:id`) también se pueden abrir o recargar
directamente por URL sin errores.

---

## 🗃️ Datos locales (`src/data/resources.json`)

25 registros de tecnologías y herramientas que el equipo usa en sus
proyectos (frontend, backend, bases de datos, testing y herramientas en
general), cada uno con nombre, categoría, descripción, quién del equipo
lo usa y un link oficial. Se muestran como tarjetas en `/recursos`, con
**búsqueda** por nombre/descripción y **filtro** por categoría, ambos en
vivo sobre el mismo estado de React (`useState` + `useMemo`). Si no hay
resultados, se muestra un mensaje y un botón para limpiar los filtros.

---

## 🌐 API pública (`/api`)

Se eligió la **API pública de GitHub** (`api.github.com/users/:usuario`):
no requiere clave, tiene CORS habilitado para usarse desde el navegador,
y aporta información real y relevante para la propuesta del equipo (bio,
repos públicos, seguidores) tomada directamente del perfil de GitHub de
cada integrante. Cada tarjeta hace su propio `fetch` en paralelo y tiene
tres estados: cargando (`LoadingState`), error con botón de reintentar
(`ErrorState`), o el resultado real de la API.

---

## 🌳 Árbol de renderizado (`/arbol`)

`src/data/componentTree.js` describe la jerarquía real de componentes de
esta app (la misma que está en la sección "Estructura del proyecto" de
arriba, pero como árbol navegable). `RenderTree.jsx` la recorre de forma
recursiva y permite expandir o contraer cada rama.

---

## 📒 Bitácora (`/bitacora`)

Continúa la bitácora de TP1 (`src/data/logEntries.js`), agregando las
entradas del proceso de TP2. Cada entrada se renderiza como un
`<details>` desplegable.

---

## 🤖 Declaración de uso de Inteligencia Artificial

- **Herramienta usada:** Claude (Anthropic), interfaz de chat.
- **Plan:** `<completar: gratuito o de pago, y cuál>`.

**Por integrante:**

| Integrante | Aplicación | Modelo | Para qué lo usó |
| --- | --- | --- | --- |
| Iván | Claude, interfaz de chat | Sonnet 5.5 | Migración completa de TP1 a React (estructura de rutas, componentes, sidebar, sección de API, JSON local, árbol de renderizado) y redacción de este README |
| Ángel | Copilot dentro de Visual Studio Code | GPT-6-LUNA | Corrección del diseño adaptativo del sitio, agregado de componentes de React Bits y corrección del README de acuerdo a las sugerencias de la extensión de Markdown |
| Flavio | ChatGPT, interfaz web | GPT-4o | Revisión de errores en el código y sugerencias para ordenar los datos de su perfil |
| Marcelo | Gemini, interfaz web | Gemini 2.5 | Ideas de diseño para su perfil y explicación de cómo funciona React Router |

**Qué revisamos, cambiamos o adaptamos con criterio propio:**

- Verificamos que cada interacción de perfil (flip card, tabs, acordeón,
  barras animadas) migrara con el mismo comportamiento que tenía en TP1,
  ahora manejada con estado de React en vez de clases CSS togglear a mano.
- Elegimos la API de GitHub en lugar de una genérica porque aporta datos
  reales y relevantes del propio equipo, no datos de relleno.
- Revisamos que el árbol de renderizado coincidiera con los componentes
  reales del código entregado, no con una lista de carpetas.
- Probamos la navegación recargando directamente cada ruta (incluidas las
  de perfil) para confirmar que no rompe.
- Probamos el sitio en los tres breakpoints obligatorios (400px, 900px y
  1200px), incluido el comportamiento de la sidebar en mobile.

---

## 🧭 Evolución respecto a TP1

- El header horizontal de TP1 se reemplazó por una sidebar compartida con
  versión colapsable para mobile.
- Las funciones de `render.js` que armaban HTML a mano (`renderChips`,
  `renderTeamGrid`, las 4 interacciones de perfil) pasaron a ser
  componentes de React reutilizables con props.
- Se sumaron tres secciones nuevas que no existían en TP1: Recursos (JSON
  local con búsqueda/filtro), API (consumo en vivo de GitHub) y Árbol de
  renderizado.
- La bitácora de TP1 continúa en `src/data/logEntries.js`, ahora
  renderizada como elementos desplegables.

export const LOG_ENTRIES = [
  {
    date: "30/08/2026",
    title: "Arranque del proyecto (TP1)",
    text: `Inicio del TP1. Definimos el nombre del equipo (DevSquad) y el
      concepto visual del sitio: tema oscuro tipo herramienta de
      desarrollo, con un color de acento distinto por integrante y
      avatares/ilustraciones en vez de fotos reales.`,
  },
  {
    date: "30/08/2026",
    title: "Interacciones de perfil (TP1)",
    text: `Definimos que cada perfil tuviera su propia interacción
      dinámica, sin repetir la misma función cuatro veces: tarjeta que
      gira, pestañas, acordeón y barras de habilidad animadas.`,
  },
  {
    date: "31/08/2026",
    title: "Cambio de nombre del equipo",
    text: `El nombre inicial no convenció al equipo, así que se evaluaron
      otras opciones y se adoptó <strong>DevSquad</strong> como nombre
      definitivo.`,
  },
  {
    date: "31/08/2026",
    title: "Avatares reales",
    text: `Se reemplazan los avatares genéricos (iniciales sobre un color
      de fondo) por ilustraciones propias de cada integrante.`,
  },
  {
    date: "01/09/2026",
    title: "Corrección de bug en los botones (TP1)",
    text: `Se detectó que el texto de algunos botones sólo se veía al
      pasar el mouse por encima: el navegador les aplicaba su fondo gris
      por defecto. Se corrigió fijando un fondo transparente explícito.`,
  },
  {
    date: "02/09/2026",
    title: "Datos reales y cierre de TP1",
    text: `Se completaron las habilidades, películas y discos favoritos
      reales de cada integrante en su tarjeta y en su perfil.`,
  },
  {
    date: "02/09/2026",
    title: "Refactor: una sola fuente de datos (TP1)",
    text: `La información de cada integrante estaba tipeada dos veces
      (portada y perfil) y se había desincronizado. Se centralizó en
      <code>members-data.js</code>, recorrido con <code>map</code>/
      <code>forEach</code> para armar la portada y cada perfil.`,
  },
  {
    date: "07/09/2026",
    title: "La bitácora también pasa a ser un array (TP1)",
    text: `Se sumó <code>log-data.js</code> con cada entrada como un
      objeto, armada con <code>map</code> en vez de HTML copiado y
      pegado a mano. Esta misma idea es la base de la bitácora en TP2.`,
  },
  {
    date: "11/10/2026",
    title: "Arranque de TP2: migración a React",
    text: `Empezamos el traspaso del sitio de TP1 a una aplicación React
      con <code>react-router-dom</code>. Reemplazamos el header
      horizontal por una <strong>sidebar</strong> compartida (con
      versión colapsable para mobile) y organizamos el contenido en
      rutas: portada, perfil de cada integrante, recursos (JSON local
      con búsqueda y filtro), una sección que consume la API pública de
      GitHub, el árbol de renderizado de componentes y esta bitácora.`,
  },
  {
    date: "11/10/2026",
    title: "De funciones sueltas a componentes",
    text: `Lo que en TP1 eran funciones de <code>render.js</code>
      (<code>renderChips</code>, <code>renderSkillBars</code>, las 4
      interacciones de perfil) pasaron a ser componentes de React
      reutilizables con props: <code>MemberCard</code>,
      <code>DevCard</code>, <code>Chips</code>, <code>FlipCard</code>,
      <code>Tabs</code>, <code>Accordion</code> y
      <code>SkillBars</code>. El perfil de cada integrante elige cuál
      de las cuatro interacciones renderizar según el dato
      <code>interaction</code> de <code>members.js</code>.`,
  },

  // Para la próxima entrada, agregar un objeto acá:
  // { date: "DD/MM/AAAA", title: "...", text: `...` },
];

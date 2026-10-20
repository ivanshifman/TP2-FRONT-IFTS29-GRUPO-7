export const COMPONENT_TREE = {
  name: "App",
  note: "raíz: monta BrowserRouter",
  children: [
    {
      name: "Layout",
      note: "estructura compartida de toda la app",
      children: [
        {
          name: "Sidebar",
          note: "identidad del equipo + navegación + sección activa",
        },
        {
          name: "<Outlet /> → página activa según la ruta",
          children: [
            {
              name: "Home",
              note: "ruta /",
              children: [
                { name: "MemberCard", note: "× 4, una por integrante (reutiliza props)" },
              ],
            },
            {
              name: "ProfilePage",
              note: "ruta /perfil/:id",
              children: [
                {
                  name: "DevCard",
                  note: "avatar, nombre, ciudad, edad, GitHub",
                  children: [
                    {
                      name: "FlipCard | Tabs | Accordion | SkillBars",
                      note: "una sola interacción según el integrante (member.interaction)",
                    },
                  ],
                },
              ],
            },
            {
              name: "Resources",
              note: "ruta /recursos — JSON local, búsqueda y filtro",
              children: [
                { name: "ResourceCard", note: "× N registros filtrados" },
              ],
            },
            {
              name: "ApiPage",
              note: "ruta /api — API pública de GitHub",
              children: [
                { name: "LoadingState", note: "mientras carga cada perfil" },
                { name: "ErrorState", note: "si falla la consulta, con reintentar" },
                { name: "GithubMemberCard", note: "× 4, resultado real de la API" },
              ],
            },
            {
              name: "RenderTreePage",
              note: "ruta /arbol — esta misma sección",
              children: [{ name: "RenderTree", note: "componente recursivo" }],
            },
            {
              name: "LogPage",
              note: "ruta /bitacora",
              children: [{ name: "LogEntry", note: "× N, como <details> desplegable" }],
            },
          ],
        },
      ],
    },
  ],
};

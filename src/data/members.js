export const MEMBERS = {
  ivan: {
    name: "Iván Shifman",
    role: "Full Stack",
    city: "Ciudad de Buenos Aires",
    age: "25 años",
    githubUser: "ivanshifman",
    avatarFile: "avatar-ivan.webp",
    interaction: "flip",
    skills: ["MERN Stack", "NestJS", "Next.js", "SQL"],
    movies: ["El Padrino", "Scarface", "Moonwalker"],
    albums: [
      "Thriller — Michael Jackson",
      "Bad — Michael Jackson",
      "Off the Wall — Michael Jackson",
    ],
  },

  angel: {
    name: "Ángel Sabato",
    role: "Full Stack",
    city: "Ciudad Autónoma de Buenos Aires",
    age: "37 años",
    githubUser: "SabatoCom24212",
    avatarFile: "avatar-angel.webp",
    interaction: "tabs",
    skills: [
      "Full-stack (Next.js, Astro, Svelte, Node.js)",
      "Ingeniería de datos, ML e IA",
      "Automatización",
      "Testing y bases de datos",
    ],
    movies: ["Toy Story", "Jurassic Park", "Blade Runner"],
    albums: [
      "The Velvet Underground & Nico (1967)",
      "Murder Ballads (1996) — Nick Cave",
      "Thanks for the Dance (2019) — Leonard Cohen",
    ],
  },

  flavio: {
    name: "Flavio Rinaldi",
    role: "QA / Análisis funcional",
    city: "Ciudad Autónoma de Buenos Aires",
    age: "55 años",
    githubUser: "flaviorin",
    avatarFile: "avatar-flavio.webp",
    interaction: "accordion",
    skills: [
      "Análisis funcional",
      "QA / QC",
      "SQL, Python y C#",
      "Automatización de pruebas",
    ],
    movies: [
      "Lo que el viento se llevó",
      "El imperio del sol",
      "Volver al futuro (I, II y III)",
    ],
    albums: [
      "Signos — Soda Stereo",
      "Clics modernos — Charly García",
      "La dicha en movimiento — Los Twist",
    ],
  },

  marcelo: {
    name: "Marcelo Zárate",
    role: "Full Stack",
    city: "Ciudad Autónoma de Buenos Aires",
    age: "57 años",
    githubUser: "mmandrakes",
    avatarFile: "avatar-marcelo.webp",
    interaction: "bars",
    skills: ["Persistente", "Ingenioso", "Creativo", "Colaborador"],
    skillBars: [
      { label: "Persistente", level: 76 },
      { label: "Ingenioso", level: 85 },
      { label: "Creativo", level: 80 },
      { label: "Colaborador", level: 68 },
    ],
    movies: ["2001: Odisea del espacio", "Blade Runner", "The Matrix"],
    albums: [
      "The Dark Side of the Moon — Pink Floyd",
      "Who's Next — The Who",
      "Machine Head — Deep Purple",
    ],
  },
};

export const MEMBER_IDS = Object.keys(MEMBERS);

export const projects = [
  {
    slug: "obsidienne",
    name: "Obsidienne",
    category: "Expérience de marque",
    label: "Manufacture horlogère",
    description:
      "Un concept horloger où la précision de l’interface rencontre le temps long. Une direction éditoriale sobre, une mise en scène du calibre et une collection structurée.",
    tags: ["Direction visuelle", "Frontend", "Expérience produit"],
    color: "#e8e5d9",
  },
  {
    slug: "boreal",
    name: "Boréal",
    category: "Expérience de marque",
    label: "Expéditions arctiques",
    description:
      "Un univers immersif pour une marque fictive d’expéditions arctiques. Une narration visuelle qui fait voyager, tout en conservant une lecture claire des destinations.",
    tags: ["Immersion", "Frontend", "Navigation"],
    color: "#0e2735",
  },
  {
    slug: "studio-poly",
    name: "Studio Poly",
    category: "Studios créatifs",
    label: "Agence créative 360°",
    description:
      "Une identité chaleureuse et un site expressif pour une agence créative imaginée. Des compositions qui mettent les réalisations et les différentes expertises au premier plan.",
    tags: ["Identité", "Frontend", "Composition"],
    color: "#eee9dd",
  },
  {
    slug: "aura-one",
    name: "Aura One",
    category: "Expérience de marque",
    label: "Audio & design produit",
    description:
      "Une présentation produit épurée autour d’un casque fictif. Le produit est au centre ; les bénéfices, les détails et les appels à l’action restent immédiatement lisibles.",
    tags: ["Interface produit", "Frontend", "Hiérarchie visuelle"],
    color: "#e9e8e2",
  },
  {
    slug: "menya-neon",
    name: "Menya Neon",
    category: "Expérience de marque",
    label: "Bar à ramen nocturne",
    description:
      "Un concept de restaurant à l’énergie nocturne. Contrastes, couleurs néon et composition du menu donnent à cette marque imaginée une personnalité singulière.",
    tags: ["Univers visuel", "Frontend", "Interface"],
    color: "#11121d",
  },
  {
    slug: "pattern-atlas",
    name: "Pattern Atlas",
    category: "Outils & interfaces",
    label: "Bibliothèque de patterns UI/UX",
    description:
      "Une base locale de 24 patterns UI/UX, pensée pour explorer, filtrer et consulter des fiches. Un concept d’outil qui relie organisation de l’information et interface utile.",
    tags: ["Organisation de données", "UI/UX", "Outil"],
    color: "#eeeee9",
  },
];
export type Project = (typeof projects)[number];
export const layers = [
  {
    id: "frontend",
    label: "Frontend",
    sub: "Des interfaces qui font sens.",
    detail:
      "Transformer une intention en interface lisible, responsive et cohérente. HTML, CSS, JavaScript et Design Systems.",
    code: "interface.render()",
    x: 132,
    y: 105,
  },
  {
    id: "architecture",
    label: "Architecture",
    sub: "La structure avant le code.",
    detail:
      "Décomposer le besoin, définir les responsabilités et concevoir des API pour relier chaque partie du système.",
    code: "system.connect()",
    x: 363,
    y: 155,
  },
  {
    id: "data",
    label: "Data",
    sub: "Des données bien pensées.",
    detail:
      "Modéliser les utilisateurs, les transactions et leurs relations. PostgreSQL, SQLAlchemy, Alembic et requêtes SQL.",
    code: "data.structure()",
    x: 337,
    y: 358,
  },
  {
    id: "ia",
    label: "IA",
    sub: "Un accélérateur, pas un raccourci.",
    detail:
      "Utiliser les outils IA pour explorer, prototyper et développer, puis vérifier les résultats et garder la maîtrise des décisions.",
    code: "ideas.amplify()",
    x: 100,
    y: 325,
  },
];

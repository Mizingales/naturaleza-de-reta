const environmentGrid = document.querySelector(".environments .environment-grid");
const speciesGrid = document.querySelector(".species-grid");
const { environments, pickRandom, createEnvironmentCard } = window.naturalezaDeReta;

if (!environmentGrid || !speciesGrid) {
  throw new Error("No se encontraron las grillas de Inicio.");
}

const species = [
  {
    name: "Garza",
    slug: "garza",
    category: "animales",
    image: "img/garza.jpg",
    alt: "Garza en un ambiente de humedal",
    description: "Ave asociada a humedales y orillas, donde busca peces y pequeños animales."
  },
  {
    name: "Colibrí",
    slug: "colibri",
    category: "animales",
    image: "img/colibri.jpg",
    alt: "Colibrí alimentándose de una flor",
    description: "Pequeña ave que se alimenta principalmente del néctar de las flores."
  },
  {
    name: "Lechuza",
    slug: "lechuza",
    category: "animales",
    image: "img/lechuza.jpg",
    alt: "Lechuza entre pastos naturales",
    description: "Ave rapaz que contribuye al equilibrio de las poblaciones de pequeños animales."
  },
  {
    name: "Flamenco",
    slug: "flamenco",
    category: "animales",
    image: "img/flamenco.jpg",
    alt: "Flamenco en aguas poco profundas",
    description: "Ave acuática que puede observarse en ambientes costeros y lagunas."
  },
  {
    name: "Tucu-tucu",
    slug: "tucu-tucu",
    category: "animales",
    image: "img/tucu-tucu.png",
    alt: "Tucu-tucu entre la vegetación y el suelo arenoso",
    description: "Pequeño mamífero subterráneo adaptado a los suelos arenosos."
  },
  ...Array.from({ length: 6 }, (_, index) => ({
    name: `Especie vegetal ${index + 1}`,
    slug: `especie-vegetal-${index + 1}`,
    category: "plantas",
    description: "Descripción general en preparación."
  }))
];

const createSpeciesCard = (item, template) => {
  const card = template.cloneNode(true);
  const link = card.querySelector(".card__link");
  link.href = `biodiversidad-${item.category}.html?especie=${encodeURIComponent(item.slug)}`;

  const currentImage = card.querySelector(".card__image");
  if (item.image) {
    currentImage.src = item.image;
    currentImage.alt = item.alt;
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "card__image card__image--placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    currentImage.replaceWith(placeholder);
  }

  card.querySelector(".card__title").textContent = item.name;
  card.querySelector(".card__description").textContent = item.description;
  return card;
};

const environmentTemplate = environmentGrid.querySelector(".card--environment");
const speciesTemplate = speciesGrid.querySelector(".card--species");

if (!environmentTemplate || !speciesTemplate) {
  throw new Error("No se encontraron tarjetas estáticas para usar como plantilla.");
}

environmentGrid.replaceChildren(
  ...pickRandom(environments, 3).map((environment) => createEnvironmentCard(environment, environmentTemplate))
);
speciesGrid.replaceChildren(
  ...pickRandom(species, speciesGrid.querySelectorAll(".card--species").length)
    .map((item) => createSpeciesCard(item, speciesTemplate))
);

const environmentGrid = document.querySelector(".environment-grid");
const speciesGrid = document.querySelector(".species-grid");

if (!environmentGrid || !speciesGrid) {
  throw new Error("No se encontraron las grillas de Inicio.");
}

const environments = [
  {
    title: "Albúfera",
    href: "ambiente-albufera.html",
    image: "img/albufera.jpg",
    alt: "Vista de la albufera y sus orillas",
    description: "El mar y el río convergen en un ecosistema único.",
    detail: "Una laguna próxima a la costa, formada por agua salada y dulce, separada del mar por una lengua de arena de playa, es una rareza natural como hay pocas en el planeta."
  },
  {
    title: "Caracolero",
    href: "ambiente-caracolero.html",
    image: "img/caracolero.webp",
    alt: "Costa de piedras del Caracolero",
    description: "Conocé el Caracolero de Reta.",
    detail: "Esta ficha incorporará información documentada del Caracolero."
  },
  {
    title: "Mar",
    href: "ambiente-mar.html",
    image: "img/mar.webp",
    alt: "Olas del mar en la costa de Reta",
    description: "El ambiente marino de Reta.",
    detail: "La descripción de este ambiente se completará con información documentada sobre el mar de Reta."
  },
  {
    title: "Médanos",
    href: "ambiente-medanos.html",
    image: "img/medanos.webp",
    alt: "Médanos costeros con vegetación natural",
    description: "Un resguardo ante los fuertes vientos.",
    detail: "Sus arenas y plantas adaptadas contribuyen a la dinámica costera y ofrecen refugio a numerosas especies."
  },
  {
    title: "Pastizal",
    href: "ambiente-pastizal.html",
    image: "img/pastizal.jpg",
    alt: "Pastizal natural abierto",
    description: "Descripción del Pastizal en preparación.",
    detail: "En esta ficha se reunirán datos documentados para describir el Pastizal."
  },
  {
    title: "Pinar",
    href: "ambiente-pinar.html",
    image: "img/pinar.jpg",
    alt: "Pinar con luz de sol entre los árboles",
    description: "Pronto habrá más información sobre el Pinar de Reta.",
    detail: "El contenido de esta ficha se ampliará cuando haya datos documentados sobre el lugar."
  },
  {
    title: "Playa",
    href: "ambiente-playa.html",
    image: "img/playa.jpg",
    alt: "Atardecer sobre la playa de Reta",
    description: "La extensa orilla del océano Atlántico.",
    detail: "Un ambiente dinámico donde las mareas, el viento y la arena modelan el paisaje y sostienen distintas formas de vida."
  },
  {
    title: "Río",
    href: "ambiente-rio.html",
    image: "img/rio.jpg",
    alt: "Cascadas sobre un río entre rocas",
    description: "Conocé el Río y sus destinos relacionados.",
    detail: "Explorá la Desembocadura del Río Quequén Salado, la Cueva del Tigre y la Cascada Cifuentes."
  }
];

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

const pickRandom = (items, count) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count);
};

const createEnvironmentCard = (environment, template) => {
  const card = template.cloneNode(true);
  card.querySelector(".card__link").href = environment.href;
  const image = card.querySelector(".card__image");
  image.src = environment.image;
  image.alt = environment.alt;
  card.querySelector(".card__title").textContent = environment.title;
  card.querySelector(".card__description").textContent = environment.description;
  card.querySelector(".card__detail").textContent = environment.detail;
  return card;
};

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

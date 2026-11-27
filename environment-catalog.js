window.naturalezaDeReta = {
  environments: [
    {
      slug: "albufera",
      title: "Albúfera",
      href: "ambiente-albufera.html",
      image: "img/albufera.jpg",
      alt: "Vista de la albufera y sus orillas",
      description: "El mar y el río convergen en un ecosistema único.",
      detail: "Una laguna próxima a la costa, formada por agua salada y dulce, separada del mar por una lengua de arena de playa, es una rareza natural como hay pocas en el planeta."
    },
    {
      slug: "caracolero",
      title: "Caracolero",
      href: "ambiente-caracolero.html",
      image: "img/caracolero.webp",
      alt: "Costa de piedras del Caracolero",
      description: "Conocé el Caracolero de Reta.",
      detail: "Esta ficha incorporará información documentada del Caracolero."
    },
    {
      slug: "mar",
      title: "Mar",
      href: "ambiente-mar.html",
      image: "img/mar.webp",
      alt: "Olas del mar en la costa de Reta",
      description: "El ambiente marino de Reta.",
      detail: "La descripción de este ambiente se completará con información documentada sobre el mar de Reta."
    },
    {
      slug: "medanos",
      title: "Médanos",
      href: "ambiente-medanos.html",
      image: "img/medanos.webp",
      alt: "Médanos costeros con vegetación natural",
      description: "Un resguardo ante los fuertes vientos.",
      detail: "Sus arenas y plantas adaptadas contribuyen a la dinámica costera y ofrecen refugio a numerosas especies."
    },
    {
      slug: "pastizal",
      title: "Pastizal",
      href: "ambiente-pastizal.html",
      image: "img/pastizal.jpg",
      alt: "Pastizal natural abierto",
      description: "Descripción del Pastizal en preparación.",
      detail: "En esta ficha se reunirán datos documentados para describir el Pastizal."
    },
    {
      slug: "pinar",
      title: "Pinar",
      href: "ambiente-pinar.html",
      image: "img/pinar.jpg",
      alt: "Pinar con luz de sol entre los árboles",
      description: "Pronto habrá más información sobre el Pinar de Reta.",
      detail: "El contenido de esta ficha se ampliará cuando haya datos documentados sobre el lugar."
    },
    {
      slug: "playa",
      title: "Playa",
      href: "ambiente-playa.html",
      image: "img/playa.jpg",
      alt: "Atardecer sobre la playa de Reta",
      description: "La extensa orilla del océano Atlántico.",
      detail: "Un ambiente dinámico donde las mareas, el viento y la arena modelan el paisaje y sostienen distintas formas de vida."
    },
    {
      slug: "rio",
      title: "Río",
      href: "ambiente-rio.html",
      image: "img/rio.jpg",
      alt: "Cascadas sobre un río entre rocas",
      description: "Conocé el Río y sus destinos relacionados.",
      detail: "Explorá la Desembocadura del Río Quequén Salado, la Cueva del Tigre y la Cascada Cifuentes."
    }
  ],
  pickRandom(items, count) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled.slice(0, count);
  },
  createEnvironmentCard(environment, template) {
    const card = template.cloneNode(true);
    card.querySelector(".card__link").href = environment.href;
    const image = card.querySelector(".card__image");
    image.src = environment.image;
    image.alt = environment.alt;
    card.querySelector(".card__title").textContent = environment.title;
    card.querySelector(".card__description").textContent = environment.description;
    card.querySelector(".card__detail").textContent = environment.detail;
    return card;
  }
};

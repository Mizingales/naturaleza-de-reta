window.naturalezaDeReta = {
  environments: [
    {
      slug: "albufera",
      title: "Albúfera",
      href: "ambiente-albufera.html",
      image: "img/albufera.png",
      alt: "Vista de la albufera y sus orillas",
      description: "El mar y el río convergen en un ecosistema único.",
      detail: "Una laguna próxima a la costa, formada por agua salada y dulce, separada del mar por una lengua de arena de playa, es una rareza natural como hay pocas en el planeta."
    },
    {
      slug: "caracolero",
      title: "Caracolero",
      href: "ambiente-caracolero.html",
      image: "img/caracolero.png",
      alt: "Acumulación natural de caracoles y valvas sobre la orilla del Caracolero",
      description: "Afloramientos rocosos donde el mar acumula millones de valvas y conchillas.",
      detail: "Un tramo costero singular entre Reta y Claromecó, modelado por las mareas y las sudestadas, que reúne bancos naturales de caracoles marinos y valiosos registros geológicos y paleontológicos."
    },
    {
      slug: "mar",
      title: "Mar",
      href: "ambiente-mar.html",
      image: "img/mar.png",
      alt: "Olas del mar en la costa de Reta",
      description: "Las aguas templado-frías del mar Argentino frente a la costa de Reta.",
      detail: "Un ecosistema marino abierto y productivo, moldeado por corrientes oceánicas, mareas y vientos, que sostiene una rica cadena trófica de peces, moluscos, aves y mamíferos marinos."
    },
    {
      slug: "medanos",
      title: "Médanos",
      href: "ambiente-medanos.html",
      image: "img/medanos.png",
      alt: "Médanos costeros con vegetación natural",
      description: "Un resguardo ante los fuertes vientos.",
      detail: "Cúmulos de arena inmensos, sostenidos por los tamariscos, donde especies vegetales adaptadas contribuyen a la dinámica costera y ofrecen refugio."
    },
    {
      slug: "pastizal",
      title: "Pastizal",
      href: "ambiente-pastizal.html",
      image: "img/pastizal.png",
      alt: "Pastizal natural abierto",
      description: "La llanura nativa de hierbas y gramíneas que sostiene la biodiversidad pampeana.",
      detail: "Un ecosistema abierto de pastos autóctonos, arbustos bajos y horizontes amplios que conecta el interior rural con la costa y alberga aves, mamíferos e insectos clave."
    },
    {
      slug: "pinar",
      title: "Pinar",
      href: "ambiente-pinar.html",
      image: "img/pinar.png",
      alt: "Pinar con luz de sol entre los árboles",
      description: "Bosques implantados que brindan sombra, reparo del viento y refugio urbano.",
      detail: "Un ambiente forestado surgido históricamente para fijar los médanos y proteger la localidad, que hoy conforma uno de los paisajes más reconocibles y sombreados de Reta."
    },
    {
      slug: "playa",
      title: "Playa",
      href: "ambiente-playa.html",
      image: "img/playa.png",
      alt: "Atardecer sobre la playa de Reta",
      description: "La extensa orilla del océano Atlántico.",
      detail: "Un ambiente dinámico donde las mareas, el viento y la arena modelan el paisaje y sostienen distintas formas de vida."
    },
    {
      slug: "rio",
      title: "Río",
      href: "ambiente-rio.html",
      image: "img/rio.png",
      alt: "Cascadas sobre un río entre rocas",
      description: "Cursos de agua que articulan la cuenca, el paisaje y la conexión con el mar.",
      detail: "El río Quequén Salado, los cursos vinculados al entorno de la albufera y otros arroyos y ríos de la región modelan barrancas, montes y humedales clave para la biodiversidad del sur bonaerense."
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

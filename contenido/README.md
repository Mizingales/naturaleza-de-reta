# Copys de Naturaleza de Reta

Esta carpeta documenta los textos que actualmente aparecen en las páginas HTML. Los archivos Markdown son la fuente de referencia editorial para futuras actualizaciones, pero no se cargan en el sitio: cualquier cambio de copy debe actualizar también el HTML correspondiente.

## Estructura

- [global.md](./global.md): textos compartidos de navegación, pie de página y controles.
- [paginas/inicio.md](./paginas/inicio.md): Inicio; las tarjetas de ambientes y biodiversidad se documentan en sus fichas individuales.
- [paginas/ambientes.md](./paginas/ambientes.md): catálogo de ambientes y destinos del Río, con enlaces a sus páginas HTML y fichas Markdown.
- [paginas/biodiversidad.md](./paginas/biodiversidad.md): página general de biodiversidad.
- [paginas/conservacion.md](./paginas/conservacion.md): página de conservación.
- [paginas/proyecto.md](./paginas/proyecto.md): página institucional del proyecto.
- [paginas/sumate.md](./paginas/sumate.md): página de participación.
- [paginas/fauna.md](./paginas/fauna.md) y [paginas/flora.md](./paginas/flora.md): subsecciones y buscadores de biodiversidad.
- [ambientes/](./ambientes/): fichas para los ocho ambientes y los tres destinos del Río. Cada ficha corresponde a una página HTML individual.
- [biodiversidad/fauna/](./biodiversidad/fauna/) y [biodiversidad/flora/](./biodiversidad/flora/): textos de las fichas individuales.

## Criterio de transcripción

Los textos se documentan según las páginas HTML actuales y los datos que `biodiversidad.js` muestra en los catálogos. Se conserva la redacción, puntuación, orden de aparición, placeholders y estados funcionales. Las rutas HTML son las páginas estáticas actuales; los enlaces Markdown conectan cada documento con su ficha editorial.

Las tarjetas de Inicio tienen una selección aleatoria definida en `home.js` y un respaldo estático en `index.html`. Su contenido editorial vive junto a las fichas correspondientes, no se duplica en `paginas/inicio.md`. La selección editorial excluye las fichas-placeholder y las que no tienen imagen definitiva; `home.js` muestra las fichas de fauna con imagen disponible.

Los archivos Markdown no alimentan automáticamente el sitio. Al actualizar sus textos, hay que sincronizar manualmente los HTML o scripts correspondientes. En cada ficha se separan el texto visible, los datos del modal y los textos alternativos o placeholders para facilitar su mantenimiento.

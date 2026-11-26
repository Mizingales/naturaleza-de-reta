## Instrucciones permanentes para el proyecto Naturaleza de Reta

Antes de continuar desarrollando o modificando el sitio, tomá estas indicaciones como criterios generales para todo el proyecto. Debés respetarlas en cada cambio futuro, no solamente en la tarea actual.

### 1. Consigna académica y documentación aprobada

El sitio corresponde al trabajo final del seminario Arquitectura de Interfaces. Respetá las decisiones documentadas y aprobadas en las Etapas 1 y 2, así como el prototipo de Figma.

Los requisitos técnicos obligatorios son:

- HTML5 semántico y CSS3 propio, sin frameworks CSS externos.
- Todas las variables del sistema de diseño declaradas en `:root` y utilizadas consistentemente.
- CSS Grid para la macrocomposición y Flexbox únicamente para microcomposición.
- Al menos una Container Query funcional que adapte un componente según el ancho de su contenedor.
- Diseño responsive desde 375 px, con adaptación a tablet y desktop, incluyendo 768 px y 1280 px.
- Jerarquía correcta de encabezados y estructura semántica.
- Documentación integrada del sistema de diseño, incluyendo el caso, el análisis de referencia, las variables, el inventario de componentes y las decisiones técnicas.

No inventes decisiones de diseño ni alteres la identidad aprobada sin una justificación. Si una decisión documentada entra en conflicto con una necesidad técnica real, explicá el conflicto antes de cambiarla.

### 2. Accesibilidad

Aplicá buenas prácticas de accesibilidad en todas las secciones:

- Agregá atributos `alt` descriptivos a las imágenes informativas. Describí lo que efectivamente se ve, sin inventar información ni repetir innecesariamente el texto contiguo.
- Para imágenes puramente decorativas, utilizá `alt=""`.
- No uses el nombre del archivo como texto alternativo por defecto.
- Los íconos que funcionen como enlaces deben tener un nombre accesible, por ejemplo mediante `aria-label` cuando no haya texto visible.
- Los botones deben tener nombres claros y describir su función.
- Todos los elementos interactivos deben poder utilizarse mediante teclado.
- Mantené un indicador de foco visible con `:focus-visible`.
- Comprobá el contraste entre texto, fondo y elementos interactivos.
- No comuniques información únicamente mediante colores.
- Usá enlaces para navegar y botones para ejecutar acciones.
- Declar á correctamente el idioma del documento como español.
- Respetá `prefers-reduced-motion` cuando implementes animaciones o transiciones.
- Asegurá que los formularios, si los hay, tengan etiquetas asociadas a sus campos y mensajes de error comprensibles.
- No uses ARIA innecesariamente cuando HTML semántico ya resuelva la necesidad.

### 3. Navegación y menú responsive

El menú debe ser funcional, accesible y coherente con la identidad visual.

- Elegí el breakpoint según el espacio real disponible para la navegación.
- Preferí una solución con HTML y CSS si permite cumplir correctamente la interacción.
- Si JavaScript resulta necesario, mantenelo mínimo y justificá su uso.
- El botón de apertura debe comunicar su estado mediante `aria-expanded` cuando corresponda.
- La navegación debe poder operarse con teclado y dispositivos táctiles.
- Si se implementa con JavaScript, gestioná correctamente el cierre del menú, la tecla Escape y el foco cuando corresponda.
- Evitá que el menú tape contenido sin posibilidad de cerrarlo o que impida el desplazamiento.
- Comprobá los estados abierto y cerrado en pantallas pequeñas y grandes.

No reemplaces el menú existente sin revisar primero cómo está construido y qué partes funcionan.

### 4. Diseño responsive y comportamiento

Comprobá que el sitio funcione a 375 px, 768 px, 900 px y 1280 px, además de revisar anchos intermedios cuando sea necesario.

- Evitá scroll horizontal accidental.
- No uses anchos y alturas rígidos cuando puedan romper la adaptación.
- Evitá que los textos, botones, imágenes o tarjetas se superpongan o desborden.
- Usá imágenes flexibles y proporciones apropiadas.
- Comprobá que el contenido revelado mediante hover también sea accesible en dispositivos táctiles y mediante teclado.
- No dependas exclusivamente de `:hover` para mostrar información importante.
- Verificá que las Container Queries respondan al ancho del componente y no sean simples media queries renombradas.

### 5. Sistema de diseño y calidad del CSS

- Conservá los nombres de las variables y las clases aprobadas en la documentación.
- No hardcodees colores, tipografías ni espaciados recurrentes fuera de `:root`.
- Reutilizá los componentes existentes en lugar de duplicar estilos.
- Mantené una nomenclatura consistente y comprensible.
- Evitá selectores excesivamente específicos, reglas redundantes y el uso indiscriminado de `!important`.
- No agregues dependencias innecesarias.
- Escribí comentarios únicamente cuando ayuden a comprender decisiones técnicas relevantes.
- Mantené el código legible para que pueda estudiarlo, explicarlo y defenderlo académicamente.

### 6. Imágenes, recursos y contenido

Respetá las rutas y los nombres reales de los archivos del proyecto. Las imágenes están dentro de `img/` y los íconos de redes sociales dentro de `img/icons/`.

No renombres, muevas ni reemplaces recursos existentes sin consultarme. Comprobá las rutas antes de dar por terminada una modificación.

No inventes datos científicos, información sobre especies, referencias, direcciones de contacto ni enlaces. Si falta información, señalá qué debe completarse.

### 7. Cómo trabajar antes de cada modificación

Antes de editar:

1. Revisá el HTML, el CSS y el JavaScript relacionados con la tarea.
2. Identificá qué funciona actualmente y qué necesita cambiar.
3. Explicá brevemente la modificación propuesta y su justificación.
4. Evitá reescribir archivos completos cuando un cambio localizado sea suficiente.

Después de editar:

1. Revisá que no se hayan roto otras secciones.
2. Verificá las rutas de recursos afectadas.
3. Comprobá la accesibilidad y el comportamiento responsive relacionados con el cambio.
4. Revisá que las variables y componentes existentes sigan utilizándose correctamente.
5. Informá qué verificaste realmente y qué queda pendiente.

No afirmes haber probado el sitio en un navegador, lector de pantalla o validador si no utilizaste esas herramientas.

### 8. Prioridad general

La prioridad es mantener la coherencia entre la documentación aprobada, el diseño de Figma, el sistema de diseño implementado y los requisitos académicos.

No busques solamente que el sitio se vea bien: debe ser accesible, responsive, semántico, técnicamente correcto, mantenible y comprensible para su presentación y defensa en el seminario.

### 9. Paleta de color
Paleta de color en el siguiente orden: 
Variable CSS
HEX Code
Uso
--color-action #284B3C___|
Botones principales, enlaces destacados y elementos interactivos.
--color-secondary #A1BB94___|
Superficies secundarias, elementos, íconos.
--color-card #EADFC3___|
Fondos de tarjetas y bloques destacados.
--color-background #F7F6F0 ___|
Fondo general del sitio.
--color-text #26312B ___|
Texto principal y títulos.
--color-support #A5BDC2 ___|
Elementos de apoyo.
--color-accent #B56A3B ___|
Etiquetas, detalles y destacados puntuales.
Muestras de color ● Acción / primario: verde profundo #284B3C ___| ● Secundario: verde salvia #A1BB94 ___| ● Superficie: arena #EADFC3 ___| ● Fondo: marfil #F7F6F0 ___| ● Texto: carbón verdoso #26312B ___| ● Apoyo: cielo #A5BDC2 ___| ● Acento: terracota #B56A3B ___|

### 10. Tipografía
Escala tipográfica en el siguiente orden:
Variable CSS
Valor inicial
Aplicación
--font-size-small
0.875rem
Metadatos, etiquetas y textos auxiliares.
--font-size-body
1rem
Párrafos y contenido general.
--font-size-h2
2.5rem
Bajadas, subtítulos y encabezados secundarios.
--font-size-display
4rem
Títulos principales y encabezados editoriales.

Familias tipográficas
Se seleccionaron dos familias tipográficas para establecer una jerarquía visual clara y coherente con la identidad editorial y naturalista del proyecto.
● Lora: tipografía serif destinada a títulos y encabezados principales. Su carácter editorial aporta personalidad y jerarquía visual.
● Inter: tipografía sans serif destinada a párrafos, textos informativos, metadatos y elementos de interfaz. Su diseño favorece la legibilidad y la lectura en pantalla.
--font-display: "Lora", serif;
--font-body: "Inter", sans-serif;

### 11. Espaciado
Escala de espaciado en el siguiente orden:
Variable CSS
Valor
Aplicación
--spacing-xs
0.5rem
Separaciones pequeñas y elementos relacionados.
--spacing-sm
1rem
Padding interno y separación entre elementos.
--spacing-md
1.5rem
Separación entre componentes y bloques de contenido.
--spacing-lg
2.5rem
Separación entre secciones y bloques principales.
--spacing-xl
4rem
Separación macro entre contenedores principales y
grandes bloques.

### 12. Implementación inicial de las variables
Se implementa una primera definición de variables CSS globales mediante propiedades personalizadas declaradas en el selector :root. Estas variables permiten centralizar los valores del sistema visual y ser reutilizados en los distintos componentes de la interfaz, favoreciendo la consistencia y agilizando futuras modificaciones.
None
:root {
/* Colores */
--color-action: #284B3C;
--color-secondary: #A1BB94;
--color-card: #EADFC3;
--color-background: #F7F6F0;
--color-text: #26312B;
--color-support: #A5BDC2;
--color-accent: #B56A3B;
/* Tipografía */
--font-size-small: 0.875rem;
--font-size-body: 1rem;
--font-size-h2: 2.5rem;
--font-size-display: 4rem;
/* Espaciado */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2.5rem;
--spacing-xl: 4rem;
}

### 13. Inventario de componentes
2.2 Inventario de componentes
El sistema se organiza siguiendo la metodología Atomic Design. Los componentes se agrupan según su nivel de complejidad y su función dentro de la interfaz.
Se propone utilizar una convención de nombres consistente basada en componentes y elementos relacionados, con modificadores para sus distintas variantes.
Átomos
Son los elementos básicos de la interfaz. Pueden utilizarse de manera independiente o combinarse para construir componentes más complejos.
Componente
Clase CSS
Función
Botón
.button
Ejecutar acciones o dirigir a otras secciones.
Enlace
.link
Facilitar la navegación interna y externa.
Ícono
.icon
Acompañar acciones o representar información.
Etiqueta
.tag
Identificar categorías, ambientes o tipos de contenido.
Imagen
.image
Mostrar fotografías de ambientes y especies.
Campo de texto
.input
Permitir el ingreso de información en formularios.
Título
.heading
Organizar jerárquicamente los contenidos.
Texto
.text
Presentar información y descripciones.
Moléculas
Son combinaciones de átomos que forman unidades funcionales con un propósito concreto.
Componente
Clase CSS
Función
Tarjeta base
.card
Estructura reutilizable para presentar contenido.
Tarjeta de ambiente
.card--environment
Presentar un ambiente con imagen, título y descripción.
Tarjeta de especie
.card--species
Mostrar una especie y acceder a su ficha.
Tarjeta editorial
.card--editorial
Destacar artículos o contenidos de divulgación.
Ítem de navegación
.nav-item
Agrupar enlace e indicador visual.
Campo de formulario
.form-field
Combinar etiqueta, campo y mensaje de ayuda.
Formulario de contacto
.contact-form
Agrupar campos y acción de envío.
Ficha de información
.info-item
Mostrar un dato con su etiqueta correspondiente.
Organismos
Son secciones completas que reúnen distintos componentes y estructuran las páginas del sitio.
Componente
Clase CSS
Función
Encabezado
.site-header
Contener la identidad del proyecto y la navegación principal.
Navegación principal
.site-nav
Facilitar el acceso a las secciones.
Hero
.hero
Presentar el proyecto o contenido principal de cada página.
Grilla de ambientes
.environment-grid
Organizar las tarjetas de ambientes naturales.
Grilla de biodiversidad
.species-grid
Presentar las especies disponibles para explorar.
Banner/bloque editorial
.editorial-section
Desarrollar contenidos destacados de divulgación.
Sección de conservación
.conservation-section
Comunicar información y acciones vinculadas con la conservación.
Pie de página
.site-footer
Reunir información institucional, navegación secundaria y contacto.
La convención utiliza nombres descriptivos en inglés para mantener consistencia con las prácticas habituales de desarrollo front-end. Se utiliza el nombre base del componente y el modificador -- para identificar variantes, por ejemplo, .card, .card--species y .card--environment.

### 14. Estructura de layouts y comportamiento
La estructura general se resolverá mediante CSS Grid, utilizando una grilla flexible que permita adaptar la distribución de los contenidos a diferentes tamaños de pantalla.
Se propone una grilla de 12 columnas para escritorio, 8 columnas para tablet y 4 columnas para dispositivos móviles. Los espacios entre columnas y los márgenes laterales se ajustarán según el ancho disponible.
Configuración de la grilla
Dispositivo
Columnas
Comportamiento
Mobile
4
Una columna para contenidos principales; tarjetas apiladas o en dos columnas cuando el espacio lo permita.
Tablet
8
Distribución de contenidos en dos columnas y mayor aprovechamiento del espacio horizontal.
Desktop
12
Composiciones editoriales más amplias, grillas de tarjetas y distribución de secciones en varias columnas.
Organización de los organismos principales
● Encabezado: se ubica en la parte superior del sitio e integra la identidad visual y la navegación principal.
● Hero: funciona como presentación inicial del proyecto, combinando texto breve con imagen de alto impacto. En escritorio, ambos elementos pueden distribuirse en columnas independientes; en dispositivos móviles, se reorganizan verticalmente.
● Tarjetas de ambientes y especies: presentan información sobre los ambientes naturales y las especies de Reta mediante imágenes, títulos y textos breves. Se organizan en grillas cuya cantidad de columnas se adapta al ancho de cada dispositivo.
● Banner / sección editorial: funciona como un bloque flexible que puede invitar a explorar otra sección del sitio o presentar un contenido de interés mediante un título, una breve descripción y una imagen. Su composición puede variar según el objetivo y el contenido, aprovechando distintas proporciones de la grilla.
● Pie de página: cierra el recorrido del sitio y reúne los enlaces y la información complementaria del proyecto. En escritorio puede organizarse en varias columnas, mientras que en dispositivos móviles adopta una disposición vertical.

Comportamiento responsive
En dispositivos móviles se priorizará la lectura vertical, la accesibilidad de la navegación y el uso de imágenes en proporciones adecuadas. En tablet se aprovechará el espacio para organizar contenidos en dos columnas, mientras que en escritorio se habilitarán composiciones más amplias y asimétricas, especialmente en las secciones editoriales.
La estructura deberá mantener la jerarquía de los contenidos y la facilidad de navegación independientemente del dispositivo.

### 15. Mapa del sitio y relaciones entre contenidos
Leer el archivo sitemap-instructions.md para conocer la estructura jerárquica completa del sitio, la organización de las secciones y los accesos directos desde la landing page.
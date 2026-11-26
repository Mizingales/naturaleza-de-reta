## Mapa del sitio y arquitectura de navegación

### 1. Estructura general

El sitio web Naturaleza de Reta cuenta con seis secciones principales:

1. Inicio
2. Ambientes
3. Biodiversidad
4. Conservación
5. El proyecto
6. Sumate

La navegación principal debe permitir acceder a estas seis secciones. Las páginas internas se organizan jerárquicamente según el siguiente mapa.

### 2. Mapa jerárquico completo

- **INICIO** (`index.html`)
  - Landing page del sitio.
  - Presenta la iniciativa, sus objetivos y contenidos destacados.
  - Incluye accesos directos a páginas internas mediante botones, tarjetas e imágenes.
  - Los destacados no constituyen páginas independientes: enlazan a las páginas correspondientes dentro de la arquitectura del sitio.

- **AMBIENTES**
  - Página general de presentación de los ambientes naturales de Reta.
  - **Albufera:** página individual del ambiente.
  - **Playa:** página individual del ambiente costero.
  - **Mar:** página individual, diferenciada de Playa. Puede incluir información sobre fauna marina, temperatura del agua, sudestadas y condiciones climáticas.
  - **Médanos:** página individual del ambiente.
  - **Pastizal:** página individual del ambiente.
  - **Caracolero:** página individual del ambiente.
  - **Pinar:** página individual del ambiente.
  - **Río:** página general del ambiente fluvial, con acceso a tres destinos relacionados:
    - Desembocadura del Río Quequén Salado.
    - Cueva del Tigre.
    - Cascada Cifuentes.

- **BIODIVERSIDAD**
  - Página general de presentación de la biodiversidad de Reta.
  - **Plantas:** subsección que presenta las especies vegetales.
    - Incluye un buscador de plantas.
    - Incluye fichas individuales de las especies.
  - **Animales:** subsección que presenta las especies animales.
    - Incluye un buscador de animales.
    - Incluye fichas individuales de las especies.

- **CONSERVACIÓN**
  - Página dedicada a la conservación del patrimonio natural de Reta.
  - Tiene un formato editorial, con estructura de artículo, textos e imágenes.
  - Incluirá información sobre problemáticas ambientales documentadas, amenazas, acciones de conservación y recomendaciones para el cuidado del territorio.
  - El contenido debe basarse en información documentada, sin inventar datos, problemáticas ni iniciativas.

- **EL PROYECTO**
  - Página institucional de presentación de Naturaleza de Reta.
  - Tiene un formato editorial, con estructura de artículo, textos e imágenes.
  - Explica el origen, los objetivos, el enfoque y las motivaciones de la iniciativa.
  - La iniciativa es independiente y contempla la posible conformación futura de una asociación civil. No debe presentarse como una asociación formalmente constituida mientras eso no haya ocurrido.

- **SUMATE**
  - Página dedicada a la participación y colaboración de la comunidad.
  - Puede incluir formas de colaborar, participar en la iniciativa y vías de contacto, según las opciones efectivamente disponibles en el sitio.

### 3. Accesos directos desde Inicio

Los destacados de la landing deben enlazar directamente con el contenido específico que presentan, sin obligar al usuario a pasar primero por la página general de la sección.

Ejemplos:

- Botón del hero → Ambientes → Albufera.
- Tarjeta de la garza → Biodiversidad → Animales → buscador precargado con «Garza» → resultado correspondiente → ficha de la garza.
- Tarjeta de una planta → Biodiversidad → Plantas → buscador precargado con el nombre de la especie → resultado correspondiente → ficha de la planta.
- Destacado de conservación → Conservación.
- Destacado de la iniciativa → El proyecto.
- Llamada a la participación → Sumate.

Estos ejemplos representan las relaciones esperadas entre los contenidos. Antes de implementar o modificar enlaces, verificar las rutas reales existentes en el proyecto.

### 4. Comportamiento de los buscadores de biodiversidad

Los accesos directos desde las tarjetas de especies de Inicio deben permitir identificar la especie seleccionada y mostrarla como resultado en el buscador correspondiente.

**Acceso desde una tarjeta de animal:**
1. El usuario selecciona una tarjeta de animal en Inicio.
2. Se abre la subsección Biodiversidad → Animales.
3. El buscador aparece precargado con el nombre del animal seleccionado.
4. Se muestra el resultado correspondiente a esa especie.
5. El usuario puede acceder a su ficha individual.

**Acceso desde una tarjeta de planta:**
1. El usuario selecciona una tarjeta de planta en Inicio.
2. Se abre la subsección Biodiversidad → Plantas.
3. El buscador aparece precargado con el nombre de la planta seleccionada.
4. Se muestra el resultado correspondiente a esa especie.
5. El usuario puede acceder a su ficha individual.

**Requisitos técnicos de este comportamiento:**
- No basta con rellenar visualmente el campo de búsqueda: el sistema debe procesar el término y actualizar los resultados.
- La especie seleccionada debe conservarse al recargar la página y al compartir la URL de destino.
- Utilizar un mecanismo compatible con la arquitectura existente, como un parámetro en la URL, por ejemplo `?especie=garza`.
- Adaptar el parámetro al nombre o identificador real de cada especie y a la estructura actual del sitio.
- Al abrir directamente una URL con el parámetro correspondiente, el buscador debe recuperar el término y mostrar los resultados adecuados.
- Si el parámetro no corresponde a una especie existente, el buscador debe manejar el caso sin producir errores y mostrar un estado apropiado.
- El usuario debe poder modificar o limpiar la búsqueda y consultar otras especies normalmente.
- No asumir que las fichas individuales corresponden a archivos HTML separados: verificar la implementación existente antes de definir las rutas.

### 5. Reglas de navegación y mantenimiento

- Respetar la jerarquía definida en este mapa al crear, editar o reorganizar páginas.
- Mantener diferenciadas las seis secciones principales.
- No confundir los accesos directos desde Inicio con la jerarquía principal del sitio.
- Mantener Playa y Mar como contenidos separados.
- Mantener los tres destinos —Desembocadura del Río Quequén Salado, Cueva del Tigre y Cascada Cifuentes— dentro de la estructura de Río.
- Mantener Plantas y Animales como subsecciones de Biodiversidad, con sus respectivos buscadores y fichas individuales.
- Antes de crear una página o modificar un enlace, inspeccionar la estructura HTML, CSS y JavaScript relacionada y comprobar si el contenido ya está implementado.
- No inventar rutas, archivos, especies, contenidos ni funcionalidades.
- Adaptar las rutas técnicas a la arquitectura real del proyecto. No asumir que cada contenido corresponde a un archivo HTML independiente.
- Conservar la identidad visual, los textos aprobados, los recursos y las decisiones documentadas en Figma.
- Si una modificación implica cambiar la jerarquía de navegación, informar el cambio y justificarlo antes de implementarlo.
- Evitar reescribir componentes completos cuando sea suficiente realizar una modificación localizada.
- Mantener el funcionamiento de los enlaces, los buscadores y las fichas existentes al realizar cambios.

### 6. Navegación compartida

Todas las páginas deben conservar los elementos compartidos del sitio que correspondan, como encabezado, navegación principal y pie de página, respetando la implementación existente.

Los enlaces deben ser coherentes, funcionales, accesibles mediante teclado y tener nombres comprensibles. Las páginas internas deben permitir identificar su ubicación dentro del sitio y regresar a Inicio mediante la navegación disponible.

La navegación debe funcionar correctamente en dispositivos móviles, tabletas y escritorio, sin desbordamientos horizontales ni pérdida de funcionalidad.

### 7. Consideraciones finales

Este mapa define la arquitectura de contenidos y las relaciones esperadas entre las páginas. La implementación debe respetar esta jerarquía y la estructura real de archivos del proyecto.

Antes de realizar cambios, inspeccionar el código existente y verificar cómo están implementadas las páginas, las tarjetas, los buscadores y las fichas. No duplicar funcionalidades ni crear nuevas páginas cuando el contenido ya exista y pueda reutilizarse.

Cualquier modificación debe mantener la coherencia con la documentación académica, el sistema de diseño aprobado y el prototipo de Figma.
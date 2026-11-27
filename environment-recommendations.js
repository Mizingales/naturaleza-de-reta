const recommendationSection = document.querySelector(".environment-recommendations");

if (recommendationSection) {
  const recommendationGrid = recommendationSection.querySelector(".environment-grid");
  const template = recommendationGrid?.querySelector(".card--environment");
  const currentEnvironment = recommendationSection.dataset.currentEnvironment;
  const catalog = window.naturalezaDeReta;

  if (!recommendationGrid || !template || !currentEnvironment || !catalog) {
    throw new Error("No se pudo preparar el catálogo de ambientes recomendados.");
  }

  const recommendations = catalog.pickRandom(
    catalog.environments.filter((environment) => environment.slug !== currentEnvironment),
    3
  );

  recommendationGrid.replaceChildren(
    ...recommendations.map((environment) => catalog.createEnvironmentCard(environment, template))
  );
}

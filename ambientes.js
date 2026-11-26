const searchForm = document.querySelector(".environment-search");
const searchInput = document.querySelector("#environment-search");
const searchStatus = document.querySelector("#environment-search-status");
const emptyMessage = document.querySelector("#environment-search-empty");
const environmentCards = Array.from(document.querySelectorAll("[data-environment-card]"));

const normalize = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("es")
  .trim();

const filterEnvironments = () => {
  const term = normalize(searchInput.value);
  let visibleCount = 0;

  environmentCards.forEach((card) => {
    const matches = normalize(card.dataset.name).includes(term);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyMessage.hidden = visibleCount !== 0;
  searchStatus.textContent = visibleCount === 1
    ? "Se muestra 1 ambiente."
    : `Se muestran ${visibleCount} ambientes.`;
};

searchForm.addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", filterEnvironments);
filterEnvironments();

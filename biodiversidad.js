const searchForm = document.querySelector(".species-search");
const searchInput = document.querySelector("#species-search");
const searchStatus = document.querySelector("#search-status");
const emptyMessage = document.querySelector("#search-empty");
const speciesCards = Array.from(document.querySelectorAll("[data-species-card]"));
const dialog = document.querySelector("#species-dialog");
const dialogPanel = dialog.querySelector(".species-dialog__panel");
const closeButton = dialog.querySelector(".species-dialog__close");
const modalImage = dialog.querySelector("#species-modal-image");
const modalImagePlaceholder = dialog.querySelector("#species-modal-image-placeholder");
const modalTips = dialog.querySelector("#species-modal-tips");
let activeCard = null;

const normalize = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[-_]/g, " ")
  .toLocaleLowerCase("es")
  .trim();

const updateSearchUrl = () => {
  const url = new URL(window.location.href);
  const term = searchInput.value.trim();

  if (term) {
    url.searchParams.set("especie", term);
  } else {
    url.searchParams.delete("especie");
  }

  window.history.replaceState({}, "", url);
};

const filterSpecies = () => {
  const term = normalize(searchInput.value);
  let visibleCount = 0;

  speciesCards.forEach((card) => {
    const searchableText = normalize(`${card.dataset.name} ${card.dataset.searchTerms || ""}`);
    const matches = searchableText.includes(term);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyMessage.hidden = visibleCount !== 0;
  searchStatus.textContent = visibleCount === 1
    ? "Se muestra 1 ficha."
    : `Se muestran ${visibleCount} fichas.`;
};

const closeSpeciesDialog = (restoreFocus) => {
  const trigger = activeCard;
  dialog.close();
  activeCard = null;
  if (!trigger) return;

  if (restoreFocus) {
    trigger.focus({ preventScroll: true });
  } else {
    trigger.blur();
  }
};

const openSpeciesDialog = (card) => {
  activeCard = card;
  dialog.querySelector("#species-dialog-title").textContent = card.dataset.name;
  dialog.querySelector("#species-modal-type").textContent = card.dataset.type;
  dialog.querySelector("#species-modal-habitat").textContent = card.dataset.habitat;
  dialog.querySelector("#species-modal-behavior").textContent = card.dataset.behavior;
  dialog.querySelector("#species-modal-activity").textContent = card.dataset.activity;
  dialog.querySelector("#species-dialog-description").textContent = card.dataset.description;

  const cardImage = card.querySelector("img");
  if (cardImage) {
    modalImage.src = cardImage.getAttribute("src");
    modalImage.alt = cardImage.alt || card.dataset.name;
    modalImage.hidden = false;
    modalImagePlaceholder.hidden = true;
  } else {
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalImage.hidden = true;
    modalImagePlaceholder.hidden = false;
  }

  modalTips.replaceChildren();
  card.dataset.tips.split("|").forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    modalTips.appendChild(item);
  });

  dialog.showModal();
};

searchForm.addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", () => {
  filterSpecies();
  updateSearchUrl();
});

const initialTerm = new URLSearchParams(window.location.search).get("especie");
if (initialTerm !== null) searchInput.value = initialTerm;
filterSpecies();

speciesCards.forEach((card) => {
  card.addEventListener("click", () => openSpeciesDialog(card));
});

closeButton.addEventListener("click", (event) => closeSpeciesDialog(event.detail === 0));
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeSpeciesDialog(true);
  }
});
dialog.addEventListener("click", (event) => {
  if (!dialogPanel.contains(event.target)) closeSpeciesDialog(event.detail === 0);
});

document.querySelectorAll(".site-header").forEach((header) => {
  const toggle = header.querySelector(".menu-toggle");
  const navigation = header.querySelector(".site-nav");

  if (!toggle || !navigation) return;

  const setOpen = (open, restoreFocus = false) => {
    if (open) {
      header.dataset.menuOpen = "true";
    } else {
      delete header.dataset.menuOpen;
    }

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú principal" : "Abrir menú principal");

    if (restoreFocus) toggle.focus();
  };

  header.classList.add("site-header--menu-ready");
  toggle.hidden = false;
  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    const samePageAnchor = destination.pathname === window.location.pathname && destination.hash;
    setOpen(false, Boolean(samePageAnchor));
  });

  document.addEventListener("click", (event) => {
    if (header.dataset.menuOpen === "true" && !header.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.dataset.menuOpen === "true") {
      setOpen(false, true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600 && header.dataset.menuOpen === "true") {
      setOpen(false);
    }
  });
});

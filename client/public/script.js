document.documentElement.classList.add("js");

(() => {
  "use strict";

  // Número confirmado pelo cliente em 16/10/2026.
  const WHATSAPP_NUMBER = "556195094042";

  const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const eventModes = {
    casamento: {
      title: "Da entrada à última música, uma banda que entende o ritmo do seu casamento.",
      copy: "Cerimônia, coquetel, valsa e festa ganham repertório e energia próprios — tudo alinhado com vocês e com o cerimonial.",
      cta: "Consultar data do meu casamento",
      message: "Olá, Fernando! Vim pelo site da Zero61 e quero consultar a data do meu casamento."
    },
    formatura: {
      title: "Banda para formaturas em Brasília, da solenidade à pista.",
      copy: "Colações de grau, recepções e bailes com música ao vivo que acompanha o roteiro e cresce junto com a celebração. Repertório, som e iluminação alinhados com a comissão e o cerimonial.",
      cta: "Consultar data da minha formatura",
      message: "Olá, Fernando! Vim pelo site da Zero61 e quero consultar uma data para formatura."
    },
    corporativo: {
      title: "Banda para eventos corporativos em Brasília, da recepção à confraternização.",
      copy: "Confraternizações, festas de fim de ano e lançamentos com música ao vivo que combina com o público e com a marca. Som e iluminação próprios, tudo planejado com antecedência junto com a sua equipe.",
      cta: "Consultar data do evento da empresa",
      message: "Olá, Fernando! Vim pelo site da Zero61 e quero consultar uma data para evento corporativo."
    },
    quinze: {
      title: "Da entrada à pista, uma noite de 15 anos com energia para todas as gerações.",
      copy: "Momentos especiais, valsa ao vivo e um repertório que aproxima a turma da escola, a família e os amigos na mesma celebração.",
      cta: "Consultar data dos 15 anos",
      message: "Olá, Fernando! Vim pelo site da Zero61 e quero consultar uma data para festa de 15 anos."
    }
  };

  const heroTitle = document.querySelector("[data-hero-title]");
  const heroCopy = document.querySelector("[data-hero-copy]");
  const heroCta = document.querySelector("[data-hero-cta]");
  const heroCtaLabel = document.querySelector("[data-hero-cta-label]");
  const heroPanel = document.querySelector("#hero-panel");
  const eventTabs = [...document.querySelectorAll("[data-event-tab]")];

  const selectEventMode = (modeKey, moveFocus = false) => {
    const mode = eventModes[modeKey];
    if (!mode || !heroTitle || !heroCopy || !heroCta || !heroCtaLabel || !heroPanel) return;

    eventTabs.forEach((tab) => {
      const isActive = tab.dataset.eventTab === modeKey;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive) {
        heroPanel.setAttribute("aria-labelledby", tab.id);
        if (moveFocus) tab.focus();
      }
    });

    heroTitle.textContent = mode.title;
    heroCopy.textContent = mode.copy;
    heroCtaLabel.textContent = mode.cta;
    heroCta.href = whatsappUrl(mode.message);

    const bookingTypeField = document.querySelector("[data-booking-type]");
    const bookingTypeByMode = {
      casamento: "Casamento",
      formatura: "Formatura",
      corporativo: "Evento corporativo",
      quinze: "15 anos"
    };
    if (bookingTypeField && bookingTypeByMode[modeKey]) {
      bookingTypeField.value = bookingTypeByMode[modeKey];
      bookingTypeField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    heroPanel.classList.remove("hero-panel-changing");
    window.requestAnimationFrame(() => heroPanel.classList.add("hero-panel-changing"));
  };

  eventTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectEventMode(tab.dataset.eventTab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % eventTabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + eventTabs.length) % eventTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = eventTabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      selectEventMode(eventTabs[nextIndex].dataset.eventTab, true);
    });
  });

  document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
    link.href = whatsappUrl(link.dataset.whatsappMessage);
  });

  const equalizer = document.querySelector("[data-equalizer]");
  if (equalizer) {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < 64; index += 1) {
      const wave = Math.sin((index + 1) * 12.9898) * 43758.5453;
      const random = wave - Math.floor(wave);
      const envelope = 0.43 + 0.57 * Math.sin((Math.PI * (index + 0.5)) / 64);
      const bar = document.createElement("i");
      bar.style.setProperty("--height", String(Math.max(10, Math.round((32 + random * 68) * envelope))));
      bar.style.setProperty("--duration", `${(0.68 + random * 0.9).toFixed(2)}s`);
      bar.style.setProperty("--delay", `${(-random * 1.5).toFixed(2)}s`);
      fragment.appendChild(bar);
    }
    equalizer.appendChild(fragment);
  }

  const skipLink = document.querySelector(".skip-link");
  const mainContent = document.querySelector("#conteudo");
  skipLink?.addEventListener("click", () => {
    window.requestAnimationFrame(() => mainContent?.focus({ preventScroll: true }));
  });

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const brandHome = document.querySelector("[data-brand-home]");
  const mobileCta = document.querySelector("[data-mobile-cta]");
  const inertRegions = [
    mainContent,
    document.querySelector(".site-footer"),
    mobileCta
  ].filter(Boolean);

  const updateMobileCta = () => {
    if (!mobileCta) return;
    const shouldShow = window.scrollY > 420 && !document.body.classList.contains("menu-open");
    mobileCta.classList.toggle("is-visible", shouldShow);
    mobileCta.setAttribute("aria-hidden", String(!shouldShow));
  };

  const closeMenu = (restoreFocus = false) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    inertRegions.forEach((region) => { region.inert = false; });
    updateMobileCta();
    if (restoreFocus) menuToggle.focus();
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const shouldOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(shouldOpen));
      menuToggle.setAttribute("aria-label", shouldOpen ? "Fechar menu" : "Abrir menu");
      mobileMenu.hidden = !shouldOpen;
      document.body.classList.toggle("menu-open", shouldOpen);
      inertRegions.forEach((region) => { region.inert = shouldOpen; });
      updateMobileCta();
      if (shouldOpen) {
        window.requestAnimationFrame(() => {
          if (!mobileMenu.hidden) mobileMenu.querySelector("a")?.focus();
        });
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      const target = link.hash ? document.querySelector(link.hash) : null;
      closeMenu();
      if (target) {
        target.setAttribute("tabindex", "-1");
        window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
      }
    }));
    brandHome?.addEventListener("click", () => {
      if (!mobileMenu.hidden) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileMenu.hidden) {
        closeMenu(true);
      }
      if (event.key === "Tab" && !mobileMenu.hidden) {
        const focusable = [menuToggle, ...mobileMenu.querySelectorAll("a")];
        const currentIndex = focusable.indexOf(document.activeElement);
        if (event.shiftKey && currentIndex <= 0) {
          event.preventDefault();
          focusable.at(-1)?.focus();
        } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
          event.preventDefault();
          focusable[0]?.focus();
        }
      }
    });
    const desktopMenuQuery = window.matchMedia("(min-width: 56.01rem)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) closeMenu();
    };
    if (typeof desktopMenuQuery.addEventListener === "function") {
      desktopMenuQuery.addEventListener("change", closeMenuOnDesktop);
    } else if (typeof desktopMenuQuery.addListener === "function") {
      desktopMenuQuery.addListener(closeMenuOnDesktop);
    }
  }

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
    updateMobileCta();
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const bookingForm = document.querySelector("[data-booking-form]");
  const bookingDate = document.querySelector("[data-booking-date]");
  const bookingType = document.querySelector("[data-booking-type]");
  const bookingCity = document.querySelector("[data-booking-city]");
  const bookingLink = document.querySelector("[data-booking-link]");
  const messagePreview = document.querySelector("[data-message-preview]");

  const bookingTargets = {
    Casamento: "o meu casamento",
    Formatura: "uma formatura",
    "Evento corporativo": "um evento corporativo",
    "15 anos": "uma festa de 15 anos",
    Aniversário: "um aniversário",
    "Réveillon": "um réveillon",
    Outro: "um evento"
  };

  const formatDate = (rawDate) => {
    if (!rawDate) return "";
    const [year, month, day] = rawDate.split("-");
    return year && month && day ? `${day}/${month}/${year}` : rawDate;
  };

  const updateBookingMessage = () => {
    if (!bookingType || !bookingLink || !messagePreview) return;
    const target = bookingTargets[bookingType.value] || "um evento";
    const date = formatDate(bookingDate?.value || "");
    const city = bookingCity?.value.trim() || "";
    const cityPhrase = city ? ` em ${city}` : "";
    const message = date
      ? `Olá, Fernando! Vim pelo site da Zero61. O dia ${date} está livre para ${target}${cityPhrase}?`
      : `Olá, Fernando! Vim pelo site da Zero61 e quero consultar uma data para ${target}${cityPhrase}.`;

    bookingLink.dataset.href = whatsappUrl(message);
    messagePreview.textContent = message;
  };

  if (bookingDate) {
    const now = new Date();
    const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    bookingDate.min = localToday;
  }

  [bookingDate, bookingType, bookingCity].forEach((field) => {
    field?.addEventListener("input", updateBookingMessage);
    field?.addEventListener("change", updateBookingMessage);
  });
  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const destination = bookingLink?.dataset.href;
    if (!destination) return;
    const outbound = document.createElement("a");
    outbound.href = destination;
    outbound.target = "_blank";
    outbound.rel = "noopener noreferrer";
    outbound.click();
  });
  updateBookingMessage();
  selectEventMode("casamento");

  const reveals = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();

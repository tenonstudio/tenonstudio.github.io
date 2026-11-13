(function () {
  var root = document.documentElement;
  var langButtons = document.querySelectorAll("[data-set-lang]");
  var titles = {
    en: "Tenon — Software that fits.",
    zh: "Tenon 榫卯 — 刚好合上的软件。"
  };
  var descriptions = {
    en: "Tenon is an independent software studio making small, precise tools for macOS. Makers of Flip and Porthole.",
    zh: "Tenon 榫卯是一间独立软件工作室，做小而精确的 macOS 工具。作品包括 Flip 与 Porthole。"
  };

  function setLanguage(lang) {
    if (lang !== "zh" && lang !== "en") return;
    root.dataset.lang = lang;
    root.lang = lang === "zh" ? "zh-Hans" : "en";
    document.title = titles[lang];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptions[lang]);
    langButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === lang));
    });
    try {
      localStorage.setItem("tenon-lang", lang);
    } catch (error) {}
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.setLang);
    });
  });

  setLanguage(root.dataset.lang || "en");

  var header = document.querySelector(".site-header");
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    reveals.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    reveals.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }
})();

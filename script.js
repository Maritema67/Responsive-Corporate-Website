const body = document.body;
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

const savedTheme = localStorage.getItem("morrow-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
body.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

function updateThemeButton() {
  const darkMode = body.dataset.theme === "dark";
  themeButton.textContent = darkMode ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-label", `Switch to ${darkMode ? "light" : "dark"} theme`);
}

updateThemeButton();
themeButton.addEventListener("click", () => {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("morrow-theme", body.dataset.theme);
  updateThemeButton();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.textContent = isOpen ? "Menu" : "Close";
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
    navigation.classList.remove("is-open");
  }
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Project inquiry from ${formData.get("name")}`);
    const message = encodeURIComponent([
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Organization: ${formData.get("organization") || "Not provided"}`,
      `Project type: ${formData.get("interest")}`,
      "",
      formData.get("message"),
    ].join("\n"));
    document.querySelector("#form-status").textContent = "Your email app is opening with your note ready to send.";
    window.location.href = `mailto:hello@morrow.works?subject=${subject}&body=${message}`;
  });
}
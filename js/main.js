const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");
const seeMoreButtons = document.querySelectorAll(".see-more");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

seeMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-activated");
    button.setAttribute("aria-pressed", "true");
    button.style.backgroundColor = "#616161";
    button.style.color = "#fff";
  });
});

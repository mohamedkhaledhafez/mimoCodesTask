/*========== SHOW MENU ==========*/
var menuIcon = "bx-x";

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle(menuIcon);
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*========== REMOVE MENU ==========*/
const navLink = document.querySelectorAll(".nav__link"),
  toggle = document.getElementById("nav-toggle");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // REMOVE MENU MOBILE
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
  toggle.classList.toggle(menuIcon);
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

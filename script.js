
let accordianHeader = document.querySelectorAll(".accordian-header");
accordianHeader.forEach((accordianHeader) => {
  accordianHeader.addEventListener("click", (event) => {
    accordianHeader.classList.toggle("active");
    const accordianBody = accordianHeader.nextElementSibling;
    if (accordianHeader.classList.contains("active")) {
      accordianBody.style.maxHeight = accordianBody.scrollHeight + "px";
    } else {
      accordianBody.style.maxHeight = 0;
    }
  });
});

const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  if (navLinks.classList.contains("positionto")) {
    navLinks.classList.remove("positionto");
    navLinks.classList.add("top-[-100%]");
  } else {
    navLinks.classList.add("positionto");
    navLinks.classList.remove("top-[-100%]");
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


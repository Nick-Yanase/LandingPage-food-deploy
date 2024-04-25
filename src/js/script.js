document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobile-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  mobileBtn.addEventListener("click", function () {
    //deixa tira e coloca hidden quando for clicar no botao e coloca 'x' quando clicar pela rpimeira vez
    mobileMenu.classList.toggle("hidden"); //
    menuIcon.classList.toggle("fa-x"); //troca o botao de menu para "x"
  });
});
$(window).on("scroll", function () {
  //pega a posição do scroll e aplica s
  const header = document.getElementById("header");
  const headerPos = $("header");
  const scrollPosition = $(window).scrollTop() - headerPos.outerHeight();

  if (scrollPosition > 0) {
    header.classList.add('shadow-sm');
  } else {
    header.classList.remove('shadow-sm');
  }
});
console.log(header);

$(document).ready(function () {
  /*SCROLL REVIEW*/
  ScrollReveal().reveal("#cta", {
    //pega o id da div que segura todos e faz a animação
    origin: "left",
    duration: 2000,
    distance: "10%",
  });

  ScrollReveal().reveal("#foodsHero", {
    //pega o id ou class da div que segura todos e faz a animação
    origin: "right",
    duration: 1000,
    distance: "15%",
  });

  ScrollReveal().reveal("#food01", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });
  ScrollReveal().reveal("#food02", {
    origin: "left",
    duration: 2300,
    distance: "20%",
  });
  ScrollReveal().reveal("#food03", {
    origin: "left",
    duration: 2600,
    distance: "20%",
  });
  ScrollReveal().reveal("#food04", {
    origin: "left",
    duration: 2900,
    distance: "20%",
  });

  ScrollReveal().reveal("#chef", {
    origin: "left",
    duration: 2500,
    distance: "20%",
  });

  ScrollReveal().reveal("#dep01", {
    origin: "right",
    duration: 900,
    distance: "10%",
  });

  ScrollReveal().reveal("#dep02", {
    origin: "right",
    duration: 1500,
    distance: "10%",
  });
});

function generateTahunSekarang() {
  const elemenTahunSekarang = document.getElementById("tahun-sekarang");

  elemenTahunSekarang.innerHTML = new Date().getFullYear();
}

function hideUnhideNav() {
  const headerElement = document.querySelector("header");

  headerElement.classList.toggle("nav-open");
  $(".fa-bars-staggered").toggle(100);
  $(".fa-bars").toggle(100);
}

function smoothScroll(elemen, e) {
  e.preventDefault();

  const href = $(elemen).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
}

$(document).ready(() => {
  generateTahunSekarang();
});

const navToggler = document.getElementById("toggler");

navToggler.addEventListener("click", () => {
  hideUnhideNav();
});

$("header a").on("click", function (e) {
  smoothScroll(this, e);
});

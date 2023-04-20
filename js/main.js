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

$(document).ready(() => {
  generateTahunSekarang();
});

const navToggler = document.getElementById("toggler");

navToggler.addEventListener("click", () => {
  hideUnhideNav();
});

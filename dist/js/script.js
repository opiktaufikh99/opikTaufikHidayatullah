// hb
const hb = document.querySelector("#hb");
const navMenu = document.querySelector("#nav-menu");
const mi = document.querySelector("#mi");
const miMenu = document.querySelector("#mi-menu");
const mts = document.querySelector("#mts");
const mtsMenu = document.querySelector("#mts-menu");
const Smk = document.querySelector("#smk");
const smkMenu = document.querySelector("#smk-menu");
const cbi = document.querySelector("#cbi");
const cbiMenu = document.querySelector("#cbi-menu");
const bt = document.querySelector("#bt");
const btMnenu = document.querySelector("#bt-menu");
const gmni = document.querySelector("#gmni");
const gmniMenu = document.querySelector("#gmni-menu");
const bem = document.querySelector("#bem");
const bemMenu = document.querySelector("#bem-menu");
const mapala = document.querySelector("#mapala");
const mapalaMenu = document.querySelector("#mapala-menu");
const fmi = document.querySelector("#fmi");
const fmiMenu = document.querySelector("#fmi-menu");
const ka = document.querySelector("#ka");
const kamenu = document.querySelector("#ka-menu");
const catur = document.querySelector("#catur");
const caturMenu = document.querySelector("#catur-menu");
const lari = document.querySelector("#lari");
const lariMenu = document.querySelector("#lari-menu");
const game = document.querySelector("#game");
const gameMenu = document.querySelector("#game-menu");
const hd = document.querySelector("#hd");
const hdMenu = document.querySelector("#hd-menu");
const st = document.querySelector("#st");
const stMenu = document.querySelector("#st-menu");
hb.addEventListener("click", function () {
  hb.classList.toggle("hb-aktif");
  navMenu.classList.toggle("hidden");
});
mi.addEventListener("click", function () {
  mi.classList.toggle("mi-aktif");
  miMenu.classList.toggle("hidden");
});
mts.addEventListener("click", function () {
  mts.classList.toggle("mts-aktif");
  mtsMenu.classList.toggle("hidden");
});
Smk.addEventListener("click", function () {
  Smk.classList.toggle("smk-akif");
  smkMenu.classList.toggle("hidden");
});
cbi.addEventListener("click", function () {
  cbi.classList.toggle("cbi-aktif");
  cbiMenu.classList.toggle("hidden");
});
bt.addEventListener("click", function () {
  bt.classList.toggle("bt-aktif");
  btMnenu.classList.toggle("hidden");
});

gmni.addEventListener("click", function () {
  gmni.classList.toggle("gmni-aktif");
  gmniMenu.classList.toggle("hidden");
});

bem.addEventListener("click", function () {
  bem.classList.toggle("bem-aktif");
  bemMenu.classList.toggle("hidden");
});

mapala.addEventListener("click", function () {
  mapala.classList.toggle("mapala-aktif");
  mapalaMenu.classList.toggle("hidden");
});

fmi.addEventListener("click", function () {
  fmi.classList.toggle("fmi-aktif");
  fmiMenu.classList.toggle("hidden");
});

ka.addEventListener("click", function () {
  ka.classList.toggle("ka-aktif");
  kamenu.classList.toggle("hidden");
});
catur.addEventListener("click", function () {
  catur.classList.toggle("catur-aktif");
  caturMenu.classList.toggle("hidden");
});
lari.addEventListener("click", function () {
  lari.classList.toggle("lari-aktif");
  lariMenu.classList.toggle("hidden");
});
hd.addEventListener("click", function () {
  hd.classList.toggle("hard-aktif");
  hdMenu.classList.toggle("hidden");
});
game.addEventListener("click", function () {
  game.classList.toggle("game-aktif");
  gameMenu.classList.toggle("hidden");
});
st.addEventListener("click", function () {
  st.classList.toggle("soft-aktif");
  stMenu.classList.toggle("hidden");
});
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

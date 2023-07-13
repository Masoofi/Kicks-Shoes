// header-script-----/////
// This is for SideNavBar
let menuIcon = document.querySelector(".header_nav .fa-bars");
let closeIcon = document.querySelector(".nav_items .fa-close");
let navList = document.querySelector(".nav_items");
let menItems = document.querySelector(".men_items");
let womenItems = document.querySelector(".women_items");
let menDropdown = document.querySelector(".men_dropdown");
let womenDropdown = document.querySelector(".women_dropdown");
let para  = document.querySelector('.para-on');


closeIcon.addEventListener("click",() => {
   document.body.style="null";
})


menuIcon.addEventListener("click", () => {
  navList.classList.add("header_nav_list_active");
  document.body.style.overflow = "hidden";
});
closeIcon.addEventListener("click", () => {
  navList.classList.remove("header_nav_list_active");
  document.body.style.overflow = "auto";
});

menItems.addEventListener("click", () => {
  menDropdown.classList.toggle("men_dropdown_show");
  womenDropdown.classList.remove("women_dropdown_show");
});

womenItems.addEventListener("click", () => {
  womenDropdown.classList.toggle("women_dropdown_show");
  menDropdown.classList.remove("men_dropdown_show");
});

let section = document.querySelectorAll("section");

section.forEach((sec) => {
  sec.addEventListener("click", () => {
    womenDropdown.classList.remove("women_dropdown_show");
    menDropdown.classList.remove("men_dropdown_show");
  });
});
// This is for search bar show
let searchIcon = document.querySelector(".nav_search .fa-search");
let searchInput = document.querySelector(".nav_search input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("input_show");
});

// header-script-end------////
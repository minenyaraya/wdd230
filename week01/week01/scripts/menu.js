const menubutton = document.querySelector("#hamburguer");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
  menuitems.forEach((item) => item.classList.toggle("open"));
  menubutton.classList.toggle("close");
});
let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('.year').textContent = year;

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('.highlight').textContent = currentdate


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "Light Mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "Dark Mode";
	}
});


const menubutton = document.querySelector("#hm");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("X");
});
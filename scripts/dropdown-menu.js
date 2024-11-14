const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};


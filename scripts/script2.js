document.addEventListener("DOMContentLoaded", defaultColor);

const originalColorDiv = document.querySelectorAll(".original");
const colorPicker = document.querySelector("#color-picker");
let currentColor = colorPicker.value;

colorPicker.addEventListener("input", updateColor);

// defines default color
function defaultColor() {
  originalColorDiv.forEach((element) => {
    element.style.backgroundColor = currentColor;
  });
}

function updateColor(event) {
  currentColor = event.target.value;
  originalColorDiv.forEach((element) => {
    element.style.backgroundColor = currentColor;
  });

  updateComplementaryColor(currentColor);
  updateTriadicColors(currentColor);
  updateAnalogousColors(currentColor);
}

function updateComplementaryColor(color) {
    const complementaryColorDiv = document.querySelector(".complementary");
    
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    const compR = (255 - r).toString(16).padStart(2, "0");
    const compG = (255 - g).toString(16).padStart(2, "0");
    const compB = (255 - b).toString(16).padStart(2, "0");

    complementaryColorDiv.style.backgroundColor = `#${compR}${compG}${compB}`
}

function updateTriadicColors(color) {}

function updateAnalogousColors(color) {}

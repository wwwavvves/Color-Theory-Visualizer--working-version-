document.addEventListener("DOMContentLoaded", defaultColors);

const colorPicker = document.querySelector("#color-picker");
const originalColor = document.querySelector("#original");
const complementaryColor = document.querySelector("#complementary");
const titleOriginal = document.querySelector("#title-original");
const titleComplementary = document.querySelector("#title-complementary");

colorPicker.addEventListener("input", updateColor);

function translateColor(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const compR = (255 - r).toString(16).padStart(2, "0");
  const compG = (255 - g).toString(16).padStart(2, "0");
  const compB = (255 - b).toString(16).padStart(2, "0");

  return `#${compR}${compG}${compB}`;
}

function defaultColors() {
  const color = colorPicker.value;
  const complementaryHex = translateColor(color);

  originalColor.style.backgroundColor = color;
  complementaryColor.style.backgroundColor = complementaryHex;
  titleOriginal.style.color = complementaryHex;
  titleComplementary.style.color = color;
}

function updateColor(event) {
  const color = event.target.value;
  const complementaryHex = translateColor(color);

  originalColor.style.backgroundColor = event.target.value;
  complementaryColor.style.backgroundColor = complementaryHex;
  titleOriginal.style.color = complementaryHex;
  titleComplementary.style.color = color;
}

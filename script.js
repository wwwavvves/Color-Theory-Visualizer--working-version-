document.addEventListener("DOMContentLoaded", defaultColors);

const colorPicker = document.querySelector("#color-picker");
const originalColor = document.querySelector("#original");
const complementaryColor = document.querySelector("#complementary");
const titleOriginal = document.querySelector("#title-original");
const titleComplementary = document.querySelector("#title-complementary");
const colorModelsOriginal = document.querySelector(".color-models-original");
const colorModelsComplementary = document.querySelector(
  ".color-models-complementary"
);

colorPicker.addEventListener("input", updateColor);

// returns rgb
function getRGBValues(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  return {r, g, b};
}

// returns complementary hex
function getComplementaryColorHex(rgb) {
  const compRhex = (255 - rgb.r).toString(16).padStart(2, "0");
  const compGhex = (255 - rgb.g).toString(16).padStart(2, "0");
  const compBhex = (255 - rgb.b).toString(16).padStart(2, "0");

  return `#${compRhex}${compGhex}${compBhex}`;
}

// returns complementary rgb
function getComplementaryColorRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}


function defaultColors() {
  const color = colorPicker.value;
  const rgbValues = getRGBValues(color);
  const complementaryColorHex = getComplementaryColorHex(rgbValues);
  const complementaryColorRGB = getComplementaryColorRGB(complementaryColorHex);

  originalColor.style.backgroundColor = color;
  titleOriginal.style.color = complementaryColorHex;
  colorModelsOriginal.style.color = complementaryColorHex;
  complementaryColor.style.backgroundColor = complementaryColor;
  titleComplementary.style.color = color;
  colorModelsComplementary.style.color = color;

  colorModelsOriginal.innerHTML = `
      <div class="hex">${color}</div>
      <div class="rgb">${rgbValues.r} ${rgbValues.g} ${rgbValues.b}</div>
  `;
  colorModelsComplementary.innerHTML = `
      <div class="hex">${complementaryColorHex}</div>
      <div class="rgb">${complementaryColorRGB.r} ${complementaryColorRGB.g} ${complementaryColorRGB.b}</div>
  `;
}

function updateColor(event) {
  const color = event.target.value;
  const rgbValues = getRGBValues(color);
  const complementaryColorHex = getComplementaryColorHex(rgbValues);
  const complementaryColorRGB = getComplementaryColorRGB(complementaryColorHex);

  originalColor.style.backgroundColor = color;
  titleOriginal.style.color = complementaryColorHex;
  colorModelsOriginal.style.color = complementaryColorHex;
  complementaryColor.style.backgroundColor = complementaryColorHex;
  titleComplementary.style.color = color;
  colorModelsComplementary.style.color = color;

  colorModelsOriginal.innerHTML = `
      <div class="hex">${color}</div>
      <div class="rgb">${rgbValues.r} ${rgbValues.g} ${rgbValues.b}</div>
    `;
  colorModelsComplementary.innerHTML = `
      <div class="hex">${complementaryColorHex}</div>
      <div class="rgb">${complementaryColorRGB.r} ${complementaryColorRGB.g} ${complementaryColorRGB.b}</div>
    `;
}

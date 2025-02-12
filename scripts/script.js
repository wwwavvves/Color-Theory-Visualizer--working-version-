// runs the defaultColors function when the page loads, setting initial values
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

// calls updateColor() whenever the user selects a new color
colorPicker.addEventListener("input", updateColor);

// returns rgb
function getRGBValues(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  return { r, g, b };
}

// // working function to calculate constrast
// function calculateLuminance(original) {
//   const luminance = 0.2126 * original.r + 0.7152 * original.g + 0.0722 * original.b;
//   console.log(luminance);
//   // FIX
// }
// calculateLuminance(getRGBValues("#ffffff"))

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

// runs when the page loads
function defaultColors() {
  const color = colorPicker.value;
  const rgbValues = getRGBValues(color);
  const complementaryColorHex = getComplementaryColorHex(rgbValues);
  const complementaryColorRGB = getComplementaryColorRGB(complementaryColorHex);

  // original color section
  originalColor.style.backgroundColor = color;
  titleOriginal.style.color = complementaryColorHex;
  colorModelsOriginal.style.color = complementaryColorHex;
  // complementary color section
  complementaryColor.style.backgroundColor = complementaryColorHex;
  titleComplementary.style.color = color;
  colorModelsComplementary.style.color = color;

  colorModelsOriginal.innerHTML = `
      <div class="hex">hex ${color}</div>
      <div class="rgb">rgb ${rgbValues.r} ${rgbValues.g} ${rgbValues.b}</div>
  `;
  colorModelsComplementary.innerHTML = `
      <div class="hex">hex ${complementaryColorHex}</div>
      <div class="rgb">rgb ${complementaryColorRGB.r} ${complementaryColorRGB.g} ${complementaryColorRGB.b}</div>
  `;
}

// updates the color display when the user picks a new color
function updateColor(event) {
  const color = event.target.value;
  const rgbValues = getRGBValues(color);
  const complementaryColorHex = getComplementaryColorHex(rgbValues);
  const complementaryColorRGB = getComplementaryColorRGB(complementaryColorHex);

  // original color section
  originalColor.style.backgroundColor = color;
  titleOriginal.style.color = complementaryColorHex;
  colorModelsOriginal.style.color = complementaryColorHex;
  // complementary color section
  complementaryColor.style.backgroundColor = complementaryColorHex;
  titleComplementary.style.color = color;
  colorModelsComplementary.style.color = color;

  colorModelsOriginal.innerHTML = `
      <div class="hex">hex ${color}</div>
      <div class="rgb">rgb ${rgbValues.r} ${rgbValues.g} ${rgbValues.b}</div>
    `;
  colorModelsComplementary.innerHTML = `
      <div class="hex">hex ${complementaryColorHex}</div>
      <div class="rgb">rgb ${complementaryColorRGB.r} ${complementaryColorRGB.g} ${complementaryColorRGB.b}</div>
    `;
}
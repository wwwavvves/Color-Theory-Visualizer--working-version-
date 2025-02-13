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

// CONVERSION: HEX TO RGB
function hexToRgb(color) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return {r, g, b};
}

// CONVERSION: RGB TO HSL
function rgbToHsl(r, g, b){
  const scaledR = r / 255;
  const scaledG = g / 255;
  const scaledB = b / 255;

  const max = Math.max(scaledR, scaledG, scaledB);
  const min = Math.min(scaledR, scaledG, scaledB);

  let h, s, l; // hue, saturation, lightness
  l = (max + min) / 2; // lightness

  if (max === min) {
    h = s = 0; // Grayscale
  } else {
    let d = max - min; // Delta
    s = d / (1 - Math.abs(2 * l - 1));

    if (max === scaledR) {
      h = ((scaledG - scaledB) / d + (scaledG < scaledB ? 6 : 0)) * 60;
    } else if (max === scaledG) {
      h = ((scaledB - scaledR) / d + 2) * 60;
    } else {
      h = ((scaledR - scaledG) / d + 4) * 60;
    }
  }

  // return the HSL values
  return {h, s, l}
}

// CONVERSION: HSL TO RGB
function hslToRgb(h, s, l) {
      let c = (1 - Math.abs(2 * l - 1)) * s;
      let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      let m = l - c / 2;

      let r, g, b;
      if (h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (h < 300) {
        r = x;
        g = 0;
        b = c;
      } else {
        r = c;
        g = 0;
        b = x;
      }

      return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255),
      ];
}

// CONVERSION: RGB TO HEX
function rgbToHex(r, g, b){
    return (
      "#" +
      ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()
    );
}

function updateComplementaryColor(color) {
  const complementaryColorDiv = document.querySelector(".complementary");

  // convert HEX to RGB
  const { r, g, b } = hexToRgb(color);

  // find complemetary color
  const compR = (255 - r).toString(16).padStart(2, "0");
  const compG = (255 - g).toString(16).padStart(2, "0");
  const compB = (255 - b).toString(16).padStart(2, "0");

  complementaryColorDiv.style.backgroundColor = `#${compR}${compG}${compB}`;
}

function updateTriadicColors(color) {
  // convert HEX to RGB
  const {r, g, b} = hexToRgb(color);

  // convert RGB to HSL
  const {h, s, l} = rgbToHsl(r, g, b);

  // at this point, h, s, and l hold the HSL values

  // rotate the hue to get triadic colors
  let h1 = (h + 120) % 360; // first triadic hue
  let h2 = (h + 240) % 360; // second triadic hue

  // convert HSL back to RGB
  let [r1, g1, b1] = hslToRgb(h1, s, l);
  let [r2, g2, b2] = hslToRgb(h2, s, l);

  // convert RGB to HEX
  let triadic1 = rgbToHex(r1, g1, b1);
  let triadic2 = rgbToHex(r2, g2, b2);

  const triadic1Div = document.querySelector(".triadic-1");
  const triadic2Div = document.querySelector(".triadic-2");

  triadic1Div.style.backgroundColor = triadic1;
  triadic2Div.style.backgroundColor = triadic2;
}

function updateAnalogousColors(color) {
  // convert HEX to RGB
  const {r, g, b} = hexToRgb(color);

  // convert RGB to HSL
  const { h, s, l } = rgbToHsl(r, g, b);

  // at this point, h, s, and l hold the HSL values

  // rotate the hue to get analogous colors
  let h1 = (h + 15) % 360;
  let h2 = (h + 30) % 360;
  let h3 = (h + 45) % 360;
  let h4 = (h - 15 + 360) % 360;
  let h5 = (h - 30 + 360) % 360;

  // convert HSL back to RGB
  let [r1, g1, b1] = hslToRgb(h1, s, l);
  let [r2, g2, b2] = hslToRgb(h2, s, l);
  let [r3, g3, b3] = hslToRgb(h3, s, l);
  let [r4, g4, b4] = hslToRgb(h4, s, l);
  let [r5, g5, b5] = hslToRgb(h5, s, l);

  // convert RGB to HEX
  let analogous1 = rgbToHex(r1, g1, b1);
  let analogous2 = rgbToHex(r2, g2, b2);
  let analogous3 = rgbToHex(r3, g3, b3);
  let analogous4 = rgbToHex(r4, g4, b4);
  let analogous5 = rgbToHex(r5, g5, b5);

  const analogous1Div = document.querySelector(".analogous-1");
  const analogous2Div = document.querySelector(".analogous-2");
  const analogous3Div = document.querySelector(".analogous-3");
  const analogous4Div = document.querySelector(".analogous-4");
  const analogous5Div = document.querySelector(".analogous-5");

  analogous1Div.style.backgroundColor = analogous1;
  analogous2Div.style.backgroundColor = analogous2;
  analogous3Div.style.backgroundColor = analogous3;
  analogous4Div.style.backgroundColor = analogous4;
  analogous5Div.style.backgroundColor = analogous5;
}

// Global selections and variables

const colorDivs = document.querySelectorAll(".color");
const generationBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");

function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    div.style.backgroundColor = randomColor;
    hexText.innerHTML = randomColor;

    //   check for contrast
    checkTextContrast(randomColor, hexText);
  });
}
randomColors();

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();

  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

generationBtn.addEventListener("click", randomColors);

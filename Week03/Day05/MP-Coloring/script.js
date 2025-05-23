//AI HELP:
const colorPalette = document.getElementById("colorPalette");
const drawingArea = document.getElementById("drawingArea");
const clearBtn = document.getElementById("clearBtn");

let selectedColor = "#000000";
let isDrawing = false;

const colors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#000000", "#FFFFFF", "#FFA500", "#800080",
  "#A52A2A", "#008000", "#ADD8E6", "#FFC0CB", "#808080",
  "#00008B", "#FFD700", "#40E0D0", 
  "#FF69B4", "#8B4513", "#2F4F4F"  
];


colors.forEach(color => {
  const swatch = document.createElement("div");
  swatch.classList.add("swatch");
  swatch.style.backgroundColor = color;

  swatch.addEventListener("click", () => {
    selectedColor = color;
    document.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
    swatch.classList.add("selected");
  });

  colorPalette.appendChild(swatch);
});

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.className = "square";

  square.addEventListener("mousedown", () => {
    isDrawing = true;
    square.style.backgroundColor = selectedColor;
  });

  square.addEventListener("mouseover", () => {
    if (isDrawing) {
      square.style.backgroundColor = selectedColor;
    }
  });

  drawingArea.appendChild(square);
}

document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach(square => {
    square.style.backgroundColor = "white";
  });
});

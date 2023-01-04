const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const lineWidthInput = document.querySelector("#line-width")
const lineWidthValue = document.querySelector("#line-width-value")
const colorSetInput = document.querySelector("#color-set")
const colorValue = document.querySelector("#color-value")
const modeBtn = document.querySelector("#mode-btn")
const clearBtn = document.querySelector("#clear-btn")
const eraserBtn = document.querySelector("#erase-btn")
const colorPaletteContainer = document.querySelector("#color-palette")
const colorPalette = ["#1abc9c", "#3498db", "#34495e", "#27ae60", "#8e44ad", "#f1c40f", "#e74c3c", "#95a5a6", "#d35400", "#bdc3c7", "#2ecc71", "#e67e22"]
let isFill = false;

canvas.width = 800
canvas.height = 800
ctx.lineWidth = lineWidthInput.value
lineWidthValue.textContent = lineWidthInput.value
colorValue.textContent = colorSetInput.value

function mouseDown(e) {
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)
  canvas.addEventListener("mousemove", onDraw)
}

function mouseUp() {
  canvas.removeEventListener("mousemove", onDraw)
}

function onDraw(e) {
  if(!isFill) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke() 
  }
}

function mouseLeave() {
  canvas.removeEventListener("mousemove", onDraw)
}

function onLineWidthChange(e) {
  lineWidthValue.textContent = e.target.value
  ctx.lineWidth = e.target.value
}

function onColorChange (e) {
  const colorValue = e.target.value
  colorValue.textContent = colorValue
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue
}

function selectPresetColor (e) {
  const colorValue = e.target.dataset.color
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue
  colorSetInput.value = colorValue
}

function onModeChange (e) {
  if(e.target.innerText == "펜") {
    e.target.textContent = "채우기"
    isFill = true
  } else {
    e.target.textContent = "펜"
    isFill = false
  }
}

function onClick () {
  if(isFill) {
    ctx.fillRect(0,0,800,800)
  }
}

function onClearCanvas () {
  ctx.clearRect(0,0,800,800)
}

function onEraserClick () {
  if(isFill) {
    isFill = false
  }
  ctx.strokeStyle = "white"
}

colorPalette.forEach((color) => {
  let div = document.createElement("div")
  div.setAttribute("class", "palette-children")
  div.setAttribute("data-color", color)
  div.style.background = color;
  colorPaletteContainer.appendChild(div)
  div.addEventListener("click", selectPresetColor)
})

canvas.addEventListener("click", onClick)
canvas.addEventListener("mousedown", mouseDown)
canvas.addEventListener("mouseup", mouseUp)
canvas.addEventListener("mouseleave", mouseLeave)
lineWidthInput.addEventListener("change", onLineWidthChange)
colorSetInput.addEventListener("change", onColorChange)
modeBtn.addEventListener("click", onModeChange)
clearBtn.addEventListener("click", onClearCanvas)
eraserBtn.addEventListener("click", onEraserClick)
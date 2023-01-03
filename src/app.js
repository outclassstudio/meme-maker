const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const lineWidthInput = document.querySelector("#line-width")
const lineWidthValue = document.querySelector("#line-width-value")
const colorSetInput = document.querySelector("#color-set")
const colorValue = document.querySelector("#color-value")
const colorPaletteContainer = document.querySelector("#color-palette")
const colorPalette = ["#1abc9c", "#3498db", "#34495e", "#27ae60", "#8e44ad", "#f1c40f", "#e74c3c", "#95a5a6", "#d35400", "#bdc3c7", "#2ecc71", "#e67e22"]

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
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
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

colorPalette.forEach((color) => {
  let div = document.createElement("div")
  div.setAttribute("class", "palette-children")
  div.setAttribute("data-color", color)
  div.style.background = color;
  colorPaletteContainer.appendChild(div)
  div.addEventListener("click", selectPresetColor)
})

canvas.addEventListener("mousedown", mouseDown)
canvas.addEventListener("mouseup", mouseUp)
canvas.addEventListener("mouseleave", mouseLeave)
lineWidthInput.addEventListener("change", onLineWidthChange)
colorSetInput.addEventListener("change", onColorChange)
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const lineWidthInput = document.querySelector("#line-width")
const lineWidthValue = document.querySelector("#line-width-value")
const colorSetInput = document.querySelector("#color-set")
const colorValue = document.querySelector("#color-value")

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
  colorValue.textContent = e.target.value
  ctx.strokeStyle = e.target.value
  ctx.fillStyle = e.target.value
}

canvas.addEventListener("mousedown", mouseDown)
canvas.addEventListener("mouseup", mouseUp)
canvas.addEventListener("mouseleave", mouseLeave)
lineWidthInput.addEventListener("change", onLineWidthChange)
colorSetInput.addEventListener("change", onColorChange)
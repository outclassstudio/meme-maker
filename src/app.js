const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 800

ctx.lineWidth = 2

function mouseDown (e) {
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)
  canvas.addEventListener("mousemove", onDraw)
}

function mouseUp (e) {
  canvas.removeEventListener("mousemove", onDraw)
}

function onDraw (e) {
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

function mouseLeave() {
  canvas.removeEventListener("mousemove", onDraw)
}

canvas.addEventListener("mousedown", mouseDown)
canvas.addEventListener("mouseup", mouseUp)
canvas.addEventListener("mouseleave", mouseLeave)
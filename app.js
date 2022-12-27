const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 800

//집!
ctx.fillRect(150, 450, 50, 200)
ctx.fillRect(350, 450, 50, 200)
ctx.fillRect(250, 550, 50, 100)
ctx.fillRect(150, 450, 200, 20)

ctx.moveTo(150, 450)
ctx.lineTo(275, 350)
ctx.stroke()

ctx.lineTo(400, 450)
ctx.fill()

ctx.moveTo(0, 650)
ctx.lineTo(800, 650)
ctx.stroke()

//사람
ctx.beginPath()
ctx.fillRect(570, 430, 60, 120)

// ctx.fillRect(665, 420, 15, 100)
// ctx.fillRect(520, 420, 15, 100)

ctx.fillRect(570, 550, 15, 100)
ctx.fillRect(615, 550, 15, 100)

//arc는 각도로 radian 사용
ctx.arc(600, 375, 50, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.arc(620, 365, 10, 0, 2*Math.PI)
ctx.fillStyle = "white"
ctx.fill()
ctx.arc(580, 365, 10, 0, 2*Math.PI)
ctx.fill()

ctx.beginPath()
ctx.arc(600, 400, 14, 2*Math.PI, Math.PI)
ctx.fill()

ctx.beginPath()
ctx.lineWidth = 10
ctx.moveTo(574, 432)
ctx.lineTo(540, 540)
ctx.stroke()

ctx.moveTo(626, 432)
ctx.lineTo(660, 540)
ctx.stroke()
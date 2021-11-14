let parentDiv = document.getElementById("p5-container"),
    w = parentDiv.clientWidth,
    h = parentDiv.clientHeight,
    sX = 0,
    sY = 0,
    x = 0,
    y = 0

function setup() {
  createCanvas(w, h).parent("p5-container")
}

function draw() {
  background(240)
  x = mouseX
  y = mouseY
  fill(255, 100, 100)
  circle(x, y, w*0.15)
  fill(150)
  if(x >= 0 && x <= w && y >= 0 && y <= h) {
    sX = int(x/w*128)
    sY = int(y/h*128)
  }
  text(sX + ", " + sY, 10, 20)
}

function windowResized() {
  w = parentDiv.clientWidth
  h = parentDiv.clientHeight
  resizeCanvas(w, h)
}

function touchMoved() {
  ellipse(mouseX, mouseY, 5, 5);
  return false;
}
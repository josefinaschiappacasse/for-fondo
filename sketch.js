function setup() {
  createCanvas(400, 400);
//  noStroke();

}

function draw() {
  background(mouseX, mouseY, 0);

  for (let y = 40; y < width - 20; y += 20) {
    for (let x = 40; x < width - 20; x += 20) {
      fill(x, y, 0);
      if (x % 40 === 0) {
        ellipse(x, y, 30) ;
      } else {
        ellipse(x, y, 20);
      }
    }
  }
}
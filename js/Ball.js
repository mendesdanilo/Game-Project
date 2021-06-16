class Ball {
  constructor() {
    this.x = 395;
    this.y = 250;
    this.vx = 3;
    this.vy = 3;
    this.radius = 10;
    this.color = "white";
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}

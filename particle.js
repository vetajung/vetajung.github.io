import { distance } from "./utils.js";

export class Particle {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = Math.random() * speed - speed;
    this.vy = Math.random() * speed - speed;

    // 화면 안 일정 구역에 x,y 랜덤 배치
    this.minLength = Math.min(stageWidth, stageHeight);
    this.x = stageWidth * 0.5 - this.minLength / 12 + (Math.random() * this.minLength) / 6;
    this.y = stageHeight - this.minLength / 3 + (Math.random() * this.minLength) / 6;
  }

  draw(ctx, stageWidth, stageHeight, color, mouseX, mouseY) {
    const prev_dist = distance(mouseX, mouseY, this.x, this.y);
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceMouse(mouseX, mouseY, prev_dist);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceMouse(mouseX, mouseY, prev_dist) {
    const dist = distance(mouseX, mouseY, this.x, this.y);
    if (dist < 70 && prev_dist > dist) {
      this.vx *= -1;
      this.x += this.vx;
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}

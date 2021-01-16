export class Body {
  constructor() {
    this.vy = 0;
    this.minLength = 0;
  }

  init_draw(ctx, stageWidth, stageHeight, color) {
    this.minLength = Math.min(stageWidth, stageHeight);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(
      stageWidth * 0.5 - this.minLength / 32,
      stageHeight - this.minLength / 8 - this.minLength / 32,
      this.minLength / 16,
      this.minLength / 32
    );
  }

  click_draw(ctx, stageWidth, stageHeight, color) {
    this.minLength = Math.min(stageWidth, stageHeight);

    this.vy = this.minLength / 100;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(
      stageWidth * 0.5 - this.minLength / 32,
      stageHeight - this.minLength / 8 - this.minLength / 32 + this.vy,
      this.minLength / 16,
      this.minLength / 32
    );
    return false;
  }
}

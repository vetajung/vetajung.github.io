import { Body } from "./body.js";
import { Particles } from "./particles.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    this.clicked = false;
    this.onClicked = false;
    this.isDown = false;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.body = new Body();

    this.mouseX = 0;
    this.mouseY = 0;

    this.minLength = 0;

    document.addEventListener("pointerdown", this.onDown.bind(this), false);
    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("pointerup", this.onUp.bind(this), false);

    this.particles = new Particles(this.stageWidth, this.stageHeight);

    window.requestAnimationFrame(this.animate.bind(this));

    this.canvas.addEventListener("click", this.onClick.bind(this), false);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); //생성하기 전에 이전 프레임 지워줌

    this.minLength = Math.min(this.stageWidth, this.stageHeight);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      this.stageWidth * 0.5 - this.minLength / 8,
      this.stageHeight - this.minLength / 8,
      this.minLength / 4,
      this.minLength / 8
    );
    console.log(this.clicked);

    if (this.onClicked) {
      this.onClicked = this.body.click_draw(
        this.ctx,
        this.stageWidth,
        this.stageHeight,
        "orange"
      );
    } else {
      this.body.init_draw(
        this.ctx,
        this.stageWidth,
        this.stageHeight,
        "orange"
      );
    }

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      this.stageWidth * 0.5 - this.minLength / 8,
      this.stageHeight - this.minLength / 8,
      this.minLength / 4,
      this.minLength / 8
    );

    if (this.clicked) {
      this.particles.draw(
        this.ctx,
        this.stageWidth,
        this.stageHeight,
        this.mouseX,
        this.mouseY
      );
    }
  }

  onClick(e) {
    this.onClicked = true;
    this.clicked = true;
  }

  onDown(e) {
    this.isDown = true;
  }

  onMove(e) {
    if (this.isDown) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    }
  }

  onUp(e) {
    this.isDown = false;
  }
}

window.onload = () => {
  new App();
};

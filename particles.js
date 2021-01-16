import { Particle } from "./particle.js";

export class Particles {
  constructor(stageWidth, stageHeight) {
    this.totalParticles = 30;

    this.color = [
      "rgba(0,199,235,0.4)",
      "rgba(0,146,199,0.4)",
      "rgba(0,87,158,0.4",
    ];

    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const particle = new Particle(
        stageWidth,
        stageHeight,
        Math.min(stageWidth, stageHeight) / 50,
        2
      );
      this.particles[i] = particle;
    }
  }

  draw(ctx, stageWidth, stageHeight, mouseX, mouseY) {
    for (let i = 0; i < this.totalParticles; i++) {
      const particle = this.particles[i];
      const color = this.color[i % 3];
      particle.draw(ctx, stageWidth, stageHeight, color, mouseX, mouseY);
    }
  }
}

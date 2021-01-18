import { Particle } from "./particle.js";

export class Particles {
  constructor(stageWidth, stageHeight) {
    this.particles = [];
    this.color = ["rgba(0,199,235,0.4)", "rgba(0,146,199,0.4)", "rgba(0,87,158,0.4"];
    this.totalParticles = 0;
    this.stageHeight = stageHeight;
    this.stageWidth = stageWidth;

    this.addParticle(20);
  }

  addParticle(count) {
    for (let i = 0; i < count; i++) {
      const particle = new Particle(
        this.stageWidth,
        this.stageHeight,
        Math.min(this.stageWidth, this.stageHeight) / 50,
        2,
      );
      this.particles.push(particle);
    }

    this.totalParticles += count;
  }

  draw(ctx, stageWidth, stageHeight, mouseX, mouseY) {
    for (let i = 0; i < this.totalParticles; i++) {
      const particle = this.particles[i];
      const color = this.color[i % 3];
      particle.draw(ctx, stageWidth, stageHeight, color, mouseX, mouseY);
    }
  }
}

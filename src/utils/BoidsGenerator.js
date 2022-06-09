import * as THREE from "/modules/three.module.js";

class BoidsGenerator {
  constructor(scene) {
    this.scene = scene;
  }
  create() {
    console.log("Creating!");
  }

  update() {
    console.log("Updating!");
  }
}

export { BoidsGenerator };

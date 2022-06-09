import * as THREE from "/modules/three.module.js";
import { Boids } from "./Boid.js";
class BoidsGenerator {
  constructor(scene) {
    this.scene = scene;
    this.numBoids = 25;
    this.boidsObjects = [];
  }
  create() {
    console.log("Creating!");

    for (let i = 0; i < this.numBoids; i++) {
      console.log("Created Boid with id:", i);
      let b = new Boids(this.scene);
      b.create();
      this.boidsObjects.push(b);
    }

    console.log("List of Boids", this.boidsObjects);
  }

  update() {
    console.log("Updating!");
    let constant_force = new THREE.Vector3(0.01, 0.01, 0.01);
    for (let i = 0; i < this.boidsObjects.length; i++) {
      this.boidsObjects[i]._applyForce(constant_force);
      this.boidsObjects[i]._updatePhysics();
      this.boidsObjects[i]._updateMesh();
    }
  }
}

export { BoidsGenerator };

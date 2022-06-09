import * as THREE from "/modules/three.module.js";

class Boids {
  constructor(scene) {
    this.scene = scene;
    this.mesh;
    this.pos = new THREE.Vector3(
      Math.random() * 250,
      Math.random() * 250,
      Math.random() * 250
    );
    this.velocity = new THREE.Vector3();
    this.acceleration = new THREE.Vector3(0.01, 0.01, 0.01);
  }
  create() {
    // console.log("Creating!");

    this.scene.add(this._createSphere(this.pos.x, this.pos.y, this.pos.z));
  }

  update() {
    // console.log("Updating!");
  }

  // Mover applyForce
  _applyForce(force) {
    let a = force.clone();
    this.acceleration.add(a);
  }

  _updatePhysics() {
    this.velocity.add(this.acceleration.clone());
    this.pos.add(this.velocity.clone());
    this.acceleration.multiplyScalar(0);
  }

  _createSphere(posx, posy, posz) {
    let mat = new THREE.MeshPhongMaterial({
      wireframe: false,
      transparent: false,
      depthTest: true,
      side: THREE.DoubleSide,
      color: new THREE.Color(0, 0, 0),
    });
    let geo = new THREE.IcosahedronGeometry(20, 5);
    let mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.position.x = posx;
    mesh.position.y = posy;
    mesh.position.z = posz;
    this.mesh = mesh;
    // mesh.geometry.scale(4, 4, 4);
    // this.boidsObjects.push(mesh);

    return mesh;
  }
  _updateMesh() {
    this.mesh.position.x = this.pos.x;
    this.mesh.position.y = this.pos.y;
    this.mesh.position.z = this.pos.z;
  }
}

export { Boids };
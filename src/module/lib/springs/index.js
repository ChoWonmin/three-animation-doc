import * as THREE from 'three';

export class Particle {
  constructor(
    mesh,
    position,
    velocity = new THREE.Vector3(0, 0, 0),
    mass = 0.001
  ) {
    /**
     * @description particle's mesh
     * @type THREE.Mesh
     */
    this.mesh = mesh;

    /**
     * @description particle's position
     * @type THREE.Vector3
     */
    // eslint-disable-next-line no-undef
    this.position = position;
    /**
     * @description particle's velocity
     * @type THREE.Vector3
     */
    this.velocity = velocity;
    /**
     * @description particle's mass
     * @type number
     */
    this.mass = mass;
    /**
     * @deprecated particle's force
     * @type number
     */
    this.force = new THREE.Vector3(0, 0, 0);
  }

  /**
   * @description clear force
   */
  clearForce() {
    this.force = new THREE.Vector3(0, 0, 0);
  }
  /**
   * @description add force
   * @param {THREE.Vector3} w
   */
  addForce(w) {
    this.force.add(w);
  }
  /**
   * @description calculate partice's position using euler integration.
   * @abstract velocity += force/mass * dt | position += velocity * dt;
   * @param {number} dt
   */
  eval(dt) {
    const movingVelocity = this.force
      .divideScalar(this.mass)
      .multiplyScalar(dt);
    this.velocity = this.velocity.add(movingVelocity);

    this.position = this.position.add(this.velocity.multiplyScalar(dt));

    // this.cube.position.set(this.position);
  }
}

export const Spring = () => {};

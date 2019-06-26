import THREE from '../../three.min';

const Particle = (postion, velocity = THREE.Vector3(0, 0, 0), mass = 0.001) => {
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

  /**
   * @description clear force
   */
  this.clearForce = () => {
    this.force = new THREE.Vector3(0, 0, 0);
  };

  /**
   * @description add force
   * @param {THREE.Vector3} w
   */
  this.addForce = w => {
    this.force.add(w);
  };

  /**
   * @description calculate partice's position using euler integration.
   * @abstract velocity += force/mass * dt | position += velocity * dt;
   * @param {number} dt
   */
  this.eval = dt => {
    const val = this.force.divideScalar(this.mass).multiplyScalar(dt);
    this.velocity.add(val);
    this.position.add(this.velocity.multiplyScalar(dt));
  };
};

const Spring = () => {};

export default { Spring, Particle };

<template lang="pug">
  #springs-doc
</template>

<script>
import * as THREE from 'three';
import animation3 from '../../module';
import { parse } from 'path';

export default {
  name: 'Spring-Basic',
  mounted () {
    let dt = 0;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    const where = document.getElementById('springs-doc');
    renderer.setSize(where.clientWidth, where.clientHeight);
    where.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    const floor = new THREE.Mesh(new THREE.BoxGeometry(300, 1, 300), new THREE.MeshBasicMaterial({ color: 0xf0f0f0 }));
    floor.position.set(0, -40, 0);
    camera.position.z = 60;

    const particle = new animation3.Particle(cube, new THREE.Vector3(0, 0, 0));

    scene.add(cube);
    scene.add(floor);

    function update () {
      dt += 0.00001;

      const G = new THREE.Vector3(0, -1, 0).multiplyScalar(particle.mass * 981); // 중력가속도

      particle.addForce(G);
      particle.eval(dt);
      cube.position.set(particle.position.x, particle.position.y, particle.position.z);

      if (particle.position.y < floor.position.y) {
        cube.position.setY(floor.position.y + 3);
      }

    }

    function animate () {
      requestAnimationFrame(animate);

      update();
      // cube.position.set(0, -40, 0);

      renderer.render(scene, camera);
    }
    animate();
  }
}
</script>

<style lang="scss" scoped>
#springs-doc {
  width: 100%;
  height: 100%;
  canvas {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
  }
}
</style>
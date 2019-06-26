<template lang="pug">
  #springs-doc
</template>

<script>
import * as THREE from 'three';
import animation3 from '../../module';

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

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    renderer.render(scene, camera);

    function animate () {
      requestAnimationFrame(animate);

      dt += 0.00001;
      cube.rotation.x += dt;
      cube.rotation.y += dt;

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
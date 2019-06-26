<template lang="pug">
  #springs-doc
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Springs',
  mounted () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    const where = document.getElementById('springs-doc');
    renderer.setSize(where.clientWidth, where.clientHeight);
    where.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    renderer.render(scene, camera);

    function animate () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

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
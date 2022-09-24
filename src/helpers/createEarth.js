import * as THREE from "three";

export function createEarth(scene) {


    console.log('creating the earth ... 🌎')

    let sphere = new THREE.SphereGeometry(3958.8, 300, 300);
    let material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/2_no_clouds_4k.jpg"),
      bumpMap: new THREE.TextureLoader().load("/Assets/elev_bump_4k.jpg"),
      bumpScale: 0.005,
      specularMap: THREE.ImageUtils.loadTexture("/Assets/water_4k.png"),
      specular: new THREE.Color("grey"),
    });


    let mesh = new THREE.Mesh(sphere, material);
    // scene.add(mesh);
    sphere = new THREE.SphereGeometry(3958.8, 300, 300);
    material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/fair_clouds_4k.png"),
      transparent: true,
    });
    mesh = new THREE.Mesh(sphere, material);
    // scene.add(mesh);


}
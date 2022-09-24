import * as THREE from "three";

export function createEarth(scene) {


    console.log('creating the earth ... 🌎')

    // create earth
    let sphere = new THREE.SphereGeometry(3958.8, 300, 300);
    let material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/earth.jpg"),
      // transparent:true,
      opacity:0.9
    });


    let mesh = new THREE.Mesh(sphere, material);
    scene.add(mesh);




    // create clouds
    sphere = new THREE.SphereGeometry(3958.8, 300, 300);
    material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/clouds.png"),
      transparent: true,
    });
    mesh = new THREE.Mesh(sphere, material);
    scene.add(mesh);


}
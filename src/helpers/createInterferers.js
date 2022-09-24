import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createInterferers(scene, interferers) {

    console.log('creating the interferers ... 📛')

    for (let i = 0; i < interferers.length; i++) {

        const s = interferers[i]
        var xyz = projector.unproject(s.x, s.y, s.z);

        let lat = xyz[0]
        let lon = xyz[1]

        let radius = 3958.8 + 500

        const pos = calcPosFromLatLonRad(lat, lon, radius)

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        var cube = new THREE.Mesh(geometry, material);
        cube.scale.set(200,200,200)
        cube.position.set(...pos);
        cube.name = 'interferer_'+s.id;
        scene.add(cube);

    }

}
import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createSatellites(scene, sats) {

    console.log('creating the satellites ... 🛰')

    for (let i = 0; i < sats.length; i++) {

        const s = sats[i];
            var xyz = projector.unproject(s.x, s.y, s.z);

        let lat = xyz[0]
        let lon = xyz[1]

        let radius = 3958.8 + 500

        const pos = calcPosFromLatLonRad(lat, lon, radius)

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.scale.set(200,200,200);
        cube.position.set(...pos);
        cube.name = 'sat_'+s.id;
        scene.add(cube);

    }

}
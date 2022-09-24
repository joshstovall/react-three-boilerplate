import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createInterferers(scene, interferers) {

    console.log('creating the interferers ... 📛')

    for (let i = 0; i < interferers.length; i++) {

        const s = interferers[i]

        // convert EFCF to lat/long/alt
        // var xyz = projector.project(...s);
        var xyz = projector.project(s.x, s.y, s.z);

        // phoenix az
        // Latitude 33.448376
        // Longitude - 112.074036

        let lat = xyz[0]
        let lon = xyz[1]
        let alt = xyz[2]// altitude in meters

        // console.log('altitude', alt/1.609) // convert to miles
        let radius = 3958.8 + 500 //add height (altitude of satalite...)

        const pos = calcPosFromLatLonRad(lat, lon, radius)

        // TOOD: add height (altitude of satalite...)
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var cube = new THREE.Mesh(geometry, material);
        cube.scale.set(300,300,300)

        cube.name = s.id;

        scene.add(cube);
        cube.position.set(...pos);

    }

}
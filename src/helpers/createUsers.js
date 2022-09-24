import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createUsers(scene, users) {

    console.log('creating the users ... 👤')

    for (let i = 0; i < users.length; i++) {


        console.log("CREATING A NEW USER")
        const s = users[i]

        // convert EFCF to lat/long/alt
        var xyz = projector.project(s.x, s.y, s.z);

        let lat = xyz[0]
        let lon = xyz[1]


        let radius = 3958.8 

        const pos = calcPosFromLatLonRad(lat, lon, radius)
        
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        var cube = new THREE.Mesh(geometry, material);
        cube.scale.set(100,100,100)
        cube.name = 'user_' + s.id;

        scene.add(cube);
        cube.position.set(...pos);

    }

}
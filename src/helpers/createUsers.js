import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createUsers(scene, users) {

    console.log('creating the users ... 👤')

    for (let i = 0; i < users.length; i++) {


        console.log("CREATING A NEW USER")
        const s = users[i]

        console.log(s)
        // convert EFCF to lat/long/alt
        var xyz = projector.unproject(s.x, s.y,s.z);
        // var xyz = projector.project(37.8043722, -122.2708026, 0.0);

        let lat = xyz[0]
        let lon = xyz[1]

        console.log('XYZ is ', xyz)

        let radius = 3958.8 

        const pos = calcPosFromLatLonRad(lat, lon, radius)
        
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var cube = new THREE.Mesh(geometry, material);
        cube.scale.set(50,50,50)
        cube.name = 'user_' + s.id;

        scene.add(cube);
        cube.position.set(...pos);

    }

}
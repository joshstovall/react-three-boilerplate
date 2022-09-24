import * as THREE from "three";
import * as projector from "ecef-projector";

import { calcPosFromLatLonRad } from "./calcPosFromLatLonRad";

export async function createSatellites(scene, sats) {

    console.log('creating the satellites ... 🛰')

    for (let i = 0; i < sats.length; i++) {

        // console.log("SAT")
        const s = sats[i]

        // console.log(s)

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
        let radius = 3958.8 + 1000 //add height (altitude of satalite...)

        const pos = calcPosFromLatLonRad(lat, lon, radius)
        // console.log(pos)
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.name = 'sat_'+s.id;

        scene.add(cube);
        cube.scale.set(300,300,300);
        cube.position.set(...pos);

        // click callback
        cube.callback = function() { 

            console.log('you clicked sat ')
            console.log( this.name ); 
        
        
        }

    }

}
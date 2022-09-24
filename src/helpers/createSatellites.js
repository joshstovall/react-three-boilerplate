import * as THREE from "three";
import {calcPosFromLatLonRad} from "./calcPosFromLatLonRad";


import * as projector from "ecef-projector";

// var projector = require('ecef-projector');
// var projector = require('ecef-projector');



export function createSatellites(scene, sats) {


    console.log('creating the satellites ... 🛰')



    console.log("SCENE", scene)
    console.log("sats", sats)








    // for each sat

    for (let i = 0; i < sats.length; i++) {

        console.log("SAT")
        const s = sats[i]


        

        console.log(s)
    
    // convert EFCF to lat/long/alt
    // var xyz = projector.project(...s);
    var xyz = projector.project(s.x, s.y, s.z);

    console.log("ECEG", xyz)


    





        // phoenix az
        // Latitude 33.448376
        // Longitude - 112.074036


let lat =xyz[0]
let lon = xyz[1]
let radius = 10


        const pos = calcPosFromLatLonRad(lat,lon,radius)

        console.log("POS ", pos)

//         console.log("POS is ", pos)


//         // calcPosFromLatLonRad()


        
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var materiala = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, materiala);
cube.name = s.id;

    scene.add(cube);
    cube.position.set(...pos);



    }







}
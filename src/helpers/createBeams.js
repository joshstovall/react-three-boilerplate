import * as THREE from "three";

export async function createBeams(scene, beams) {

    for (let i = 0; i < beams.length; i++) {

        const s = beams[i]

        // get satalite and user positions
        var sat = scene.getObjectByName("sat_" + s.satellite);
        var user = scene.getObjectByName("user_" + s.user);

        // add those points to line 
        const points = [];
        points.push(sat.position);
        points.push(user.position);


        const geometry = new THREE.BufferGeometry().setFromPoints(points);


        // set the beam color

        let c = 0xffffff

        switch (s.color) {
            case 'A': c = 0xff0000; break;
            case 'B': c = 0x00ff00; break;
            case 'C': c = 0x0000ff; break;
            case 'D': c = 0xf0f000; break;
            default: break;
        }

        const material = new THREE.LineBasicMaterial({ color: c });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        
    }

}
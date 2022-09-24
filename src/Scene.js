import React, { useEffect, useRef, useState } from "react";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { clearScene } from "./helpers/clearScene";
import { createEarth } from "./helpers/createEarth";
import { createSatellites } from "./helpers/createSatellites";
import { createInterferers } from "./helpers/createInterferers";
import { createUsers } from "./helpers/createUsers";
import { createBeams } from "./helpers/createBeams";

function Scene({ inputs, outputs }) {

  const [scene] = useState(new THREE.Scene())

  const [satellites, setSatellites] = useState([])
  const [interferers, setInterferers] = useState([])
  const [users, setUsers] = useState([])
  const [beams, setBeams] = useState([])

  async function setupScene(scene) {
    await clearScene(scene);
    await setSatellites(inputs.satellites);
    await setUsers(inputs.users);
    await setInterferers(inputs.interferers);
    await setBeams(inputs.beams);
  }

  useEffect(() => {
    setupScene(scene)
  }, [inputs]);

  const mountRef = useRef(null);

  useEffect(() => {

    scene.background = new THREE.Color("black");


    // setup camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 15000);
    camera.position.set(10000, 0, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    let controls = new OrbitControls(camera, renderer.domElement);

    mountRef.current.appendChild(renderer.domElement);


    // add light
    camera.add(new THREE.AmbientLight(0xffffff, 0.6));

    // create the 3D objects
    createEarth(scene)
    createSatellites(scene, satellites)
    createUsers(scene, users)
    createInterferers(scene, interferers)
    createBeams(scene, beams)

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);

  }, [beams]);

  return (
    <div>
      <ul className='metadata'>
        <li>Total Satellites: {satellites.length ? satellites.length : 0}</li>
        <li>Total Users: {users.length ? users.length : 0}</li>
        <li>Total Interferers: {interferers.length ? interferers.length : 0}</li>
        <li>Total Beams: {beams.length ? beams.length : 0}</li>
      </ul>
      <div ref={mountRef}>
      </div>
    </div>
  );

}

export default Scene;
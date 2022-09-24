import React, { useEffect, useRef, useState } from "react";
// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import { createEarth } from "./helpers/createEarth";

import { createSatellites } from "./helpers/createSatellites";
import { createInterferers } from "./helpers/createInterferers";
import { createUsers } from "./helpers/createUsers";
import { createBeams } from "./helpers/createBeams";

import { clearScene } from "./helpers/clearScene";

// import  text  from './data/inputs/00.txt'; // Relative path to your File

// console.log(text); 

function Scene({ inputs, outputs }) {

  const [scene] = useState(new THREE.Scene())

  const [input_data, setInputData] = useState({})
  const [output_data, setOutputData] = useState({})

  const [satellites, setSatellites] = useState([])
  const [interferers, setInterferers] = useState([])
  const [users, setUsers] = useState([])
  const [beams, setBeams] = useState([])


  // setup stuffs


  const width = "100%";
  const height = "100%";



  async function setupScene(scene) {

    await clearScene(scene)


    console.log("BEAMS HERE", inputs.beams)
    await setSatellites(inputs.satellites)
    await setUsers(inputs.users)
    await setInterferers(inputs.interferers)
    await setBeams(inputs.beams)

  }

  useEffect(() => {

    // const ss = inputs.satellites

    setupScene(scene)

  }, [inputs, outputs]);




  const mountRef = useRef(null);

  useEffect(() => {



    scene.background = new THREE.Color("black");

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 15000);
    camera.position.set(10000,0,0); // Set position like this
    camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // var renderer = new THREE.WebGLRenderer();

    // renderer.setSize( window.innerWidth, window.innerHeight );




    // this.width = this.container.clientWidth;
    // this.height = this.container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    let controls = new OrbitControls(camera, renderer.domElement);



    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.shadowMap.enabled = true;
    // renderer.gammaOutput = true;
    // renderer.gammaFactor = 2.2;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // let scene = new THREE.Scene();

    // let camera = new THREE.PerspectiveCamera(
    //   60,
    //   width / height,
    //   0.25,
    //   1000
    // );
    scene.add(camera);






    mountRef.current.appendChild(renderer.domElement);


    // camera.position.z = 5;



    createEarth(scene)






    // add light 

    // let spotLight = new THREE.SpotLight(0xffffff, 0.25);
    // spotLight.position.set(45, 50, 15);
    // camera.add(spotLight);
    // // this.spotLight = spotLight;

    let ambLight = new THREE.AmbientLight(0x333333, 3);
    // ambLight.position.set(5, 3, 5);
    camera.add(ambLight);



    camera.position.z = 20;



    // todo make these ayncrounus


    // await 
    // if(satellites.length)
    
    createSatellites(scene, satellites)
    createUsers(scene, users)
    // createInterferers(scene, interferers)

    createBeams(scene, beams)









    var animate = function () {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, [beams]);

  return (
    <div ref={mountRef}>

    </div>
  );







  // useEffect(() => {

  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   var renderer = new THREE.WebGLRenderer();

  //   renderer.setSize( window.innerWidth, window.innerHeight );

  //   document.body.appendChild( renderer.domElement );

  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );

  //   scene.add( cube );
  //   camera.position.z = 5;

  //   var animate = function () {
  //     requestAnimationFrame( animate );
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render( scene, camera );
  //   };

  //   animate();
  // }, []);





  //     // const canvasRef = React.useRef(null);

  //     return (
  //       <div
  //         // ref={canvasRef}
  //         // style={{
  //         //   width: width,
  //         //   height: height,
  //         //   position: "absolute",
  //         //   overflow: "hidden",
  //         // }}
  //         >


  //           {/* threejs scene */}
  //         </div>
  //     );
  //   // }
}

export default Scene;

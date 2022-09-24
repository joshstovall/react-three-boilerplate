import React, { useEffect, useRef, useState } from "react";
// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import {createEarth} from "./helpers/createEarth";
import {createSatellites} from "./helpers/createSatellites";


// import  text  from './data/inputs/00.txt'; // Relative path to your File

// console.log(text); 

function Scene(  { inputs, outputs }) {


  const [input_data, setInputData] = useState({})
  const [output_data, setOutputData] = useState({})

  const [satellites, setSatellites] = useState([])
  const [interferers, setInterferers] = useState([])
  const [users, setUsers] = useState([])


  // setup stuffs


  const width = "100%";
  const height = "100%";


  useEffect(() => {
    

    // const ss = inputs.satellites

    setSatellites(inputs.satellites)


  }, [inputs, outputs]);




  const mountRef = useRef(null);

  useEffect(() => {


    
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("black");

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); 
   
    // var renderer = new THREE.WebGLRenderer();

    // renderer.setSize( window.innerWidth, window.innerHeight );




    // this.width = this.container.clientWidth;
    // this.height = this.container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    
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

    let spotLight = new THREE.SpotLight(0xffffff, 0.25);
    spotLight.position.set(45, 50, 15);
    camera.add(spotLight);
    // this.spotLight = spotLight;

    let ambLight = new THREE.AmbientLight(0x333333);
    ambLight.position.set(5, 3, 5);
    camera.add(ambLight);



    camera.position.z = 20;





    // await 
    createSatellites(scene,satellites)









    var animate = function () {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, [satellites]);

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

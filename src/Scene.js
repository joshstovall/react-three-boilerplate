import React, { useEffect, useRef, useState } from "react";
// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";


// import  text  from './data/inputs/00.txt'; // Relative path to your File

// console.log(text); 

function Scene(
  { inputs, outputs }
) {

  // class Scene extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {

  //       inputs :this.props.inputs
  //     };
  //     this.start = this.start.bind(this);
  //     this.stop = this.stop.bind(this);
  //     this.animate = this.animate.bind(this);
  //     this.renderScene = this.renderScene.bind(this);
  //     this.computeBoundingBox = this.computeBoundingBox.bind(this);
  //     this.setupScene = this.setupScene.bind(this);
  //     this.destroyContext = this.destroyContext.bind(this);
  //     this.handleWindowResize = this.handleWindowResize.bind(this);
  //     // this.inputs = this.handleWindowResize.bind(this);
  //   }

  //   componentWillMount() {
  //     window.addEventListener("resize", this.handleWindowResize);
  //   }

  //   componentDidMount() {


  //     // alert("yay")
  //     this.setupScene();
  //   }

  //   setupScene() {











  //     this.renderer = renderer;
  //     this.scene = scene;
  //     this.camera = camera;
  //     this.object = mesh;

  //     this.computeBoundingBox();
  //     this.addSatellites(

  //       [
  //         [0,0,0],

  //         [0,0,0],

  //         [0,0,0]
  //       ]

  //     );
  //   }
  //   addSatellites(e) {


  //     console.log("here are the stalites")

  //     console.log(e)



  //     for (let i=0;i<e.length;i++){

  //       const sat = e[i]

  //       console.log('stailite ' + i + ' location ' + sat)


  // // create the cude and add to scene
  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  // const cube = new THREE.Mesh( geometry, material );
  // this.scene.add( cube );








  //     }



  //   }


  //   start() {
  //     if (!this.frameId) {
  //       this.frameId = requestAnimationFrame(this.animate);
  //     }
  //   }

  //   renderScene() {
  //     this.renderer.render(this.scene, this.camera);
  //   }

  //   animate() {
  //     this.frameId = requestAnimationFrame(this.animate);
  //     this.controls.update();
  //     this.renderScene();
  //   }

  //   stop() {
  //     cancelAnimationFrame(this.frameId);
  //   }

  //   handleWindowResize() {
  //     let width = window.innerWidth;
  //     let height = window.innerHeight;
  //     this.camera.aspect = width / height;
  //     this.camera.updateProjectionMatrix();
  //   }

  //   componentWillUnmount() {
  //     this.stop();
  //     this.destroyContext();
  //   }

  //   destroyContext() {
  //     this.container.removeChild(this.renderer.domElement);
  //     this.renderer.forceContextLoss();
  //     this.renderer.context = null;
  //     this.renderer.domElement = null;
  //     this.renderer = null;
  //   }

  // render() {



  // console.log("here are thre inputs",this.state)


  const [input_data, setInputData] = useState({})
  const [output_data, setOutputData] = useState({})

  const [satellites, setSatellites] = useState([])
  const [interferers, setInterferers] = useState([])
  const [users, setUsers] = useState([])


  // const [container, setContainer] = useRef(<div></div>)





  const createSatellites = (scene, sats)=>{



    console.log("SCENE",scene)
    console.log("sats",sats)
  }




  // setup stuffs


  const width = "100%";
  const height = "100%";

  //     const renderer = new THREE.WebGLRenderer({ antialias: true });
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.shadowMap.enabled = true;
  //     renderer.gammaOutput = true;
  //     renderer.gammaFactor = 2.2;
  //     renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  //     let scene = new THREE.Scene();
  //     scene.background = new THREE.Color("black");

  //     let camera = new THREE.PerspectiveCamera(
  //       60,
  //       width / height,
  //       0.25,
  //       1000
  //     );
  //     scene.add(camera);


  //     // add the earth
  //     let sphere = new THREE.SphereGeometry(50, 300, 300);
  //     let material = new THREE.MeshPhongMaterial({
  //       map: new THREE.TextureLoader().load("/Assets/2_no_clouds_4k.jpg"),
  //       bumpMap: new THREE.TextureLoader().load("/Assets/elev_bump_4k.jpg"),
  //       bumpScale: 0.005,
  //       specularMap: THREE.ImageUtils.loadTexture("/Assets/water_4k.png"),
  //       specular: new THREE.Color("grey"),
  //     });


  //     let mesh = new THREE.Mesh(sphere, material);
  //     // scene.add(mesh);
  //     sphere = new THREE.SphereGeometry(50.1, 300, 300);
  //     material = new THREE.MeshPhongMaterial({
  //       map: new THREE.TextureLoader().load("/Assets/fair_clouds_4k.png"),
  //       transparent: true,
  //     });
  //     mesh = new THREE.Mesh(sphere, material);
  //     // scene.add(mesh);





  //     // this.renderer = renderer;
  //     // this.scene = scene;
  //     // this.camera = camera;
  //     // this.object = mesh;

  //     let spotLight = new THREE.SpotLight(0xffffff, 0.25);
  //     spotLight.position.set(45, 50, 15);
  //     camera.add(spotLight);
  //     // this.spotLight = spotLight;

  //     let ambLight = new THREE.AmbientLight(0x333333);
  //     ambLight.position.set(5, 3, 5);
  //     // this.
  //     camera.add(ambLight);

  //     const  computeBoundingBox =() =>{
  //       // let offset = 1.6;
  //       // const boundingBox = new THREE.Box3();
  //       // boundingBox.setFromObject(this.object);
  //       // const center = boundingBox.getCenter();
  //       // const size = boundingBox.getSize();
  //       // const maxDim = Math.max(size.x, size.y, size.z);
  //       // const fov = this.camera.fov * (Math.PI / 180);
  //       // let cameraZ = maxDim / 2 / Math.tan(fov / 2);
  //       // cameraZ *= offset;
  //       // this.camera.position.z = center.z + cameraZ;
  //       // const minZ = boundingBox.min.z;
  //       // const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

  //       // this.camera.far = cameraToFarEdge * 3;
  //       // this.camera.lookAt(center);
  //       // this.camera.updateProjectionMatrix();

  //       // let controls = new OrbitControls(this.camera, this.renderer.domElement);
  //       // controls.enableDamping = true;
  //       // controls.dampingFactor = 0.25;
  //       // controls.enableZoom = true;
  //       // controls.zoomSpeed = 0.1;
  //       // controls.enableKeys = false;
  //       // controls.screenSpacePanning = false;
  //       // controls.enableRotate = true;
  //       // controls.autoRotate = true;
  //       // controls.dampingFactor = 1;
  //       // controls.autoRotateSpeed = 1.2;
  //       // controls.enablePan = false;
  //       // controls.target.set(center.x, center.y, center.z);
  //       // controls.update();
  //       // this.controls = controls;
  //       // renderer.setSize(width, height);
  //       container.appendChild(renderer.domElement);
  //       start();
  //     }

  //     const  start =() =>{
  //       // if (!this.frameId) {
  //       //   this.frameId = requestAnimationFrame(this.animate);
  //       // }
  //     }

  //     const  renderScene =() =>{
  //       this.renderer.render(this.scene, this.camera);
  //     }

  //     const  animate =() =>{
  //       this.frameId = requestAnimationFrame(this.animate);
  //       this.controls.update();
  //       this.renderScene();
  //     }

  //     const  stop =() =>{
  //       cancelAnimationFrame(this.frameId);
  //     }

  //     const  handleWindowResize =() =>{
  //       let width = window.innerWidth;
  //       let height = window.innerHeight;
  //       this.camera.aspect = width / height;
  //       this.camera.updateProjectionMatrix();
  //     }




  //   // componentWillUnmount() {
  //   //   this.stop();
  //   //   this.destroyContext();
  //   // }

  //   // destroyContext() {
  //   //   this.container.removeChild(this.renderer.domElement);
  //   //   this.renderer.forceContextLoss();
  //   //   this.renderer.context = null;
  //   //   this.renderer.domElement = null;
  //   //   this.renderer = null;
  //   // }





  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;

    // computeBoundingBox()
    console.log("INPUTS YAY")
    console.log(inputs)




    const ss = inputs.satellites


    console.log(ss)


    setSatellites(ss)

    // // if (inputs?.satellites) {
    // //   const satas = inputs.satellites
    // //   // for each satalite
    // //   if (satas)
    //     for (let i = 0; i < inputs?.satellites?.length; i++) {
    // //       console.log("create the stalite here")
    // //       let s = satas[i]
    // //       console.log(s)
    //     }


    // // }

    



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

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var materiala = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, materiala);

    scene.add(cube);
    // camera.position.z = 5;



    // add the earth
    let sphere = new THREE.SphereGeometry(10, 300, 300);
    let material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/2_no_clouds_4k.jpg"),
      bumpMap: new THREE.TextureLoader().load("/Assets/elev_bump_4k.jpg"),
      bumpScale: 0.005,
      specularMap: THREE.ImageUtils.loadTexture("/Assets/water_4k.png"),
      specular: new THREE.Color("grey"),
    });


    let mesh = new THREE.Mesh(sphere, material);
    scene.add(mesh);
    sphere = new THREE.SphereGeometry(10, 300, 300);
    material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/Assets/fair_clouds_4k.png"),
      transparent: true,
    });
    mesh = new THREE.Mesh(sphere, material);
    scene.add(mesh);



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






        let controls = new OrbitControls(camera, renderer.domElement);
  //       // controls.enableDamping = true;
  //       // controls.dampingFactor = 0.25;
  //       // controls.enableZoom = true;
  //       // controls.zoomSpeed = 0.1;
  //       // controls.enableKeys = false;
  //       // controls.screenSpacePanning = false;
  //       // controls.enableRotate = true;
  //       // controls.autoRotate = true;
  //       // controls.dampingFactor = 1;
  //       // controls.autoRotateSpeed = 1.2;
  //       // controls.enablePan = false;
  //       // controls.target.set(center.x, center.y, center.z);
  //       // controls.update();







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

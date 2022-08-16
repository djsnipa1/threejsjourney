import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

//      _________
//     / ======= \
//    / __________\
//   | ___________ |
//   | | -       | |
//   | |         | |
//   | |_________| |_________________
//   \=____________/   Chad Boyce    )
//   / """"""""""" \                /
//  / ::::::::::::: \           =D-'
// (_________________)

/**********************************************************/
/*                       D E B U G                        */
/**********************************************************/
// const gui = new dat.GUI();

/**********************************************************/
/*                        B A S E                         */
/**********************************************************/
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**********************************************************/
/*                    T E X T U R E S                     */
/**********************************************************/
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/7.png");
const matcapTextureOrange = textureLoader.load("/textures/matcaps/c01.png");


/**********************************************************/
/*                   M A T E R I A L S                    */
/**********************************************************/
const material2 = new THREE.MeshMatcapMaterial({
  matcap: matcapTextureOrange
})

/**********************************************************/
/*                       F O N T S                        */
/**********************************************************/
const fontLoader = new FontLoader();
const font = fontLoader.load(
  // resource URL
  "/fonts/balloon_party_regular.json",
  (font) => {
    const textGeometry = new TextGeometry("Happy Birthday\n   Baby Boo!", {
    // const textGeometry = new TextGeometry(" ", {
      font: font,
      size: 1.5,
      height: 0.5,
      curveSegments: 7,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.08,
      bevelOffset: 0.,
      bevelSegments: 4,
    });
    textGeometry.center();

    const material = new THREE.MeshMatcapMaterial({
      matcap: matcapTexture,
    });
    // material.wireframe = true
    const text = new THREE.Mesh(textGeometry, material);
    scene.add(text);

    console.time("donuts");

    const donutGeometry = new THREE.TorusBufferGeometry(0.3, 0.2, 20, 45);


    for (let i = 0; i < 250; i++) {
      const donut = new THREE.Mesh(donutGeometry, material2
      );

      donut.position.x = (Math.random() - 0.5) * 15;
      donut.position.y = (Math.random() - 0.5) * 15;
      donut.position.z = (Math.random() - 0.5) * 15;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      scene.add(donut);
    }

    console.timeEnd("donuts");
    
  }
);


/**********************************************************/
/*                       S I Z E S                        */
/**********************************************************/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**********************************************************/
/*                      C A M E R A                       */
/**********************************************************/
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0.3;
camera.position.y = 0.6;
camera.position.z = 6.6;
scene.add(camera);

// gui.add(camera.position, 'x', 0, 5, .1)
// gui.add(camera.position, 'y', 0, 5, .1)
// gui.add(camera.position, 'z', 0, 10, .1)

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**********************************************************/
/*                    R E N D E R E R                     */
/**********************************************************/
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**********************************************************/
/*                     A N I M A T E                      */
/**********************************************************/
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  
    // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

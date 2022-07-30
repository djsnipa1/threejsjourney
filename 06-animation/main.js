import './style.css'
import 'modern-css-reset/dist/reset.min.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000'
})
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
// const clock = new THREE.Clock()

// gsap
console.log(gsap)
gsap.to(mesh.position, { duration: 3, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: -2 })

// Animations
const tick = () => {
  // Clock
  // const elapsedTime = clock.getElapsedTime()

  // Update Objects
  // camera.position.y = Math.sin(elapsedTime)
  // camera.position.x = Math.cos(elapsedTime)
  // camera.lookAt(mesh.position)

  // mesh.rotation.x += 0.5

  // Render
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()



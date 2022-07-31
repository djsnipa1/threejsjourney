import './style.css'
import 'modern-css-reset/dist/reset.min.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  //update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Fullscreen
 */
window.addEventListener('dblclick', () => {
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    }
    else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen()
    }
  }
  else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
})


// Cursor
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = - (event.clientY / sizes.height - 0.5)
})
// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(.5, .5, .5)
// const cubeMaterial = new THREE.WireframeGeometry(cubeGeometry)
// const line = new THREE.LineSegments(cubeMaterial)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000'
})
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Clock
const clock = new THREE.Clock()

// gsap
// gsap.to(mesh.position, { duration: 3, delay: 1, x: 2 })
// gsap.to(mesh.position, { duration: 1, delay: 3, x: -2 })

// Animations
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime()

  // Update Objects
  // camera.position.y = Math.sin(elapsedTime)
  // camera.position.x = Math.cos(elapsedTime)
  // camera.lookAt(mesh.position)

  // Update camera
  // camera.position.x = cursor.x * 10
  // camera.position.y = cursor.y * 10
  // camera.lookAt(mesh.position)

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  // camera.position.y = cursor.y * 5
  // camera.lookAt(mesh.position)

  // Update controls
  controls.update()
  // Render
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()



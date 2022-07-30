
## Position

`x`, `y`, and `z` or `.set(0, 0, 0)`

## `AxesHelper`

```javascript
const axeshelper = new THREE.AxesHelper()
scene.add(axeshelper)
```

Change line lengths `AxesHelper(2)`

## Scale

```javascript
mesh.scale.x = 1
mesh.scale.y = 1
mesh.scale.z = 1

mesh.scale.set(1, 1, 1)
```

## Rotation

rotation order
gimbal lock

## Groups

```javascript
const group = new THREE.Group()
scene.add(group)

// NEW WAY OF INSTANTIATION

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
// add cube1 to group
group.add(cube1)
```


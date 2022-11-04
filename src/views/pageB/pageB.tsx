import React, { Component, ReactNode } from 'react'
import * as THREE from 'three'

class PageB extends Component <any, {
  renderer: any
  camera: any
  scene: any
  cubes: any
}> {
  constructor (props: any) {
    super(props)
    this.state = {
      renderer: null,
      camera: null,
      scene: null,
      cubes: null
    }
  }

  componentDidMount (): void {
    this.initModel()
  }

  // init model
  initModel (): void {
    // init renderer
    const canvas = document.querySelector('#model') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({ canvas })

    // init camera
    const camera = this.addCamera(75, 2, 0.1, 5, 2)

    // init scene
    const scene = new THREE.Scene()

    // add fog on scene
    this.addFog(scene)

    // add light on scene
    this.addLight(scene)

    // init boxes
    const cubes = this.addBox(scene)
    this.setState({
      renderer,
      camera,
      scene,
      cubes
    })

    // move cubes
    requestAnimationFrame(this.renderCanvas.bind(this))
  }

  // add first camera
  addCamera (fov: number, aspect: number, near: number, far: number, z: number): object {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2
    return camera
  }

  // add background fog
  addFog (scene: any): void {
    const near = 1
    const far = 2
    const color = 'lightblue'
    scene.fog = new THREE.Fog(color, near, far)
    scene.background = new THREE.Color(color)
  }

  // add direction light
  addLight (scene: any): void {
    const color = '#fff'
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  // add boxes
  addBox (scene: any): any[] {
    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    // default boxType
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

    function makeInstance (geometry: THREE.BoxGeometry, color: string, x: number): any {
      // material details
      const material = new THREE.MeshPhongMaterial({ color })
      material.shininess = 150
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      cube.position.x = x

      return cube
    }
    return [
      makeInstance(geometry, '#44aa88', 0),
      makeInstance(geometry, '#44aa88', -2),
      makeInstance(geometry, '#44aa88', 2)
    ]
  }

  // should resize canvs ?
  shouldResize (renderer: any): boolean {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }
    return needResize
  }

  // render canvas
  renderCanvas (time: number): void {
    const {
      renderer,
      scene,
      camera,
      cubes
    } = this.state
    time *= 0.001

    if (this.shouldResize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    // change angle of cube
    cubes.forEach((cube: any, idx: number) => {
      const speed = 1 + idx * 0.1
      const rot = time * speed

      cube.rotation.x = rot
      cube.rotation.y = rot
    })

    renderer.render(scene, camera)

    requestAnimationFrame(this.renderCanvas.bind(this))
  }

  render (): ReactNode {
    return (
        <canvas id="model"/>
    )
  }
}

export default PageB

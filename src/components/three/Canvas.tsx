import type React from 'react'
import { Canvas as FiberCanvas } from '@react-three/fiber'

import * as THREE from 'three'

import { Scene } from './Scene'

export const Canvas: React.FC = () => {
  return (
    <FiberCanvas
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={({ gl, size, camera }) => {
        if (size.width < 600) {
          camera.position.z = 45
        }
        gl.setClearColor(new THREE.Color('#020207'))
      }}>
      <Scene />
    </FiberCanvas>
  )
}

/* eslint-disable react/no-unknown-property */
import type React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas as FiberCanvas, extend } from '@react-three/fiber'

import * as THREE from 'three'

import * as meshline from './meshline'
import { Scene } from './Scene'

extend(meshline)

export const Canvas: React.FC = () => {
  return (
    <FiberCanvas
      dpr={window.devicePixelRatio}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={({ gl, size, camera }) => {
        if (size.width < 600) {
          camera.position.z = 45
        }
        gl.setClearColor(new THREE.Color('#0f0f42'))
      }}>
      <OrbitControls makeDefault enablePan={false} enableRotate={true} enableZoom={false} />
      <pointLight distance={100} intensity={4} color="white" />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </FiberCanvas>
  )
}

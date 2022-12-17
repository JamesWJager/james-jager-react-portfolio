/* eslint-disable react/no-unknown-property */
import type React from 'react'
import { OrbitControls } from '@react-three/drei'

import { Planet } from './components/Planet'

export const Scene: React.FC = () => {
  return (
    <>
      <OrbitControls makeDefault enablePan={false} enableRotate={false} enableZoom={false} />
      <pointLight distance={100} intensity={4} color="white" />
      <group>
        <Planet />
      </group>
    </>
  )
}

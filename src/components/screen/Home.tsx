import type React from 'react'
import { Canvas } from '@react-three/fiber'

import { OnMouseMoveProvider } from '../../context/OnMouseMoveContext'
import { MouseTest } from '../elements/MouseTest'

export const Home: React.FC = () => {
  console.log('render Home')

  return (
    <OnMouseMoveProvider>
      <Canvas>
        <MouseTest />
      </Canvas>
    </OnMouseMoveProvider>
  )
}

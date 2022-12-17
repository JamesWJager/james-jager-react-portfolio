import type React from 'react'

import { OnMouseMoveProvider } from '../../context/OnMouseMoveContext'
import { Canvas } from '../three/Canvas'

export const Home: React.FC = () => {
  console.log('render Home')

  return (
    <OnMouseMoveProvider>
      <Canvas />
    </OnMouseMoveProvider>
  )
}

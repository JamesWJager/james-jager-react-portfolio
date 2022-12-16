import { useContext } from 'react'
import type React from 'react'
import { useFrame } from '@react-three/fiber'

import { OnMouseMoveContext } from '../../context/OnMouseMoveContext'

export const MouseTest: React.FC = () => {
  const mouse = useContext(OnMouseMoveContext)

  useFrame(() => {
    console.log(mouse?.current)
  })

  return null
}

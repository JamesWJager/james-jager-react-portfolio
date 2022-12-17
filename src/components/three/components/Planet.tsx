/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import type React from 'react'

export const Planet: React.FC = () => {
  const planet = useRef(null)

  return (
    <mesh ref={planet} scale={[10, 10, 10]}>
      <icosahedronGeometry args={[1, 60]} />
    </mesh>
  )
}

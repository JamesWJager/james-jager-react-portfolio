/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Planet = props => {
  const planet = useRef(null)

  useFrame(() => {
    if (!planet.current) {
      return
    }
    planet.current.rotation.x = planet.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={planet}>
      <icosahedronGeometry args={[1, 60]} />
      <meshStandardMaterial color="#FFAE00" />
    </mesh>
  )
}

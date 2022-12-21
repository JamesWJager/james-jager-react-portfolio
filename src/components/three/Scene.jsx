/* eslint-disable react/no-unknown-property */

import { useRef } from 'react'

import { Planet } from './components/Planet'
import { SpaceShip } from './components/SpaceShip'
import { SparkStorm } from './components/SparkStorm'

const colors = {
  malevolentIllusion: ['#c06995', '#de77c7', '#df86df', '#d998ee', '#ceadf4', '#c6bff9'],
  sunnyRainbow: ['#fbe555', '#fb9224', '#f45905', '#be8abf', '#ffeed0', '#feff89'],
}

export const Scene = () => {
  const group = useRef(0)
  // rotate the box
  // useFrame(() => {
  //   group.current.rotation.x = group.current.rotation.y -= 0.01
  // })
  return (
    <group ref={group}>
      <Planet scale={[10, 10, 10]} />
      <SpaceShip />
      {/* <Sparks count={20} colors={colors.malevolentIllusion} /> */}
      <SparkStorm count={500} colors={colors.sunnyRainbow} />
    </group>
  )
}

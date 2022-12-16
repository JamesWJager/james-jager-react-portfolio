import React, { useCallback, useRef } from 'react'
import type { MutableRefObject, PropsWithChildren } from 'react'

import type { DivMouseEvent } from '../@types/DivMouseEvent'
import { Full } from '../components/ui/Full'

export const OnMouseMoveContext = React.createContext<MutableRefObject<number[]> | null>(null)

export const OnMouseMoveProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props
  const mouse = useRef([0, 0])

  const onMouseMove = useCallback(({ clientX: x, clientY: y }: DivMouseEvent) => {
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]
  }, [])

  return (
    <OnMouseMoveContext.Provider value={mouse}>
      <Full onMouseMove={onMouseMove}>{children}</Full>
    </OnMouseMoveContext.Provider>
  )
}

import { useCallback, useRef } from 'react'
import type React from 'react'

import { Full } from '../ui/Full'

import type { DivMouseEvent } from '@/@types/DivMouseEvent'
import type { DivPropsWithChildren } from '@/@types/DivProps'

interface OnMouseMoveInterface extends DivPropsWithChildren {
  position?: (value: number[]) => void
}

export const OnMouseMove: React.FC<OnMouseMoveInterface> = props => {
  const { children } = props
  const mouse = useRef([0, 0])

  const onMouseMove = useCallback(({ clientX: x, clientY: y }: DivMouseEvent) => {
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]
  }, [])

  return <Full onMouseMove={onMouseMove}>{children}</Full>
}

import type React from 'react'

import { FullScreen } from '../ui/FullScreen'

import type { DivPropsWithChildren } from '@/@types/DivProps'

export const Root: React.FC<DivPropsWithChildren> = props => {
  const { children, className } = props
  return (
    <FullScreen {...props} className={className}>
      {children}
    </FullScreen>
  )
}

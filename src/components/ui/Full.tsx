import type React from 'react'

import classNames from 'classnames'

import type { DivPropsWithChildren } from '@/@types/DivProps'

export const Full: React.FC<DivPropsWithChildren> = props => {
  const { children, className } = props

  return (
    <div {...props} className={classNames('w-full h-full', className)}>
      {children}
    </div>
  )
}

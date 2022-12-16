import type React from 'react'

import classNames from 'classnames'

import type { DivPropsWithChildren } from '@/@types/DivProps'

export const FullScreen: React.FC<DivPropsWithChildren> = props => {
  const { children, className } = props
  return <div className={classNames('w-screen h-screen', className)}>{children}</div>
}

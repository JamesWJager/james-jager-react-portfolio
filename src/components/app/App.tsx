import { RouterProvider } from 'react-router-dom'

import { Router } from '../navigation/Router'

import { Root } from './Root'

export const App: React.FC = () => {
  return (
    <Root>
      <RouterProvider router={Router} />
    </Root>
  )
}

/**
 * @jest-environment jsdom
 */
import * as ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'

import { Root } from './components/app/Root'

describe('App', function () {
  it('should handle className', function () {
    const container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      ReactDOM.createRoot(container).render(<Root className="test" />)
    })
    const main = container.querySelector('div') ?? ''
    expect(main).toHaveClass('test')
  })
})

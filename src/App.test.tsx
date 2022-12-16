/**
 * @jest-environment jsdom
 */
import * as ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'

import App from './App'

describe('App', function () {
  it('should handle className', function () {
    const container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      ReactDOM.createRoot(container).render(<App className="test" />)
    })
    const main = container.querySelector('div') ?? ''
    expect(main).toHaveClass('test')
  })
})

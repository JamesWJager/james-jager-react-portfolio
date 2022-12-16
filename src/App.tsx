import classnames from 'classnames'

import { SvgLogo } from './svg/components/SvgLogo'

interface AppInterface {
  className?: string
}

export const App: React.FC<AppInterface> = props => {
  const { className } = props
  return (
    <div className={classnames('text-center', className)}>
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px + 2vmin)] text-white">
        <SvgLogo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="text-[#61dafb]" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

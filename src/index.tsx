import React from 'react'
import { CSSProperties } from 'react'

import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import { randomClassName } from './lib/rcn'
import { Menu } from './components/menu/Menu'

console.info(`⚛️ ${React.version}`)

const App = () => {
  const containerStyle = {
    alignSelf: 'center'
  }

  return (
    <>
      <GlobalStyle />
      <Menu containerStyle={containerStyle} />
      <Spinner />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()

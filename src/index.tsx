import React from 'react'

import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import { Menu } from './components/menu/Menu'
import icons from './icons/*.png'

console.info(`⚛️ ${React.version}`)

const App = () => {
  const containerStyle = {
    alignSelf: 'center'
  }

  const users = [
    {
      id: 1,
      name: 'Ross Rich',
      job: 'Manager',
      userIcon: icons.user1,
      orgIcon: icons.org
    },
    {
      id: 2,
      name: 'Harry Avery',
      job: 'Associate',
      userIcon: icons.user2,
      orgIcon: icons.org
    },
    {
      id: 3,
      name: 'Amit Patel',
      job: 'Associate',
      userIcon: icons.user3,
      orgIcon: icons.org
    },
    {
      id: 4,
      name: 'Suzy Anderson',
      job: 'Associate',
      userIcon: icons.user4,
      orgIcon: icons.org
    }
  ]

  return (
    <>
      <GlobalStyle />
      <Menu containerStyle={containerStyle} items={users} />
      <Spinner />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()

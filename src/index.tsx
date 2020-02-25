import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import { randomClassName } from './lib/rcn'

console.info(`⚛️ ${React.version}`)
//const classNameArray = ['some', 'class', 'name', 'array']
//console.log(randomClassName()(...classNameArray))

const iconProps: IconProps = {
  color: 'some color',
  className: 'some class name'
}

const App = (props: IconProps) => {
  console.log(props)
  return (
    <>
      <p>Hello Inaccord</p>
    </>
  )
}

ReactDOM.render(<App {...iconProps} />, document.getElementById('root'))

module.hot && module.hot.accept()

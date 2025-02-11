import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './Navigation'
import Hero from './Hero'
import ProjectList from './ProjectList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <ProjectList></ProjectList>
    </div>
  )
}

export default App

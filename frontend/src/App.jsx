import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import NovoLandingPage from './NovoLandingPage'
import NovoPageTwo from './NovoPageTwo'
import NovoPageThree from './NovoPageThree'
import NovoPageFour from './NovoPageFour'
import NovoContactPage from './NovoContactPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NovoLandingPage/>
    <NovoPageTwo/>
    <NovoPageThree/>
    <NovoPageFour/>
    <NovoContactPage/>


  
    </>
  )
}

export default App

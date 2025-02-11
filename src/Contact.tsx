import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './Navigation'
import ContactList from './ContactList'
import Footer from './Footer'

import './App.css'

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <ContactList></ContactList>
      <Footer></Footer>
    </div>
  )
}

export default Contact

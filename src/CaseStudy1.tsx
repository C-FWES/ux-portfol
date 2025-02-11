import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './Navigation'
import Hero from './Hero'
import ProjectList from './ProjectList'
import Footer from './Footer'
import AboutInfo from './AboutInfo';

import './App.css'

function CaseStudy1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      
      <Footer></Footer>
    </div>
  )
}

export default CaseStudy1

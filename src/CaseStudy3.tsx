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
import CaseStudyImage from './CaseStudyImage';
import plantogramhero from './assets/plantogramcover.png'

import './App.css'

function CaseStudy3() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <div className='caseStudyHeaderContainer'>
        <p className='caseStudyHeader'>CASE STUDY: PLANTOGRAM</p>
        <p className='caseStudyHeaderLight'>2024</p>
      </div>
      <CaseStudyImage imagePath={plantogramhero}></CaseStudyImage>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default CaseStudy3

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
import quest2hero from './assets/quest2covertransparent.png'

import './App.css'

function CaseStudy1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <div className='caseStudyHeaderContainer'>
        <p className='caseStudyHeader'>CASE STUDY: QUEST 2.0</p>
        <p className='caseStudyHeaderLight'>2024</p>
      </div>
      <CaseStudyImage imagePath={quest2hero}></CaseStudyImage>
      {/* <Footer></Footer> */}
      <p className='caseStudySubHeader'>PROBLEM STATEMENT</p>
    </div>
  )
}

export default CaseStudy1

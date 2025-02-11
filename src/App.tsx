import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './Home';
import Contact from './Contact';
import About from './About';
import CaseStudy1 from './CaseStudy1';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<About />}
                    />
                     <Route
                        exact
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        exact
                        path="/casestudy1"
                        element={<CaseStudy1 />}
                    />
                </Routes>
            </Router>
            </>
  )
}

export default App


import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import About from './About';
import CaseStudy1 from './CaseStudy1';
import CaseStudy2 from './CaseStudy2';
import CaseStudy3 from './CaseStudy3';
import Contact from './Contact';
import Home from './Home';

import './App.css';

function App() {

  return (
    <>
    <Router>
                <Routes>
                    <Route
                        // exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        // exact
                        path="/about"
                        element={<About />}
                    />
                     <Route
                        // exact
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        // exact
                        path="/casestudy1"
                        element={<CaseStudy1 />}
                    />
                    <Route
                        // exact
                        path="/casestudy2"
                        element={<CaseStudy2 />}
                    />
                     <Route
                        // exact
                        path="/casestudy3"
                        element={<CaseStudy3 />}
                    />
                </Routes>
            </Router>
            </>
  )
}

export default App
